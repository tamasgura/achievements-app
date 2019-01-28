import {makeActionCreator} from '../../utility/makeActionCreator'

export const LOAD_ORDER_STAT = 'LOAD_ORDER_STAT'
export const loadOrderStat = makeActionCreator(LOAD_ORDER_STAT, 'options')