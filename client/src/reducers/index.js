import { GET_COUNTRIES, FILTER_BY_REGION, FILTER_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRIES_NAME, GET_ACTIVITIES, GET_DETAIL, } from "../actions";


const initialState = {
    countries: [],
    allPaises: [],
    activities: [],
    detail: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: 
        return{
            ...state,
            countries: action.payload,
            allPaises: action.payload,
        }
        case GET_COUNTRIES_NAME:

            return{
                ...state,
                countries: action.payload,
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
            }
        case 'POST_ACTIVITY':
            return{
                ...state
            }
        case FILTER_BY_REGION:
            const allCountries= state.allPaises;
            const regionFiltered= action.payload === 'All' ? allCountries : allCountries.filter(el => el.region === action.payload);
            return{
                ...state,
                countries: regionFiltered,
            }
        case FILTER_ACTIVITY:
            let c = []
            const activitycountry= state.allPaises.map(el => {
                if(el.activities.length > 0) {
                    const activitysearch= el.activities.find(el => el.id === parseInt(action.payload))
										console.log(activitysearch)
                    if(activitysearch) {
                        c.push(el)
												return el
                    }
                }
                return undefined;
            });
            
            return{
                ...state,
                countries: action.payload === 'All' ? state.countries : c
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'ASC' ?
            state.countries.sort(function(a, b){
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }):
            state.countries.sort(function(a, b){
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                payload: sortedArr
            }
            case ORDER_BY_POPULATION:
            let sortedArr2 = action.payload === 'ASC' ?
            state.countries.sort(function(a, b){
                if(a.population > b.population) {
                    return 1;
                }
                if(b.population > a.population) {
                    return -1;
                }
                return 0;
            }):
            state.countries.sort(function(a, b){
                if(a.population > b.population) {
                    return -1;
                }
                if(b.population > a.population) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                payload: sortedArr2
            }

        default:
            return state;
    }
}

export default rootReducer;