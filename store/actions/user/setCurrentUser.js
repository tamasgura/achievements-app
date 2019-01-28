import { makeActionCreator } from '../../utility/makeActionCreator'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = makeActionCreator(SET_CURRENT_USER, 'userId')