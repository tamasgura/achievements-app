import { put, select } from 'redux-saga/effects'

import {
  loadCurrentUserData,
  loadDailySoldItemStat,
  loadListingStat,
  loadNotifications,
  loadOrderStat,
  loadUserPerfStat,
  loadWallMessage,
} from '../../actions'
import {
  listingStatOptionsSelector,
  orderStatOptionsSelector,
  userPerfStatOptionsSelector,
  wallMessageOptionsSelector
} from '../../selectors'

export function* loadDashboardSaga () {
  // Retrieve all necessery data to load Dashboard
  
  const userPerfStatOptions = yield select(userPerfStatOptionsSelector)
  const wallMessageOptions = yield select(wallMessageOptionsSelector)
  const listingStatOptions = yield select(listingStatOptionsSelector)
  const orderStatOptions = yield select(orderStatOptionsSelector)
  
  yield put(loadCurrentUserData())

  yield put(loadUserPerfStat(userPerfStatOptions))

  yield put(loadDailySoldItemStat())

  yield put(loadWallMessage(wallMessageOptions))

  yield put(loadListingStat(listingStatOptions))

  yield put(loadOrderStat(orderStatOptions))

  yield put(loadNotifications())
}