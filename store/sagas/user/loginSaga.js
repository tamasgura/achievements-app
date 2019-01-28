import { take, put, call, apply, all, fork} from 'redux-saga/effects'

import {
  LOGIN,
  setCurrentUser,
  setSessionToken
} from '../../actions/index'

import {
  sessionTokenSelector
} from '../../selectors/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import { navigate } from '../../../navigation/navigationService'
import {
  loadCurrentUserData,
  loadDailySoldItemStat,
  loadListingStat,
  loadUserPerfStat,
  loadWallMessage,
  loadOrderStat,
  loadNotifications,
  SET_NOTIFICATIONS,
  SET_WALL_MESSAGE,
  SET_LISTING_STAT,
  SET_ORDER_STAT,
  SET_CURRENT_USER_DATA,
  SET_USER_PERF_STAT
} from '../../actions'
import {loadDashboardSaga} from '../dashboard/loadDashboardSaga'

let config = (authData) => {
  return {
    type: 'login',
    path: '/uaa/oauth/token',
    body: 'scope=ui&username=' + authData.email + '&password=' + authData.password + '&grant_type=password',
    headers: {
      'Authorization': 'Basic YnJvd3Nlcjo='
    },
  }
}

export function* loginSaga () {
  while (true) {
    // Send login request to API => Store user data locally
    //    => Call loadDashboardSaga() => Navigate to MainScreen
    
    const {authData} = yield take(LOGIN)
    
    const response = yield call(fetchFromAPI, config(authData))
    const data = yield apply(response, response.json)
    
    yield put(setCurrentUser(data.userExtraData.id))
    yield put(setSessionToken(data.access_token))
    
    yield loadDashboardSaga()
  
    yield all([
      take(SET_CURRENT_USER_DATA),
      take(SET_USER_PERF_STAT),
      take(SET_WALL_MESSAGE),
      take(SET_LISTING_STAT),
      take(SET_ORDER_STAT),
      take(SET_NOTIFICATIONS),
    ])
    
    yield navigate('rootNavigator', 'TabbedScreen')
  }
}