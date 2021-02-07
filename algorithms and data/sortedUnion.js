/* Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

//version 1
function uniteUnique(arr) {
    console.log(...arguments)
  
    // concat arguments into new array
    let newArr = [].concat(...arguments)
    console.log(newArr)
  
    // set method to store unique values
    let arrUnique = new Set(newArr)
  
    // transform into array
    let result = [...arrUnique]
    console.log(arrUnique)
  
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  

//version 2
function uniteUnique(arr) {
    console.log(...arguments)
  
    let newArr = [].concat(...arguments)
    console.log(newArr)
    let arrUnique = [...new Set(newArr)]
    console.log(arrUnique)
  
    return arrUnique;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// version 3
function uniteUnique(arr) {
    return [...new Set([].concat(...arguments))];
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);