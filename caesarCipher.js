// A caesarCipher function that takes a string and returns it with each character “shifted”.

function caesarCipher(str, shift) {
  // converts everything to lowercase
  let lowerCaseStr = str.toLowerCase();

  // array of alphabets
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // ciphered string storage
  let newStr = '';

  // cipher loop
  for (let i = 0; i < lowerCaseStr.length; i++) {
    // keep track of current lowerCaseStr in the loop
    let currentLetter = lowerCaseStr[i];

    // test for spaces
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }

    // test for punctuation
    let punctuationTest = !!currentLetter.match(/^[.,:!?]/);

    if (punctuationTest) {
      newStr += currentLetter;
      continue;
    }

    // determine current index of lowerCaseStr
    let currentIndex = alphabet.indexOf(currentLetter);

    // assign new ciphered index
    let newIndex = currentIndex + shift;

    // conditions if index goes over index limits
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;

    // string to uppercase conversion
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }

  // returning ciphered string
  return newStr;
}

module.exports = caesarCipher;

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
