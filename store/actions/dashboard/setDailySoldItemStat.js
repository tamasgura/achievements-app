import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_DAILY_SOLD_ITEM_STAT = 'SET_DAILY_SOLD_ITEM_STAT'
export const setDailySoldItemStat = makeActionCreator(SET_DAILY_SOLD_ITEM_STAT, 'dailySoldItemStat')