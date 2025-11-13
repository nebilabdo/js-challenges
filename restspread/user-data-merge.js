// 👥 User Data Merger & Filter using Spread and Rest

// Data from two different APIs
const apiUsers1 = [
  { id: 1, name: "Nebil", country: "Ethiopia" },
  { id: 2, name: "John", country: "USA" },
  { id: 3, name: "Alice", country: "UK" },
];

const apiUsers2 = [
  { id: 3, name: "Alice", country: "UK" },
  { id: 4, name: "Sara", country: "Canada" },
  { id: 5, name: "David", country: "Germany" },
];

// 🧩 Function that merges and cleans up data
function mergeUsers(...userLists) {
  // Combine all user arrays using spread
  const merged = [].concat(...userLists);

  // Remove duplicates based on 'id'
  const unique = merged.filter(
    (user, index, self) =>
      index === self.findIndex((u) => u.id === user.id)
  );

  return unique;
}

// 🧠 Use the function
const allUsers = mergeUsers(apiUsers1, apiUsers2);

// 🎯 Extract only names using rest in destructuring
const userNames = allUsers.map(({ name, ...rest }) => name);

console.log("👥 All Users:", allUsers);
console.log("📋 User Names:", userNames);

// 🧾 Example Output:
// 👥 All Users: [
//   { id: 1, name: "Nebil", country: "Ethiopia" },
//   { id: 2, name: "John", country: "USA" },
//   { id: 3, name: "Alice", country: "UK" },
//   { id: 4, name: "Sara", country: "Canada" },
//   { id: 5, name: "David", country: "Germany" }
// ]
// 📋 User Names: ["Nebil", "John", "Alice", "Sara", "David"]
