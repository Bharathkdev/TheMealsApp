import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MealItemDetail from './MealItemDetail';


const MealDetails = props => {
    
    console.log("Meal selected is:",props.mealItems);
    
    return(
            <ScrollView style = {styles.container}>
                <MealItemDetail
                        image = {props.mealItems.imageUrl}
                        ingredients = {props.mealItems.ingredients} 
                        steps = {props.mealItems.steps}
                    />
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});

export default MealDetails;
