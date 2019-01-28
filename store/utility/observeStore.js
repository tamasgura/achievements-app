const observeStore = store => next => action => {
  let result = next(action)
  /*
  console.group('inside OBSERVE STORE')
  console.log(action.type || 'action has no type')
  console.info('dispatching', action)
  console.log('next state', store.getState())
  console.log('store')
  console.log(store)
  console.log('next:')
  console.log(next)
  console.log('action')
  console.log(action)
  console.groupEnd()
*/
  return result
}

export default observeStore