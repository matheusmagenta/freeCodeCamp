/* Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */



function steamrollArray(arr) {
 
    function flatArr (arr) {
        return arr.reduce((acc, cur) => 
        acc.concat(Array.isArray(cur) ? flatArr (cur) : cur), []);
    };
  
    const arrFlattened = flatArr(arr);
    console.log("arrFlattened: ", arrFlattened); 
  
    return arrFlattened
  
  }
  
  //steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[[1]], [2], [3, [[4]]]]);