//! This script defines a function with two parameters and local variables.

let a = 3;

fn add(a, b) {
    a = 42;             // notice that 'a' is passed by value
    a + b;              // notice that the last value is returned even if terminated by a semicolon
}

let result = add(a, 4);

print(`add(a, 4) should be 46: ${result}`);

print(`a should still be 3: ${a}`);     // prints 3: 'a' is never changed
