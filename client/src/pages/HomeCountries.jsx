import React, { Fragment } from "react";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountriesByRegion,
  filterActivity,
  orderByName,
  orderByPopulation,
  getActivity,
} from "../actions/index";
// import { Link } from "react-router-dom";
import Card from "../components/Card";
import Paginado from "../components/Paged";
import NavBar from "../components/NavBar";
import s from "../css/HomeCountries.module.css";
//import SearchBar from '../components/SearchBar';
export default function HomeCountries() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  //console.log('aca estoy wey',allCountries)

  //estado local con la pagina actual y un estado que me setee la pagina actual setea en un 1 por que quiero que empieze en un 1
  const [currentPages, setCurrentPages] = useState(1);
  //estado local cuanto paises por pagina y setear paise por pagina este caso (10)
  const [countriesPerPage, setCountriesPage] = useState(10);
  //const indice del ultimo personaje va se la pagina actual(currentPages) en la que estoy por la cantida de paises por pagina(countriesPerPage)
  const indexOfLastCountry = currentPages * countriesPerPage;//10
  //const indice del primer pais va ser el indicie del ultimpo personaje menos los paises por pagina
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;//0
  //const que guarda todos los paises por pagina se pasa por parametro el indice del primer personaje y el indice del ultimo personaje
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  // estado local para el ordenamiento
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState("");
  
  //PAGINADO
  //const para mostrar los numeros de la pagina
  const paginado = (pagesNumber) => {
    setCurrentPages(pagesNumber);
  };
  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterRegion(e) {
    dispatch(filterCountriesByRegion(e.target.value));
    setCurrentPages(1)
  }

  function handleFilterActivity(e) {
    dispatch(filterActivity(e.target.value));
    console.log(e.target.value);
    setCurrentPages(1)
  }
  function handleSortByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCountriesPage(10); // cuanto paises traer por pagina de ordenado por nombre
    setOrder(`Ordenado ${e.target.value}`);
    setCurrentPages(1)
  }
  function handleSortByPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCountriesPage(10); // cuanto paises traer por pagina de ordenado por poblacion
    setOrder(`Ordenado ${e.target.value}`);
    setCurrentPages(1)
  }

  return (
    <div>
      <NavBar />
      <h1 className={s.Title}>Countries</h1>

      <div className={s.filter}>
        <select onChange={(e) => handleFilterRegion(e)} className={s.select}>
          <option value='Filter Region' disable="true">Filter Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>

        <select onChange={(e) => handleFilterActivity(e)} className={s.select}>
          <option value='Filter Activity' disable="true" >Filter Activity</option>
          {/* <option value='All'>Todas las actividades</option> */}
          {activities?.map((c) => {
            return (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>

        <select onChange={(e) => handleSortByName(e)} className={s.select}>
          <option value='Sorted by Name' disable="true" >Sorted by Name</option>
          <option value="ASC">Ascending by Name</option>
          <option value="DESC">Descent by Name </option>
        </select>

        <select
          onChange={(e) => handleSortByPopulation(e)}
          className={s.select}
        >
          <option value='Sorted by Population' disable="true" >Sorted by Population</option>
          <option value="ASC">Ascending by Population</option>
          <option value="DESC">Descent by Population</option>
        </select>
      </div>
      <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginado={paginado}
      />
      <div className={s.card}>
        {currentCountries?.map((c, i) => {
          return (
            <Fragment key={c.id}>
              <Card
                name={c.name}
                image={c.image}
                region={c.region}
                id={c.id}
                population={c.population}
                capital={c.capital}
              />
            </Fragment>
          );
        })}
      </div>
      <div className={s.card_btn}>
        <button className={s.btn} onClick={(e) => handleClick(e)}>
          Reload Country
        </button>
      </div>
    </div>
  );
}
