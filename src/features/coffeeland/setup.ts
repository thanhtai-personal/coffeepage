import StoreSingleton from 'root/store/singleton'
import homeReducer from './reducers/home.reducer'
import { reducerNames } from './reducers/enums'



const setupFeature = () => {
  const store = StoreSingleton.getInstance()
  let mapObject = store.reducerManager.getReducerMap()
  if (!Object.keys(mapObject).includes(reducerNames.home)) {
    store.reducerManager.add(reducerNames.home, homeReducer)
    store.updateReducer()
    console.log(store.getState())
  }
}

export default setupFeature