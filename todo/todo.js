const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.querySelector(".add");

const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "lineThrough";

let todoList, id;

let data = localStorage.getItem("todo");

if (data) {
  todoList = JSON.parse(data);
  id = todoList.length;
  loadList(todoList);
} else {
  todoList = [];
  id = 0;
}
function loadList(arr) {
  arr.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

add.addEventListener("click", function () {
  input.focus();
});

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const finished = done ? check : uncheck;
  const line = done ? lineThrough : "";
  const item = `
            <li class = "item">
                <div>
                <i class=" far ${finished} complete" job="complete" id="${id}"></i>
                <span><p class="text ${line}">${toDo}</p></span>
                
                <i class="far fa-trash-alt delete" job="delete" id="${id}"></i>
                </div>
            </li>
            `;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      todoList.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      localStorage.setItem("todo", JSON.stringify(todoList));
      id++;
    }
    input.value = "";
  }
});

function completeToDo(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text").classList.toggle(lineThrough);
  todoList[element.id].done = todoList[element.id].done ? false : true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  todoList[element.id].trash = true;
}

list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
  localStorage.setItem("todo", JSON.stringify(todoList));
});
