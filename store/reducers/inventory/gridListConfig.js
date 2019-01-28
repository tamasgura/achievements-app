import {createReducer} from '../../utility'
import { fromJS } from 'immutable'
import {defaultState} from '../../defaultState'

import {
  SET_GRIDLIST_CONFIG,
} from '../../actions'

export const gridListConfig = createReducer(defaultState.gridListConfig, {
  [SET_GRIDLIST_CONFIG](state, {gridListConfig}) {
    return fromJS(gridListConfig)
  }
})