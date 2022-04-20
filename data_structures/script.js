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

  orderDelivery: function ({
    name,
    starterIndex,
    mainIndex,
    time,
    address,
    date = "June", //Default value set, as it is not in the obj being passed
  }) {
    console.log(
      `Order received, ${name}. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time} in ${date}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "23:30",
  address: "Homestead Orchards",
  mainIndex: 2,
  starterIndex: 2,
  name: "Darryl",
});

restaurant.orderPizza("mushrooms", "onion", "olives");
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


//Destructuring Objects
//You need to use the keys as the variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Changing variable names and property names
const { name: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);
//Setting defaults
const { menu = [], starterMenu: starters = [] } = restaurant;
//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//Wrap in ()
({ a, b } = obj);
console.log(a, b); //23, 7
//Nested
const {
  fri: { open, close },
} = openingHours;
console.log(open + "am", close + "pm");


//Spread Operator
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
//Create shallow copy
//Copy the mainMenu array
const mainMenuCopy = [...restaurant.mainMenu];
//Join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Real case use
// const ingredients = [
//   prompt("What would you like in your pasta?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

//On Objects
const newRestaurant = { ...restaurant, founder: "Guiseppi", year: 1998 };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Chappies";
({ name } = restaurantCopy);
console.log(name);



// (takes the)REST(of the array) Pattern
// Packs elements into an array
//Spread -> of =
const arr = [1, 2, ...[3, 4]];
const arr2 = [5, 6, 7, 8];
//Rest <- of =
const [a, b, ...others] = [...arr, ...arr2];
console.log(others);
//Using spread and rest
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
*/
