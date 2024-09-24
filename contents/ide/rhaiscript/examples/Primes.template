//! This script uses the Sieve of Eratosthenes to calculate prime numbers.

let now = timestamp();

const ANSWER = 78_498;
const MAX_NUMBER_TO_CHECK = 1_000_000;

let prime_mask = [];
prime_mask.pad(MAX_NUMBER_TO_CHECK + 1, true);

prime_mask[0] = false;
prime_mask[1] = false;

let total_primes_found = 0;

for p in 2..=MAX_NUMBER_TO_CHECK {
    if !prime_mask[p] { continue; }

    //print(p);

    total_primes_found += 1;

    for i in range(2 * p, MAX_NUMBER_TO_CHECK + 1, p) {
        prime_mask[i] = false;
    }
}

print(`Total ${total_primes_found} primes <= ${MAX_NUMBER_TO_CHECK}`);
print(`Run time = ${now.elapsed} seconds.`);

if total_primes_found != ANSWER {
    print(`The answer is WRONG! Should be ${ANSWER}!`);
}
