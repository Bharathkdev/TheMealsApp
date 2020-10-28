import React, { useEffect, useCallback } from 'react';

import {
    StyleSheet
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {  HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton';
import MealDetails from '../Components/MealDetails';
import { toggleFavorite } from '../store/actions/mealsActions'

const MealDetailScreen = props => {

    const mealID = props.navigation.getParam('mealID');

    const alreadyFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealID));

    const availableMeals = useSelector(state => state.meals.meals);


    const selectedMeal = availableMeals.find(
        meal => meal.id === mealID
    );

    console.log("Selected Meal:", selectedMeal.id);

    const dispatch = useDispatch();
    
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedMeal.id));
    }, [mealID, dispatch]);

    useEffect(() => {
        props.navigation.setParams({mealTitle: selectedMeal.title});
    }, [selectedMeal]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({alreadyFav: alreadyFavorite});
    }, [alreadyFavorite]);

    return <MealDetails mealItems = {selectedMeal} />
};

MealDetailScreen.navigationOptions = (navigationData) => {
    
    const selectedMealTitle = navigationData.navigation.getParam('mealTitle');

    const favoriteMeal = navigationData.navigation.getParam('toggleFav');

    const isFavorite = navigationData.navigation.getParam('alreadyFav');

     return{
         headerTitle: selectedMealTitle,
         headerRight: () => (
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
                <Item 
                    title = "Favorite"
                    iconName = {isFavorite ? "star" : "star-border"}
                    onPress = {favoriteMeal}  // favoriteMeal is pointing to togglefav and thats pointing to a pointer at a function and in the end that should be executed so just {favoriteMeal} instead of {() => {favoriteMeal()}} but both will do the same.
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

export default MealDetailScreen;