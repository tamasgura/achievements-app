import { makeActionCreator } from '../../utility/makeActionCreator'
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS'
export const setProductDetails = makeActionCreator(SET_PRODUCT_DETAILS, 'product')