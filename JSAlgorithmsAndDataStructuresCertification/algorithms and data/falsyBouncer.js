/* Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
 */
// version 1


function bouncer(arr) {
    let arrNoFalsyValues = []  
    for (var i of arr){
      if (i){
        arrNoFalsyValues.push(i)
      } else {
        console.log("oi")
      }
  
    }
    
    return arrNoFalsyValues
    
  }
  
  bouncer([7, "ate", "", false, 9]);
  