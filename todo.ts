interface taskItem
{
    task:string
    id:number
}

let size = 0
let tasks:taskItem[] = []
let addbutton = document.querySelector("button")
let input = document.querySelector("input")

function addTask (taskText: string)
{
    let newTaskItem: taskItem = 
    {
        task: taskText,
        id: size
    }
    size++;
    tasks.push(newTaskItem);
}

function editTask (id:number, newText:string)
{
    tasks[id].task = newText
}

function deleteTask (id: number)
{
    tasks.splice(id,id)
}