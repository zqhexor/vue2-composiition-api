import { isEmpty } from 'lodash';

/**
 * 全局store
 * @type {Array}
 */
const stores = []

/**
 *
 * @param id 模块明
 * @param store 定义的内容
 * @returns {function(): *}
 */
export function defineStore(id, store) {
  stores.push({id})
  return () => {
    const index = stores.findIndex((store) => store.id === id )
    if(!stores[index].storeInstance) {
      stores[index].storeInstance = store()
    }
    console.log(stores)
    return stores[index].storeInstance
  }
}

/**
 * 用于Options API 取值setter和getter的值
 * @param store 引用的store
 * @param states 要取的state或者getter， 支持array或者object
 *     不传： 全部取出来
 *     array：指定key值，
 *     object: {'old':'new'} 支持改名
 */
export function mapState(store, states) {
  if (isEmpty(states)) {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (isRef(v)) {
        result[k] = () => {
          return v.value
        }
      }
    }
    return result
  } else if (Array.isArray(states)) {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (isRef(v) && states.includes(k)) {
        result[k] = () => {
          return v.value
        }
      }
    }
    return result
  } else if (Object.prototype.toString.call(states) === '[object Object]') {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (isRef(v) && Object.keys(states).includes(k)) {
        result[states[k]] = () => {
          return v.value
        }
      }
    }
    return result
  }
}

/**
 * 用于Options API 取actions值
 * @param store 引用的store
 * @param actions 要取的actions， 支持array或者object
 *     不传： 全部取出来
 *     array：指定key值，
 *     object: {'old':'new'} 支持改名
 */
export function mapActions(store, actions) {
  if (isEmpty(actions)) {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (isRef(v)) {
        result[k] = () => {
          return v.value
        }
      }
    }
    return result
  }else if (Array.isArray(actions)) {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (!isRef(v) && actions.includes(k)) {
        result[k] = v
      }
    }
    return result
  }else if (Object.prototype.toString.call(actions) === '[object Object]') {
    const result = {}
    for (let [k, v] of Object.entries(store)) {
      if (!isRef(v) && Object.keys(actions).includes(k)) {
        result[actions[k]] = v
      }
    }
    return result
  }
}
