import { stdin as input, stdout as output } from "process";
import readline from "readline/promises";

const userInput = readline.createInterface({ input, output });
const summaryResult = [];
async function readInput(question) {
  const answer = await userInput.question(question);
  return answer;
}
async function wellComePageFunc() {
  console.log("╔════════════════════════════════════════════════════════╗");
  console.log("║                                                        ║");
  console.log("║                Grade Reporting System                  ║");
  console.log("║                                                        ║");
  console.log("╠════════════════════════════════════════════════════════╣");
  console.log("║   # Calculate Semester GPA                             ║");
  console.log("║   # Calculate Cumulative GPA                           ║");
  console.log("║   # Real University Grade-Styling                      ║");
  console.log("║   # Save Input and Error Handling                      ║");
  console.log("║                                                        ║");
  console.log("╠════════════════════════════════════════════════════════╣");
  console.log("║                Grading Scale                           ║");
  console.log("║    A+  (90-100)   →  4.0                               ║");
  console.log("║    A   (85-89)    →  4.0                               ║");
  console.log("║    A-  (80-84)    →  3.75                              ║");
  console.log("║    B+  (75-79)    →  3.5                               ║");
  console.log("║    B   (70-74)    →  3.0                               ║");
  console.log("║    B-  (65-69)    →  2.75                              ║");
  console.log("║    C+  (60-64)    →  2.5                               ║");
  console.log("║    C   (50-59)    →  2.0                               ║");
  console.log("║    C-  (45-49)    →  1.75                              ║");
  console.log("║    D   (40-44)    →  1.0                               ║");
  console.log("║    F   (<40)      →  0.0                               ║");
  console.log("║                                                        ║");
  console.log("╚════════════════════════════════════════════════════════╝");
}
async function waitingFunc() {
  await readInput(`Press Enter to Continues `);
  console.clear();
}
async function semesterNumberFunc() {
  let semesterNumber = await readInput(`How many semister you take? `);
  while (
    isNaN(semesterNumber) ||
    semesterNumber === "" ||
    semesterNumber === null ||
    semesterNumber < 1 ||
    semesterNumber > 14
  ) {
    console.log(
      "you insert invalid input ,please insert number and greather than 1"
    );
    semesterNumber = await readInput(`How many semister you take ? `);
  }
  const semesterNumberArray = Array.from(
    { length: semesterNumber },
    (_, index) => index + 1
  );
  return semesterNumberArray;
}
async function courseNumberFunc(semesterNumber) {
  const values = await semesterNumber;
  let course;
  let gpa;
  for (let arr of values) {
    console.log("╔════════════════════════════════════════════════════════╗");
    console.log(
      `║                   Semester ${arr}                           ║`
    );
    console.log("╚════════════════════════════════════════════════════════╝");
    course = await readInput(`How many course you take in semister ${arr} : `);
    while (isNaN(course) || course < 1 || course > 9 || course === "") {
      console.log(`you insert wrong  course number ,it should be above 1 `);
      course = await readInput(
        `How many course you take in semister ${arr} : `
      );
    }
    const titleName = await courseTitleFunc(course);
    gpa = gpaCalculatorFunc(titleName);

    const cumulative = cumulativeFunc(gpa[6], gpa[7]);

    console.log(`\nSemister ${arr} GPA`);
    await displayFunc(gpa, cumulative);
  }
  await closingFunc();
  return gpa;
}
async function courseTitleFunc(courseNumber) {
  const courseCodeArr = [];
  const ectsArr = [];
  const creditArr = [];
  const marksArr = [];
  const courseNameArr = [];
  for (let course = 0; course < courseNumber; course++) {
    console.log(`\n
      Course  ${course + 1}  `);
    let courseName = await readInput(`Course title : `);
    let firstChar = courseName[0];
    while (
      courseName === "" ||
      courseName.length < 3 ||
      !isNaN(firstChar) ||
      !/^[a-zA-Z\s\-]+$/.test(courseName)
    ) {
      console.log(
        `course title must be greather than three characters and only letter `
      );
      courseName = await readInput(`Course title : `);
      firstChar = courseName[0];
    }
    courseNameArr.push(courseName);
    const courseCodeResult = await courseCode();
    courseCodeArr.push(courseCodeResult);

    const ctsResult = await ECTS();
    ectsArr.push(ctsResult);

    const credit = await creditHoursFunc();
    creditArr.push(credit);

    const marks = await marksFunc();
    marksArr.push(marks);
  }

  return [creditArr, marksArr, courseNameArr, courseCodeArr, ctsArr];
}
async function courseCode() {
  let courseCode = await readInput(`CourseCode : `);
  while (
    courseCode.length < 3 ||
    courseCode > 30 ||
    courseCode === "" ||
    !/^[a-zA-Z]+[0-9]+$/.test(courseCode)
  ) {
    console.log(`you should insert formats like maths101 `);
    courseCode = await readInput(`CourseCode : `);
  }
  return courseCode;
}
async function ECTS() {
  let ects = await readInput(`CTS : `);
  while (isNaN(ects) || ects < 1 || ects === "") {
    console.log(`ects should be number & above 1 `);
    ects = await readInput(`ECTS : `);
  }
  return ects;
}
async function creditHoursFunc() {
  let credit = await readInput(`CreditHours : `);
  while (isNaN(credit) || credit < 1 || credit > 24 || credit === "") {
    console.log(`should be number & above 1 `);
    credit = await readInput(`CreditHours : `);
  }
  return credit;
}

async function marksFunc() {
  let marks = await readInput(`Marks between (0-100) : `);
  while (isNaN(marks) || marks < 1 || marks > 100 || marks === "") {
    console.log(`Marks should be number & above 1 `);
    marks = await readInput(`Marks between (0-100) : `);
  }

  switch (true) {
    case marks >= 90:
      return { grade: "A+", point: 4, score: marks };
    case marks >= 85:
      return { grade: "A", point: 4, score: marks };
    case marks >= 80:
      return { grade: "A-", point: 3.75, score: marks };
    case marks >= 75:
      return { grade: "B+", point: 3.5, score: marks };
    case marks >= 70:
      return { grade: "B", point: 3, score: marks };
    case marks >= 65:
      return { grade: "B-", point: 2.75, score: marks };
    case marks >= 60:
      return { grade: "C+", point: 2.5, score: marks };
    case marks >= 50:
      return { grade: "C", point: 2, score: marks };
    case marks >= 45:
      return { grade: "C-", point: 1.75, score: marks };
    case marks >= 40:
      return { grade: "D", point: 1, score: marks };
    default:
      return { grade: "F", point: 0, score: 0 };
  }
}

function gpaCalculatorFunc(data) {
  const filteredData = data.filter((_, index) => index < 2);
  const leftData = data.filter((_, index) => index > 1);
  //[[1,2],[{}]]
  const totalMarks = filteredData[0].reduce(
    (sum, item, index) => sum + item * filteredData[1][index].point,
    0
  );
  const totalCreditHours = filteredData[0].reduce(
    (sum, item) => sum + Number(item),
    0
  );
  const result = totalMarks / totalCreditHours;
  const gpt = filteredData[0].map(
    (item, index) => item * filteredData[1][index].point
  );
  const point = gpt.reduce((sum, item) => sum + item, 0);
  filteredData.push(gpt);
  filteredData.push(totalCreditHours);
  filteredData.push(point);
  filteredData.push(result);

  return [...leftData, ...filteredData];
}

function cumulativeFunc(...data) {
  if (summaryResult.length < 1) {
    summaryResult.push(Number(data[0]));
    summaryResult.push(Number(data[1]));
    return [data[0], data[1], data[1] / data[0]];
  }
  summaryResult[0] += data[0];
  summaryResult[1] += data[1];

  return [
    summaryResult[0],
    summaryResult[1],
    summaryResult[1] / summaryResult[0],
  ];
}
async function displayFunc(result, cumulative) {
  const totalResultObj = result[0].map((_, index) => ({
    CourseTitle: result[0][index],
    CourseCode: result[1][index],
    ECTS: Number(result[2][index]),
    CrHr: Number(result[3][index]),
    Grade: result[4][index].grade,
    Score: Number(result[4][index].score),
    GPT: result[5][index],
  }));
  const summaryObj = [
    {
      Credit: result[6],
      Points: result[7],
      SGPA: result[8],
    },
  ];
  const cumulativeObj = [
    {
      Credit: cumulative[0],
      Points: cumulative[1],
      CGPA: cumulative[2],
    },
  ];
  console.table(totalResultObj);
  console.log(`\nCurrent Semester Summary`);
  console.table(summaryObj);
  console.log(`\nCumulative Summary`);
  console.table(cumulativeObj);
}
async function closingFunc() {
  console.log(`\nAll Semesters processed successfully \n`);
  userInput.close();
}
wellComePageFunc();
await waitingFunc();
const semesterNumber = semesterNumberFunc();
courseNumberFunc(semesterNumber);
