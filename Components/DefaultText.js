import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
return <Text style = {{...styles.textStyle, ...props.style}}>{props.children}</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15, 
        fontFamily: 'OpenSans-Bold'
    }
});

export default DefaultText;