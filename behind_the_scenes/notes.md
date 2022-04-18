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
