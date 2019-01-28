import { makeActionCreator } from '../../utility/index'
export const UPDATE_PRODUCT_STATUS = 'UPDATE_PRODUCT_STATUS'
export const UPDATED = 'UPDATED'
export const UPDATING = 'UPDATING'
export const setUpdateProductStatus = makeActionCreator(UPDATE_PRODUCT_STATUS, 'status')