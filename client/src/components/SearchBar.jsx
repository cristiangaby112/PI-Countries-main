import React from 'react';

import{useState} from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName } from '../actions/index';


export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');


    function handleInputChange(e){
        e.preventDefault();
        
        setName(e.target.value);
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountriesName(name))
        //console.log('el boton',name)
        setName('')
        //console.log('el boton',name)
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="Search..."
            onChange= {(e) => handleInputChange(e)}
            
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}