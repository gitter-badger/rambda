function update(index, newValue, arr){
  if (newValue === undefined) {
    return (newValueHolder, arrHolder) => update(index, newValueHolder, arrHolder)
  } else if (arr === undefined) {
    return holder => update(index, newValue, holder)
  }
  const arrClone = arr.concat()

  return arrClone.fill(newValue, index, index + 1)
}

module.exports = update
