export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const SWITCH_FILTERS = 'SWITCH_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealID: id };
};

export const setFilters = (filters) => {
    return { type: SET_FILTERS, appliedFilters: filters };
};

export const switchFilters = (filters) => {
    return { type: SWITCH_FILTERS, appliedFilters: filters };
}