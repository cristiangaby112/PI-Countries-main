import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getActivity } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions/index";
import NavBar from "../components/NavBar";
//import SearchBar from '../components/SearchBar';
import s from "../css/CreateActivity.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere una Actividad";
  } else if (!input.difficulty <= 0) {
    errors.difficulty = "Se requiere una Dificultad";
  } else if (!input.duration) {
    errors.duration = "Se requiere una Duracion";
  } else if (!input.season) {
    errors.season = "Se requiere una Temporada";
  }
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  //const activities = useSelector((state) => state.activities)
  const allCountries = useSelector((state) => state.countries);

  const [errors, setErrors] = useState({});
  // estado local de input
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleDelete(el) {
    setInput({
      ...input,
      countries: input.countries.filter((co) => co !== el),
    });
  }

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        season: e.target.value,
      });
    }
  }

  function handleSelect(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
    alert("Pais Creado");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("/countries");
  }

  return (
    <div>
      <NavBar />
      <div className={s.container}>
        <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
          <h1 className={s.Title}>Create Activities</h1>
          <div className={s.container_inputs}>
            <div className={s.container_input}>
              <label className={s.label}>Name Activity</label>
              <input
                placeholder='Name Activity...'
                className={s.input}
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className={s.container_input}>
              <label className={s.label}>Difficulty</label>
              <input
                placeholder='1 to 10'
                className={s.input}
                type="number"
                value={input.difficulty}
                name="difficulty"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>
            <div className={s.container_input}>
              <label className={s.label}>Duration</label>
              <input
                placeholder='20 days , 10 weeks , 4 months'
                className={s.input}
                type="text"
                value={input.duration}
                name="duration"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.duration && <p>{errors.duration}</p>}
            </div>
            <p className={s.p}>Season</p>
            <div className={s.checkbox}>
              <div className={s.checkbox2}>
                <input
                  className={s.inputcheckbox}
                  id="Verano"
                  type="checkbox"
                  name="Verano"
                  value="Verano"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Verano" className={s.labelinput}>Summer</label>
              </div>
              <div className={s.checkbox2}>
                <input
                  className={s.inputcheckbox}
                  id="Otoño"
                  type="checkbox"
                  name="Otoño"
                  value="Otoño"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Otoño" className={s.labelinput}>Autumn</label>
              </div>
              <div className={s.checkbox2}>
                <input
                  className={s.inputcheckbox}
                  id="Invierno"
                  type="checkbox"
                  name="Invierno"
                  value="Invierno"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Invierno" className={s.labelinput}>Winter</label>
              </div>
              <div className={s.checkbox2}>
                <input
                  className={s.inputcheckbox}
                  id="Primavera"
                  type="checkbox"
                  name="Primavera"
                  value="Primavera"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Primavera" className={s.labelinput}>Spring</label>
              </div>
            </div>
          </div>
          <select onChange={(e) => handleSelect(e)}>
            {allCountries.map((c) => {
              return <option key={c.id} value={c.name}>{c.name}</option>;
            })}
          </select>
          <ul>
            <p>{input.countries.map((el) => el + ", ")}</p>
          </ul>
          <button type="submit">Create</button>
        </form>
        {input.countries.map((el) => (
          <div>
            <p>{el}</p>
            <button onClick={() => handleDelete(el)}>x</button>
          </div>
        ))}
      </div>
      <Link to="/countries">
        <button>Volver</button>
      </Link>
    </div>
  );
}
