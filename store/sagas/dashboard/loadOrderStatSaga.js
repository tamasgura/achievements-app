import { take, put, call, apply } from 'redux-saga/effects'

import {
  LOAD_ORDER_STAT,
  setOrderStat,
} from '../../actions/index'

import { fetchFromAPI } from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = options => {
  const body = JSON.stringify(options)
  return {
    type: 'orderStat',
    path: '/listing/orderStat',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

export function* loadOrderStatSaga() {
  while (true) {
    // Load orderStat filtered by date and users => Store stats locally
    
    const { options } = yield take(LOAD_ORDER_STAT)
    
    const response = yield call(fetchFromAPI, config(options))
    if (response.status !== 200) return errorHandler(response)
    const orderStat = yield apply(response, response.json)
    
    yield put(setOrderStat(orderStat))
  }
}