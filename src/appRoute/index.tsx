import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import appRouteSingleton from 'root/managers/appRoute/singleton'
import homeRoutes from 'root/features/coffeeland/routes'

const appRouteManager = appRouteSingleton.getInstance()

function AppRoute () {
  appRouteManager.add('home', homeRoutes)
  return (
    <BrowserRouter basename='/'> { /* your usual react-router v4/v5 routing */}
      <Switch>
        {appRouteManager.reduce()}
        <Route render={() => (<div>Route not found!</div>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoute