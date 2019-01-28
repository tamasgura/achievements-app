import { makeActionCreator } from '../../utility/makeActionCreator'

export const LOAD_USER_PERF_STAT = 'LOAD_USER_PERF_STAT'
export const loadUserPerfStat = makeActionCreator(LOAD_USER_PERF_STAT, 'filterDTO')