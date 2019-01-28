import { put, take, call, apply } from 'redux-saga/effects'

import {
  LOAD_CURRENT_USER_DATA,
  setCurrentUserData
} from '../../actions'

import { fetchFromAPI } from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = {
  method: 'GET',
  type: 'loadCurrentUser',
  path: '/account/accountData/currentUserMenuData',
}

export function* loadCurrentUserSaga () {
  while (true) {
    // Get user data => Store it locally
    
    yield take(LOAD_CURRENT_USER_DATA)
    
    const response = yield call(fetchFromAPI, config)
    if (response.status !== 200) return errorHandler(response)
    const parsedResp = yield apply(response, response.json)
    
    yield put(setCurrentUserData(parsedResp))
  }
}