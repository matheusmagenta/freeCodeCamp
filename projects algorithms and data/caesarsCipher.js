/* JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */



function rot13(str) {

    var arr = str.split("")
    // console.log(arr)
  
    var pattAM = /[A-M]/
    var pattNZ = /[N-Z]/
  
    var newArr = []
    // console.log(arrTest.charCodeAt(2))
  
    for(let i = 0; i < arr.length; i++){
      if(pattAM.test(arr[i])){
        console.log("AM: ", arr[i])
        console.log("charCode: ", str.charCodeAt([i]))
        let strCharCode = str.charCodeAt([i])
        newArr.push(String.fromCharCode(strCharCode + 13))
        console.log(newArr)
      }
      else if (pattNZ.test(arr[i])){
        console.log("NZ: ", arr[i])
        console.log("charCode: ", str.charCodeAt([i]))
        let strCharCode = str.charCodeAt([i])
        newArr.push(String.fromCharCode(strCharCode - 13))
        console.log(newArr)
      } else {
        newArr.push((arr[i]))
      }
      
    }
  
    str = newArr.join("")
    console.log("str: ", str)
  
    return str;
  }
  
  rot13("SERR PBQR PNZC");