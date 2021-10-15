import { combineReducers } from 'redux';

export const countries = (state = {}, action) => {
    
    console.log("ACTION", action);

    switch (action.type) {
        case 'ALL_COUNTRIES': {
            return { ...state, countriesList: action.payload }
        }

        case 'COUNTRY_BY_NAME': {
            return {...state, country: action.payload}
        }

        default: {
            return state;
        }
    }

}
export default combineReducers({
    countries
})