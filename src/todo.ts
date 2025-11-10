interface taskItem
{
    task:string
    id:number
}

let size = 0
let tasks:taskItem[] = []


let addbutton = document.querySelector("button")
let tasksComps = document.querySelector("ul")
let input = document.querySelector("input")

function addTask (e:Event)
{

    e.preventDefault()

    if (input!.value == "")
    {
        alert("Add Task")
        return
    }

    let newTaskItem: taskItem = 
    {
        task: input!.value,
        id: size
    }


    size++;
    tasks.push(newTaskItem);

    let listItem = document.createElement('li')

    // Input Text
    let text = document.createElement('span');
    text.textContent = newTaskItem.task;

    // Edit button
    let edit_button = document.createElement('button')
    edit_button.textContent = 'Edit'

    // Delete button
    let delete_button = document.createElement('button')
    delete_button.textContent = "Delete"

    edit_button.addEventListener("click", editTask)
    delete_button.addEventListener("click", deleteTask)

    listItem.appendChild(text)
    listItem.appendChild(edit_button)
    listItem.appendChild(delete_button)
    tasksComps?.appendChild(listItem)
    input!.value = ''
}

function editTask (e:Event)
{
    let target = e.target as HTMLElement
    let listItem = target.parentElement
    let text = listItem?.querySelector('span')

    let newText = prompt('Edit task:', text ? text.textContent : '')
    
    if (newText == '')
    {
        alert("No text entered.")
        return
    }

    text!.textContent = newText;  
}

function deleteTask (e:Event)
{
    console.log("Hi")
    let target = e.target as HTMLButtonElement
    let listItem = target.parentElement
    tasksComps?.removeChild(listItem!)
}