import StoreSingleton from 'root/store/singleton'
import homeReducer from './reducers/home.reducer'
import registerReducer from './reducers/register.reducer'
import loginReducer from './reducers/login.reducer'
import { reducerNames } from './reducers/enums'



const setupFeature = () => {
  const store = StoreSingleton.getInstance()
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes(reducerNames.home)) {
    store.reducerManager.add(reducerNames.home, homeReducer)
    store.reducerManager.add(reducerNames.login, loginReducer)
    store.reducerManager.add(reducerNames.register, registerReducer)
    store.updateReducer()
    console.log(store.getState())
  }
}

export default setupFeature