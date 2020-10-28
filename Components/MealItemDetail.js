import React from 'react';

import {
    Text,
    View,
    TouchableNativeFeedback,
    StyleSheet,
    Image
} from 'react-native';

const MealItemDetail = props => {

    const bullet = "\u2022";

    console.log("In Meal Item Details:", props.ingredients);


    const ListIngredients = props => {
       return(  
           <View style = {styles.ingredientsContainer}>
                {props.ingredients.map((ingredients) =>
                <Text key = {ingredients} style = {styles.ingredients}>{bullet} {ingredients}</Text>
                )}
            </View>

       );
    }

    const ListSteps = props => {
        return(  
            <View style = {styles.stepsContainer}>
                 {props.steps.map((steps) =>
                 <Text key = {steps} style = {styles.ingredients}>{bullet} {steps}</Text>
                 )}
             </View>
 
        );
     }

    return(
        <View style = {styles.cardView}>
            <View style = {styles.mealItem}>
                <Image
                                source = {{uri: props.image}}
                                style = {styles.bgImage} 
                            />
            </View>
            <View style = {{...styles.header, ...styles.innerCardView}}>
                <Text style = {styles.textStyle}>Ingredients:</Text>
                <ListIngredients ingredients = {props.ingredients}/>
            </View>
            <View style = {{...styles.header, ...styles.innerCardView, marginBottom: 10}}>
                <Text style = {styles.textStyle}>Steps:</Text>
                <ListSteps steps = {props.steps}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
       paddingTop: 15,
       paddingLeft: 10
    },

    mealItem: {
        height: 200,
       // width: '100%',
    },

    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,      
    },

    textStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: 'black',
    },

    ingredients: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
        flexDirection: 'row',
        paddingTop: 7,
    },

    ingredientsContainer: {
        paddingLeft: 10,
        paddingBottom: 20

    },

    stepsContainer: {
        paddingLeft: 10,
        paddingBottom: 20
    },

    cardView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    innerCardView: {
        width: '95%',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 10,
        elevation: 5,
        marginTop: 10,
        marginLeft: 10,
    }
});

export default MealItemDetail;