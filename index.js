const {addNewTask, displayTasks, updateTask, removeCompletedTasks} = require('./controller/task_controller');


// example of task
let exampleAdd = {
    description: "Do the assignment",
    deadline: "2023-01-15 18:00:00",
    completed: false
}

addNewTask(exampleAdd);

// Tasks list
displayTasks();

// updating tasks
updateTask(1);

// removing tasks
removeCompletedTasks()