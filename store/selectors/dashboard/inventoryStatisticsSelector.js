import {createSelector} from 'reselect/dist/reselect'

export const inventoryStatisticsSelector = createSelector(
  state => state.getIn(['current', 'inventoryStatistics']),
  inventoryStatistics => inventoryStatistics.toJS()
)