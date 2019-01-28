import {createSelector} from 'reselect/dist/reselect'

export const orderStatSelector = createSelector(
  state => state.getIn(['current', 'orderStat']),
  orderStat => orderStat.toJS()
)