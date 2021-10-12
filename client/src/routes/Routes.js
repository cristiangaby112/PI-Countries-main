import React from "react";
import {Switch, Route} from "react-router-dom";
import HomeCountries from "../pages/HomeCountries";
import MainPage from "../pages/MainPage";
import CreateActivity from "../components/CreateActivity"
import ActivitiesPage from "../pages/ActivitiesPage"
import Detail from '../components/Detail'
import SearchCountries from '../pages/SearchCountries'
const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/countries" component={HomeCountries}/>
            <Route  path= "/search" component={SearchCountries}/>
            <Route path="/countries/:id" component={Detail}/>
            <Route path="/activity/list" component={ActivitiesPage}/>
            <Route path="/activity/create" component={CreateActivity}/>

        </Switch>
    )
}

export default Routes;