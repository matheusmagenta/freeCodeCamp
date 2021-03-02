
//import words from 'an-array-of-english-words';

const countOcorrences = arr => {
    // acc -> ocurrences so far
    // str -> current element
    // ,{} -> starting value is a empty object    
    return arr.reduce((acc, str) => ({
        //...acc -> the spread operator will put all the str and counts that we have so far into to the object that we are returning
        // [str]: acc[str]
        ...acc,
        [str]: acc[str] ? acc[str] + 1 : 1,
    }), {});
}

const hasSameLetterCount = (word1, word2) => {
    const word1Count = countOcorrences(word1.split(''))
    const word2Count = countOcorrences(word2.split(''))
    
    return Object.keys(word1Count).length === Object.keys(word2Count).length && 
        Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter]);
}

const findAnagrams = (words, allWords) => {
    return allWords
        .filter(entry => hasSameLetterCount(word, entry))
        // to avoid return the same word
        .filter(anagram => anagram !== word);
}