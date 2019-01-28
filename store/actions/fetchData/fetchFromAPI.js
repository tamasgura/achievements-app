import { FETCH_DATA_FROM_API, FETCH_DATA_SUCCESS } from '../actionTypes'
import { call, put, select } from 'redux-saga/effects'
import { defaultConfig } from '../../../utility/api/configApi'
// import {AsyncStorage} from 'react-native'
import errorHandler from '../../../utility/api/errorHandler'
import { sessionTokenSelector } from '../../selectors'


export const fetchDataActionCreator = (config) => {
  // console.group('fetch action creator', config)
  // console.groupEnd()
  return {
    type: FETCH_DATA_FROM_API,
    config: config
  }
}

// Saga generator function
export function* fetchFromAPI(config = {}) {
  // console.group('inside fetchFromAPI generator function', config)
  // console.groupEnd()
  try {
    
    let customConfig = constructConfig(config)
    
    
    if (!config.hasOwnProperty('headers')
      || (config.hasOwnProperty('headers') && !config.headers.hasOwnProperty('Authorization'))) {
      // if config contains no authorization option, or no headers are provided, use sessionToken
      // console.log('config has no headers or config headers has no Authorization')
      
      let token = yield select(sessionTokenSelector)
     
      //token = yield call(AsyncStorage.getItem, 'sessionToken')
      customConfig.headers.Authorization = 'Bearer ' + token
      // console.log('token: ', token)
      // console.log('customConfig', customConfig)
    }
    
    // console.log('About to send fetch with config: ', customConfig )
    const response = yield call(
      fetch,
      customConfig.url + customConfig.path,
      {
        method: customConfig.method,
        headers: customConfig.headers,
        body: customConfig.body,
      })
    // console.log('fetch resolved. Raw response: ', response)
    
    if (response.hasOwnProperty('error')) {
      errorHandler(response.error)
    }
    
    return response
    /*
    yield console.group('fetchFromAPI gen func. response yielded: ', response)
    const parsedRes = yield response.json()
    if (response.status === 200) {
      yield put({type: FETCH_DATA_SUCCESS, response: parsedRes})
    } else {
      console.group('fetchFromAPI returned with status code ' + response.status)
      console.groupEnd()
      errorHandler(error)
    }
    return parsedRes
    */
  }
  catch(e) {
    // console.group('fetchFromAPI catch block. calling general errorHandler', e)
    // console.groupEnd()
    errorHandler(e)
  }
}

// TODO add token automatically before dispatching the fetch action
const constructConfig = (config) => {
  let newConfig = {
    ...defaultConfig,
    ...config,
    headers: {
      ...defaultConfig.headers,
    }
  }
  if (config.headers) {
    newConfig.headers = {
      ...newConfig.headers,
      ...config.headers
    }
  }
  return newConfig
}

/**
 
 dispatch action({ type: FETCH_DATA, config: config })
  =>  check if token is needed from asyncStorage
    => if yes check for token.
      => if successful, set token var
      => if fail, error
    => configure config and return
  => send request
  => dispatch action with response value
 **/