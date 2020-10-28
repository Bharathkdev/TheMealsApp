import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import MealDetailScreen from '../Screens/MealDetailScreen';
import CategoriesMealsScreen from '../Screens/CategoriesMealsScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../Screens/FiltersScreen';
import { color } from 'react-native-reanimated';


const MealsNavigator = createStackNavigator({
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
            }
        },
        CategoryMeals: {
            screen: CategoriesMealsScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
            }
        },
        MealDetail: {
            screen: MealDetailScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
            }
        },
        Filters: {
            screen: FiltersScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
            }
        } 

        //if needed add 'defaultNavigationOptions' to set the styles for all the screens by default.
});

const FavoritesNavigator = createStackNavigator({
    Favorites: {
        screen: FavouritesScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
        }
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
        }
    }
});



const tabScreenConfig =  {
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return(
                    <MaterialIcons 
                        name = "fastfood" 
                        size = {22}
                        color = {tabInfo.tintColor}
                    />
                )
            },
            tabBarLabel: <Text style = {{fontFamily: "OpenSans-Bold"}}>Meals</Text>
        }
    },
    Favorites: {
        screen: FavoritesNavigator, 
        navigationOptions: {
            //tabBarLabel: "Favourites",    will override the default tab name
            tabBarIcon: (tabInfo) => {
                return(
                    <MaterialIcons 
                        name = "grade" 
                        size = {22}
                        color = {tabInfo.tintColor}
                    />
                )
            },
            tabBarLabel: <Text style = {{fontFamily: "OpenSans-Bold"}}>Favorites</Text>
        }
    }
};


const MealsFavTabNavigator = Platform.OS === 'android'? 
createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.bottomTabBarColor,
        shifting: false,                //gives the shifting effect
        barStyle: {
            backgroundColor: 'white',
        }
    }) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: "OpenSans-Bold"
        },
        activeTintColor: Colors.bottomTabBarColor,
        activeBackgroundColor: 'white'
    }
});

const FiltersNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
        }
    },
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
        }
    }
});

// const MainNavigator = createDrawerNavigator({
//     Meals_and_Favorites: {
//         screen: MealsFavTabNavigator,
//         navigationOptions: {
//             drawerLabel: "Meals"
//         }
//     },
//     Filters: {
//         screen: FiltersNavigator,
//         navigationOptions: {
//             drawerLabel: "Filters"
//         }
//     }
// }, {
//     contentOptions: {
//         activeTintColor: Colors.bottomTabBarColor,
//         labelStyle: {
//             fontFamily: 'OpenSans-Bold'
//         }
//     }
// });

export default createAppContainer(MealsFavTabNavigator);