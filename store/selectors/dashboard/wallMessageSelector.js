import {createSelector} from 'reselect/dist/reselect'

export const wallMessageSelector = createSelector(
  state => state.getIn(['current', 'wallMessage']),
  wallMessage => wallMessage.toJS()
)