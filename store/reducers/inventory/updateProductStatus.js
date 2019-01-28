import { createReducer } from '../../utility'

import {
  UPDATE_PRODUCT_STATUS,
  UPDATED
} from '../../actions'

export const updateProductStatus = createReducer(UPDATED, {
  [UPDATE_PRODUCT_STATUS](state, {status}) {
    return status
  }
})