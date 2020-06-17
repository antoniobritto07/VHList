import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicial from './Pages/Inicial/Inicial'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicial} />
                <Route path='/login' exact component={Login} />
                <Route path='/cadastro' exact component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}