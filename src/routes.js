import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UX from './components/UX'
import Development from './components/Development'
import Home from './components/Home'
import CV from './components/CV'
import ProjectDetails from './components/ProjectDetails'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ux" component={UX} />
        <Route exact strict path="/development" component={Development} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/devprojects/:id" component={ProjectDetails} />
        <Route exact path="/uxprojects/:id" component={ProjectDetails} />
    </Switch>
);
export default Routes
