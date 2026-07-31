//Create a Generic Box<T> Class to Store and Display Different Types of Data
class Box1<T> {

    value:T;


    constructor(value:T){

        this.value = value;

    }


    display(){

        console.log(
            this.value
        );

    }

}


let numberBox = new Box1<number>(100);

let stringBox = new Box1<string>("Hello TypeScript");


numberBox.display();

stringBox.display();