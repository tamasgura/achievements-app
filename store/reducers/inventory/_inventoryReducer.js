import { combineReducers } from 'redux'
import _inventoryConfigReducer from './_inventoryConfigReducer'
import _inventoryListReducer from './_inventoryListReducer'

export default inventoryReducer = combineReducers({
  inventoryList: _inventoryListReducer,
  inventoryConfig: _inventoryConfigReducer,
})