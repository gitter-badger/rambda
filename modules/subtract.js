function subtract(a, b) {
  if (b === undefined) {
    return holder => subtract(a, holder)
  }

  return a - b
}

module.exports = subtract
