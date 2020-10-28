import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux'; 

import MealList from '../Components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton';
import DefaultText from '../Components/DefaultText';

const FavouritesScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    if(favoriteMeals.length === 0){
        return (
            <View style = {styles.favoriteStyle}>
                <DefaultText>No Favorites added yet!!</DefaultText>
            </View>
        );
    }
   
    return <MealList mealList = {favoriteMeals} navigation = {props.navigation} />
};

// FavouritesScreen.navigationOptions = (navigationData) => {
    
//     return{
//         headerLeft: () => (
//             <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
//                 <Item 
//                     title = "Menu"
//                     iconName = "list"
//                     onPress = {() => {
//                         navigationData.navigation.toggleDrawer();
//                     }}
//                 />
//             </HeaderButtons>
//         )
//     };
// };

const styles = StyleSheet.create({
    favoriteStyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavouritesScreen;