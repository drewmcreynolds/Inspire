import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/BgImage').BgImage} */
  bgimg = null

  /** @type {import('./Models/List').List[]} */

   lists = []

  /** @type {import('./Models/Quote').Quote[]} */

  quotes = []
/** @type {import('./Models/Weather').Weather} */
  weather = null

  
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
