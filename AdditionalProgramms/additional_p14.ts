//Find the Missing Number in an Array
function findMissing(arr: number[]): number {

    let n = arr.length + 1;

    let total = (n * (n + 1)) / 2;

    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    return total - sum;
}


let arr4 = [1,2,3,5];

console.log(findMissing(arr4));