export const logger = store => next => action => {
  console.group(action.type || 'action has no type')
  console.info('dispatching', action)
  let result = next(action)
  console.info('next state', store.getState().toJS())
  console.groupEnd()
  return result
}