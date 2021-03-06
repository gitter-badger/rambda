function path(pathArr, obj) {
  if (obj === undefined) {
    return holder => path(pathArr, holder)
  }

  let holder = obj
  let counter = 0
  if(typeof pathArr === "string"){
    pathArr = pathArr.split(".")
  }
  while (counter < pathArr.length) {
    if (holder === null) {
      return undefined
    }
    holder = holder[ pathArr[ counter ] ]
    counter++
  }

  return holder
}

module.exports = path
