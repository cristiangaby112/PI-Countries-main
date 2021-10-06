import React from "react";
import {Link} from "react-router-dom"

export default function MainPage() {
    return (
        <div>
            <h1>Bienvenidos</h1>
            <Link to="/countries">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}