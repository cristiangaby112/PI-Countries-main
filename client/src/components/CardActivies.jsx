import React from 'react';
import s from '../css/CardAct.module.css'


export default function CardActivies({name, difficulty, duration, season}){
    return (
        <div className={s.list}>
            <h4 className={s.h4}>{name}</h4>
            
                <p className={s.p}>Difficulty: {difficulty}</p>
                <p className={s.p}>Duration: {duration}</p>
                <p className={s.p}>Season: {season}</p>
            
        </div>
    );
}