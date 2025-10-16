function Student(fristName,lastName,grade,subject){
    this.firstName=fristName;
    this.lastName=lastName;
    this.grade=grade;
    this.subject=subject;
    this.introduce=function(){
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}. I am in grade ${this.grade}.`)
    }
    this.upgrade=function(){
        this.grade=this.grade + 1
        console.log(`Congratulations ${this.firstName}, you are now in grade ${this.grade}!`)
    }
    this.study = function() {
   console.log(`${this.firstName} is studying ${this.subject}.`);
};

}
let student1 = new Student("Nebil", "Abdo", 11,"JavaScript");

student1.introduce();
student1.upgrade();
student1.introduce();
student1.study();

