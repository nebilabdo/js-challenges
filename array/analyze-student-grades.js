const students = [
  { id: 1, name: "Ali", grades: [70, 80, 90] },
  { id: 2, name: "Sara", grades: [50, 60, 55] },
  { id: 3, name: "Nebil", grades: [95, 88, 92] },
  { id: 4, name: "Mahi", grades: [40, 30, 50] }
];

// Step 1: Map and filter students with average > 60
const passedStudents = students
  .map(student => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const avg = parseFloat((total / student.grades.length).toFixed(2));
    return {
      id: student.id,
      name: student.name.toUpperCase(),
      average: avg
    };
  })
  .filter(student => student.average > 60);

console.log("Filtered and mapped students:");
console.log(passedStudents);

// Step 2: Summary
const totalPassed = passedStudents.length;
const averageOfPassed = parseFloat(
  (passedStudents.reduce((sum, s) => sum + s.average, 0) / totalPassed).toFixed(2)
);

const summary = {
  totalPassed,
  averageOfPassed
};

console.log("Summary:");
console.log(summary);
