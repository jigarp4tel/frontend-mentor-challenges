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

    newTodo.addEventListener('dragstart', dragStart);
    newTodo.addEventListener('dragover', dragOver);
    newTodo.addEventListener('drop', dragDrop);
    newTodo.addEventListener('dragend', dragEnd);
}

let draggedItem = null;

function dragStart() {
    console.log('start');
    draggedItem = this
    setTimeout(function () {
        draggedItem.style.display = 'none';
    }, 0)

}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd() {
    console.log('end');
    setTimeout(function () {
        draggedItem.style.display = 'flex';
        draggedItem = null;
    }, 0)
}

function dragDrop() {
    console.log('drop')
    todoList.appendChild(draggedItem);
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
})

todoList.addEventListener('click', deleteTodo);
clearCompleteBtn.addEventListener('click', clearCompleted);

