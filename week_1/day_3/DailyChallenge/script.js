/*
Instructions
1. Create a variable called sentence. The value of the variable should be a string that contains the words "not" and "bad".
For example, "The movie is not that bad, I like it".

2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring "not" (from the sentence variable).

3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring "bad" (from the sentence variable).

4. If the word "bad" comes after the word "not", you should replace the whole "not…bad" substring with "good", then console.log the result.
For example, the result here should be : "The movie is good, I like it"

5. If the word "bad" does not come after "not" or the words are not in the sentence, console.log the original sentence.
Example:

  Your string is : 'This dinner is not that bad ! You cook well',
  --> the result is : 'This dinner is good ! You cook well'

  Your string is : 'This movie is not so bad !'
  --> the result is : 'This movie is good !'

  Your string is : 'This dinner is bad !'
  --> the result is : 'This dinner is bad !'
*/

// 1. Create a variable called sentence. The value of the variable should be a string that contains the words "not" and "bad".
// My test cases:
// For example, "The movie is not that bad, I like it".
// let sentence = "The movie is not that bad, I like it";
// let sentence = 'not bad my friend!';
// let sentence = 'The movie is not that bad';

// The tutorials test cases:
let sentence = 'The movie is not that bad, I like it';
// let sentence = 'This dinner is not that bad ! You cook well';
// let sentence = 'This movie is not so bad !';
// let sentence = 'This dinner is bad !';

// 2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring "not" (from the sentence variable).
let wordNot = sentence.indexOf("not");

// 3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring "bad" (from the sentence variable).
let wordBad = sentence.indexOf("bad")

// 4. If the word "bad" comes after the word "not", you should replace the whole "not…bad" substring with "good", then console.log the result.
// For example, the result here should be : "The movie is good, I like it"

// I have to cater for the case where the word "not" is not in the sentence method .indexOf returns -1 if it doesn't find the substring
if ((wordBad > wordNot) && (wordNot != -1)) {
    if (wordNot == 0) {
        // case 1 not is the begginning of the sentence e.g.
        // 'not bad my friend!' -> 'good my friend!'
        console.log("good" + sentence.substring(wordBad + "bad".length));

    } else if (wordBad + "bad".length == sentence.length) {
        // case 2 the sentence ends with bad
        // 'The movie is not that bad'
        console.log(sentence.substring(0, wordNot) + "good")
    } else {
        // case 3 most generally not bad is at the middle of the sentence
        // e.g. 'This movie is not so bad !'
        console.log(sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + "bad".length, sentence.length))
    }
}
// I have to cater for the case where the word "not" is not in the sentence method .indexOf returns -1 if it doesn't find the substring
if ((wordBad < wordNot) || (wordNot == -1)) {
    // 5. If the word "bad" does not come after "not" or the words are not in the sentence, console.log the original sentence.
    console.log(sentence)
}
