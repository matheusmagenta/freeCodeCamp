/* Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */


function destroyer(arr) {

    let args = [...arguments].slice(1)
    console.log(args)
    let newArr = arr.filter(myFunction)
  
    function myFunction(value){
        return !args.includes(value)    
    }
  
    console.log(newArr)
    return newArr
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);