import {makeActionCreator} from '../../utility/makeActionCreator'

export const REMOVE_FILTER = 'REMOVE_FILTER'
export const removeFilter = makeActionCreator(REMOVE_FILTER, 'index')