import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UX from './components/UX'
import Development from './components/Development'
import Home from './components/Home'
import CV from './components/CV'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ux" component={UX} />
        <Route exact path="/development" component={Development} />
        <Route exact path="/cv" component={CV} />
    </Switch>
);
export default Routes
