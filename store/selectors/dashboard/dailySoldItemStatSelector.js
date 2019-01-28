import {createSelector} from 'reselect/dist/reselect'

export const dailySoldItemStatSelector = createSelector(
  state => state.getIn(['current', 'dailySoldItemStat']),
  dailySoldItemStat => dailySoldItemStat.toJS()
)