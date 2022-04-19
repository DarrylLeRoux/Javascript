"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/* //Destructuring Arrays
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a); // 2

//You can skip an element by using an empty space
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Prints the first and third option in the array

//Swapping array elements
[main, secondary] = [secondary, main];
console.log(main, secondary); //"Vegetarian", "Italian"

//Order food from the above Object
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , k] = nested;
//Destructuring in destructuring
const [i, , [k, l]] = nested;
console.log(i, k, l); //2, 5, 6

//Default values
//If the array has a value, the default will be overwritten
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

//Destructuring Objects
