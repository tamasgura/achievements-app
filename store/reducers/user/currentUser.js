import { createReducer } from '../../utility'

import {
  SET_CURRENT_USER
} from '../../actions'

export const currentUser = createReducer(null, {
  [SET_CURRENT_USER](state, {userId}) {
    return userId
  }
})