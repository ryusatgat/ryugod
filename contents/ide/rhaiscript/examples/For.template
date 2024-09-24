//! This script runs for-loops with closures.

const MAX = 100;
const CHECK = ((MAX - 1) ** 2) * MAX;

print("Ready... Go!");

let now = timestamp();

print(`Creating ${MAX} closures...`);

let list = [];

// Loop over range
for i in 0..MAX {
    list.push(|| i ** 2);
}

print(`Time = ${now.elapsed} seconds...`);
print(`Summing ${MAX} closures...`);

let sum = 0;

// Loop over array
for f in list {
    sum += f.call();
}

print(`Sum = ${sum} (should be ${CHECK})`);
print(`Finished. Total run time = ${now.elapsed} seconds.`);
