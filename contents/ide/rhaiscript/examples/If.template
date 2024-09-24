//! This script runs if statements.

let a = 42;
let b = 123;
let x = 999;

if a > b {
    print("Oops! a > b");
} else if a < b {
    print("a < b, x should be 0");

    let x = 0;          // <- this 'x' shadows the global 'x'
    print(x);           // should print 0
} else {
    print("Oops! a == b");
}
