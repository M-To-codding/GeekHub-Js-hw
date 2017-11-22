var taskObj = {
        taskId: function (idOfTask) {
            this.idOfTask = idOfTask;
        },
        getTaskId: function () {
            return this.idOfTask;
        },
        isActive: function (active) {
            if (!active) {
                this.active = '';
            } else {
                this.active = active;
            }
        },
        getIsActive: function () {
            return this.active;
        },
        taskDate: function (dateOfTask) {
            this.dateOfTask = dateOfTask;
        },
        getTaskDate: function () {
            return this.dateOfTask;
        },
        taskText: function (text) {
            this.text = text;
        },
        getTaskText: function () {
            return this.text;
        }
    },

    tasksArr = [],
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

function createButton(value, buttonClass, funcName) {
    var button;

    button = document.createElement('button');
    button.innerText = value;
    button.classList.add(buttonClass);
    button.addEventListener('click', function () {
        funcName(event);
    });

    for (var i = 0; i < tasksArr.length; i++) {
        button.id = buttonClass + '-' + tasksArr[i].idOfTask;
        document.getElementById(tasksArr[i].idOfTask).appendChild(button);
    }
}

function editButton() {
    createButton('Edit', 'edit-button', edit);
}

function edit(e) {
    var editInput,
        inputId = e.currentTarget.parentNode.id + '-edit-input',
        inputById = e.currentTarget.parentNode.querySelector('#' + inputId);
    e.currentTarget.parentNode.querySelector('#edit-button-' + e.currentTarget.parentNode.id).innerText = 'Save';

    console.log(e.currentTarget.parentNode.id + '-edit-input');
    if (!inputById) {
        editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.id = inputId;
        editInput.value = e.currentTarget.parentNode.querySelector('.task-text').innerText;
        document.getElementById(e.currentTarget.parentNode.id).appendChild(editInput);
    } else {
        inputById.classList.toggle('display-none');
        e.currentTarget.parentNode.querySelector('.task-text').innerText = inputById.value;

        for (var i = 0; i < tasksArr.length; i++) {

            if (tasksArr[i].idOfTask === e.currentTarget.parentNode.id) {
                tasksArr[i].text = inputById.value;
                console.log(tasksArr[i].text);
                localStorage.setItem('item', JSON.stringify(tasksArr));
                window.location.reload();
            }
        }
    }
}

function deleteButton() {
    createButton('Delete', 'delete-button', deleteTask);
}

function deleteTask(e) {
    var currentTask = e.currentTarget.parentNode;

    for (i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].idOfTask === e.currentTarget.parentNode.id) {
            tasksArr.splice(i, 1);
        }
    }
    currentTask.remove();

    localStorage.setItem('item', JSON.stringify(tasksArr));
    window.location.reload();
}

function changeTaskStatusButton() {
    var elements = document.getElementsByClassName('task');
    createButton('Done', 'change-status-button', changeTaskStatus);
    for (i = 0; i < tasksArr.length; i++) {
        if (elements[i].classList.contains('done')) {
            document.querySelector('#change-status-button-' + tasksArr[i].idOfTask).innerText = 'Undo';
        }
    }
}

function changeTaskStatus(e) {
    e.currentTarget.parentNode.classList.toggle('done');

    if (e.currentTarget.parentNode.classList.contains('done')) {
        taskObj.isActive('done');
        console.log(taskObj.getIsActive() + '\n ffkfk');
    } else {
        taskObj.isActive('active');
    }

    for (var i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].idOfTask === e.currentTarget.parentNode.id) {
            tasksArr[i].active = taskObj.getIsActive();
        }
    }

    localStorage.setItem('item', JSON.stringify(tasksArr));
    window.location.reload();

}

function generateTaskButtons() {
    editButton();
    changeTaskStatusButton();
    deleteButton();
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