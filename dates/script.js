"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-06-01T17:01:17.194Z",
    "2022-06-04T23:36:17.929Z",
    "2022-06-07T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
let labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // Print how many days have passed
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

/////////////////////////////////
// format currency
/////////////////////////////////
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    // Set current user locale currency
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(acc.balance, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// LOG OUT TIMER

const startLogOutTimer = function () {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the time to the UI
    labelTimer.textContent = `${min}:${sec}`;

    // When timer reaches 0 log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };
  // Setting the time to 5 minutes
  let time = 10;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Fake always logged in
///////////////////////////////////////
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

///////////////////////////////////////
// Experimenting API / ISO Language Table
///////////////////////////////////////

// const currentDate = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long", // full month name
//   year: "numeric",
//   weekday: "long", // full day name
// };

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
//   currentDate
// );

///////////////////////////////////////
// SET LOGIN DATE
///////////////////////////////////////

const currentDate = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // full month name
  year: "numeric",
  weekday: "long", // full day name
};

const locale = navigator.language;

// Set date according to the users locale
labelDate.textContent = new Intl.DateTimeFormat(
  // currentAccount.locale,
  options
).format(currentDate);

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Create Date when logged in
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    const day = `${currentDate.getDate()}`.padStart(2, 0);
    const hour = `${currentDate.getHours()}`.padStart(2, 0);
    const minute = `${currentDate.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year} ${hour}:${minute}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2000);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0); // true

// Base 10 - 0 to 9
// Base 2 - 0 to 1 (Binary)

// Convert strings to numbers
console.log(Number("23"));
console.log(+"23");

// parsing
console.log(Number.parseInt("30px", 10)); // JS parses for the number = 30
console.log(Number.parseInt("px3", 10)); // NaN - needs to be first

console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(parseFloat("3.4")); // old way without Number()

// Check is value is a number
console.log(Number.isFinite(20)); //  true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20Ex")); // false - not a number

// Math and rounding

console.log(Math.sqrt(25)); // square root
console.log(25 ** (1 / 2)); // square root
console.log(8 ** (1 / 3)); // cubed

console.log(Math.max(1, 56, 89, 2, 45)); // 89
console.log(Math.min(1, 3, 5, 67, 2)); // 1

console.log(Math.PI * Number.parseFloat("10px") ** 2); // PI

console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min)
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3)); // removes decimal
console.log(Math.round(23.9)); // rounds up
console.log(Math.ceil(23.9)); // rounds up
console.log(Math.floor(23.9)); // rounds down

// Rounding decimals
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"
console.log(+(2.7).toFixed(3)); // 2.7

// Remainder
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

// Even or Odd
console.log(6 % 2); // 0
console.log(6 / 2); // 3

const isEven = (n) => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(14)); // true

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});

// Numeric Separators
const diameter = 28_746_000_000;
console.log(diameter); // 28746000000

const PI = 3.14_15;
console.log(PI);

console.log(Number("2_000")); // NaN
console.log(parseInt("230_00)")); // NaN

// Bigint
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // Largest safe number allowed in JS

console.log(78787878786862876487628376487263n);
console.log(BigInt(864872687368276));

// Operations
console.log(10000n + 10000n);
console.log(10000000n * 26846810000n);

// Cannot mix BigInt with normal numbers
// const huge = 20200292982828n
// const num = 23
// Uncaught error

//////////////////////////////////////////////////////////////
// DATES
//////////////////////////////////////////////////////////////

// Create a date
const now = new Date();
// console.log(now);

// console.log(new Date("Wed Jun 08 2022"));
// console.log(new Date("December 25, 2022")); // Not a good habit
// console.log(new Date(account1.movementsDates[0])); // This is fine as JS created it

// console.log(new Date(2037, 10, 19, 15, 23, 5)); // YYYY, MM (0 based), DD, HH, MM, SS

// console.log(new Date(0)); // Unix time
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 x DD * 60Min * 60Sec * 1000ms

// // Methods on Date()
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth()); // 0 based
// console.log(future.getDay()); // Day of the week (0 = Sunday)
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // 2037-11-19T13:23:00.000Z stores in string
// console.log(future.getTime()); // milliseconds

// console.log(new Date(future.getTime()));

// console.log(Date.now()); // current timestamp

// future.setFullYear(2040); // Sets the year to whatever you want
// console.log(future);

// console.log(+future);

// take date1 and date 2 and subtract them from each other
// then work out the milliseconds to days
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

//////////////////////////////////////////////////////////////
// INTERNATIONAL Numbers
//////////////////////////////////////////////////////////////

const num = 827282.23;

const numberOptions = {
  style: "unit",
  unit: "mile-per-hour",
};

console.log("US: ", new Intl.NumberFormat("en-US", numberOptions).format(num));
console.log(
  "Germany: ",
  new Intl.NumberFormat("de-DE", numberOptions).format(num)
);
console.log(
  "Syria: ",
  new Intl.NumberFormat("ar-SY", numberOptions).format(num)
);
console.log(
  "Browser: ",
  new Intl.NumberFormat(navigator.language, numberOptions).format(num)
);


// setTimout
const ingredients = ["Olives", "Spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza with ${ing1}, and ${ing2}`);
  },
  3000,
  ...ingredients
);

console.log("Waiting...");

// You can short the timeout with clearTimeout by calling the timeout used
if (ingredients.includes("Spinach")) {
  clearTimeout(pizzaTimer); // pizzaTime is the setTimeout
}

// setInterval
setInterval(() => {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const intl = new Intl.DateTimeFormat("en-US", options).format(now);
  console.log(intl);
}, 1000);
*/
