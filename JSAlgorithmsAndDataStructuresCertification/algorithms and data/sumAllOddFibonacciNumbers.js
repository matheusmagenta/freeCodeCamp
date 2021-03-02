/* Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */




function sumFibs(num) {
  
    // fibonnaci numbers of argument passed
    // console.log("num: ", num)
    let arrFibonacci = [1, 1]
    var sum
    for(let i = 0; i < num; i++){
      // sum two in two elements 
      sum = arrFibonacci[i] + arrFibonacci[i + 1]
      arrFibonacci.push(sum)
      //console.log(sum)
    }
    //console.log("arrFibonacci: ", arrFibonacci)
    
    // filter fibonacci ODD numbers less than num
    const filterOdds = (element) => {
      if(element % 2 != 0 && element <= num){
        return element
      }
    }
    let sumOdds = 0;
    let arrFibonacciOdd = arrFibonacci.filter(filterOdds)
    // console.log("arrFibonacciOdd: ", arrFibonacciOdd)
  
    for (let i = 0; i < arrFibonacciOdd.length; i++) {
      sumOdds += arrFibonacciOdd[i];
    }
    // console.log("sumOdds: ", sumOdds);
    return sumOdds;
  }
  
  sumFibs(10);
  //sumFibs(4);