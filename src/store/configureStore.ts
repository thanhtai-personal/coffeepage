import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import loggerMiddleware from 'root/middlewares/logger'
import createReducerManagerSingleton from 'root/managers/reducer/singleton'
import { IAppStore } from './interfaces'

export default function configureStore(initialState: any, history: any) {
  const middlewares = [routerMiddleware(history)]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware)
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers: any = compose(...enhancers)
  const reducerManager = createReducerManagerSingleton(history)

  const store: IAppStore = createStore(reducerManager.reduce, initialState, composedEnhancers)

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {}
  
  store.reducerManager = reducerManager
  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.updateReducer = () => {
    store.replaceReducer(store.reducerManager.reduce)
  }

  return store
}