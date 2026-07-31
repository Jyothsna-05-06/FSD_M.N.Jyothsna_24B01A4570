//Demonstrate public, private, and protected Access Modifiers Using an Employee Class
class Employee {

    public name: string;

    private salary: number;

    protected department: string;


    constructor(name:string, salary:number, department:string) {

        this.name = name;
        this.salary = salary;
        this.department = department;

    }


    public displaySalary() {

        console.log("Salary:", this.salary);

    }

}


class Manager extends Employee {


    showDepartment() {

        console.log("Department:", this.department);

    }

}


let emp = new Manager(
    "Amit",
    50000,
    "IT"
);


console.log(emp.name);       // public

emp.displaySalary();

emp.showDepartment();