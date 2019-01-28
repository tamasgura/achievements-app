import {
  DECREMENT,
  INCREMENT,
  RESET_APP_STATE,
  STORE_SESSION_DATA,
  STORE_SESSION_EXPIRATION,
  UPDATE_SESSION_TOKEN,
} from './actionTypes'
import storage from '../../features/asyncStorage'

// TODO Consider grouping actions and reducers respectively by category(auth, inventory, etc...)
// TODO Make asyncstorage work through redux dispatch
export const storeSessionData = (parsedRes) => {
  // console.log('storeSessionData action creator')
  // console.log(parsedRes)
  return {
    type: STORE_SESSION_DATA,
    data: parsedRes
  }
}

export const storeSessionDataLocally = (parsedRes) => {
  /*new Promise(() => {
    storage.storeData('sessionToken', parsedRes.access_token, () => {
      console.log('storeSessiondataLocally callback')
    })
  }).then(dispatch => dispatch(storeSessionData(parsedRes)))*/
/*
  storage.storeData('sessionToken', parsedRes.access_token, () => {
    console.log('store Session data Locally callback', dispatch)
    return dispatch => dispatch(storeSessionData(parsedRes))
  })
*/
}

export const storeSessionExpiration = (exp) => {
  return {
    type: STORE_SESSION_EXPIRATION,
    exp: exp,
  }
}

export const resetAppState = () => {
  return {
    type: RESET_APP_STATE,
  }
}

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const updateSessionToken = (sessionToken) => {
  // console.log('updating session token to: ' + sessionToken)
  return {
    type: UPDATE_SESSION_TOKEN,
    sessionToken: sessionToken,
  }
}

