var tasksArr = [],
    doneTasksArr = [],
    allSavedItems = JSON.parse(localStorage.getItem('item')),
    doneItems = JSON.parse(localStorage.getItem('item-done')),
    count = 1;


if (!allSavedItems) {
    allSavedItems = [];
} else {
    getAllTasks();
}

function createTask(event) {
    var task,
        taskInputValue = document.getElementById('task-input').value;

    var taskId;

    if (taskInputValue) {
        taskId = 'task-' + count;
        for (i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].idOfTask === taskId) {
                taskId = '';
                taskId = 'task-' + count++;
            }
        }

        taskObj.taskText(taskInputValue);
        taskObj.taskId(taskId);

        if (event.keyCode === 13 || event === 13) {

            document.getElementById('task-input').value = '';
            addTaskDate();
            saveTask();

            count++;
        }
    }
}

function getAllTasks() {
    var task, dateContainer;

    for (var i = 0; i < allSavedItems.length; i++) {
        task = document.createElement('li');
        task.id = allSavedItems[i].idOfTask;
        task.classList.add('task');
        task.classList.add(allSavedItems[i].active);
        task.innerHTML = '<span class="task-text">' + allSavedItems[i].text + '</span>';

        dateContainer = document.createElement('p');
        dateContainer.classList.add('task-date');
        dateContainer.innerText = allSavedItems[i].dateOfTask;

        document.getElementById('tasks-container').appendChild(task);
        tasksArr.push(allSavedItems[i]);
        generateTaskButtons();
        document.getElementById(allSavedItems[i].idOfTask).appendChild(dateContainer);
        count++;
    }
}

function saveTask() {
    tasksArr.push(taskObj);

    localStorage.setItem('item', JSON.stringify(tasksArr));
    window.location.reload();
}

function reverseTasks() {
    tasksArr.reverse();

    localStorage.setItem('item', JSON.stringify(tasksArr));
    window.location.reload();
}

function showActiveTasks() {
    var allTasks = document.querySelectorAll('.task');

    for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains('done')) {
            allTasks[i].style.display = 'none';
        } else {
            allTasks[i].style.display = 'flex';
        }
    }
}

function showFinishedTasks() {
    var allTasks = document.querySelectorAll('.task');

    for (var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].classList.contains('done')) {
            allTasks[i].style.display = 'flex';
        } else {
            allTasks[i].style.display = 'none';
        }
    }
}

function showAllTasks() {
    var allTasks = document.querySelectorAll('.task');

    for (var i = 0; i < allTasks.length; i++) {
        allTasks[i].style.display = 'flex';
    }
}

function addTaskDate() {
    var date = new Date(),
        dateContainer;

    dateContainer = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ' '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    taskObj.taskDate(dateContainer);

}