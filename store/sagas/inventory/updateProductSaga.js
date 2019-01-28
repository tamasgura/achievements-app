import { take, call, put } from 'redux-saga/effects'
import {fetchFromAPI} from '../../actions/fetchData/fetchFromAPI'

import {
  UPDATE_PRODUCT,
  setUpdateProductStatus, UPDATING, UPDATED,
  loadProductDetails, SET_PRODUCT_DETAILS
} from '../../actions'

import errorHandler from '../../../utility/api/errorHandler'

const constructBody = (product, locationId, quantity) => {
  
  let body = product
  const locationIndex = body.itemStockDTOList.findIndex(location => {
    return location.itemLocationId === locationId
  })
  body.itemStockDTOList[locationIndex].quantity = quantity

  return JSON.stringify(body)
}

let config = (product, locationId, quantity) => {
  
  let body = constructBody(product, locationId, quantity)
  console.group('body constructed', body)
  return {
    type: 'updateInventoryItem',
    path: '/inventory/item/' + product.id,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  }
}

export function* updateProductSaga () {
  while (true) {
    // Load product details => Update product through API => Load product details again
    
    let {product, locationId, quantity} = yield take(UPDATE_PRODUCT)
    
    yield put(setUpdateProductStatus(UPDATING))
    yield put(loadProductDetails(product.id))
    const productAction = yield take(SET_PRODUCT_DETAILS)
    const newProduct = productAction.product
  
    const response = yield call(fetchFromAPI, config(newProduct, locationId, quantity))
  
    if (response.status !== 200) return errorHandler(response)

  
    yield put(loadProductDetails(newProduct.id))
  
    yield put(setUpdateProductStatus(UPDATED))
  }
  
}
