import { createReducer } from '../../utility'
import { fromJS } from 'immutable'
import {
  SET_INVENTORY_LIST
} from '../../actions'

export const inventoryList = createReducer(null, {
  [SET_INVENTORY_LIST](state, {data}) {
    return fromJS(data)
  }
})