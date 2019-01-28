import {createSelector} from 'reselect/dist/reselect'

export const listingStatOptionsSelector = createSelector(
  state => state.getIn(['current', 'listingStatOptions']),
  listingStatOptions => listingStatOptions.toJS()
)