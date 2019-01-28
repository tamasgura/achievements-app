import {take, put, call, apply} from 'redux-saga/effects'

import {
  LOAD_INVENTORY_STATISTICS,
  setInventoryStatistics,
} from '../../actions/index'

import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import errorHandler from '../../../utility/api/errorHandler'

const config = {
  type: 'inventoryStatistics',
  path: '/inventory/item/statistics',
}

export function* loadInventoryStatisticsSaga() {
  while (true) {
    // Load Inventory Statistics => Store them locally
    
    yield take(LOAD_INVENTORY_STATISTICS)
    
    const response = yield call(fetchFromAPI, config)
    if (response.status !== 200) return errorHandler(response)
    const inventoryStatistics = yield apply(response, response.json)
    
    yield put(setInventoryStatistics(inventoryStatistics))
  }
}