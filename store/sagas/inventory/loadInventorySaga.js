import { take, put, call, apply, select } from 'redux-saga/effects'

import {
  LOAD_INVENTORY,
  setInventoryList,
  setTotalElements,
  setPageNumber
} from '../../actions/index'


import {
  gridListConfigSelector
} from '../../selectors/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

let config = (gridListConfig) => {
  
  const body = JSON.stringify(gridListConfig)
  return {
    type: 'loadInventory',
    path: '/inventory/item/gridlist',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export function* loadInventorySaga () {
  while (true) {
    // Load inventory through API => Store it locally
    
    yield take(LOAD_INVENTORY)
    
    const gridListConfig = yield select(gridListConfigSelector)
    
    const response = yield call(fetchFromAPI, config(gridListConfig))
    if (response.status !== 200) return errorHandler()
    
    const {totalElements, pageNumber, data} = yield apply(response, response.json)
    
    yield put(setInventoryList(data))
    yield put(setTotalElements(totalElements))
    yield put(setPageNumber(pageNumber))
  }
}