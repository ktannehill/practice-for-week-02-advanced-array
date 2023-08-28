/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // establish vowelCount
    // establish vowels var
    // establish usedVowels obj
    // splt str to arr
    // filter whether char is vowel and is not already used
        // increment count, change char to used
    // return if count > 2
    let char = string.split('');
    const vowels = 'aeiou';
    let usedVowels = {
        a: false,
        e: false,
        i: false,
        o: false,
        u: false,};
    let count = 0;
    let filtered = char.filter(function(char) {
        if(vowels.includes(char) && !usedVowels[char]) {
            count ++;
            usedVowels[char] = true;
        };
    });
    return count > 2;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
