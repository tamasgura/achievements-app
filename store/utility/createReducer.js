import { defaultState } from '../defaultState'
import { RESET_STORE } from '../actions'

export const createReducer = (initialState, handlers)=> {
  
  return function reducer(state = initialState, action) {
    
    if (handlers.hasOwnProperty(action.type)) {

      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}