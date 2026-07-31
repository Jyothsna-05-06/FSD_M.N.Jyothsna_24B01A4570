//Count the Occurrences of Each Element in an Array
function countFrequency(arr:number[]) {

    let map = new Map<number,number>();

    for(let num of arr) {

        map.set(
            num,
            (map.get(num) || 0)+1
        );

    }

    return map;
}


let result = countFrequency([1,2,2,3,3,3]);

result.forEach((value,key)=>{
    console.log(key+" : "+value);
});