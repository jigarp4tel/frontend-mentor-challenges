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

const form = document.querySelector('form')
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
const itemsLeft = document.querySelector('.items-left');
const clearCompleteBtn = document.querySelector('#clear');
const activeBtn = document.querySelector('#active-btn');
const allBtn = document.querySelector('#all-btn');
const completedBtn = document.querySelector('#completed-btn');



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
    newTodo.classList.add("active");
    newTodo.setAttribute('draggable', true);
    todoList.appendChild(newTodo);

    //Clear todo input value
    todoInput.value = "";
    itemsCounter();

    dragNdropEventListeners(newTodo);

}

let draggedItem = null;

function dragStart(e) {
    this.style.opacity = '0.4';

    draggedItem = this;

    setTimeout(function () {
        draggedItem.style.display = 'none';
    }, 0)

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}



function dragEnd() {
    setTimeout(function () {
        draggedItem.style.display = 'flex';
        draggedItem.style.opacity = '1';
        draggedItem = null;
    }, 0)

}

function dragDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    if (draggedItem != this) {
        draggedItem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}


function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
        itemsCounter();
    }

    //Complete Todo
    if (item.type === 'checkbox') {
        item.parentElement.parentElement.classList.toggle('active')
        item.parentElement.parentElement.classList.toggle('complete')
    }
}



function itemsCounter() {
    itemsLeft.innerText = todoList.getElementsByTagName('li').length + ' ' + ' items left';
}


function clearCompleted() {
    const items = document.querySelectorAll('.todo-list li');

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList[0] === 'complete') {
            items[i].remove()
        }
    }

    itemsCounter()
}

function dragNdropEventListeners(item) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragend', dragEnd);
}


function showActive(e) {
    const todos = todoList.children;
    console.log(todos)

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].classList.contains("active")) {
            todos[i].style.display = "flex"
        } else {
            todos[i].style.display = "none"
        }
    }
}

function showAll(e) {
    const todos = todoList.children;
    console.log(todos)

    for (let i = 0; i < todos.length; i++) {
        todos[i].style.display = "flex"
    }

}

function showCompleted(e) {
    const todos = todoList.children;
    console.log(todos)

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].classList.contains("complete")) {
            todos[i].style.display = "flex"
        } else {
            todos[i].style.display = "none"
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
})

todoList.addEventListener('click', deleteTodo);
clearCompleteBtn.addEventListener('click', clearCompleted);
activeBtn.addEventListener('click', showActive)
allBtn.addEventListener('click', showAll)
completedBtn.addEventListener('click', showCompleted)
