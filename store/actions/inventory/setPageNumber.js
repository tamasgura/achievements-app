import { makeActionCreator } from '../../utility/makeActionCreator'
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export const setPageNumber = makeActionCreator(SET_PAGE_NUMBER, 'pageNumber')