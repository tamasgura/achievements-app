import { makeActionCreator } from '../../utility/makeActionCreator'

export const SET_USER_PERF_STAT = 'SET_USER_PERF_STAT'
export const setUserPerfStat = makeActionCreator(SET_USER_PERF_STAT, 'userPerfStat')