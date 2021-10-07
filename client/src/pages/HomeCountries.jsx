import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterCountriesByRegion, filterActivity, orderByName, orderByPopulation } from '../actions/index';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import Paginado from '../components/Paged';
import SearchBar from '../components/SearchBar';

export default function HomeCountries(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    //console.log('aca estoy wey',allCountries)
    
    //estado local para el paginado
    const [currentPages, setCurrentPages] = useState(1)
    //estado local para el paginados
    const [countriesPerPage, setCountriesPage] = useState(10)
    const indexOfLastCountry = currentPages * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    // estado local para el ordenamiento
    const [order, setOrder] = useState("");
    // estado local para filtros
    //const [filter, setFilter] = useState("")
    //PAGINADO

    const paginado = (pagesNumber) => {
        setCurrentPages(pagesNumber)
    }



    useEffect(() =>{
        dispatch(getCountries());
    },[dispatch]);
    
    function handleFilterRegion(e){
        
        dispatch(filterCountriesByRegion(e.target.value))
    }

    function handleFilterActivity(e){
        dispatch(filterActivity(e.target.value))
    }
    function handleSortByName(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCountriesPage(10)
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleSortByPopulation(e){
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        setCountriesPage(10)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <h1>Countries</h1>

            <div>
                <select onChange={e => handleFilterRegion(e)}>
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
            
                <select onChange={e => handleFilterActivity(e)}>
                    <option value="All">Todas las actividades</option>
                    <option value="Activity">Activity</option>
                </select>
            
                <select onChange={e => handleSortByName(e)}>
                    <option value="ASC">Ascendente por nombre</option>
                    <option value="DESC">Descendente por nombre</option>
                </select>
            
                <select onChange={e => handleSortByPopulation(e)}>
                    <option value="ASC">Ascendente por poblacion</option>
                    <option value="DESC">Descendente por poblacion</option>
                </select>
            </div>
            <Paginado 
                countriesPerPage ={countriesPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
            />
            <SearchBar/>
            {currentCountries?.map((c) =>{
                //let kj = 0;
                return(
                    <Fragment>
                        <Link to={'/countries/' + c.id}>
                        <Card name={c.name} image={c.image} region={c.region} key={c.id} />
                        </Link>
                    </Fragment>
                );
                })
            }
            
        
        </div>
        
    )
}
            
            


                
            
                
            
            
                
            
        


