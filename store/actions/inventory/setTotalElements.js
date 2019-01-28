import { makeActionCreator } from '../../utility/makeActionCreator'
export const SET_TOTAL_ELEMENTS = 'SET_TOTAL_ELEMENTS'
export const setTotalElements = makeActionCreator(SET_TOTAL_ELEMENTS, 'totalElements')