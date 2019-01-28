import {createSelector} from 'reselect/dist/reselect'

export const userDataSelector = createSelector(
  state => state.getIn(['current', 'userData']),
  userData => userData.toJS()
)