import {makeActionCreator} from '../../utility/makeActionCreator'

export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS'
export const loadNotifications = makeActionCreator(LOAD_NOTIFICATIONS)