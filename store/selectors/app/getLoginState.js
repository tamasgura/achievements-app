import {createSelector} from 'reselect/dist/reselect'

export const getLoginState = createSelector(
  state => state.currentState.loggedIn,
  loggedIn => loggedIn
)