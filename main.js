const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-submit");
const todoList = document.getElementById("todo-list");

todoInput.addEventListener("keypress", keyPressed);
todoSubmit.addEventListener("click", addTodo);

function keyPressed(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function addTodo() {
  if (todoInput.value.length > 0) {
    let todo = document.createElement("li");
    let todoText = document.createElement("p");

    todo.addEventListener("click", (e) => {
      todoClicked(e, todo);
    });
    todo.classList.add("unfinished");

    todoText.innerText = todoInput.value;
    todoInput.value = "";

    todo.appendChild(todoText);
    todoList.appendChild(todo);
  }
}

function todoClicked(event, element) {
  if (element.classList.contains("finished")) {
    element.classList.remove("finished");
    element.classList.add("unfinished");
  } else if (element.classList.contains("unfinished")) {
    element.classList.add("finished");
    element.classList.remove("unfinished");
  }
}
