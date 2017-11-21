var taskObj = {
        taskId: function (idOfTask) {
            this.idOfTask = idOfTask;
        },
        getTaskId: function () {
            return this.idOfTask;
        },
        isActive: function (active) {
            this.active = active;
        },
        getIsActive: function (active) {
            return this.active;
        },
        taskDate: function (dateOfTask) {
            this.dateOfTask = dateOfTask;
        },
        getTaskDate: function (dateOfTask) {
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
    allSavedItems = JSON.parse(localStorage.getItem('item')),
    count = 1;


if (!allSavedItems) {
    allSavedItems = [];
} else {
    getAllTasks();
}


function createTask(event) {
    var task,
        taskInputValue = document.getElementById('task-input').value;

    if (taskInputValue) {
        task = document.createElement('li');
        task.innerHTML = '<span class="task-text">' + taskInputValue + '</span>';

        task.id = 'task-' + count;
        for (i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].idOfTask === task.id) {
                task.id = '';
                task.id = 'task-' + count++;
            }
        }

        taskObj.taskText(taskInputValue);
        taskObj.taskId(task.id);

        if (event.keyCode === 13 || event === 13) {
            document.getElementById('tasks-container').appendChild(task);
            document.getElementById('task-input').value = '';

            count++;
            saveTask();
        }
    }
}

function getAllTasks() {
    var task;

    for (var i = 0; i < allSavedItems.length; i++) {
        task = document.createElement('li');
        task.id = allSavedItems[i].idOfTask;
        task.classList.add('task');
        task.classList.add(allSavedItems[i].active);
        task.innerHTML = '<span class="task-text">' + allSavedItems[i].text + '</span>';

        document.getElementById('tasks-container').appendChild(task);
        tasksArr.push(allSavedItems[i]);
        generateTaskButtons();
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

}