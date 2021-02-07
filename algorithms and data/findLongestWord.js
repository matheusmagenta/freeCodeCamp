/* Basic Algorithm Scripting: Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWordLength(str) {

    let words = str.split(" ")
    // console.log(words)
  
    let longestWord = ''
  
    for (let word of words) {
      if (word.length > longestWord.length){
        longestWord = word;   
        console.log(longestWord)
      } else {
        continue;
      }
    }
  
    return longestWord.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");