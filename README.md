# 🧠 JavaScript Daily Challenges

Welcome to my **JavaScript Daily Challenge** repository!

This project is dedicated to solving at least one JavaScript challenge per day to sharpen problem-solving skills, build muscle memory with core JavaScript methods, and track growth as a future **MERN Stack Developer** (specializing in Front-End).

---

## 📌 What’s Inside?

Each folder includes:
- A clearly named challenge (e.g., `find-top-student`)
- Well-commented JavaScript code
- A solution that uses modern JS practices like `map`, `filter`, and `reduce`

---

## 🗂️ Folder Structure

Each challenge is stored in its own sub-folder under `/js-challenges`, with its own `script.js` file and optionally a `README.md` for explanations or notes.
## 🎯 Goal



 🎯 Goal:
 - Practice JavaScript consistently every day.
 - Improve logic building and problem-solving abilities.
 - Get comfortable with methods like map(), filter(), reduce().
 - Build habits to prepare for coding interviews and real projects.

---

## 💻 Sample Challenge

### 📎 Challenge: Average of Positive Numbers

**Problem**:  
Given an array of numbers, calculate the average of all positive numbers.  
If there are no positive numbers, return `0`.

**Code**:
```js
const data = [4, -2, 7, -1, 0, 5];
const avgPositive = data
  .filter(n => n > 0)
  .reduce((acc, val, _, arr) => acc + val / arr.length, 0);

console.log(`Average of positive numbers: ${avgPositive.toFixed(2)}`); // Output: 5.33


