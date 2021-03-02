/* Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */


function repeatStringNumTimes(str, num) {
  
    console.log("str: ", str)
    console.log("num: ", num)
  
    if (num > 0) {
      let newStr = ''
      while(num > 0){
        newStr = newStr.concat(str)
        console.log(num)
        console.log(newStr)
        num--
      }
     str = newStr 
  
    } else if (num <= 0) {
      str = '';
    }
    return str;
  }
  
  repeatStringNumTimes("abc", 3);