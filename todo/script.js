// Step 1: Create an empty array to store tasks
let tasks = [];

// Step 2: Function to add a task
function addTask(task) {
  tasks.push(task);
  console.log(`✅ "${task}" added to your list.`);
}

// Step 3: Function to list all tasks
function listTasks() {
  if (tasks.length === 0) {
    console.log("📭 No tasks in your list.");
  } else {
    console.log("📝 Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Step 4: Function to delete
function deleteTask(index) {
  if (index < 1 || index > tasks.length) {
    console.log("❌ Invalid task number.");
  } else {
    const removed = tasks.splice(index - 1, 1);
    console.log(`🗑️ "${removed[0]}" has been removed from your list.`);
  }
}

addTask("Study JavaScript");
addTask("Pray Maghrib");
listTasks();

deleteTask(1);
listTasks();
