import {createSelector} from 'reselect/dist/reselect'

export const orderStatOptionsSelector = createSelector(
  state => state.getIn(['current', 'orderStatOptions']),
  orderStatOptions => orderStatOptions.toJS()
)