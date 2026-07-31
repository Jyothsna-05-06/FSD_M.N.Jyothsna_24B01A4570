//Create a Class with a static College Name and a static Method
class College {

    static collegeName = "ABC Engineering College";


    name: string;


    constructor(name:string) {

        this.name = name;

    }


    static displayCollege() {

        console.log(
            College.collegeName
        );

    }


    displayStudent(){

        console.log(
            "Student:",
            this.name
        );

    }

}


College.displayCollege();


let student = new College("Ravi");

student.displayStudent();