import { take, put, select } from 'redux-saga/effects'

import {
  ADD_FILTER,
  setGridListConfig,
  loadInventory,
} from '../../actions'
import {gridListConfigSelector} from '../../selectors'

const filterExists = (filters, newFilter) => {
  return filters.findIndex(f => f.prop === newFilter.prop)
}

export function* addFilterSaga () {
  while (true) {
    // Add or replace filter => update gridListConfig => loadInventory()
    
    const { filter } = yield take(ADD_FILTER)
    const gridListConfig = yield select(gridListConfigSelector)
    const index = filterExists(gridListConfig.filter, filter)
    
    if (index !== -1) {
      gridListConfig.filter[index] = filter
    } else {
      gridListConfig.filter.push(filter)
    }
    
    yield put(setGridListConfig(gridListConfig))
    yield put(loadInventory())
  }
}