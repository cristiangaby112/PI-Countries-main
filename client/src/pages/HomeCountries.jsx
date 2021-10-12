import React, { Fragment } from "react";
import { useState, useEffect } from "react";
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
  //const history = useHistory();
  //console.log('aca estoy wey',allCountries)

  //estado local para el paginado
  const [currentPages, setCurrentPages] = useState(1);
  //estado local para el paginados
  const [countriesPerPage, setCountriesPage] = useState(10);
  const indexOfLastCountry = currentPages * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  // estado local para el ordenamiento
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState("");
  // estado local para filtros
  //const [filter, setFilter] = useState("")
  //PAGINADO

  const paginado = (pagesNumber) => {
    setCurrentPages(pagesNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterRegion(e) {
    dispatch(filterCountriesByRegion(e.target.value));
  }

  function handleFilterActivity(e) {
    dispatch(filterActivity(e.target.value));
    console.log(e.target.value);
    //history.push('/activity/list')
  }
  function handleSortByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCountriesPage(10);
    setOrder(`Ordenado ${e.target.value}`);
  }
  function handleSortByPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCountriesPage(10);
    setOrder(`Ordenado ${e.target.value}`);
  }

  return (
    <div>
      <NavBar />
      <h1 className={s.Title}>Countries</h1>

      <div className={s.filter}>
        <select onChange={(e) => handleFilterRegion(e)} className={s.select}>
          <option value="All">Todos</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>

        <select onChange={(e) => handleFilterActivity(e)} className={s.select}>
          <option disable="">Filter Activity</option>
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
          <option disable="">Sorted by Name</option>
          <option value="ASC">Ascending by Name</option>
          <option value="DESC">Descent by </option>
        </select>

        <select
          onChange={(e) => handleSortByPopulation(e)}
          className={s.select}
        >
          <option disable="">Sorted by Population</option>
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
