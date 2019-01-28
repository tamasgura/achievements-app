import {createSelector} from 'reselect/dist/reselect'

export const pageNumberSelector = createSelector(
  state => state.getIn(['current', 'pageNumber']),
  pageNumber => pageNumber
)