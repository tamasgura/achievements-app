import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_CURRENT_USER_DATA
} from '../../actions'

export const userData = createReducer([], {
  [SET_CURRENT_USER_DATA](state, {userData}) {
    return fromJS(userData)
  }
})