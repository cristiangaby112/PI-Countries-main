import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Detail(props) {
  //console.log('esto es el detalle',props)
  const dispatch = useDispatch();
  //const allCountries = useSelector((state) => state.countries);
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  //console.log('esto es el detalle2',props.match.params.id)

  const myCountry = useSelector((state) => state.detail);
  console.log(myCountry);

  return (
    <div>
      {
        <div>
          <NavBar />
          <h1>{myCountry.name}</h1>
          <h2>Code: {myCountry.id}</h2>
          <img src={myCountry.image} alt="" width="200px" height="200px" />
          <h2>Capital: {myCountry.capital}</h2>
          <h2>Region: {myCountry.subregion}</h2>
          <h2>Area: {myCountry.area}</h2>
          <h2>Population: {myCountry.population}</h2>

          <h2>
            {myCountry.activities?.length > 0
              ? myCountry.activities.map((el) => el.name)
              : "no hay actividad"}
          </h2>
        </div>
      }
      <Link to="/countries">
        <button>Go Countries</button>
      </Link>
    </div>
  );
}
