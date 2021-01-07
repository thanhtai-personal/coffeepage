
import {
    TEST_ACTION,
} from '../actions/types'

import {
    IPayLoad
} from 'root/interfaces/common'

interface IHomeState {

}

const initalState: IHomeState = {
  title: 'test-reducer-data'
}

const homeReducer = (state = initalState, payload: IPayLoad) => {
  switch (payload.type) {
    case TEST_ACTION:
      return {
        ...state,
        ...payload.data
      }
    default:
      return state
  }
}

export default homeReducer