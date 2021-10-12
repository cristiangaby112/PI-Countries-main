import React, {Fragment} from 'react';
import s from '../css/Paged.module.css'


export default function Paginado ({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }


    return(
        // <nav>
            <div  className={s.paginado}>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        <Fragment key={number}>
                        <button className={s.btn}  onClick={() => paginado(number)}>{number} </button>
                        </Fragment>
                    ))
                }
            </div>
        // </nav>
    )
}
