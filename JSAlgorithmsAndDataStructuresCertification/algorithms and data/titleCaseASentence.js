/* Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */



// version 1
function titleCase(str) {
  
    // lower case the whole string and split into an array
    let arrLower = str.toLowerCase().split('')
    
    // capitalize the first letter
    arrLower[0] = arrLower[0].toUpperCase()
    
    // loop through the array and if there is a space change the next letter
    for(let i = 0; i < arrLower.length; i++){
      if (arrLower[i] == " "){
        arrLower[i + 1] = arrLower[i + 1].toUpperCase()      
      } 
    }
  
    // transform the modified array into a string
    str = arrLower.join('')
  
    return str;
  }
  
  titleCase("I'm a little tea pot");
  