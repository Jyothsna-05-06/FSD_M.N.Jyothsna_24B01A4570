//Rotate an Array by N Positions
function rotate(arr:number[], k:number) {

    k = k % arr.length;

    let rotated = [
        ...arr.slice(arr.length-k),
        ...arr.slice(0, arr.length-k)
    ];

    return rotated;
}


let arr = [1,2,3,4,5];

console.log(rotate(arr,2));