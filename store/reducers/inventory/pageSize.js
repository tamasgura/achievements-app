import {createReducer} from '../../utility'

import {
  SET_PAGE_SIZE
} from '../../actions'

export const pageSize = createReducer([], {
  [SET_PAGE_SIZE](state, {pageSize}) {
    return pageSize
  }
})