// Write tests for the following, and then make the tests pass!

// 1. A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalize;
