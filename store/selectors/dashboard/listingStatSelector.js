import {createSelector} from 'reselect/dist/reselect'

export const listingStatSelector = createSelector(
  state => state.getIn(['current', 'listingStat']),
  listingStat => listingStat.toJS()
)