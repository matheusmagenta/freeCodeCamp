/* Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */


function chunkArrayInGroups(arr, size) {
  
  
    let newArr = []
    let arrAdded = []
    for(let i = 0; i < arr.length ; i = i + size){
      // slice the array
      arrAdded = arr.slice(i, size + i)
      console.log("arrAdded: ", arrAdded)
      
      // add the slice to a new array
      newArr.push(arrAdded)
      console.log("newArr: ", newArr)
    }
    // return the new array
    return newArr
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)