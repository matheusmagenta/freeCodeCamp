/* JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes. */



function palindrome(str) {
  
    // sanitize the string
    // lower case and remove all non-alphanumeric characters
    const newStr = str.toLowerCase().split("").filter(myFunction).join("")
    console.log(newStr)
  
    function myFunction (element) {
      const patt = /[a-z0-9]/g;
      if(element.match(patt)){
        return element
      }
    }
  
    // check if the first and last letters are the same
    console.log("newStr: ", newStr)
    console.log("newStr[firstLetter]: ", newStr[0])
    console.log("newStr[lastLetter]: ", newStr[newStr.length - 1])
    
    // create the loop to check the palindrome
    const half = Math.round(newStr.length/2)
    let result = true;
    for(let i = 0, j = newStr.length - 1; i < half, j >= half; i++, j--){
      if (newStr[i] == newStr[j]){
        console.log(`${newStr[i]} and ${newStr[j]} are equal`)
      } else {
        console.log(`${newStr[i]} and ${newStr[j]} are not equal`)
        result = false
        return result
      } 
    }
    return result;
  }
  
  
  palindrome("A man, a plan, a canal. Panama")