import {createSelector} from 'reselect/dist/reselect'

export const inventoryListSelector = createSelector(
  state => state.getIn(['current', 'inventoryList']),
  inventoryList => inventoryList.toJS()
)