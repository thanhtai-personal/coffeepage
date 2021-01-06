import React, { Route } from 'react-router'
import hocSingleton from 'root/hocs/singleton'
import { IAppRoute, IHocProps } from './interfaces'

const hocInstant = hocSingleton.getInstance()

const combineRoute: Function = (appRoutes: { [key: string]: Array<IAppRoute> }) => {
  let routesList: Array<IAppRoute> = []
  Object.keys(appRoutes).forEach((key) => {
    if (Array.isArray(appRoutes[key])) {
      routesList = routesList.concat(appRoutes[key])
    }
  })
  return routesList.map((route: IAppRoute) => {
    route.setUpStore()
    let resultComponent = route.component
    if (Array.isArray(route.hocs)) {
      route.hocs.forEach((hoc: IHocProps) => {
        resultComponent = hocInstant.call(hoc, resultComponent)
      })
    }
    return <Route key={route.key} path={route.path} exact={route.isExact} component={resultComponent} />
  })
}

function createAppRoute() {
  // Create an object which maps keys to App routes
  const appRoutes: { [key: string]: Route } = {}
  // Create the initial combinedapp route
  let combinedAppRoute: Array<Route> = combineRoute(appRoutes)

  return {
    getAppRouteMap: () => appRoutes,

    // The root app route function exposed by this object
    // This will be passed to the store
    reduce: () => {
      return combinedAppRoute
    },

    // Adds a new app route with the specified key
    add: (key: string, featureRoute: any) => {
      if (!key || appRoutes[key]) {
        return
      }

      // Add the app route to the app route mapping
      appRoutes[key] = featureRoute

      // Generate a new combined app route
      combinedAppRoute = combineRoute(appRoutes)
    },

    // Removes a app route with the specified key
    remove: (key: string) => {
      if (!key || !appRoutes[key]) {
        return
      }

      // Remove it from the app route mapping
      delete appRoutes[key]

      // Generate a new combined app route
      combinedAppRoute = combineRoute(appRoutes)
    }
  }
}

export default createAppRoute