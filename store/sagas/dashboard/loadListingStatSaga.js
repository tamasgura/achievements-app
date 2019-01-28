import {take, put, call, apply} from 'redux-saga/effects'

import {
  LOAD_LISTING_STAT,
  setListingStat,
} from '../../actions/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = options => {
  const body = JSON.stringify(options)
  return {
    type: 'listingStat',
    path: '/listing/listingStat',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

export function* loadListingStatSaga() {
  while (true) {
    // Load listing stat with options => Store it locally
    
    const { options } = yield take(LOAD_LISTING_STAT)
    
    const response = yield call(fetchFromAPI, config(options))
    if (response.status !== 200) return errorHandler(response)
    const listingStat = yield apply(response, response.json)
    
    yield put(setListingStat(listingStat))
  }
}