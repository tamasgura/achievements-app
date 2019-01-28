import {createReducer} from '../../utility'

import { SET_SESSION_TOKEN } from '../../actions'

export const sessionToken = createReducer('', {
  [SET_SESSION_TOKEN](state, {sessionToken}) {
    return sessionToken
  }
})