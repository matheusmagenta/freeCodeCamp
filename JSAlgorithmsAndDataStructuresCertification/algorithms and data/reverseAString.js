/* Basic Algorithm Scripting: Reverse a StringPassed
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

// version 1
function reverseString(str) {
    return str.split("")
            .reverse()
            .join("");
  }  
console.log(reverseString("hello"));
