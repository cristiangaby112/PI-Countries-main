import React from 'react';
import {Link} from 'react-router-dom'
//import SearchBar from '../components/SearchBar';


export default function NavBar(){


    return(
        <nav>
            <h1>By Cristian Barriento</h1>
            <Link to='/countries'>
                <h2>Countries</h2>
            </Link>
            <Link to='/activity/list'>
                <h2>Activity</h2>
            </Link>
            <Link to='/activity/create'>
                <h2>Create Activity</h2>
            </Link>
            {/* //<SearchBar/> */}
        </nav>
    )
}
            