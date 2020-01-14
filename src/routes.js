import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
//switch para apenas uma unica rota ser chamada
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products' component={Product} />
        </Switch>
    </BrowserRouter>
);
//receber parametro no path eh so colocar :
export default Routes;
//<Main />