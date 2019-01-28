import { createSelector } from 'reselect/dist/reselect'

export const userPerfStatSelector = createSelector(
  state => state.getIn(['current', 'userPerfStat']),
  userPerfStat => userPerfStat.toJS()
)