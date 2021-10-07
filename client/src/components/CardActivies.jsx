import React from 'react';



export default function CardActivies({name, difficulty, duration, season}){
    return (
        <div>
            <h1>{name}</h1>
            <h2>{difficulty}</h2>
            <h2>{duration}</h2>
            <h2>{season}</h2>
        </div>
    );
}