import { take, put, call, apply } from 'redux-saga/effects'

import {
  LOAD_WALL_MESSAGE,
  setWallMessage,
} from '../../actions/index'

import { fetchFromAPI } from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = options => {
  
  const keys = Object.keys(options)
  let params = ''
  
  if (keys.length !== 0 && options.constructor === Object) {
    keys.forEach((key, index) => {
      if (index === 0) params += '?'
      params += (key + '=' + options[key])
      if (index !== keys.length - 1) params += '&'
    })
  }
  
  return {
    type: 'loadWallMessage',
    path: '/account/accountData/wallmessage/list' + params,
    method: 'GET'
  }
}

export function* loadWallMessageSaga() {
  while (true) {
    // Load wallMessage list => Store it locally
    
    const { options } = yield take(LOAD_WALL_MESSAGE)
    
    const response = yield call(fetchFromAPI, config(options))
    if (response.status !== 200) return errorHandler(response)
    const wallMessage = yield apply(response, response.json)
    
    yield put(setWallMessage(wallMessage))
  }
}