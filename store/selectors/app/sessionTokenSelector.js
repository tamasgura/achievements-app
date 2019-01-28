import { createSelector } from 'reselect/dist/reselect'

export const sessionTokenSelector = createSelector(
  state => state.getIn(['current', 'sessionToken']),
  sessionToken => sessionToken
)