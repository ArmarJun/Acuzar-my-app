let todos = [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        todos.push(todoText);
        renderTodos();
        todoInput.value = "";
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.onclick = function() {
            removeTodo(index);
        };
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Initial render
renderTodos();