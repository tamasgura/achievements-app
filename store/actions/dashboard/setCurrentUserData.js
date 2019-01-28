import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_CURRENT_USER_DATA = 'SET_CURRENT_USER_DATA'
export const setCurrentUserData = makeActionCreator(SET_CURRENT_USER_DATA, 'userData')