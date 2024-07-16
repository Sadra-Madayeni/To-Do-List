const finishedTasksButton = '<input type="checkbox">';

const inputAddText = document.querySelector('.add-task input');

const addButton = document.querySelector('.button');


const finished = document.querySelector('#Checklist #finish');

const notFinished = document.querySelector('#Checklist #notfinished');


console.log(notFinished);

const ul = document.querySelector('ul');



ul.addEventListener('click', Check);


let check = false;

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
            item.style.display = checkbox.checked ? '' : 'none';
        } else if (isNotFinishedSelected) {
            item.style.display = checkbox.checked ? 'none' : '';
        }
    });
}



function addTasks(e) {
    if (inputAddText.value.trim() !== '') {
        const newTaskHTML = `
            <li>
                <span class="name">${inputAddText.value}</span>
                <input type="checkbox">
            </li>
        `;

        ul.innerHTML += newTaskHTML;

        storeToLocatStorage(inputAddText.value);

        inputAddText.value = '';
    }

    e.preventDefault();
}


document.addEventListener('DOMContentLoaded', test);



function test(e) {

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = localStorage.getItem('tasks').split(',');
    }

    for (let item of tasks) {

        const newTaskHTML = `
            <li>
                <span class="name">${item}</span>
                <input type="checkbox">
            </li>
        `;

        ul.innerHTML += newTaskHTML;
    }

    filterTasks();
}


function storeToLocatStorage(Tasks) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(Tasks);

    localStorage.setItem('tasks', tasks);
}


addButton.addEventListener('click', addTasks);



