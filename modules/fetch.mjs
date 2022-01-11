let input = document.getElementById('input');

export let tasks = [
    'Add an array',
    'Create li element from input',
    'Add icon to delete tasks'
];
tasks = JSON.parse(localStorage.getItem("tasks"));

export function addLs() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function sortTasks() {
    tasks.sort(function (a, b) {
        return a.localeCompare(b);
    });
};

export function renderTasks() {
    ul.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.id = i;
        li.innerHTML = `${tasks[i]}`;

        let del = document.createElement('i');
        del.className = 'fas fa-check-circle';
        del.id = i;
        li.insertAdjacentElement('afterbegin', del);

        sortTasks();
    };
};

export function addTask() {
    tasks.push(input.value);
    addLs();
};