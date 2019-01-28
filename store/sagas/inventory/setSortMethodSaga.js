import { take, put, select } from 'redux-saga/effects'

import {
  SET_SORT_METHOD,
  setGridListConfig,
  loadInventory
} from '../../actions'

import {gridListConfigSelector} from '../../selectors'

export function* setSortMethodSaga () {
  // get config from action => get gridListConfig => update gridListConfig => loadInventory()
  
  while (true) {
    const { sortMethod } = yield take(SET_SORT_METHOD)
    let gridListConfig = yield select(gridListConfigSelector)
    
    sortMethod === null ? gridListConfig.sort.length = 0 : gridListConfig.sort[0] = sortMethod
    
    yield put(setGridListConfig(gridListConfig))
    yield put(loadInventory())
  }
}