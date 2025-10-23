let student = {
  name: "Nebil",
  age: 21,

  showInfo() {
    console.log("Outer function this.name:", this.name);

    let innerFunction = () => {
      console.log("Inner function this.name:", this.name);
    };

    innerFunction();
  }
};

student.showInfo();
