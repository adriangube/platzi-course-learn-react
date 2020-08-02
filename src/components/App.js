import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route component={NotFound}/>
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>

    )
}

export default App;