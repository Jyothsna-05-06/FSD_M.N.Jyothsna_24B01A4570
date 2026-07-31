//Generate Prime Numbers in a Range
function isPrime(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }

    return true;
}

function generatePrimes(start: number, end: number) {
    let primes: number[] = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i))
            primes.push(i);
    }

    return primes;
}

console.log(generatePrimes(1, 50));