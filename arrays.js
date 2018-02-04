var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element);
}

function addElementToEndOfArray(array,element){
  var newArray = [...array,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element);
}

function destructivelyRemvoeElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.lenth - 1);
  return newArray
}

