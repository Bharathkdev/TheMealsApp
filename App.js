/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {useEffect, useState} from 'react';
import {
  StyleSheet
} from 'react-native';

import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/mealsReducer';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer                     //combineReducers will merge all the seperate reducers into rootReducer
});

const store = createStore(rootReducer);


const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
          <Provider store = {store}>
            <MealsNavigator />
          </Provider>
        );
};

const styles = StyleSheet.create({
 sectionDescription: {
  fontFamily: 'OpenSans-Regular',
  fontSize: 30
 }
});

export default App;
