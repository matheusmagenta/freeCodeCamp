/* Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
    var newArr = [];
  
    for(let element of arr2){
      //console.log(arr2[element])
      if(!(arr1.includes(element))){
        newArr.push(element)  
        console.log(newArr)
      }
    }
    for(let element of arr1){
      //console.log(arr1[element])
      if(!(arr2.includes(element))){
        newArr.push(element)
        console.log(newArr)  
      }  
    }
    return newArr
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);