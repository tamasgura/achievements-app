import { put, take, select } from 'redux-saga/effects'

import {
  LOAD_PAGE_NUMBER,
  setPageNumber,
  loadInventory
} from '../../actions'
import {gridListConfigSelector} from '../../selectors'

export function* loadPageNumberSaga () {
  while (true) {
    // Store new pageNumber => Load and store new inventory through API
    
    let {pageNumber} = yield take(LOAD_PAGE_NUMBER)
    yield put(setPageNumber(pageNumber))

    const gridListConfig = yield select(gridListConfigSelector)
    gridListConfig.pageNumber = pageNumber
    
    yield put(loadInventory())
    
  }
}