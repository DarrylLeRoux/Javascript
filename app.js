"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  //Max temp starts with the first iteration
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    //If the there is an error message, it is not a number
    //Pass over that, and continue to check the array for a number
    if (typeof temps[i] !== "number") continue;
    //If the current index is greater than the max
    //Max is now assigned the greater number in the loop
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //Amplitude = calculated by highest temp - lowest temp
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No. Just merge two arrays

// 2) Break up the problem into sub-problems
// - Merge 2 arrays
const temperatures2 = [1, -3, -8, -11, "error", 16, 11, 17, 15, 8];
const calcTempAmplitudeNew = function (temperatures) {
  const temps = temperatures.concat(temperatures2);
  console.log(temps);
  //Max temp starts with the first iteration
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    //If the there is an error message, it is not a number
    //Pass over that, and continue to check the array for a number
    if (typeof temps[i] !== "number") continue;
    //If the current index is greater than the max
    //Max is now assigned the greater number in the loop
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //Amplitude = calculated by highest temp - lowest temp
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);
