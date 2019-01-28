import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_LISTING_STAT
} from '../../actions'

export const listingStat = createReducer({}, {
  [SET_LISTING_STAT](state, {listingStat}) {
    return fromJS(listingStat)
  }
})