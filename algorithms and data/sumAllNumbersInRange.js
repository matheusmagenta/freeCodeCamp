/* Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first. */


function sumAll(arr) {
    // Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
  
    let firstNumber = arr[0]
    console.log("firstNumber: ", firstNumber)
    let secondNumber = arr[1]
    console.log("secondNumber: ", secondNumber)
  
    let sumTwoNumbers = 0;
    
    if(firstNumber < secondNumber){
      for(let i = firstNumber; i <= secondNumber; i++){
        console.log("i: ", i)
        sumTwoNumbers += i
        console.log("sumTwoNumbers: ", sumTwoNumbers)
      }
    return sumTwoNumbers;  
    } else if (firstNumber > secondNumber) {
      for(let i = secondNumber; i <= firstNumber; i++){
        console.log("i: ", i)
        sumTwoNumbers += i
        console.log("sumTwoNumbers: ", sumTwoNumbers)
      }
      return sumTwoNumbers 
    }
    
  }
  
  sumAll([1, 4]);