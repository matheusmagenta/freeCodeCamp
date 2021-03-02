/* JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */


function telephoneCheck(str) {
  
    const patt = /^[1\s]*(\(\d{3}\)|\d{3})[\s\-]*\d{3}[\s\-]*\d{4}$/
    
    // ^[1\s]* = matches range number 1 and/or whitespace at beginning, * = 0 matches or more 
    // (\(\d{3}\)|\d{3}) = matches 3 numbers between parentheses OR matches 3 numbers
    // [\s\-]* = matches range with whitespace character and hyphen, * = 0 matches or more
    // \d{3} = matches 3 numbers
    // [\s\-]* = matches range with whitespace character and hyphen, * = 0 matches or more  
    // \d{4}$ = matches 4 numbers, $ = at the end  
  
    // test regex pattern. it returns true or false
    const newStr = patt.test(str)
    
    console.log(newStr)
  
    return newStr;
  }
  telephoneCheck("(555)555-5555") // should return true
  telephoneCheck("2 757 622-7382") // should return false
  telephoneCheck("(275)76227382")  // should return false.
  telephoneCheck("27576227382")    // should return false
