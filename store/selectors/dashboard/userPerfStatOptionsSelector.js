import {createSelector} from 'reselect/dist/reselect'

export const userPerfStatOptionsSelector = createSelector(
  state => state.getIn(['current', 'userPerfStatOptions']),
  userPerfStatOptions => userPerfStatOptions.toJS()
)