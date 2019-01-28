import {createSelector} from 'reselect/dist/reselect'

export const totalElementsSelector = createSelector(
  state => state.getIn(['current', 'totalElements']),
  totalElements => totalElements
)