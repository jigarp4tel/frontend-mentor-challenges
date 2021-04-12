const themeToggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefer-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
themeToggleSwitch.addEventListener('change', switchTheme, false);



// Todo Functions

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
const itemsLeft = document.querySelector('.items-left');

todoList.addEventListener('click', deleteTodo);

function addTodo(e) {
    // Create new li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = `
    <label>
              <input type="checkbox">
              <span class="task">${todoInput.value}</span class="task">
    </label>
    `
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '<img src="./images/icon-cross.svg" alt="delete todo">';
    deleteBtn.classList.add("delete-btn");
    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);

    //Clear todo input value
    todoInput.value = "";
    itemsCounter();
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
})

function deleteTodo(e) {
    const item = e.target;
    console.log(item)
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
        itemsCounter();
    }
}

function itemsCounter(){
    console.log(todoList.getElementsByTagName('li').length);
    itemsLeft.innerText = todoList.getElementsByTagName('li').length + ' ' + ' items left';
    console.log(itemsLeft.innerText);
}
