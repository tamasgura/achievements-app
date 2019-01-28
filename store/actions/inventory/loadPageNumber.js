import {makeActionCreator} from '../../utility/makeActionCreator'

export const LOAD_PAGE_NUMBER = 'LOAD_PAGE_NUMBER'
export const loadPageNumber = makeActionCreator(LOAD_PAGE_NUMBER, 'pageNumber')