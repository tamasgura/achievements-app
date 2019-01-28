import { createReducer } from '../../utility'

import {
  SET_PAGE_NUMBER
} from '../../actions'

export const pageNumber = createReducer([], {
  [SET_PAGE_NUMBER](state,{pageNumber}) {
    return pageNumber
  }
})