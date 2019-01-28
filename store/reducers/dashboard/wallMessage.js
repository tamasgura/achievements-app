import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_WALL_MESSAGE
} from '../../actions'

export const wallMessage = createReducer([], {
  [SET_WALL_MESSAGE](state, {wallMessage}) {
    return fromJS(wallMessage)
  }
})