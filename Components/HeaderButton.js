import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return <HeaderButton 
                {...props}
                IconComponent = {MaterialIcons}
                iconSize = {22}
                color = {Platform.OS === 'android' ? 'white' : Colors.primaryColor}
            />;
};

export default CustomHeaderButton;