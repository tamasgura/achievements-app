import { createReducer } from '../../utility'

import {
  SET_PRODUCT_DETAILS,
} from '../../actions'

export const productDetails = createReducer([], {
  [SET_PRODUCT_DETAILS](state,{product}) {
    return product
  }
})