import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_LISTING_STAT = 'SET_LISTING_STAT'
export const setListingStat = makeActionCreator(SET_LISTING_STAT, 'listingStat')