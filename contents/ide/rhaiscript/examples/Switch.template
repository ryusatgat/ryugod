//! This script runs a switch statement in a for-loop.

let arr = [42, 123.456, "hello", true, "hey", 'x', 999, 1, 2, 3, 4];

for item in arr {
    switch item {
        // Match single integer
        42 => print("The Answer!"),
        // Match single floating-point number
        123.456 => print(`Floating point... ${item}`),
        // Match single string
        "hello" => print(`${item} world!`),
        // Match another integer
        999 => print(`Got 999: ${item}`),
        // Match range with condition
        0..100 if item % 2 == 0 => print(`A small even number: ${item}`),
        // Match another range
        0..100 => print(`A small odd number: ${item}`),
        // Default case
        _ => print(`Something else: <${item}> is ${type_of(item)}`)
    }
}
