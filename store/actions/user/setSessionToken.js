import { makeActionCreator } from '../../utility'
export const SET_SESSION_TOKEN = 'SET_SESSION_TOKEN'
export const setSessionToken = makeActionCreator(SET_SESSION_TOKEN, 'sessionToken')