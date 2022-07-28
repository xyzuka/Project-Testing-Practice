// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(arr) {
  // find average
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  let arrayAvg = arraySum / arr.length;

  // find min

  let arrayMin = Math.min(...arr);

  // find max

  let arrayMax = Math.max(...arr);

  // find length
  let arrayLength = arr.length;

  // returning results as object
  // Define desired object
  let obj = {
    average: arrayAvg,
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
  // Return it
  return obj;
}

module.exports = analyzeArray;
