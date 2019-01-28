import { makeActionCreator } from '../../utility/makeActionCreator'
export const LOAD_INVENTORY = 'LOAD_INVENTORY'
export const loadInventory = makeActionCreator(LOAD_INVENTORY)