/* 
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object. */



var Person = function(firstAndLast) {
    // Only change code below this line
    
    // Complete the method below and implement the others similarly
    
    var fullName = firstAndLast
    console.log(fullName)
  
    // getFirstName()
      this.getFirstName = function(){
        return fullName.split(" ")[0];
      }
  
    // getLastName()
      this.getLastName = function(){
        return fullName.split(" ")[1];
      }
    
    // getFullName()
       this.getFullName = function(){
        return fullName;
      }
  
    // setFirstName(first)
      this.setFirstName = function(name){
        fullName = name + " " + fullName.split(" ")[1] 
      }  
    // setLastName(last)
      this.setLastName = function(name){
        fullName = fullName.split(" ")[0] + " " + name 
      }   
    // setFullName(firstAndLast)
      this.setFullName = function (name) {
        fullName = name
      }
   
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();