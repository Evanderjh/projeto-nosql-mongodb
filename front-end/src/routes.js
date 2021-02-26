import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produto';
import Loja from './pages/Loja';
import Contato from './pages/Contato';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos" component={Produto} />
                <Route path="/lojas" component={Loja} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
