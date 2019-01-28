import {strings} from '../../../features/i18n/i18n'

const stringRoute = 'MainScreen.Inventory.InventoryList.listControlHelperNames'

const filterProps = {
  string: [
    {
      displayName: 'contains',
      operation: 'contains'
    },
    {
      displayName: 'starts with',
      operation: 'startswith'
    },
    {
      displayName: 'equals',
      operation: 'equals'
    },
    {
      displayName: 'ends with',
      operation: 'endswith'
    },
  ],
  number: [
    {
      displayName: 'less than',
      operation: 'less',
    },
    {// TODO opertaion/:   number equal && string equals ??
      displayName: 'equals',
      operation: 'equal',
    },
    {
      displayName: 'greater than',
      operation: 'greater',
    },
  ],
  dateString: [
    {
      displayName: 'after',
      operation: 'greater',
    },
    {
      displayName: 'before',
      operation: 'less',
    },
    {
      displayName: 'on day',
      operation: 'equal',
    },
  ]
}

export const listControlRules = {
  name: {
    displayName: strings(stringRoute + '.props.name'),
    prop: 'name',
    type: 'string',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.name.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.name.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.string
  },
  sku: {
    type: 'string',
    displayName: strings(stringRoute + '.props.sku'),
    prop: 'sku',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.sku.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.sku.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.string
  },
  quantity: {
    type: 'number',
    displayName: strings(stringRoute + '.props.quantity'),
    prop: 'quantity',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.quantity.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.quantity.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.number
  },
  date: {
    type: 'dateString',
    displayName: strings(stringRoute + '.props.created_on'),
    prop: 'created_on',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.created_on.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.created_on.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.dateString
  },
  createdBy: {
    type: 'string',
    displayName: strings(stringRoute + '.props.created_by'),
    prop: 'created_by',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.created_by.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.created_by.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.string
  },
  availableQuantity: {
    type: 'number',
    displayName: strings(stringRoute + '.props.available_quantity'),
    prop: 'available_quantity',
    sortDirections: [
      {
        displayName: strings(stringRoute + '.sort.available_quantity.asc'),
        direction: 'asc'
      },
      {
        displayName: strings(stringRoute + '.sort.available_quantity.desc'),
        direction: 'desc'
      }
    ],
    filterProps: filterProps.number
  }
}

export const displayNames = (type, prop, mode) => {
  
  const rule = getRuleByProp(prop)
  
  const displayName = rule.displayName
  let displayMode
  
  if (type === 'sort') {
    const dir = rule.sortDirections.find(d => d.direction === mode)
    displayMode = dir.displayName
  } else if (type === 'filter') {
    const op = rule.filterProps.find(o => o.operation === mode)
    displayMode = op.displayName
  }
  
  return {prop: displayName, mode: displayMode}
}

export const getRuleByProp = prop => {
  const key = Object.keys(listControlRules).find(k => {
    return listControlRules[k].prop === prop
  })
  return listControlRules[key]
}

export const getSortOptions = () => {
  // For each rule, create an asc and a desc sort pick option
  
  let combinedArray = []
  
  Object.keys(listControlRules).forEach(key => {
    
    let rule = listControlRules[key]
    rule.sortDirections.forEach(dir => {
      
      let el = {
        prop: rule.prop,
        dir: dir.direction,
        methodName: rule.displayName,
        dirName: dir.displayName
      }
      combinedArray.push(el)
    })
  })
  return combinedArray
}