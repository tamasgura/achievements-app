import { makeActionCreator } from '../../utility/makeActionCreator'
import { defaultState } from '../../defaultState'

export const RESET_STORE = 'RESET_STORE'
export const resetStore = () => {
  return {
    type: RESET_STORE
  }
}