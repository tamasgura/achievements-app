import { makeActionCreator } from '../../utility/makeActionCreator'
export const SET_INVENTORY_LIST = 'SET_INVENTORY_LIST'
export const setInventoryList = makeActionCreator(SET_INVENTORY_LIST, 'data')