import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS, SWITCH_FILTERS } from '../actions/mealsActions';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    filters: {
        glutenFree: false,
        lactoseFree: false,
        vegan: false,
        vegetarian: false
    }
};

const mealsReducer = (state = initialState, action) => {           //initialState is used when the app launches for the first time
    
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealID);
            if(existingIndex>=0){
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                console.log(updatedFavMeals);
                return {...state, favoriteMeals: updatedFavMeals};
            }else{
                console.log("Action mealID:", action.mealID)
                const meal = state.meals.find(meal => meal.id === action.mealID);
                console.log(meal);
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
            }
        

        case SWITCH_FILTERS:
            return {...state, filters: action.appliedFilters};

        case SET_FILTERS: 
            const appliedFilters = action.appliedFilters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }

                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false;
                }

                if(appliedFilters.vegan && !meal.isVegan){
                    return false;
                }

                if(appliedFilters.vegeterian && !meal.isVegetarian){
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: updatedFilteredMeals};

        default :
            return state;
    }
    
    return state;  
};

export default mealsReducer;