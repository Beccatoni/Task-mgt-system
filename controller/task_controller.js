let  {tasks} = require('../db/task_list');


// Adding a new task
const addNewTask = (task) =>{
    task.taskNumber = tasks.length + 1;
    tasks.push(task);
    console.log('Here is the list of tasks you ought to do:', tasks);
}

// displaying the list of tasks
const displayTasks = () => {
    console.log('Here is the list of tasks you ought to do:', tasks);
}

// updating one task by task number
const updateTask = (taskNumber) => {
    const taskExists = tasks.find(ele => ele.taskNumber === taskNumber);

    if (taskExists) {
        taskExists.completed =!taskExists.completed;
        console.log('Here is the list of tasks you updated:', tasks);
    } else {
        console.log('Task not found');
    
}
}

// update many properties


// remove tasks
const removeCompletedTasks = () => {
    tasks= tasks.filter(task => !task.completed);
    console.log('Here is the list of tasks without completed tasks:', tasks);
};




module.exports = {
    addNewTask,
    displayTasks,
    updateTask,
    removeCompletedTasks,
}
