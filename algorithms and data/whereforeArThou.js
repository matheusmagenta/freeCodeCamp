/* 
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array 
(the first argument), because it contains the name and its value, that was passed on as the second argument. */






function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
    // extract keys from second argument
    var srcKeys = Object.keys(source);
    console.log(srcKeys)
  
    // check if second argument is contained in first argument
    return collection.filter(function(obj){
      return srcKeys
      .map(function(key) {
        // check if pair key-value exist in object filtered
        // return boolean value
        return obj.hasOwnProperty(key) && obj[key] === source[key]
      })
      // reduce all mapped boolean values to a single boolean
      .reduce(function(a,b){
        return a && b
      })
      
    }) 
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  