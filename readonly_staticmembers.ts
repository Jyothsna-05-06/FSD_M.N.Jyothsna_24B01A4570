class Student1{
    readonly rollNo=101;
}
let st=new Student1();
console.log(st.rollNo);


class College{
    static collegeName="SVECW";
}
console.log(College.collegeName);


class MathDemo{
    static square(n:number){
        return n*n;
    }
}
console.log(MathDemo.square(6));