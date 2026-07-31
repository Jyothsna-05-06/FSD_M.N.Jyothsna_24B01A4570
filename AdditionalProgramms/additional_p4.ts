//Check Armstrong Number
function isArmstrong(num: number): boolean {

    let original = num;
    let sum = 0;
    let digits = num.toString().length;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

let num1 = 153;

console.log(
    isArmstrong(num1) 
    ? "Armstrong Number" 
    : "Not Armstrong Number"
);