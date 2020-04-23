var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray([dog], bird) {
  var array = [dog];
  array.unshift(bird)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [dog];
  array = [bird, ...array];
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function destructivelyAddElementToEndOfArray([dog], bird) {
  var array = [dog];
  array = [...array, bird];
  return array
}

function accessElementInArray() {
  var pets = [1, 2, 3, 4];
  return pets[3];
}
