const type = require("./type")

function defaultTo(defaultArgument, inputArgument){
  if(arguments.length === 1){
    return inputArgumentHolder => defaultTo(defaultArgument,inputArgumentHolder)
  }
  return inputArgument === undefined || !(type(inputArgument)===type(defaultArgument)) ?
    defaultArgument :
    inputArgument
}

module.exports = defaultTo
