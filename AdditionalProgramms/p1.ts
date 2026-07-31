//Check Prime Number
function checkPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
let n = 17;
console.log(checkPrime(n) ? "Prime Number" : "Not Prime");
