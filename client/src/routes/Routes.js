import React from "react";
import {Switch, Route} from "react-router-dom";
import HomeCountries from "../pages/HomeCountries";
import MainPage from "../pages/MainPage";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/countries" component={HomeCountries}/>
        </Switch>
    )
}

export default Routes;