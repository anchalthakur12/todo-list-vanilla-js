const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="this.parentElement.remove()">❌</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
