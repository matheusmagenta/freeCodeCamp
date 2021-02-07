/* 
Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */


function getIndexToIns(arr, num) {
  
    //1. sort the array
    console.log('array before sorting: ', arr)
    let arrSorted = arr.sort((a,b) => a - b)
    console.log('array after sorting: ', arrSorted)
    //2. iterate array comparing the second argument with each element 
  
    for(let i = 0; i <= arrSorted.length; i++){
      console.log('arrSorted.length: ', arrSorted.length)
      let elementArrSorted = arrSorted[i] 
      console.log(arrSorted)
      // return the lowest index at which the second argument should be inserted
      // if second argument is less or equal to element, return element index
      if (num <= elementArrSorted) {
        console.log('num: ', num)
        console.log('elementArrSorted: ', elementArrSorted)
        let indexNewElement = i
        console.log(indexNewElement)
        return indexNewElement
      }
      // if second argument is higher than all elements, return length + 1 
      else if(num > arrSorted[arrSorted.length - 1]){
        console.log('num: ', num)
        console.log('elementArrSorted: ', elementArrSorted)
        console.log('index: ', i)
        let indexNewElement = arrSorted.length
        console.log('new index: ', indexNewElement)
        return indexNewElement
      }
      // if first element (array) is empty
      else if (arrSorted.length == 0) {
        return 0
      }  
    }
    
    return indexNewElement;
  }
  
  getIndexToIns([40, 60], 50)