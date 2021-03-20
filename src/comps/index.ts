import { handleObject } from './handleObject'
import { handleString } from './handleString'
import { handleNumber } from './handleNumber'

export const inspectRecursively = (node) => {
  switch (typeof node) {
    case 'object':
      handleObject(node)
      break
    case 'string':
      handleString(node)
      break
    case 'number':
      handleNumber(node)
      break
    default:
      break
  }
}
