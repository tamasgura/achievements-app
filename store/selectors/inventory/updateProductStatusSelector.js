import { createSelector } from 'reselect/dist/reselect'

export const updateProductStatusSelector = createSelector(
  state=>state.getIn(['current', 'updateProductStatus']),
  updateProductStatus=>updateProductStatus
)