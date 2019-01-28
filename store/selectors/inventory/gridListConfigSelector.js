import {createSelector} from 'reselect/dist/reselect'

export const gridListConfigSelector = createSelector(
  state => state.getIn(['current', 'gridListConfig']),
  gridListConfig => gridListConfig.toJS()
)