//function with parameters and number return type
function fun2(a: number, b: number): number {
    return a + b;
}
console.log(fun2(10, 20));

//function with default parameters and string return type
function fun1(name:string = "Jyothsna"): string {
    return "Welcome, " + name + "!";
}
console.log(fun1());

//function with optional parameters and void return type
function fun3(a: number, b?: number): void {
  console.log("The value of a:" + a);
  if(b) {
    console.log("The value of b:" + b);
  }
}
fun3(20);

//function with rest parameters and number return type
function fun4(...marks:number[]): number {
    let total = 0;
    for(let num of marks) {
        total += num;
    }
    return total;
}
console.log(fun4(12, 23, 33, 13, 45));