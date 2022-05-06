'use strict';
/*
const bookings = [];
const createBooking = function (flightNum, numPassengers = 78, price = 299) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 8, 99);
//Skip default parameter - use undefined
createBooking('LH234', undefined, 299);

///////////////////////////////////////////////////////////
/////////////////// Reference vs Values ///////////////////
///////////////////////////////////////////////////////////
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 267267676762,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 267267676762) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
checkIn(flight, jonas);
*/
///////////////////////////////////////////////////////////
/////////////////// First class functions /////////////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
/////////////////// Higher-Order Functions ////////////////
///////////////////////////////////////////////////////////
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

function addNum(num1, num2) {
  const addNumTotal = num1 * num2;
  return addNumTotal;
}

function total(fn, num3) {
  console.log(fn + num3);
}

total(addNum(2, 3), 4);
*/
///////////////////////////////////////////////////////////
/////////////////// Function returning Functions //////////
///////////////////////////////////////////////////////////
/*
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greet('hey')('jonas');

//Rewrite with Arrow Functions
const greetArrow = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const helloUser = greetArrow('Hey');
helloUser('Darryl');
*/

///////////////////////////////////////////////////////////
/////////////////// Call and Apply ///////////// //////////
///////////////////////////////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const euroWings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Could write the function out book(){}, but there is no need
const book = lufthansa.book;

// call arguments = first is the Object, and then the parameters that you wish to pass in the function
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

/* // Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

/* // Coding Challenge #2


This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀



(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
