import React from 'react';

import { 
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    ImageBackground
} from 'react-native';

const CategoryGridTile = props => {
    return (
        <View style = {styles.gridView}>
            <TouchableNativeFeedback
                onPress = {props.onSelect} >
                <View style = {styles.innerGridView}>
                    <ImageBackground 
                                source = {{uri: props.image}}
                                style = {styles.bgImage} 
                            >
                            <View style={{...styles.bgImage, ...styles.textPosition}}>
                                <Text style = {styles.textStyle} numberOfLines = {2}>{props.title}</Text>
                            </View>
                    </ImageBackground>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        margin: 10,
        height: 200,
        overflow: 'hidden',        
        elevation: 10,
        borderRadius: 10
    },

    innerGridView: {
        flex: 1,
        padding: 15,
    },

    textPosition: {
        justifyContent: 'flex-end', 
        alignItems: 'flex-end'
    },  

    bgImage: {
        // width: '100%',
        // height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        //resizeMode: 'contain',
        //justifyContent: 'flex-start'        
    },

    textStyle: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: 'white',
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'left',
        paddingLeft: 7
    },
});

export default CategoryGridTile;