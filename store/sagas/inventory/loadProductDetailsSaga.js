import { take, call, put, apply } from 'redux-saga/effects'
import { LOAD_PRODUCT_DETAILS } from '../../actions/inventory/loadProductDetails'
import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'
import {setProductDetails} from '../../actions'
import errorHandler from '../../../utility/api/errorHandler'

const config = id => {
  return {
    type: 'loadItem',
    path: '/inventory/item/' + id,
    method: 'GET',
  }
}

export function* loadProductDetailsSaga () {
  while (true) {
    // Load product details through API => Store it locally
    
    let {id} = yield take(LOAD_PRODUCT_DETAILS)
  
    const response = yield call(fetchFromAPI, config(id))
  
    if (response.status !== 200) return errorHandler(response)
    const product = yield apply(response, response.json)
    yield put(setProductDetails(product))
  }
}