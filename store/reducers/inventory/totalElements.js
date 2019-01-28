import { createReducer } from '../../utility'

import {
  SET_TOTAL_ELEMENTS,
} from '../../actions'

export const totalElements = createReducer(0, {
  [SET_TOTAL_ELEMENTS](state,{totalElements}) {
    return totalElements
  }
})