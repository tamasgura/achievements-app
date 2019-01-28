import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_SORT_METHOD = 'SET_SORT_METHOD'
export const setSortMethod = makeActionCreator(SET_SORT_METHOD, 'sortMethod')