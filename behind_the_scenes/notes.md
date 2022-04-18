# Execution Context

## What's inside the execution context?

1. Variable Environment
   - `let`, `const` and `var` declarations
   - Functions
   - Arguments object
2. Scope chain
3. `this` keyword

## Compilation

- Creation of global execution content (Not inside functions)
- Execution of top-level code
- Execution of functions and waiting for callbacks

# Scope and Scope Chain

- **Scoping:** How our program's variables are organised and assessed.
- **Lexical Scoping:** Scoping is controlled by placement of functions and blocks in the code.
- **Scope:** Space or environment in which a certain variable declared. Thre is global scope, function scope and block scope.
- **Scope of a variable:** Region of our code where a certain variable can be accessed.

### Global Scope

- Outside of any function or block
- Accessible everywhere

### Function Scope

- Variables are accessible only inside the function
- Also called local scope
- Will get ReferenceError if you try and access this outside

### Block Scope (ES6)

- Variables are accessible only inside a block `{}`
- Only applies to `let` and `const`, not `var` (`var` is function-scoped)
- Functions are alos block scope in `'use strict'`
- Scope has access to variables from all outer scopes (Variable lookup in the Scope Chain). Only parent scopes can be used.

## `this` keyword

- `this` keyword points to it's "owner"
- Attaches itself to the object that calls it `Object.this`

```
const jonas = {
   firstName: 'jonas',
   year: 1991,
   calcAge: function () {
      console.log(this); //this = jonas
      console.log(2037 - this.year) //this = 1991
   },

   //An Object's {} is not a code block and therefore, this is undefined as it points to the window and not to the Object
   greet: () => console.log(`Hey ${this.firstName}`),

};
//Will return undefined, as the this keyword above points to the window, without any firstName defined.
jonas.greet();
```

- One way around the scope of `this` is to declare a variable inside the functions scope:

```
const jonas = {
   firstName: 'jonas',
   year: 1991,
   calcAge: function () {
      console.log(this); //this = jonas
      console.log(2037 - this.year) //this = 1991

      //Old version
      const self = this //this points to the parent which is the jonas Object
      const isMillenial = function (){
         console.log(self.year >= 1981 && self.year <=1996)
      };

      //New version
      //We can now use the this keyword, as it will use the parent scope
      const isMillenial = () -> {
         console.log(this.year >= 1981 && this.year <=1996)
      };
      isMillenial();
   },
```
