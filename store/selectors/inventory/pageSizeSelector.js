import {createSelector} from 'reselect/dist/reselect'

export const pageSizeSelector = createSelector(
  state => state.getIn(['current', 'pageSize']),
  pageSize => pageSize
)