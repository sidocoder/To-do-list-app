function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  checkbox.onchange = function () {
    span.classList.toggle("checked", this.checked);
  };

//edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function () {
    const updatedText = prompt("Edit your task:", span.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
      span.textContent = updatedText.trim();
    }
  };

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };


  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);


  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
