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
  } else if (input.difficulty <= 0 ) {
    errors.difficulty = "Se requiere una Dificultad";
  } else if (!input.duration) {
    errors.duration = "Se requiere una Duracion";
  } 
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  //const activities = useSelector((state) => state.activities)
  const allCountries = useSelector((state) => state.countries);

  const [errors, setErrors] = useState({})
  console.log('aca el set', errors);;
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
    console.log('aca el input', input);
    
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
    //console.log('aca creado actividad',input);
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
                placeholder="Name Activity..."
                className={s.input}
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && <p className={s.errors}>{errors.name}</p>}
            </div>
            <div className={s.container_input}>
              <label className={s.label}>Difficulty</label>
              <input
                placeholder="1 to 10"
                className={s.input}
                type="number"
                value={input.difficulty}
                name="difficulty"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.difficulty && <p className={s.errors}>{errors.difficulty}</p>}
            </div>
            <div className={s.container_input}>
              <label className={s.label}>Duration</label>
              <input
                placeholder="20 days , 10 weeks , 4 months"
                className={s.input}
                type="text"
                value={input.duration}
                name="duration"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.duration && <p className={s.errors}>{errors.duration}</p>}
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
                <label htmlFor="Verano" className={s.labelinput}>
                  Summer
                </label>
              </div>
              <div className={s.checkbox2}>
                <input
                  className={s.inputcheckbox}
                  id="Oto??o"
                  type="checkbox"
                  name="Oto??o"
                  value="Oto??o"
                  onChange={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor="Oto??o" className={s.labelinput}>
                  Autumn
                </label>
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
                <label htmlFor="Invierno" className={s.labelinput}>
                  Winter
                </label>
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
                <label htmlFor="Primavera" className={s.labelinput}>
                  Spring
                </label>
              </div>
            </div>
          </div>
          <div className={s.card_select}>
            <select required className={s.select} onChange={(e) => handleSelect(e)}>
              {allCountries.map((c) => {
                return (
                  <option className={s.option} key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          <ul>
            <p className={s.pp}>{input.countries.map((el) => el + ", ")}</p>
          </ul>
          <div className={s.divselect}>
            {input.countries.map((el) => (
              <div className={s.optioni} key={el}>
                <p >{el}</p>

                <button className={s.btn} onClick={() => handleDelete(el)}>
                  x
                </button>
              </div>
            ))}
          </div>
          <div className={s.div_btn}>
            <button className={s.btn_create} type="submit" >
              Create
            </button>
          </div>
        </form>
      </div>
      <div className={s.div_volver}>
        <Link to="/countries">
          <button className={s.btn_volver}>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
