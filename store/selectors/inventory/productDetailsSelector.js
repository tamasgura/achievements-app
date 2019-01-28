import {createSelector} from 'reselect/dist/reselect'

export const productDetailsSelector = createSelector(
  state => state.getIn(['current', 'productDetails']),
  productDetails => productDetails
)

export const productQuantitySelector = (locationId) => (state) => {

  const location = productDetailsSelector(state).itemStockDTOList
    .find(item => item.itemLocationId === locationId)
  
  if (location) {
    return location.quantity
  } else {
    return null
  }
}