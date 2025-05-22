// 🌟 Challenge: Student Score Analysis
// You're given an array of student objects. Each student has a name and a list of scores. Your tasks:

// js
// Copy
// Edit
// const students = [
//   { name: "Nebil", scores: [90, 85, 92] },
//   { name: "Ekram", scores: [75, 88, 79] },
//   { name: "Natnael", scores: [64, 70, 72] },
//   { name: "Jabalu", scores: [95, 91, 89] },
// ];
// ✅ Tasks to Solve:
// Use map to create a new array of student names in uppercase.

// Use map + reduce to calculate the average score for each student and return an array of:

// js
// Copy
// Edit
// [{ name: "Nebil", avg: 89 }, ...]
// Use filter to find students whose average is 80 or more.

// Use reduce to find the class average (average of all averages).

// 🔥 Bonus Challenge:
// Find the student with the highest average.

// Would you like to try it first, or should I help you walk through the solution step by step? Either way, you'll master map, filter, and reduce with this!


const students = [
  { name: "Nebil", scores: [90, 85, 92] },
  { name: "Ekram", scores: [75, 88, 79] },
  { name: "Natnael", scores: [64, 70, 72] },
  { name: "Jabalu", scores: [95, 91, 89] },
];
const result=students.map(data=>{
  const capitalizename=data.name.toUpperCase();
  const total=data.scores.reduce((acc,curr)=>acc+curr,0);
  const avg=total/data.scores.length;
  return {name:capitalizename,avg:Math.floor(avg)}
}).filter(data=>data.avg>=80)
console.log(result)

const classAverage = Math.floor(
  result.reduce((acc, curr) => acc + curr.avg, 0) / result.length
);
console.log(classAverage)


// find the highest average student 
const topStudent=result.reduce((top,current)=>current.avg > top.avg ? current:top
)
console.log(topStudent)