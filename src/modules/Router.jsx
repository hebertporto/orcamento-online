import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeScreen } from './home/containers/HomeScreen'

export const ROUTES = {
  HOME: '/',
}

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={HomeScreen} />
  </Switch>
)
