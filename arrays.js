var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray([dog], bird) {
  var array = [dog];
  array.unshift(bird);
  return array
}

function destructivelyAddElementToBeginningOfArray([dog], bird) {
  var array = [dog];
  array = [bird, ...array];
  return array
}

function addElementToEndOfArray([dog], bird) {
  var array = [dog];
  array.push(bird);
  return array
}

function destructivelyAddElementToEndOfArray([dog], bird) {
  var array = [dog];
  array = [...array, bird];
  return array
}

function accessElementInArray([dog], index) {
  var pets = ["dog", "cat", "bunny"];
  console.log(pets[0]);
}
