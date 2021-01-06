
import {
  TEST_ACTION,
} from '../actions/types'

import {
  IPayLoad
} from 'root/interfaces/common'

interface ILoginState {

}

const initalState: ILoginState = {
title: 'test-reducer-data'
}

const loginReducer = (state = initalState, payload: IPayLoad) => {
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

export default loginReducer