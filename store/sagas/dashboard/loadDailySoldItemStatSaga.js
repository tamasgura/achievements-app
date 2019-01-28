import { take, put, call, apply } from 'redux-saga/effects'

import {
  LOAD_DAILY_SOLD_ITEM_STAT,
  setDailySoldItemStat,
} from '../../actions/index'

import { fetchFromAPI } from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = {
  type: 'loadDailySoldItemStat',
  path: '/listing/dailySoldItemStat',
  method: 'GET',
}

export function* loadDailySoldItemStatSaga() {
  while (true) {
    // Load dailySoldItemStat => Store it locally
    
    yield take(LOAD_DAILY_SOLD_ITEM_STAT)
    
    const response = yield call(fetchFromAPI, config)
    if (response.status !== 200) return errorHandler(response)
    const data = yield apply(response, response.json)
    
    yield put(setDailySoldItemStat(data))
  }
}