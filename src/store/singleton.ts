import configureStore from './configureStore'
import { createBrowserHistory } from 'history'
import { makeSingleton } from 'root/utils'

export const history = createBrowserHistory()

export default makeSingleton(configureStore, {}, history)