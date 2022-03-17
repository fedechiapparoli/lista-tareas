//Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Conteiner
const taskConteiner = document.getElementById("taskConteiner");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { date: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  taskConteiner.prepend(task);
  event.target.reset();
};
const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};
const order = () => {
  const done = [];
  const toDo = [];
  taskConteiner.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};
const renderOrder = () => {
  order().forEach((el) => taskConteiner.appendChild(el));
};
setDate();
