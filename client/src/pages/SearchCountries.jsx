import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import NavBar from "../components/NavBar";
// import SearchBar from '../components/SearchBar';

export default function SearchCountries() {
  //const dispatch = useDispatch();
  const allCountries2 = useSelector((state) => state.countries);

  return (
    <div>
      <NavBar />
      {allCountries2?.map((c) => {
        return (
          <Fragment key={c.id}>
            <Link to={"/countries/" + c.id}>
              <Card name={c.name} image={c.image} region={c.region} />
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

