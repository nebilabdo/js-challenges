# 🧠 JavaScript Daily Challenges

![JavaScript Daily Challenges](https://img.shields.io/badge/JavaScript-Daily_Challenges-blue?logo=javascript&logoColor=white)

Welcome to my **JavaScript Daily Challenge** repository! 🚀

This project is a collection of **JavaScript challenges** that I tackle every day to sharpen my problem-solving skills, improve my understanding of core JavaScript methods, and track my growth as a future **MERN Stack Developer** (specializing in Front-End). 

---

## 📌 What's Inside?

This repository contains various challenges focused on different topics and concepts. Each challenge is designed to build muscle memory with core JavaScript methods like `map()`, `filter()`, `reduce()`, and ES6+ features. These challenges will help you practice problem-solving skills and prepare for coding interviews and real-world projects.

### 🗂 Folder Structure

- **`array/`**: Challenges focused on **array manipulation** and algorithms.
- **`string/`**: Challenges focused on **string manipulation** and algorithms.
- **`math/`**: **Mathematical challenges**, including number theory and arithmetic operations.
- **`reduce/`**: Challenges utilizing the powerful `reduce` method for solving problems.
- **`leetcode/`**: Challenges inspired by **LeetCode**, perfect for preparing for coding interviews.
- **`projects/`**: Personal projects built using JavaScript, ranging from simple applications to full-scale solutions.

---

## 🎯 Goals

The goal of this repository is simple:

- **🌱 Consistency**: Solve at least one challenge every day.
- **🧩 Problem-Solving**: Strengthen your problem-solving and algorithmic thinking.
- **💻 JavaScript Mastery**: Master core JavaScript methods like `map()`, `filter()`, `reduce()`, and ES6+ syntax.
- **🎯 Interview Prep**: Build a strong foundation for coding interviews and real-world projects.

---

## 💻 Sample Challenge

### 📎 **Challenge**: Find the Missing Numbers

**Problem**:  
Given a sorted array of numbers, some numbers are missing from a sequence. Write a function that returns an array of the missing numbers from the sequence in ascending order.

---

### Example:

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
