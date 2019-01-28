import {take, put, call, apply} from 'redux-saga/effects'

import {
  LOAD_NOTIFICATIONS,
  setNotifications,
} from '../../actions/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = {
  type: 'loadNotifications',
  path: '/notification/notification/badge',
  method: 'GET',
}

export function* loadNotificationsSaga() {
  while (true) {
    // Load notifications => Store them locally
    
    yield take(LOAD_NOTIFICATIONS)
    
    const response = yield call(fetchFromAPI, config)
    if (response.status !== 200) return errorHandler(response)
    const notifications = yield apply(response, response.json)
    
    yield put(setNotifications(notifications))
  }
}