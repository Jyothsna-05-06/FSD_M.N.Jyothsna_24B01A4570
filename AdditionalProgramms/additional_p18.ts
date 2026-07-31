//Create a Student Class with a Constructor and Display Student Details
class Student1 {

    name: string;
    rollNo: number;
    course: string;


    constructor(name: string, rollNo: number, course: string) {

        this.name = name;
        this.rollNo = rollNo;
        this.course = course;

    }


    displayDetails() {

        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);

    }
}


let student1 = new Student1("Rahul", 101, "Computer Science");

student1.displayDetails();