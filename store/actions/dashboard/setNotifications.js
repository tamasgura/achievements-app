import {makeActionCreator} from '../../utility/makeActionCreator'

export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS'
export const setNotifications = makeActionCreator(SET_NOTIFICATIONS, 'notifications')