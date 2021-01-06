import { makeSingleton } from 'root/utils'
import createReducerManager from './manager'

const getReducerManager = (history: any) => {
    const reducerManagerSingleton = makeSingleton(createReducerManager, history, null)
    return reducerManagerSingleton.getInstance()
}

export default getReducerManager