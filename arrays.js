var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray([dog], bird) {
  var array = [dog];
  array.unshift(bird)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray() {
  var pets = [1, 2, 3, 4];
  return pets[3];
}
