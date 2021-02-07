/* Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

    let pattSpace = /\s/g
    let pattUpperCase = /\B[A-Z]/g
    let pattNonWordOrDigit = /[^A-Z]/gi
  
    str = str.replace(pattNonWordOrDigit, "-") 
    
  
    if(pattSpace.test(str)){
      str = str.replace(pattSpace, "-")  
    } else if (pattUpperCase.test(str)){
      str = str.replace(pattUpperCase, function (x) {
      return "-".concat(x);
    })
    }
    str = str.toLowerCase()
    console.log(str)
    return str
  }
  
  spinalCase("TheAndyGriffith_Show")
  spinalCase('This Is Spinal Tap');