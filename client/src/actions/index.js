import axios from 'axios';
//CONSTANTES

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const FILTER_BY_REGION = 'FILTER_BY_REGION'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
//ACTIONS

export function getCountries(){
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        });
    }
}

export function filterCountriesByRegion(payload){
    //console.log(payload);
    return{
        type: 'FILTER_BY_REGION',
        payload
    }
}

export function filterActivity(payload){
    return{
        type: 'FILTER_ACTIVITY',
        payload
    }

}