import React from 'react';



export default function Card({image, name, region}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{region}</h5>
            <img src={image} alt="img not found" width="200" height="200" />
        </div>
    );
}