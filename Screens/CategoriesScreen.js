import React from 'react';

import { 
    StyleSheet,
    FlatList,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../Components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
            return( 
                <CategoryGridTile 
                    title = {itemData.item.title} 
                    image = {itemData.item.imageUrl}
                    onSelect = {() => {
                        props.navigation.navigate({
                        routeName: 'CategoryMeals', 
                            params: {
                                categoryID: itemData.item.id
                            }
                        });
                    }} />
            );
    };

    return(
        <FlatList 
            keyExtractor = {(item, index) => item.id}
            data = {CATEGORIES} 
            renderItem = {renderGridItem} 
            numColumns = {2} />
    );
};

CategoriesScreen.navigationOptions = (navigationData) => {
    
    return{
        headerTitle: 'Meal Categories',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
                <Item 
                    title = "Filter"
                    iconName = "filter-alt"
                    onPress = {() => {
                        navigationData.navigation.navigate({
                            routeName: 'Filters'
                        });
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;