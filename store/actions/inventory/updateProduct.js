import { makeActionCreator } from '../../utility/makeActionCreator'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const updateProduct = makeActionCreator(UPDATE_PRODUCT, 'product', 'locationId', 'quantity')