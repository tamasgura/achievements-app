import { take, put, call } from 'redux-saga/effects'

import {
  LOGOUT, resetStore
} from '../../actions'

import { fetchFromAPI } from '../../actions/fetchData/fetchFromAPI'

import { navigate } from '../../../navigation/navigationService'

const config = {
  type: 'logout',
  path: '/uaa/activeUserMgmt/logout',
  method: 'GET',
}

export function* logoutSaga () {
  yield take(LOGOUT)
  
  yield call(fetchFromAPI, config)
  
  yield navigate('rootNavigator', 'SignInScreen')
  yield put(resetStore())
}