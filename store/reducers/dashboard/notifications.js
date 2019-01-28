import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_NOTIFICATIONS
} from '../../actions'

export const notifications = createReducer({}, {
  [SET_NOTIFICATIONS](state, {notifications}) {
    return fromJS(notifications)
  }
})