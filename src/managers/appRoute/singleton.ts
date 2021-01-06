import { makeSingleton } from 'root/utils'
import createAppRouteManager from './manager'

export default makeSingleton(createAppRouteManager, [], null)