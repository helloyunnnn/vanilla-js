const todoList = document.querySelector("#todo-list ul");
const todoForm = document.querySelector("#todo-list__form");
const todoInput = document.querySelector("#todo-list__form input");

let toDos = [];

const ITEM_TODO_LIST = "todolist";

function onTodoFormSubmit(event) {
  event.preventDefault();
  if (todoInput.value !== "") {
    const todoItem = {};
    todoItem.todo = todoInput.value;
    todoItem.ischecked = false;
    todoItem.id = Date.now();
    toDos.push(todoItem);
    localStorage.setItem(ITEM_TODO_LIST, JSON.stringify(toDos));

    paintToDo(todoItem);

    todoInput.value = "";
  }
}

function onCheckItem(event) {
  const li = event.target.parentElement;
  console.dir(li.childElementCount);
  const icon = li.querySelector(".fa-regular");
  const span = li.querySelector("span");

  const index = toDos.findIndex((todo) => todo.id === parseInt(li.id));
  if (index === -1) return;

  const checked = toDos[index].ischecked;
  if (checked) {
    toDos[index].ischecked = false;
    icon.className = `fa-regular fa-circle`;
    span.className = ``;
  } else {
    toDos[index].ischecked = true;
    icon.className = `fa-regular fa-circle-check`;
    span.className = `checked`;
  }

  localStorage.setItem(ITEM_TODO_LIST, JSON.stringify(toDos));
}

function onDeleteItem(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  localStorage.setItem(ITEM_TODO_LIST, JSON.stringify(toDos));
}

function onMouseEnter(event) {
  const x = event.target.querySelector(".fa-xmark");
  x.classList.remove(CLASS_HIDDEN);
}

function onMouseLeave(event) {
  const x = event.target.querySelector(".fa-xmark");
  x.classList.add(CLASS_HIDDEN);
}

function paintToDo(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;
  li.addEventListener("mouseenter", onMouseEnter);
  li.addEventListener("mouseleave", onMouseLeave);

  if (bgIndex === 0 || bgIndex === 3) {
    li.className = "black-span";
  } else {
    li.className = "white-span";
  }

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-regular");
  if (todoItem.ischecked) checkIcon.classList.add("fa-circle-check");
  else checkIcon.classList.add("fa-circle");
  checkIcon.addEventListener("click", onCheckItem);

  const span = document.createElement("span");
  span.innerText = todoItem.todo;
  if (todoItem.ischecked) span.className = `checked`;
  span.addEventListener("click", onCheckItem);

  const xIcon = document.createElement("i");
  xIcon.className = `fa-solid fa-xmark ${CLASS_HIDDEN}`;
  xIcon.addEventListener("click", onDeleteItem);

  li.appendChild(checkIcon);
  li.appendChild(span);
  li.appendChild(xIcon);
  console.log(li.innerHTML);
  todoList.appendChild(li);
}

const savedTodoList = JSON.parse(localStorage.getItem(ITEM_TODO_LIST));
if (savedTodoList !== null) {
  savedTodoList.forEach((todo) => {
    toDos.push(todo);
    paintToDo(todo);
  });
}
