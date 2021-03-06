import axios from 'axios';
//CONSTANTES

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const FILTER_BY_REGION = 'FILTER_BY_REGION'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_DETAIL = 'GET_DETAIL'


//ACTIONS

export function getCountries(){
    return async (dispatch) => {
        var json = await axios.get('/countries');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        });
    }
}

export function getCountriesName(name){
    return async(dispatch) => {
        try {
            var json = await axios.get('/countries?name=' + name);
            return dispatch({
                type:'GET_COUNTRIES_NAME',
                payload: json.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function getActivity(){
    return async (dispatch) => {
        var json = await axios.get('/activity')
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async (dispatch) => {
        try {
            var json = await axios.get('/countries/' + id)
            console.log('soy el  detalle', json)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch (e) {
            console.error(e)
        }
    }
}

export function postActivity(payload){
    return async (dispatch) => {
        var json = await axios.post('/activity', payload);
        console.log(json)
        return json;
    }
}


export function filterCountriesByRegion(payload){
    //console.log('soy el filtro por region',payload);
    return{
        type: 'FILTER_BY_REGION',
        payload
    }
}

export function filterActivity(payload){
    console.log('soy el filtro por actividad',payload);
    return{
        type: 'FILTER_ACTIVITY',
        payload
    }

}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: 'ORDER_BY_POPULATION',
        payload
    }
}