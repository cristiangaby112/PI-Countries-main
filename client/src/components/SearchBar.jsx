import React from 'react';

import{useState} from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName } from '../actions/index';
import {Link} from 'react-router-dom'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');


    function handleInputChange(e){
        e.preventDefault();
        
        setName(e.target.value);
        console.log(name)
    }
    function handleSubmit(e){
        dispatch(getCountriesName(name))
        //console.log('el boton',name)
        setName('')
        e.preventDefault();
        console.log('el boton')
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            type="text"
            placeholder="Search..."
            onChange= {(e) => handleInputChange(e)}
            value= {name}
            />
            <Link to="/countries/search">
            <button type="submit">Buscar</button>
            </Link>
        </form>
    )
}