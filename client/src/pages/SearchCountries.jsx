import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import s from "../css/SearchCount.module.css";
export default function SearchCountries() {
  //const dispatch = useDispatch();
  const allCountries2 = useSelector((state) => state.countries);

  return (
    <div>
      <NavBar />
      <div className={s.card}>
        {allCountries2?.map((c) => {
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
    </div>
  );
}
