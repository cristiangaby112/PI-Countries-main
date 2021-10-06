import { GET_COUNTRIES, FILTER_BY_REGION, FILTER_ACTIVITY } from "../actions";


const initialState = {
    countries: [],
    allPaises: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: 
        return{
            ...state,
            countries: action.payload,
            allPaises: action.payload
        }
        case FILTER_BY_REGION:
            const allCountries= state.allPaises;
            const regionFiltered= action.payload === 'All' ? allCountries : allCountries.filter(el => el.region === action.payload);
            return{
                ...state,
                countries: regionFiltered,
            }
        case FILTER_ACTIVITY:
            //const allCountries2 = state.allPaises;
            const activity= action.payload === 'Activity' ? state.allPaises.filter(el => el.createInDb) : state.allPaises.filter(el => !el.createInDb)
            return{
                ...state,
                countries: action.payload === 'All' ? state.allPaises : activity
            }
        default:
            return state;
    }
}

export default rootReducer;