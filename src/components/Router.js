import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/apparel-store" component={App} />
            <Route exact path="/apparel-store/cart" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
