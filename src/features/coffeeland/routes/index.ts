import HomeContainer from '../containers/home'
import setUpFeature from '../setup'
import { IAppRoute } from 'root/managers/appRoute/interfaces'

const homeRoutes: Array<IAppRoute> = [
  {
    key: 'home',
    path: '/',
    isExact: true,
    component: HomeContainer,
    hocs: [{ key: 'useHeader', params: [] }, { key: 'useFooter', params: [] }
    , { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  },
  {
    key: 'homePage',
    path: '/home',
    isExact: true,
    component: HomeContainer,
    hocs: [{ key: 'useHeader', params: [] }, { key: 'useFooter', params: [] }
    , { key: 'useDocumentTitle', params: [] }, { key: 'useMultiThemes', params: [] }],
    setUpStore: setUpFeature,
    childrenRoute: []
  }
]

export default homeRoutes