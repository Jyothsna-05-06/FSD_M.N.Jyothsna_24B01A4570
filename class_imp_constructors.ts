class Student {
    constructor(public name: string, public age: number) {}
    display() {
        console.log(this.name, this.age);
    }
}
let s = new Student("Jyothsna", 20);
s.display();


class Rectangle {
    constructor(public length: number, public breadth: number) {}
    area() {
        console.log(this.length * this.breadth);
    }
}
new Rectangle(5,4).area();


class Employee {
    constructor(public id:number, public name:string){}

    show(){
        console.log(this.id,this.name);
    }
}

new Employee(101,"Anu").show();