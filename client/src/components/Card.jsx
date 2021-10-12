import React from "react";
import s from "../css/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ image, name, region, id, population, capital }) {
  return (
    <div className={s.card}>
      <div className={s.card_img}>
        <img className={s.img} src={image} alt="img not found" />
      </div>
      <div className={s.info}>
        <Link className={s.link} to={"/countries/" + id}>
          <h1 className={s.h1}>{name}</h1>
        </Link>
				<p className={s.p}>Capital: {capital}</p>
        <p className={s.p}>Continent: {region}</p>
				<p className={s.p}>Population: {population}</p>
      </div>
    </div>
  );
}
