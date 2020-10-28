import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomButton = props => {
    return (
        <View style = {styles.buttonView}>
            <Text style = {styles.applyTextStyle}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: 'darkorange',
        borderRadius: 20,
        padding: 8,
        width: "50%",
        position: 'absolute',
        bottom: 0,
        flex: 1,
        marginBottom: 200,
        alignItems: 'center',
    },

    applyTextStyle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
    },
});

export default CustomButton;