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



const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

function addTodo(e) {

    // Create new li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todoList.appendChild(newTodo);

    //Clear todo input value
    todoInput.value = "";
    console.log(todoList.getElementsByTagName('li').length);

    const itemsLeft = document.querySelector('.items-left');

    itemsLeft.innerText = todoList.getElementsByTagName('li').length + ' ' + ' items left';
    console.log(itemsLeft.innerText);
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
})
