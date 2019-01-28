import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_WALL_MESSAGE = 'SET_WALL_MESSAGE'
export const setWallMessage = makeActionCreator(SET_WALL_MESSAGE, 'wallMessage')