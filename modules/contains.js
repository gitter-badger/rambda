const equals = require("./equals")

function contains(val, arr) {
  if (arr === undefined) {
    return holder => contains(val, holder)
  }

  let index = -1
  let flag = false
  while (++index < arr.length && !flag) {
    if (equals(arr[ index ], val)) {
      flag = true
    }
  }

  return flag
}

module.exports = contains
