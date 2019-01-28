import { createReducer } from '../../utility'
import { fromJS } from 'immutable'

import {
  SET_USER_PERF_STAT
} from '../../actions'

export const userPerfStat = createReducer([], {
  [SET_USER_PERF_STAT](state, {userPerfStat}) {
    return fromJS(userPerfStat)
  }
})