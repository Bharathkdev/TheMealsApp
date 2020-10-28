import React from 'react';

import {
    Text,
    View,
    TouchableNativeFeedback,
    StyleSheet,
    ImageBackground
} from 'react-native';

import DefaultText from './DefaultText';

const MealItem = props => {

    const bullet = "\u2022";

    return(
        <View style = {styles.mealItem}>
            <TouchableNativeFeedback onPress = {props.onSelectMeal}>
                <View>
                    <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground 
                            source = {{uri: props.image}}
                            style = {styles.bgImage} 
                        >
                                <Text style = {styles.textStyle}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style = {{...styles.mealRow, ...styles.mealDetails}}>
                        <DefaultText>{props.duration}min {bullet} </DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()} {bullet} </DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
       
       // marginVertical: 10
    },

    mealItem: {
        height: 200,
        width: '98%',
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 3,
        marginLeft: 3
    },

    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        //justifyContent: 'flex-start'        
    },

    mealHeader: {
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center'
    },

    mealDetails: {
        height: '15%',
        paddingLeft: 10,
       // justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default MealItem;