'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  // loop over each "movement" and print it with "insertadjacentHTML"
  movements.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type} </div>
      
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Array methods
/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE - Does not mutate the array
console.log(arr.slice(2, 4)); // start and end
console.log(arr.slice(-2)); // last two elements
console.log(arr.slice(2, -1)); // 'c', 'd'
console.log(arr.slice()); // no arguments creates a shallow copy

// SPLICE - Mutates the array
console.log(arr.splice(2)); // removes from argument
console.log(arr); // remainder 'a', 'b'

// REVERSE - Mutates the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Same

// JOIN
console.log(letters.join('-'));

// AT
// Instead of using arr[0] for an index
// We now say array AT position x
const dummyArr = [23, 11, 64];
console.log(dummyArr.at(0)); // 23

// Last position
console.log(dummyArr.at(-1));
*/
/////////////////////////////////////////////////
// forEach
/////////////////////////////////////////////////
/*
// finding the index, it is the second argument
// forEach will not Break and Continue
movements.forEach((movement, index) => {
  if (movement > 0) {
    console.log(`Transaction ${index + 1}: You deposited $${movement}`);
  } else {
    console.log(
      `Transaction ${index + 1}: You withdrew $${Math.abs(movement)}`
    );
  }
});

// as a for of loop
for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Transaction ${i + 1}: You deposited $${move}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew $${Math.abs(move)}`);
  }
}

// Map and Sets with forEach

// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}, ${map}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);

currenciesUnique.forEach((currency) => {
  console.log(`${currency}`);
});
*/

//////////////////////////
// Coding Challenge
/*
// TEST DATA 1:
// Julia's Data [3,5,2,12,7],
// Kate's Data [4,1,15,8,3]

// TEST DATA 2:
// Julia's Data [9,16,6,8,3]
// Kate's Data [10,5,6,1,4]

// Know whether it's an adult dog or puppy
// Adult dog >= 3, Puppy > 3

// My Solution
// const dogJulia = [3, 5, 2, 12, 7];
// const dogKate = [4, 1, 15, 8, 3];
// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaCopy = dogsJulia;
//   const noCats = juliaCopy.slice(1, 3);

//   const completeDogs = [...noCats, ...dogsKate];
//   completeDogs.forEach((age, i) => {
//     age >= 3
//       ? console.log(`Dog number ${i + 1} is an Adult and is ${age} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };
// checkDogs(dogJulia, dogKate);

// Jonas Solution
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  // Only using concat due to it being an array method in an array method lesson
  // He prefers the spread operator
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach((dog, i) => {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an Adult and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
