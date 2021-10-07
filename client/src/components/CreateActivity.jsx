import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postActivity, getActivity} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries } from '../actions/index';
//import SearchBar from '../components/SearchBar';

function validate(input){
    let errors = {};
    if(input.name === ""){
        errors.name = "Se requiere una Actividad"
    }else if(!input.difficulty){
        errors.difficulty = "Se requiere una Dificultad"
    }else if(!input.duration){
        errors.duration = "Se requiere una Duracion"
    }else if(!input.season){
        errors.season = "Se requiere una Temporada"
    }
    return errors;
}



export default function CreateActivity(){
    const dispatch = useDispatch();
    const history = useHistory();
    //const activities = useSelector((state) => state.activities)
    const allCountries = useSelector((state) => state.countries);
    
    const [errors, setErrors]= useState({});
    // estado local de input
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });

    useEffect(() =>{
        dispatch(getCountries());
    },[dispatch]);
    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch]);

    function handleInputChange(e){
        e.preventDefault();
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleCheckboxChange(e){
        if(e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]

        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postActivity(input))
        alert('Personaje Creado')
        setInput(
            {
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: [],
            }
        )
        history.push('/countries')
    }

    return (
            <div>
                <Link to='/countries'><button>Volver</button></Link>
                <h1>Crear tu Actividad</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Nombre</label>
                        <input 
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) =>handleInputChange(e)}
                        />
                        {
                            errors.name && (
                                <p>{errors.name}</p>
                            )
                        }
                    </div>
                    <div>
                        <label>Dificultad</label>
                        <input
                        type="number"
                        value={input.difficulty}
                        name="difficulty"
                        onChange={(e) =>handleInputChange(e)}
                        />
                        {
                            errors.name && (
                                <p>{errors.name}</p>
                            )
                        }
                    </div>
                    <div>
                        <label>Duration</label>
                        <input
                        type="text"
                        value={input.duration}
                        name="duration"
                        onChange={(e) =>handleInputChange(e)}
                        />
                        {
                            errors.name && (
                                <p>{errors.name}</p>
                            )
                        }
                    </div>
                    <div>
                        <h1>Season</h1>
                        <label><input
                        type="checkbox"
                        name="Verano"
                        value="Verano"
                        onChange={(e) => handleCheckboxChange(e)}
                        />Summer</label>
                        <label><input
                        type="checkbox"
                        name="Otoño"
                        value="Otoño"
                        onChange={(e) => handleCheckboxChange(e)}
                        />Autumn</label>
                        <label><input
                        type="checkbox"
                        name="Invierno"
                        value="Invierno"
                        onChange={(e) => handleCheckboxChange(e)}
                        />Winter</label>
                        <label><input
                        type="checkbox"
                        name="Primavera"
                        value="Primavera"
                        onChange={(e) => handleCheckboxChange(e)}
                        />Spring</label>
                    </div>
                    <select onChange={(e) => handleSelect(e)}>
                        {
                            allCountries.map((c) => {
                                return (
                                <option value={c.id}>{c.name}</option>
                                )
                            })
                        }
                    </select>
                        <ul><li>{input.countries.map(el => el + ',')}</li></ul>
                    <button type="submit">Create</button>
                </form>
            </div>

    )


}