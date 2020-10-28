import React, { useCallback, useEffect } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Switch
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, switchFilters } from '../store/actions/mealsActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton';
import Colors from '../constants/Colors';

const Filters = props => {
    return (
        <View style = {styles.filtersStyle}>
                <Text style = {styles.filtersTextStyle}>{props.label}</Text>
                <Switch 
                    trackColor = {{ true: Colors.primaryColor, false: 'grey' }}
                    thumbColor = {Colors.accentColor}
                    value = {props.state} 
                    onValueChange = {props.setState} 
                />
        </View>
    )
};

// const CustomButton = props => {
//     return (
//         <TouchableOpacity 
//             style = {styles.buttonView} 
//             onPress = {props.onApply}
//         >
//             <View>
//                 <Text style = {styles.applyTextStyle}>{props.children}</Text>
//             </View>
//         </TouchableOpacity>
//     );
// };

const FiltersScreen = props => {

    const { navigation } = props;         // destructuring - extracting the navigation prop from props


    const filters = useSelector(state => state.meals.filters);
    // const[isGlutenFree, setIsGlutenFree] = useState(false);
    // const[isLactoseFree, setIsLactoseFree] = useState(false);
    // const[isVegan, setIsVegan] = useState(false);
    // const[isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = () => {             //useCallback - to avoid unnecessary re-rendering
        const appliedFilters = {
            glutenFree: filters.glutenFree,
            lactoseFree: filters.lactoseFree,
            vegan: filters.vegan,
            vegetarian: filters.vegetarian
        };
        dispatch(switchFilters(appliedFilters));
        dispatch(setFilters(appliedFilters));
    };                                             

    console.log(filters);

    const resetFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: false,
            lactoseFree: false,
            vegan: false,
            vegetarian: false
        };
        dispatch(switchFilters(appliedFilters));
        dispatch(setFilters(appliedFilters));
    }, [filters.glutenFree, filters.lactoseFree, filters.vegan, filters.vegetarian]);     // array of dependencies - only when these are changed this function will re-render

    // useEffect(() => {
    //     navigation.setParams({ save: saveFilters })
    // }, [saveFilters]);

    useEffect(() => {
        navigation.setParams({ reset: resetFilters })
    }, [resetFilters]);

    return(
        <View style = {styles.container}>
            <Text style = {styles.headerStyle}>Available Filters</Text>
            <Filters label = "Gluten-Free" state = {filters.glutenFree} setState = {newValue => {
                filters.glutenFree = newValue
                saveFilters();
            }}/>
            <Filters label = "Lactose-Free" state = {filters.lactoseFree} setState = {newValue => {
                filters.lactoseFree = newValue
                saveFilters();
            }}/>
            <Filters label = "Vegan" state = {filters.vegan} setState = {newValue => {
                filters.vegan = newValue
                saveFilters();
            }}/>
            <Filters label = "Vegetarian" state = {filters.vegetarian} setState = {newValue => {
                filters.vegetarian = newValue
                saveFilters();
            }}/>
        </View>
    );
};

FiltersScreen.navigationOptions = (navigationData) => {
    
    return{
        // headerRight: () => (
        //     <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
        //         <Item 
        //             title = "Save"
        //             iconName = "save"
        //             onPress = {navigationData.navigation.getParam('save')}
        //         />
        //     </HeaderButtons>
        // )
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
                <Item 
                    title = "Reset"
                    //iconName = "Reset"
                    onPress = {navigationData.navigation.getParam('reset')}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    headerStyle: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
        paddingTop: 25,
        paddingBottom: 15
    },  

    filtersStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "75%",
        marginTop: 30
    },

    filtersTextStyle: {
        fontSize: 20,
        fontFamily: "OpenSans-Regular",
    },

    buttonApply: {
        marginTop: 100
    },

    buttonView: {
        backgroundColor: 'darkorange',
        borderRadius: 20,
        padding: 10,
        width: "50%",
        position: 'absolute',
        bottom: 0,
        flex: 1,
        marginBottom: 200,
        alignItems: 'center',
    },

    applyTextStyle: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
    }
});

export default FiltersScreen;