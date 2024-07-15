const finishedTasksButton = '<input type="checkbox">';

const inputAddText = document.querySelector('.add-task input');

const addButton = document.querySelector('.button');

const ul = document.querySelector('ul');

function addTasks(e) {
    if (inputAddText.value.trim() !== '') {
        const newTaskHTML = `
            <li>
                <span class="name">${inputAddText.value}</span>
                <input type="checkbox">
            </li>
        `;

        ul.innerHTML += newTaskHTML;

        inputAddText.value = '';
    }

    e.preventDefault();
}


addButton.addEventListener('click', addTasks);



