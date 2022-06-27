/**
 * 检测数据类型
 */
const getDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const dataTypeInfo = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return dataTypeInfo[dataType]
}
/**
 * 深拷贝
 */
const deepClone = (obj) => {
  const oldObj = getDataType(obj)
  let newObj = null
  if (oldObj === 'array') {
    newObj = []
    for (let i = 0; i < obj.length; i++) {
      newObj.push(deepClone(obj[i]))
    }
  } else if (oldObj === 'object') {
    newObj = {}
    for (const key in obj) {
      newObj[key] = deepClone(obj[key])
    }
  } else {
    return obj
  }
  return newObj
}
export default {
  deepClone
}
