/* eslint-disable max-len */
/*
Daily Challenge: Words In The Stars
Last updated : March 30th 2021

What You Will Learn :
Use functions, string methods, array methods and loops

Instructions
1. Prompt the user for several words (separated by commas).
2. Put the words into an array.
3. Console.log the words one per line, in a rectangular frame as seen below.
4. Check out the Hints and Requirements below.

For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

Stars and words


Hint
The number of stars that wraps the sentence, must depend on the length of the longest word.


Requirements
To do this challenge you only need Javascript(No HTML and no CSS)
*/


function textFramedWithStars() {
  let userWords;
  do {
    userWords = prompt('Please input several words separated by commas');
  } while (userWords.length == 0); // Prompt the user until they enter at least a word
  // const userWords = 'Hello, World, in, a, frame';
  const wordsArray = userWords.split(',');

  // trim whitespace from the words using a for loop
  for (const wordIndex in wordsArray) {
    if (Object.prototype.hasOwnProperty.call(wordsArray, wordIndex)) {
      wordsArray[wordIndex] = wordsArray[wordIndex].trim();
    }
  }
  // find length of longest word
  const lengthOfLongestWord = findLongestWordLength(wordsArray);

  // draw the frame
  drawStarFrameAroundWords(wordsArray, lengthOfLongestWord);
}

function findLongestWordLength(wordsArray) {
  let lengthOfLongestWord = 0;
  for (let x of wordsArray) {
    x = x.trim();
    if (x.length > lengthOfLongestWord) {
      lengthOfLongestWord = x.length;
    }
  }
  return lengthOfLongestWord;
}

function drawStarFrameAroundWords(wordsArray, lengthOfLongestWord) {
  // There's a row at the top and a row at the bottom, to frame the text
  // There's a column on each side separated by one space to frame
  // the words on the sides.

  // Draw the top frame, so 2 more characters on both sides
  // i.e one for * and one for the space that's why I add 4 more to the repeat.
  console.log('*'.repeat(lengthOfLongestWord + 4));

  // * " " "word gap + space padding" " " * // So we have 2 characters added on both sides
  for (let i = 0; i < wordsArray.length; i++) {
    console.log('* ' + wordsArray[i] + ' '.repeat(lengthOfLongestWord - wordsArray[i].length) + ' *');
  }

  // Draw the bottom frame, so 2 more characters on both sides
  // i.e one for * and one for the space that's why I add 4 more to the repeat.
  console.log('*'.repeat(lengthOfLongestWord + 4));
}

textFramedWithStars();
