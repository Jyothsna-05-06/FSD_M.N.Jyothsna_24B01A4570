// Find the Second Largest Number in an Array
function secondLargest(arr: number[]): number {

    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {

        if (num > largest) {

            second = largest;
            largest = num;

        }
        else if (num > second && num !== largest) {

            second = num;

        }
    }

    return second;
}


let arr3 = [10, 20, 5, 30, 25];

console.log(secondLargest(arr3));