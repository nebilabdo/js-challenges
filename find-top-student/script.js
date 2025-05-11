/*Problem:
You’re given an array of student objects with their names and scores in multiple subjects. Write a function that returns the name of the student with the highest total score.

javascript
Copy
Edit
const students = [
  { name: 'Amina', scores: [88, 92, 79] },
  { name: 'Khalid', scores: [90, 91, 85] },
  { name: 'Liya', scores: [92, 95, 90] },
];
👉 Expected Output: "Liya"

✅ Requirements:
Use map and reduce to calculate each student’s total score.

Find the student with the highest score using array methods.

*/

const students = [
    { name: 'Amina', scores: [88, 92, 79] },
    { name: 'Khalid', scores: [90, 91, 85] },
    { name: 'Liya', scores: [92, 95, 90] },
  ];
  
  //Map each student to a new object with total score
  const studentTotals = students.map(student => ({
    name: student.name,
    total: student.scores.reduce((sum, score) => sum + score, 0)
  }));
  
  //>Reduce to find the student with the highest total score
  const topScorer = studentTotals.reduce((top, current) => {
    return current.total > top.total ? current : top;
  });
  
 
  console.log(topScorer.name); 




  