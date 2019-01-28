import {applyMiddleware, compose, createStore} from 'redux'

import {monitorReducerEnhancer, logger} from './utility'
import { defaultState } from './defaultState'

import createSagaMiddleware from 'redux-saga'
import {initSagas} from './initSagas'

import { rootReducer } from './combineReducers'

export const configureStore = () => {
  
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  
  if (__DEV__ && performance) {
    middlewares.push(logger)
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)
  
  const enhancers = [middlewareEnhancer]
  
  if (__DEV__ && performance) {
    enhancers.push(monitorReducerEnhancer)
  }
  const composeEnhancers = compose(...enhancers)
  
  const store = createStore(rootReducer, defaultState, composeEnhancers)
  
  initSagas(sagaMiddleware)
  
  return store
}