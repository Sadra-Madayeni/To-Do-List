const inputAddText = document.querySelector('.add-task input');

const addButton = document.querySelector('.button');

const finished = document.querySelector('#Checklist #finish');

const notFinished = document.querySelector('#Checklist #notfinished');

const ul = document.querySelector('ul');

addButton.addEventListener('click', addTasks);

ul.addEventListener('click', Check);

finished.addEventListener('click', filterTasks);

notFinished.addEventListener('click', filterTasks);


inputAddText.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTasks(e);
    }
});

document.addEventListener('DOMContentLoaded', loadTasks);

function addTasks(e) {

    e.preventDefault();

    if (inputAddText.value.trim() !== '') {
        const newTaskHTML = `
            <li>
                <span class="name">${inputAddText.value}</span>
                <input type="checkbox">
            </li>
        `;
        ul.innerHTML += newTaskHTML;

        storeToLocalStorage(inputAddText.value);

        inputAddText.value = '';
    }
}

function Check(e) {
    if (e.target.type === 'checkbox') {

        filterTasks();
    }
}

function filterTasks() {

    const isFinishedSelected = finished.checked;

    const isNotFinishedSelected = notFinished.checked;

    const listItems = ul.querySelectorAll('li');

    listItems.forEach(function (item) {

        const checkbox = item.querySelector('input[type="checkbox"]');
        if (isFinishedSelected) {
            if (checkbox.checked) {
                item.style.display = '';
            }
            else {
                item.style.display = 'none';
            }
        } 
        else if (isNotFinishedSelected) {
            if (checkbox.checked) {

                item.style.display = 'none';
            }
            else {
                item.style.display = '';
            }
        }
    });
}

function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {

        tasks = tasks.split(',');

        tasks.forEach(function (task) {
            const newTaskHTML = `
                <li>
                    <span class="name">${task}</span>
                    <input type="checkbox">
                </li>
            `;
            ul.innerHTML += newTaskHTML;
        });
    }
    filterTasks();
}

function storeToLocalStorage(task) {
    let tasks = localStorage.getItem('tasks');

    if (tasks) {
        tasks = tasks.split(',');
    } else {
        tasks = [];
    }

    tasks.push(task);

    localStorage.setItem('tasks', tasks.join(','));
}
