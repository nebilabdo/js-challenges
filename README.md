# 🧠 JavaScript Daily Challenges

Welcome to my **JavaScript Daily Challenge** repository!

This project is dedicated to solving at least one JavaScript challenge per day to sharpen problem-solving skills, build muscle memory with core JavaScript methods, and track growth as a future **MERN Stack Developer** (specializing in Front-End).

---

## 📌 What’s Inside?

Each folder contains a collection of challenges related to a specific topic or concept. These challenges involve solving problems using modern JavaScript practices like `map`, `filter`, `reduce`, and other ES6+ features.

### Folder Structure:

- **`array/`**: Challenges related to array manipulation and algorithms.
- **`string/`**: Challenges focused on string manipulation and algorithms.
- **`math/`**: Mathematical challenges, including number theory and arithmetic.
- **`reduce/`**: Challenges that utilize the `reduce` method to solve problems.
- **`leetcode/`**: LeetCode-inspired problems to practice coding interview questions.
- **`projects/`**: Personal projects built using JavaScript, ranging from simple applications to complex solutions.

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
function findMissingNumber(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, cur) => acc + cur, 0);

  return expectedSum - actualSum;
}

const result = findMissingNumber([10, 8, 9, 7, 5, 4, 2, 3, 1]);

console.log(result);
