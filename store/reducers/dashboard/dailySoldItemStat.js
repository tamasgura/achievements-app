import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_DAILY_SOLD_ITEM_STAT
} from '../../actions'

export const dailySoldItemStat = createReducer([], {
  [SET_DAILY_SOLD_ITEM_STAT](state, {dailySoldItemStat}) {
    return fromJS(dailySoldItemStat)
  }
})