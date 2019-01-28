import {fromJS} from 'immutable'

import {
  UPDATED
} from './actions'

const initialState = {
  currentUser: '',
  loggedIn: false,
  userId: '',
  userData: {},
  userPerfStat: [
    {
      'userId': '',
      'userName': '',
      'companyId': '',
      'listingCount': 0,
      'listingSumDuration': 0,
      'listingAvgDuration': 0,
      'listingSumPrice': 0,
      'listingAvgPrice': 0,
      'marketplace': 0,
      'site': ''
    }
  ],
  userPerfStatOptions: {
    dateFrom: '2018-01-01T22:00:00.000Z',
    dateTo:'2019-01-01T05:22:05.361Z',
    site:'UK',
    userList:[]
  },
  dailySoldItemStat: [],
  wallMessage: [],
  wallMessageOptions: {
    pageSize: 10,
    page: 0,
  },
  listingStat: {
    totalItems: null,
    activeListings: null,
    soldItems: null,
    unsoldItems: null,
    scheduledItems: null,
    unsuccessfulListings: null
  },
  listingStatOptions: {
    dateFrom: '2018-09-23T22:00:00.000Z',
    dateTo: '2018-09-26T05:22:05.361Z',
    userList: []
  },
  inventoryStatistics: {},
  orderStat: {},
  orderStatOptions: {
    dateFrom: '2018-09-23T22:00:00.000Z',
    dateTo: '2018-09-26T05:22:05.361Z',
    userList: [],
  },
  notifications: {},
  inventoryList: [],
  sessionToken: '',
  gridListConfig: {
    aggregate: [],
    aggregationOn: false,
    filter: [/*{prop: 'name', operation: 'contains', value: 'apple'}*/],
    pageNumber: 0,
    pageSize: 10,
    sort: []
  },
  productDetails: {},
  updateProductStatus: UPDATED,
  totalElements: 0,
  pageNumber: 0,
  pageSize: 10,
}

export const defaultState = fromJS({
  default: {
    ...initialState
  },
  current: {
    ...initialState,
    gridListConfig: {
      ...initialState.gridListConfig,
    }
  }
})