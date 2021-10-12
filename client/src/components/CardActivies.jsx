import React from 'react';



export default function CardActivies({name, difficulty, duration, season}){
    return (
        <div>
            <h1>{name}</h1>
            <p>{difficulty}</p>
            <p>{duration}</p>
            <p>{season}</p>
        </div>
    );
}