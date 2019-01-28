import { take, put, call, apply } from 'redux-saga/effects'

import {
  LOAD_USER_PERF_STAT,
  setUserPerfStat,
} from '../../actions/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const filterDTO = {
  dateFrom: '2018-01-01T22:00:00.000Z',
  dateTo:'2019-01-01T05:22:05.361Z',
  site:'UK',
  userList:[]
}

const config = (filterDTO) => {
  const body = JSON.stringify(filterDTO)
  return {
    type: 'userPerfStat',
    path: '/listing/userPerfStat',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export function* loadUserPerfStatSaga() {
  while (true) {
    // Load userPerfStat => Store it locally
    
    yield take(LOAD_USER_PERF_STAT)
    
    const response = yield call(fetchFromAPI, config(filterDTO))
    if (response.status !== 200) return errorHandler(response)
    const data = yield apply(response, response.json)
    
    yield put(setUserPerfStat(data))
  }
}