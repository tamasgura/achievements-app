import {makeActionCreator} from '../../utility/makeActionCreator'

export const LOAD_LISTING_STAT = 'LOAD_LISTING_STAT'
export const loadListingStat = makeActionCreator(LOAD_LISTING_STAT, 'options')