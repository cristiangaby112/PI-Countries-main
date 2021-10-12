import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from '../components/SearchBar';
import s from '../css/NavBar.module.css'

export default function NavBar(){


    return(
        <nav className={s.navbar}>
            <Link to='/' className={s.link_title}>
            <h1 className={s.Title}>By Cristian Barriento</h1>
            </Link>
            <Link to='/countries' className={s.link}>
                <h2 className={s.h1}>Countries</h2>
            </Link>
            <Link to='/activity/list' className={s.link}>
                <h2 className={s.h1}>Activity</h2>
            </Link>
            <Link to='/activity/create' className={s.link}>
                <h2 className={s.h1}>Create Activity</h2>
            </Link>
            <SearchBar/>
        </nav>
    )
}
            