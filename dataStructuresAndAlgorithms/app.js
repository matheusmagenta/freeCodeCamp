// STACKS
/* 
- last in, first out
- functions: push, pop, peek, length (size) // present in Array 
- e.g.: back button browser, first book on the stack will be the last book on the stack 
*/

var letters = [];

var word = "racecar";

var reverseWord = "";

// put letters of word into the stack
for (letter of word) {
  console.log(letter);
  letters.push(letter);
  console.log(letters);
}

//pop off the stack in reverse order
for (letter of word) {
  console.log(letters);
  reverseWord += letters.pop();
  console.log(reverseWord);
}

if (reverseWord === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome`);
}
