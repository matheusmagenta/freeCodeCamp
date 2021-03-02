/* Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */


function fearNotLetter(str) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
    for(let i = 1, j = alphabet.indexOf(str[0]); i < str.length; i++, j++){
      if(str[i] == alphabet[j + 1]){
        console.log("yes: ", str[i])
      } else {
        console.log("no: ", alphabet[j + 1])
        return alphabet[j + 1]
      }
    }
  
  }
  fearNotLetter("abce");
  