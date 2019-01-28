import {makeActionCreator} from '../../utility/makeActionCreator'

export const ADD_FILTER = 'ADD_FILTER'
export const addFilter = makeActionCreator(ADD_FILTER, 'filter')