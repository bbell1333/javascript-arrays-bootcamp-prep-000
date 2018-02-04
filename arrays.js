var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var newArray = [...array,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray
}

