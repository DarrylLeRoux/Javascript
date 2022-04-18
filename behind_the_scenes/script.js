"use strict";

//Scoping in practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); //Has acces as it is global
  function printAge() {
    //age will be accessed due to scope chain (Parent function) - Will not be accessible outside of calcAge()
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      var millenial = true;
    }
    //Cannot access str as it is in the if statements code block
    // console.log(str);

    // var is not blocked scope
    console.log(millenial);
  }
  //printAge will only be accessible in calcAge()
  printAge();
  return age;
}
const firstName = "Jonas";
calcAge(1991);
