import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_INVENTORY_STATISTICS = 'SET_INVENTORY_STATISTICS'
export const setInventoryStatistics = makeActionCreator(SET_INVENTORY_STATISTICS, 'inventoryStatistics')