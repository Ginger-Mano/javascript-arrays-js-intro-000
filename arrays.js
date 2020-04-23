var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray([dog], bird) {
  var array = [dog];
  array.unshift(bird);
  return array
}

function destructivelyAddElementToBeginningOfArray([dog], bird) {
  var array = [dog]
  [bird, ...array]
  return array
}
