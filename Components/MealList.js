import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {
    
    const renderMealItem = itemData => {

        console.log("Entered Meal Item");

        return <MealItem 
                    title = {itemData.item.title} 
                    image = {itemData.item.imageUrl}
                    duration = {itemData.item.duration}
                    complexity = {itemData.item.complexity}
                    affordability = {itemData.item.affordability}
                    onSelectMeal = {() => {
                        props.navigation.navigate({
                            routeName: 'MealDetail',
                            params: {
                                mealID: itemData.item.id
                            }
                        });
                    }}
                />
    };
    
    return(
        <View style = {styles.container}>
            <FlatList 
                keyExtractor = {(item, index) => item.id}
                data = {props.mealList} 
                renderItem = {renderMealItem}
                contentContainerStyle = {{width: '100%'}}
            />
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MealList;
