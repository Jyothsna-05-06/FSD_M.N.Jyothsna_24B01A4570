//Count the Frequency of Characters in a String
function charFrequency(str: string) {

    let map = new Map<string, number>();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    return map;
}

let result1 = charFrequency("typescript");

result1.forEach((value, key) => {
    console.log(key + " : " + value);
});