"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  // No need to add : function(), it computes that it is a function automatically
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
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

/* // STRINGS
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalisation in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Function for capitalisation in name
let capitaliseName = function (name) {
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);
  console.log(name);
};
capitaliseName("darrYl");

//comparing email
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.io \n";

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

//Replacing
const priceGB = "£288,97";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

//Replacing all
const announcement =
  "All passengers come to boarding door 23. Boarding door 23";
console.log(announcement.replaceAll("door", "gate"));

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.startsWith("Air")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family"); //prints
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on the plane");
  } else {
    console.log("Welcome Aboard");
  }
};
checkBaggage("I have a laptop, some food and a Pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got a gun for protection");

// split() and join()
console.log("a+very+nice+string".split("+"));
console.log("Darryl Roux".split(" "));
const [firstName, lastName] = "Darryl Roux".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalName = function (name) {
  //Split names into an array
  const names = name.split(" ");
  //New array to push the mutated elements into
  const namesUpper = [];
  //Loop over the array
  for (const n of names) {
    //Push new elements into the namesArray
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalName("jessica ann smith davis");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; // String(number)
  //Take the last 4 numbers from the argument
  const last = str.slice(-4);
  //Pad the start with the string length instead of a random amount
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(4336565652762323));
console.log(maskCreditCard("234234234234243"));

//Repeat
const repeatMessage = "bad weather...all departures delayed ";
console.log(repeatMessage.repeat(5));
*/
/*  MAPS - stores keys and values
//Stores data in key value pairs
//set = add
const rest = new Map();
rest.set("name", "Classico Italiano");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(")
  .set([1, 2, 3], "test"); //array as key = undefined
const arr = [1, 2, 3]; //array as a variable first can be called
rest.set(arr, "test");

console.log(rest.get(arr)); // test

//Get = retrieve
console.log(rest.get("name")); //Classico Italiano
console.log(rest.get(true));
console.log(rest.get("open"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

//has = checks for element
rest.has("categories"); // true
//delete = deletes a key
rest.delete(2);

console.log(rest);
*/

/* // Iterating over Maps
const question = new Map([
  ["Question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Nope 💥"],
]);
console.log(question);
//Looping over the Map of arrays
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const input = Number(prompt("What is your answer?"));
input === question.get("correct")
  ? alert(question.get(true))
  : alert(question.get(false));

//Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
*/
/* SETS - Removes duplicates
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pasta",
  "Risotto",
  "Pizza",
  "Pasta",
]);
console.log(ordersSet);

console.log(ordersSet.size); // Unique entries
console.log(ordersSet.has("Pizza")); //True
console.log(ordersSet.has("Bread")); //False
ordersSet.add("Garlic Bread"); //Add
ordersSet.delete("Risotto"); //Delete an Element

// Iterable
for (const order of ordersSet) {
  console.log(order);
}

//Example
const staff = ["waiter", "chef", "manager", "waiter"];
// Place the Set into an array
const staffPositions = [...new Set(staff)];
console.log(staffPositions);
*/
/* 
///////////////////////////////////////////////////////////////
//Looping over Objects with Property keys
const properties = Object.keys(openingHours);
// console.log(properties);
let openStr = `We are open ${properties.length} days a week`;

for (const day of properties) {
  openStr += `, ${day}`;
}
// console.log(openStr);

//Looping over Objects with Property Values
const values = Object.values(openingHours);
// console.log(values);

// Entire Object Looping
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//Optional chaining
//Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//With optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open} hours`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.celebrate?.(4, 45) ?? "Method does not exist");

//Arrays
const users = [{ name: "jonas", email: "jonas@hsma.com" }];
console.log(users[0]?.email ?? "email does not exist");
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// // Looping over arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// const [index, item] = [...menu.entries()];
// // to get the index - use .entries()
// for (const [i, item] of menu.entries()) {
//   console.log(`Menu item ${i + 1}: ${item}`);
// }
 ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// restaurant.orderDelivery({
//   time: "23:30",
//   address: "Homestead Orchards",
//   mainIndex: 2,
//   starterIndex: 2,
//   name: "Darryl",
// });

// restaurant.orderPizza("mushrooms", "onion", "olives");
//Destructuring Arrays
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
///////////////////////////////////////

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Jackie"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
// const [players1, players2] = [...game.players];
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
// // 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);
// 6.
// const printGoals = function (...playerScored) {
//   let goals = 0;
//   for (let i = 0; i < playerScored.length; i++) {
//     goals++;
//     // console.log(goals, playerScored[i]);
//   }
//   console.log(goals, ...playerScored);
// };
const printGoals = function (...playerScored) {
  console.log(`${playerScored.length} goals were scored by ${playerScored}`);
};

printGoals(...game.scored);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
*/

// Coding Challenge #2
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

// 1.
for (let [goal, scored] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} was scored by: ${scored}`);
}
// 2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr} winning: ${odd}`);
}
*/
/*

/////////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  console.log(
    key < 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`
  );
}
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //get current index
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
