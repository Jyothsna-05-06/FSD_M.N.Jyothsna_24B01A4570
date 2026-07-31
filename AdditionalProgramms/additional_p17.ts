//Find Duplicate Elements in an Array
function findDuplicates(arr:number[]) {

    let seen = new Set<number>();

    let duplicate = new Set<number>();


    for(let num of arr) {

        if(seen.has(num)) {

            duplicate.add(num);

        }
        else {

            seen.add(num);

        }
    }

    return [...duplicate];
}


console.log(findDuplicates([1,2,3,2,4,3,5]));