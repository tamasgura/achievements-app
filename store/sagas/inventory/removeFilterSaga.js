import { take, put, select } from 'redux-saga/effects'

import {
  REMOVE_FILTER,
  setGridListConfig,
  loadInventory,
} from '../../actions'
import {gridListConfigSelector} from '../../selectors'


export function* removeFilterSaga () {
  while (true) {
  // Get gridListConfig => remove filter => update gridListConfig => loadInventory()
  
    const { index } = yield take(REMOVE_FILTER)
    
    const gridListConfig = yield select(gridListConfigSelector)
    gridListConfig.filter.splice(index, 1)
    
    yield put(setGridListConfig(gridListConfig))
    yield put(loadInventory())
  }
}