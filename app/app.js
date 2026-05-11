document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(task);
    saveTask(task);

    taskInput.value = "";
});

// Add task to UI
function addTaskToList(task) {
    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn">X</button>
    `;

    // Delete functionality
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
        removeTask(task);
    });

    taskList.appendChild(li);
}

// Save to localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks on refresh
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToList(task));
}

// Remove task from localStorage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

