import { makeActionCreator } from '../../utility/makeActionCreator'
export const SHOW_PRODUCT_DETAILS = 'SHOW_PRODUCT_DETAILS'
export const showProductDetails = makeActionCreator(SHOW_PRODUCT_DETAILS, 'id')