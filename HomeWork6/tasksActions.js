var count = 1;
function createTask(e) {
    var task, taskText, date, dateHtml;

    taskText = document.createElement('span');
    taskText.classList.add('task-text');
    if (!document.getElementById('task-input').value) {
        return;
    } else {
        taskText.innerHTML = document.getElementById('task-input').value;
    }

    task = document.createElement('li');
    task.classList.add('task');
    task.id = 'task-' + count;
    task.appendChild(taskText);

    date = new Date();
    dateHtml = document.createElement('p');
    dateHtml.classList.add('task-date');


    if (e.keyCode === 13 || e === 13) {
        document.getElementById('tasks-container').appendChild(task);
        document.getElementById('task-input').value = '';

        taskObj.setId(task.id);
        generateEditButton(taskObj.getId());
        generateChangeStatusButton(taskObj.getId());
        generateDeleteButton(taskObj.getId());

        count++;

        if (document.querySelector('.empty-container').style.display !== 'none') {
            document.querySelector('.empty-container').style.display = 'none';
        }

        document.getElementById(taskObj.getId()).appendChild(dateHtml);
        document.querySelector('#' + taskObj.getId() + '>.task-date').innerHTML = date.getFullYear() + '-' + date.getMonth() +
            '-' + date.getDay() + ', ' + date.getHours() + ':' + date.getMinutes();

    }
}

function deleteTask(taskId) {
    document.getElementById(taskId).remove();
}

function editTask(taskId) {
    var input,
        task = document.getElementById(taskId),
        textSelector = '#' + taskId + '>.task-text',
        taskText = document.querySelector(textSelector),
        createdInput = document.getElementById(taskId + '-input'),
        changedValue;

    if (!document.getElementById(taskId + '-input')) {

        input = document.createElement('input');
        input.id = taskId + '-input';
        input.type = 'text';
        task.insertBefore(input, taskText);

    } else {
        input = createdInput;
    }

    document.getElementById(taskId + '-input').addEventListener('keyup', function () {
        saveText(event);
    });

    input.value = taskText.innerText;
    input.style.display = 'block';
    taskText.style.display = 'none';

    function saveText(event) {
        if (event.keyCode === 13) {
            changedValue = input.value;
            taskText.innerText = changedValue;
            taskText.style.display = 'block';
            input.style.display = 'none';
        }
    }
}

function changeTaskStatus(taskId, status) {
    if (status) {
        document.getElementById(taskId).style.backgroundColor = 'rgb(170, 255, 244)';
        document.querySelector('#' + taskId + '>.change-status-button').innerText = 'Set to active';

        status = false;
    } else {
        document.getElementById(taskId).style.backgroundColor = '';
        document.querySelector('#' + taskId + '>.change-status-button').innerText = 'Done';

        status = true;
    }

    return status;
}

function reverseTasks() {
    var tasksContainer = document.getElementById('tasks-container');

    if (!tasksContainer.classList.contains('reverse')) {
        tasksContainer.classList.add('reverse');
    } else {
        tasksContainer.classList.remove('reverse');
    }
}

function showFinishedTasks() {
    var tasksContainer = document.getElementById('tasks-container');

    for (var i = 0; i < tasksContainer.children.length; i++) {
        if (tasksContainer.children[i].style.backgroundColor === 'rgb(170, 255, 244)') {
            tasksContainer.children[i].style.display = 'flex';
        } else {
            tasksContainer.children[i].style.display = 'none';
        }
    }
}

function showActiveTasks() {
    var tasks = document.getElementsByClassName('task');

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].style.backgroundColor !== 'rgb(170, 255, 244)') {
            tasks[i].style.display = 'flex';
        } else {
            tasks[i].style.display = 'none';
        }
    }
}

function showAllTasks() {
    var tasks;

    tasks = document.getElementsByClassName('task');

    for (var i = 0; i < tasks.length; i++) {
        document.getElementsByClassName('task')[i] = tasks[i].style.display = 'flex';
    }
}