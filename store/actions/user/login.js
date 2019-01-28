import { FETCH_DATA_FROM_API } from '../actionTypes'
import { fetchFromAPI } from '../fetchData/fetchFromAPI'

import { makeActionCreator } from '../../utility'

export const LOGIN = 'LOGIN'
export const login = makeActionCreator(LOGIN, 'authData')

// TODO check this
function* useRefreshToken(token) {
  
  let config = {
    type: 'checkToken',
    path: '/uaa/oauth/check_token?token=' + token,
    method: 'GET',
  }
  
  try {
    const data = yield* fetchFromAPI({type: FETCH_DATA_FROM_API, config})
    
  } catch(e) {
    console.log(e)
  }
}

