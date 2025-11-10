"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let size = 0;
let tasks = [];
let addbutton = document.querySelector("button");
let input = document.querySelector("input");
function addTask(taskText) {
    let newTaskItem = {
        task: taskText,
        id: size
    };
    size++;
    tasks.push(newTaskItem);
}
function editTask(id, newText) {
    tasks[id].task = newText;
}
function deleteTask(id) {
    tasks.splice(id, id);
}
//# sourceMappingURL=todo.js.map