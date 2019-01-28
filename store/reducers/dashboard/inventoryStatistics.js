import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_INVENTORY_STATISTICS
} from '../../actions'

export const inventoryStatistics = createReducer([], {
  [SET_INVENTORY_STATISTICS](state, {inventoryStatistics}) {
    return fromJS(inventoryStatistics)
  }
})