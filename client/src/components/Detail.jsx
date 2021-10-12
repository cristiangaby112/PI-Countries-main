import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import s from "../css/CardDetail.module.css";

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
      <NavBar />
      {
        <div className={s.card}>
          <h1 className={s.Title}>Country Detail</h1>
          <div className={s.card2}>
            <div className={s.card_img}>
              <img  className={s.img}src={myCountry.image} alt=""  />
            </div>
            <div className={s.card_detail}>
              <h1>{myCountry.name}</h1>
              <p>Code: {myCountry.id}</p>
              <p>Capital: {myCountry.capital}</p>
              <p>Region: {myCountry.subregion}</p>
              <p>Area: {myCountry.area}</p>
              <p>Population: {myCountry.population}</p>
              <Link className={s.link} to="/activity/list">
                <h1>Activity</h1>
              </Link>
              <li>
                {myCountry.activities?.length > 0
                  ? myCountry.activities.map((el) => el.name)
                  : "No Activity"}
              </li>
            </div>
          </div>
        </div>
      }
        <div className={s.card_btn}>
          <Link to="/countries">
            <button className={s.btn}>Go Countries</button>
          </Link>
        </div>
    </div>
  );
}
