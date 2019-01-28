import { makeActionCreator } from '../../utility/makeActionCreator'
export const LOAD_PRODUCT_DETAILS = 'LOAD_PRODUCT_DETAILS'
export const loadProductDetails = makeActionCreator(LOAD_PRODUCT_DETAILS, 'id')