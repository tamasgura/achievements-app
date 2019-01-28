import {UPDATE_LOCAL_INVENTORY, UPDATE_LOCAL_INVENTORY_ITEM} from '../../actions/actionTypes'

let initialState = {
  inventory: {}
}

const _inventoryListReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case UPDATE_LOCAL_INVENTORY:
      
      // console.log(action)

      return {
        ...state,
        inventory: action.newInventory
      }
      /*
      const dummyData1 = {
        id: 'id_agsgsdfg',
        companyId: 'company_2333',
        name: 'name_sdafj',
        sku: 'sku_12837',
        additionalData: 'additionalData_dsjfksj',
        description: 'Donuts. Is there anything they can\'t do? Dear Mr. President, There are too many states nowadays. Please, eliminate three. P.S. I am not a crackpot. How could you?! Haven\'t you learned anything from that guy who gives those sermons at church? Captain Whatshisname? We live in a society of laws! Why do you think I took you to all those Police Academy movies? For fun? Well, I didn\'t hear anybody laughing, did you? Except at that guy who made sound effects. Makes sound effects and laughs. Where was I? Oh yeah! Stay out of my booze.',
        quantity: 2,
        availableQuantity: 3,
        createdById: 'dsfjkJohn',
        createdByName: 'John Doe',
        createdOn: '01.01.2001',
        modifiedById: 'modId0000',
        modifiedByName: 'modByName_asdasd',
        modifiedOn: '05.05.2013',
        itemStockDTOList: null,
        imageList: [
          {
            id: 'asgsdjk',
            externalImagePath: 'https://images.unsplash.com/photo-1516111143745-fbfc2ebd6352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=741f5c9f322726bb28d328a56869b36f&auto=format&fit=crop&w=774&q=80',
            externalImageThumbnailPath: 'https://images.unsplash.com/photo-1516111143745-fbfc2ebd6352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=741f5c9f322726bb28d328a56869b36f&auto=format&fit=crop&w=774&q=80',
            originalName: 'kep2',
            keepForever: false,
          }
        ],
        belongToListing: false,
      }
      const dummyData2 = {
        id: 'id_dffdfdf',
        companyId: 'company_2134501112',
        name: 'name_dsfgfhrrr3',
        sku: 'sku_55555',
        additionalData: 'additionalData_dfffffffffffffffffffffj',
        description: 'Bacon ipsum dolor amet cupim buffalo beef short loin, cow landjaeger sirloin. Pork belly sausage frankfurter kielbasa chicken alcatra. Buffalo sausage rump leberkas, pastrami flank jowl t-bone alcatra spare ribs tri-tip. Brisket tail biltong ball tip pancetta pork belly. Cow prosciutto kielbasa, bacon ribeye beef porchetta chicken shoulder strip steak brisket.',
        quantity: 6,
        availableQuantity: 5,
        createdById: 'dsfjkJeff',
        createdByName: 'Jeff Greath',
        createdOn: '02.05.2007',
        modifiedById: 'modId0df333',
        modifiedByName: 'modByName_rttrtttt',
        modifiedOn: '30.08.2018',
        itemStockDTOList: null,
        imageList: [
          {
            id: 'sdfsfff',
            externalImagePath: 'https://images.unsplash.com/photo-1494666144702-70d86c6cf884?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d96ec2ddb320cc97c2da3e2bf80f8d77&auto=format&fit=crop&w=1050&q=80',
            externalImageThumbnailPath: 'https://images.unsplash.com/photo-1494666144702-70d86c6cf884?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d96ec2ddb320cc97c2da3e2bf80f8d77&auto=format&fit=crop&w=1050&q=80',
            originalName: 'kep3',
            keepForever: false,
          }
        ],
        belongToListing: false,
      }
      */
      //let actionData = action.inventoryChunk.data
      //actionData.push(dummyData1)
      //actionData.push(dummyData2)
      //newArray.splice(action.pageNumber, 0, actionData)
      
      /*
      console.log('newarr defined: ')
      console.log(newArray)
      
      console.group()
      console.log('===  INVENTORY LIST REDUCER  ===')
      console.log(newArray[0][0])
      console.log('isarray')
      console.log(Array.isArray(newArray[0][0]))
      console.log('typeof')
      console.log(typeof newArray[0][0])
      console.log('object keys')
      console.log(Object.keys(newArray[0][0]))
      console.groupEnd()
      */
      
    case UPDATE_LOCAL_INVENTORY_ITEM: {

      // TODO ? Find() is not efficient in parsing sparse arrays !!
      // TODO Fix local inventory. Remove chunks and store only 1 inv!!!
      
      let foundIndex = undefined
      state.inventory.data.find((element, index) => {
        foundIndex = index
        return element.id === action.item.id
      })
      
      if (foundIndex === undefined) {
        // console.log('foundIndex undefined')
        return state
      }
      
      let updatedInventory = state.inventory
      updatedInventory.data.splice(foundIndex, 1, action.item)
      
      // console.log('soon to be updatedInventory:')
      // console.log(updatedInventory)
      
      // console.log('updated:')
      // console.log(updatedInventory)
      return {
        ...state,
        inventory: updatedInventory,
      }
    }
    default:
      return state
  }
}

export default _inventoryListReducer
/*
parsedResponse = {
  totalElements: 0,
  pageSize: 0,
  pageNumber: 0,
  data: [
    {
      id: '',
      companyId: '',
      name: '',
      sku: '',
      additionalData: '',
      description: '',
      quantity: 0,
      availableQuantity: 0,
      createdById: '',
      createdByName: '',
      createdOn: '',
      modifiedById: '',
      modifiedByName: '',
      modifiedOn: '',
      itemStockDTOList: null,
      imageList: [
        {
          id: '',
          externalImagePath: '',
          externalImageThumbnailPath: '',
          originalName: '',
          keepForever: false,
        }
      ],
      belongToListing: false,
    }
  ],
  orderIdentifier: null,
  aggregationExtraData: null
}
*/