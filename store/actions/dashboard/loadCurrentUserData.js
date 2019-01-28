import { makeActionCreator } from '../../utility/makeActionCreator'

export const LOAD_CURRENT_USER_DATA = 'LOAD_CURRENT_USER_DATA'
export const loadCurrentUserData = makeActionCreator(LOAD_CURRENT_USER_DATA)