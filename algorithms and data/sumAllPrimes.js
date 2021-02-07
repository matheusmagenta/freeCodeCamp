/* Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */


function sumPrimes(num) {
  
    //create an array with all numbers between num and 0
    const arr = []
    while (num > 1){
      arr.push(num)
      num--
    }
    // console.log("arr: ", arr) 
  
    // identify prime numbers in array
    const arrPrimeNumbers = arr.filter(myFunctionIsPrime)
    
    function myFunctionIsPrime(element){
      for(let i = 2; i < element; i++){
        if(element % i == 0){
          // console.log("element excluded:", element)
          return false   
        }
        
      } 
      return element
    }
  
    //console.log(arrPrimeNumbers)
  
    // sum prime numbers in array filtered
    const sumPrimeNumbers = arrPrimeNumbers.reduce(myFunctionSum)
  
    function myFunctionSum (total, value) {
      return total + value;
    }
    console.log(sumPrimeNumbers)
  
    return sumPrimeNumbers;
  }
  
  sumPrimes(10);
  