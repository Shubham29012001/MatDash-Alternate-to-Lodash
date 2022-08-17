/**
 * The pick function will accept an object parameter, returns a new object of choosen keys
 * @since 0.1.0
 * @category Object
 * @param {Object} takes object parameter
 * @param {Number} [values] values to be exclude
 * @returns {Object} Returns a new object with choosen keys
 * @example
 *
 * pick({'a':1, 'b':2, 'c':3}, 'a','c')
 * // => {'a':1, 'c':3}
 */

import { makechain } from "./makechain.js";

function pick(Obj, ...keys) {
  if (typeof Obj === "object") {
    let newObject = {};
    for (const arrayKeys of keys) {
      Obj.hasOwnProperty(arrayKeys)
        ? (newObject[arrayKeys] = Obj[arrayKeys])
        : 0;
    }
    return newObject;
  } else {
    console.error("Needs object arguments");
  }
}

makechain.prototype.pick = function (...keys) {
  this.value = _.pick(this.value, ...keys);
  return this;
};

export default pick;
