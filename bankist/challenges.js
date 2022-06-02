'use strict';

// TEST DATA 1: [5,2,4,1,15,8,3]
// TEST DATA 2: [16,6,10,5,6,1,4]

// const calcAverageHumanAge = (ages) =>
//   //calculate dog age in human age
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     // Exclude all dogs that are less than 18 human years old
//     .filter((age) => age >= 18)
//     // Calculate the average human age of all adult dogs
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg);

// // Nested forEach
// let nathanPals = ['John', 'Jack'];
// let peterPals = ['Koos', 'Frikkie'];

// let pals = [...nathanPals, ...peterPals];
// let allPals = [];
// pals.forEach((friend, i) => {
//   allPals.push(friend);
//   console.log(`Friend ${i + 1} is ${friend}`);
//   console.log(allPals);
// });
