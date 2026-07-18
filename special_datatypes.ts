//any
console.log("-----Any-----");
let val: any = 10;
console.log(val);

val = "Hello";
console.log(val);

val = true;
console.log(val);

//Unknown
console.log("-----Unknown-----");
let un:unknown = 2;
console.log(un); 

let u:unknown = "abc";
console.log(u);

let unk:unknown = false;
console.log(unk);

//void
console.log("-----Void-----");
function wish(name:string): void {
  console.log("Welcome, " + name + "!");
}
wish("Jyo");

function add(a: number, b: number): void {
  console.log(a + b);
}
add(10, 20);

function subtract(a: number, b: number): void {
  console.log(a - b);
}
subtract(20, 10);