//Create a Student Class with a readonly Student ID
class Student {

    readonly studentId: number;

    name: string;


    constructor(id:number, name:string) {

        this.studentId = id;

        this.name = name;

    }


    display() {

        console.log(
            "ID:",
            this.studentId
        );

        console.log(
            "Name:",
            this.name
        );

    }

}


let s1 = new Student(101,"John");

s1.display();


// Not allowed:
// s1.studentId = 200;