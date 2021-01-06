
import {
  TEST_ACTION,
} from '../actions/types'

import {
  IPayLoad
} from 'root/interfaces/common'

interface IRegisterState {

}

const initalState: IRegisterState = {
title: 'test-reducer-data'
}

const registerReducer = (state = initalState, payload: IPayLoad) => {
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

export default registerReducer