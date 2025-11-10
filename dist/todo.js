"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tasksComps = document.querySelector("ul");
let input = document.querySelector("input");
function addTask(e) {
    e.preventDefault();
    if (input.value == "") {
        alert("Add Task");
        return;
    }
    let newTaskItem = {
        text: document.createElement('span'),
        editButton: document.createElement('button'),
        deleteButton: document.createElement('button'),
    };
    let listItem = document.createElement('li');
    newTaskItem.text.textContent = input.value;
    newTaskItem.editButton.textContent = 'Edit';
    // Delete button
    let delete_button = document.createElement('button');
    delete_button.textContent = "Delete";
    newTaskItem.editButton.addEventListener("click", editTask);
    newTaskItem.deleteButton.addEventListener("click", deleteTask);
    listItem.appendChild(newTaskItem.text);
    listItem.appendChild(newTaskItem.editButton);
    listItem.appendChild(newTaskItem.deleteButton);
    tasksComps?.appendChild(listItem);
    input.value = '';
}
function editTask(e) {
    let target = e.target;
    let listItem = target.parentElement;
    let text = listItem?.querySelector('span');
    let newText = prompt('Edit task:', text ? text.textContent : '');
    if (newText == '') {
        alert("No text entered.");
        return;
    }
    text.textContent = newText;
}
function deleteTask(e) {
    console.log("Hi");
    let target = e.target;
    let listItem = target.parentElement;
    tasksComps?.removeChild(listItem);
}
//# sourceMappingURL=todo.js.map