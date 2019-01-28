import { put, take } from 'redux-saga/effects'

import {
  SHOW_PRODUCT_DETAILS,
  SET_PRODUCT_DETAILS,
  loadProductDetails,
} from '../../actions'

import { navigate } from '../../../navigation/navigationService'

export function* showProductDetailsSaga () {
  while (true) {
    // Load selected product details through API => Store it locally => Navigate to ProductDetails Screen
    
    const {id} = yield take(SHOW_PRODUCT_DETAILS)
    yield put(loadProductDetails(id))
    yield take(SET_PRODUCT_DETAILS)

    navigate('MainStack', 'ProductDetails')
  }
}