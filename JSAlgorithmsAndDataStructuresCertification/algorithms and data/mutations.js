/* Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. */

function mutation(arr) {
    let firstElement = arr[0].toLowerCase()  
    let secondElement = arr[1].toLowerCase()  
  
    //split secondElement
    let arraySecondElement = secondElement.split('')
    console.log(arraySecondElement)
    
    for(let letter of arraySecondElement){
      console.log(firstElement)
      console.log(letter)
      if((firstElement.includes(letter) == false)){
        return false 
      } else {
        continue
      }
    } 
    return true
    }
  
  
  mutation(["hello", "hey"]);
  