import { makeActionCreator } from '../../utility/makeActionCreator'

export const LOAD_WALL_MESSAGE = 'LOAD_WALL_MESSAGE'
export const loadWallMessage = makeActionCreator(LOAD_WALL_MESSAGE, 'options')