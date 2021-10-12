import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from "../actions/index";
import { useHistory } from "react-router-dom";
import s from '../css/SearchBar.module.css';
import {BsSearch} from 'react-icons/bs';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const history = useHistory();

    function handleInputChange(e) {
    e.preventDefault();

    setName(e.target.value);
    console.log(name);
    }
    function handleSubmit(e) {
        dispatch(getCountriesName(name));
        //console.log('el boton',name)
        setName("");
        e.preventDefault();
        console.log("el boton");
        history.push("/search");
    }

  return (
    <form className={s.search} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
        value={name}
      />
      <button type="submit" className={s.SearchButton}><BsSearch /></button>
    </form>
  );
}

