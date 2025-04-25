const taskInput = document.getElementById("task_input");
const addTaskBtn = document.getElementById("add_task_btn");
const progress = document.getElementById("progress");
const progressNumber = document.getElementById("number");
const taskList = document.getElementById("task_list");

console.log("JS");
console.log(taskInput);
console.log(addTaskBtn);
console.log(progress);
console.log(progressNumber);
console.log(taskList);

const updateProgress = () => {
  const totalTask = taskList.children.length;
  const completedTasks = taskList.querySelectorAll(".checkbox:checked").length;

  // BARRA DE PROGRESSO
  progress.style.width = totalTask
    ? // CALCULO:
      `${(completedTasks / totalTask) * 100}%`
    : "0%";

  // ADIÇÃO DOS NÚMEROS
  progressNumber.textContent = `${completedTasks} / ${totalTask}`;
};

// ---------------------------------------------------------------------
// BOTÃO (evento de clicar)

const addTask = (event, completed = false, checkCompletion = true) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  // "trim" remove espaços na parte de trás e da frente da STRING

  if (!taskText) {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" class="checkbox" ${completed ? "checked" : ""}>
    <span>${taskText}</span>
    <div class="task_buttons">
        <button class="edit_btn">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button class="delete_btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    `;

  const checkbox = li.querySelector(".checkbox");
  const editBtn = li.querySelector(".edit_btn");

  // ---------------------------------------------------------------------
  // CHECK

  if (completed) {
    li.classList.add("completed");
    editBtn.disabled = true;
    editBtn.style.opacity = "0.5";
    editBtn.style.pointerEvents = "none";
    updateProgress();
  }

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    li.classList.toggle("completed", isChecked);
    editBtn.disabled = isChecked;
    editBtn.style.opacity = isChecked ? "0.5" : "1";
    editBtn.style.pointerEvents = isChecked ? "none" : "auto";
    updateProgress();
    saveTaskLocalStorage();
  });

  // ---------------------------------------------------------------------

  editBtn.addEventListener("click", () => {
    taskInput.value = li.querySelector("span").textContent;
    li.remove();
    updateProgress();
    saveTaskLocalStorage();
  });

  li.querySelector(".delete_btn").addEventListener("click", () => {
    li.remove();
    updateProgress();
    saveTaskLocalStorage();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
  updateProgress(checkCompletion);
  saveTaskLocalStorage();
};

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask(event);
  }
});

// ---------------------------------------------------------------------

const saveTaskLocalStorage = () => {
  const savedTasks = Array.from(taskList.querySelectorAll("li")).map((li) => ({
    text: li.querySelector("span").textContent,
    completed: li.querySelector(".checkbox").checked,
  }));

  localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

const loadTaskFromLocalStorage = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(({ text, completed }) => {
    const fakeEvent = { preventDefault: () => {} };
    taskInput.value = text;
    addTask(fakeEvent, completed, false);
  });

  updateProgress();
};

loadTaskFromLocalStorage();
