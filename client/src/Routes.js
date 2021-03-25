import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import {AdminPage} from "./pages /AdminPage/AdminPage"
import {ClientPage} from "./pages /ClientPage/ClientPage"


export const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/main/admin">
                    <AdminPage />
                </Route>
                <Route path="/main/:nav">
                    <ClientPage />
                </Route>
                <Redirect to="main/shop" />
            </Switch>
        </Router>
    )
}