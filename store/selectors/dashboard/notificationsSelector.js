import {createSelector} from 'reselect/dist/reselect'

export const notificationsSelector = createSelector(
  state => state.getIn(['current', 'notifications']),
  notifications => notifications.toJS()
)