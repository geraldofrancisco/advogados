import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import User from '../components/user/user'

export default props => (
    <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/users' exact component={User}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>
)