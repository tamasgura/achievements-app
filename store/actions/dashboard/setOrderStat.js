import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_ORDER_STAT = 'SET_ORDER_STAT'
export const setOrderStat = makeActionCreator(SET_ORDER_STAT, 'orderStat')