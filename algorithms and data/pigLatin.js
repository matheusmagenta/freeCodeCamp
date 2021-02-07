/* 
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */


function translatePigLatin(str) {
  
  console.log('initialString: ', str)

  // If a word begins with a vowel, just add "way" at the end
  let pattVowel = /\b[aeiou]/g
  let pattConsonant = /\b[^aeiou+]{1,}/g
  let pattOnlyVowel = /[aeiou]/g
  
  if (pattOnlyVowel.test(str) == false) {
    console.log("oi")
    return str + "ay"
  } else if (pattVowel.test(str)){
    let newStrVowel = str + "way"
    console.log('newStrVowel: ', newStrVowel)
    return newStrVowel

  } else {
     // pattern begins with a consonant  
    let beginConsonant = str.match(pattConsonant).toString()
    console.log("beginConsonant: ", beginConsonant)

    // pattern remainder string without consonant begining
    let pattRemainder = /[aeiou](.*)/gi
    let resRemainder = str.match(pattRemainder).toString()
    console.log("resRemainder: ", resRemainder)

    // concat new string
    let newStrConsonant = resRemainder + beginConsonant + "ay" 
    console.log('newStrConsonant: ', newStrConsonant)
    return newStrConsonant;
  }
  
  
}

translatePigLatin("consnnt");