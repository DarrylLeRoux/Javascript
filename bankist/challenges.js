'use strict';

// TEST DATA 1: [5,2,4,1,15,8,3]
// TEST DATA 2: [16,6,10,5,6,1,4]

const calcAverageHumanAge = function (ages) {
  //calculate dog age in human age
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  // Exclude all dogs that are less than 18 human years old
  const adults = humanAges.filter((age) => {
    return age >= 18;
  });
  // Calculate the average human age of all adult dogs
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);
