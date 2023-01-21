const palindromes = function (word) {
    let normalWord = "";
    let reverseWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        let asciiNum = word.charCodeAt(i);
        if (65 <= asciiNum && asciiNum <= 90 || 97 <= asciiNum && asciiNum <= 121) {
            reverseWord += word[i];
            normalWord = word[i] + normalWord;
        }
    }
    return reverseWord.toLowerCase() === normalWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
