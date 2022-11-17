// Solution from the tutor
let word = prompt(`Enter a word: `);
const vowelsMap = { a: 1, e: 2, i: 3, o: 4, u: 5 }

for (const vowel in vowelsMap) {
    word = word.replace(vowel, vowelsMap[vowel])
}

console.log(word)