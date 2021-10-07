import React from "react";
import {Switch, Route} from "react-router-dom";
import HomeCountries from "../pages/HomeCountries";
import MainPage from "../pages/MainPage";
import CreateActivity from "../components/CreateActivity"
import ActivitiesPage from "../pages/ActivitiesPage"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/countries" component={HomeCountries}/>
            <Route path="/activities/list" component={ActivitiesPage}/>
            <Route path="/activity/create" component={CreateActivity}/>

        </Switch>
    )
}

export default Routes;