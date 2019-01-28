import  * as reducers from './reducers'
import { fromJS } from 'immutable'
import {RESET_STORE} from './actions'

export const combineReducers = (config) =>{

  const initialState = fromJS(Object.keys(config).reduce((a, key) => {

    a[key] = config[key](undefined,[])
    return a
  },{}))

  return (state = initialState, action) => {
    
    // RESET STORE Reducer
    if (action.type === RESET_STORE) {
      return state.set('current', state.get('default'))
    }
    
    return Object.keys(config).reduce((state, key)=>{
      
      const reducer = config[key]
      const previousState = state.getIn(['current', key])
      const newValue = reducer(previousState, action)
 
      if (newValue === undefined) {
        throw new Error(`A reducer returned undefined when reducing key::"${key}"`)
      }
      
      return state.setIn(['current', key], newValue)
      
    }, state)
  }
}


export const rootReducer = combineReducers(reducers)