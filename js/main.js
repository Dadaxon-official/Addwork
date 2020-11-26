var allTasks = 0;
var doneTasks = 0;
var idTask = 1;


function addTask() {
    var task = document.getElementById('task').value;
    console.log(task);
    if (task != '') {
        document.getElementById('taskList').innerHTML += '' +
            '<div>' + idTask + ' . ' + '<label><input type="checkbox">' +
            '<span> ' + task + '</span></label></div>';
        document.getElementById('task').valueOf = '';
        idTask++;
        allTasks++;
    } else {
        alert('Enter task, please!')
    }
}

function addByEnter(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}