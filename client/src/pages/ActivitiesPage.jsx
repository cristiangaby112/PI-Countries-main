import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getActivity} from '../actions/index'
import CardActivies from '../components/CardActivies'
import NavBar from '../components/NavBar'
export default function ActivitiesPage(){
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities)

    useEffect(() =>{
        dispatch(getActivity());
    },[dispatch]);

    return(
        <div>
            <NavBar/>
            <h1>Activities list</h1>

            {activities?.map((c) =>{
                
                return(
                    <Fragment>
                        <CardActivies name={c.name} difficulty={c.difficulty} region={c.duration} season={c.season} key={c.id} />
                        
                    </Fragment>
                );
                })
            }

        </div>

    )
}