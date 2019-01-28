import {makeActionCreator} from '../../utility/makeActionCreator'

export const LOAD_INVENTORY_STATISTICS = 'LOAD_INVENTORY_STATISTICS'
export const loadInventoryStatistics = makeActionCreator(LOAD_INVENTORY_STATISTICS)