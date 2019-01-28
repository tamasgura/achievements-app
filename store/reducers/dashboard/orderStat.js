import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_ORDER_STAT
} from '../../actions'

export const orderStat = createReducer({}, {
  [SET_ORDER_STAT](state, {orderStat}) {
    return fromJS(orderStat)
  }
})