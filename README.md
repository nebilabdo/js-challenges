# 🧠 JavaScript Daily Challenges

Welcome to my **JavaScript Daily Challenge** repository!

This project is dedicated to solving at least one JavaScript challenge per day to sharpen problem-solving skills, build muscle memory with core JavaScript methods, and track growth as a future **MERN Stack Developer** (specializing in Front-End).

---

## 📌 What’s Inside?

Each folder includes:
- A clearly named challenge (e.g., `find-the-missing-numbers`)
- Well-commented JavaScript code
- A solution that uses modern JS practices like `map`, `filter`, and `reduce`

---

## 🗂️ Folder Structure

- `/js-challenges/`
  - Contains individual folders for each challenge.
  - Each folder includes:
    - A `script.js` file with the solution.
    - Optionally a `README.md` with problem description, code explanation, and additional notes.

---

## 🎯 Goal

- **Consistency**: Solve one challenge every day.
- **Problem-Solving**: Build a strong foundation of problem-solving skills.
- **JavaScript Mastery**: Get comfortable with core methods like `map()`, `filter()`, `reduce()`, and ES6+ syntax.
- **Interview Prep**: Prepare for coding interviews and real-world projects.

---

## 💻 Sample Challenge

### 📎 Challenge: Find the Missing Numbers

**Problem**:  
You are given an array of numbers where numbers are missing from a sequence. The numbers in the array are sorted in increasing order. Write a function that returns an array of the missing numbers in the sequence from the smallest number to the largest number.

**Example**:


```js

// Sample challenge: Find the Missing Numbers in a Sequence
const findMissingNumbers = arr => {
  const fullRange = [...Array(arr[arr.length - 1] - arr[0] + 1).keys()].map(i => i + arr[0]);
  return fullRange.filter(num => !arr.includes(num));
};

const inputArray = [1, 3, 5, 6, 8];
const result = findMissingNumbers(inputArray);

console.log(result); 
