import { tasks, addLs, renderTasks, addTask } from './modules/fetch.mjs';


let addBtn = document.getElementById('addBtn');
let ul = document.getElementById('ul');

renderTasks();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
    renderTasks();
});

ul.addEventListener('click', (e) => {
    tasks.splice(e.target.id, 1);
    renderTasks();
    addLs();
    console.log(e.target.id);
});