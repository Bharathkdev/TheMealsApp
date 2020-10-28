import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../Components/MealList';
import DefaultText from '../Components/DefaultText';


const CategoriesMealsScreen = props => {

    const catID = props.navigation.getParam('categoryID');

    const availableMeals = useSelector(state => state.meals.filteredMeals);   // arrow function returns the data available on right side of the arrow automatically if there are no curly braces given.

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.includes(catID)
    );

    console.log("meals:",displayedMeals);

    if(displayedMeals.length === 0){
        return(
             <View style = {styles.container}>
                 <DefaultText style = {{textAlign: 'center'}}>No Meals match your filters!!</DefaultText>
                 <Text style = {{color: 'grey', paddingTop: 25}}>Try changing the filters</Text>
             </View>
        )
    }

    return <MealList mealList = {displayedMeals} navigation = {props.navigation} />
};        


CategoriesMealsScreen.navigationOptions = (navigationData) => {
    
    const catID = navigationData.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    
    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CategoriesMealsScreen;