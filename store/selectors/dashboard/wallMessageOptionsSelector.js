import {createSelector} from 'reselect/dist/reselect'

export const wallMessageOptionsSelector = createSelector(
  state => state.getIn(['current', 'wallMessageOptions']),
  wallMessageOptions => wallMessageOptions.toJS()
)