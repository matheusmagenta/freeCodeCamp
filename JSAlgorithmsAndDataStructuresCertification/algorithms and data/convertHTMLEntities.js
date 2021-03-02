/* Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */


function convertHTML(str) {
    
    if(str.match("&") != null){
      str = str.replace(/&/g, "&amp;")
      console.log(str)
    } if(str.match("<") != null){
      str = str.replace(/</g, "&lt;")
      console.log(str)
    } if(str.match(">") != null){
      str = str.replace(/>/g, "&gt;")
      console.log(str)
    } if(str.match('"') != null){
      str = str.replace(/"/g, "&quot;")
      console.log(str)
    } if(str.match("'") != null){
      str = str.replace(/'/g, "&apos;")
      console.log(str)
    } 
    return str;
  
  }
  
  // convertHTML("Dolce & Gabbana");
  convertHTML("<>")