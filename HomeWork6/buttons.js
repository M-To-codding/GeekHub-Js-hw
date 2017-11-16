function createButton(buttonClass, taskId) {
    var button;

    button = document.createElement('button');
    button.classList.add(buttonClass);
    document.getElementById(taskId).appendChild(button);

    return button;
}

function generateDeleteButton(taskId) {
    var deleteButton;

    deleteButton = createButton('delete-button', taskId);
    deleteButton.innerHTML = 'Delete';

    for (var i = 1; i <= document.getElementById('tasks-container').children.length; i++) {
        deleteButton.id = taskId + '-button';
    }

    deleteButton.addEventListener('click', function () {
        deleteTask(taskId);
    });

}

function generateEditButton(taskId) {
    var editButton;

    editButton = createButton('edit-button', taskId);
    editButton.type = 'submit';
    editButton.innerHTML = 'Edit';

    for (var i = 1; i <= document.getElementById('tasks-container').children.length; i++) {
        editButton.id = taskId + '-edit-button';
    }

    editButton.addEventListener('click', function () {
        editTask(taskId);
    });
}

function generateChangeStatusButton(taskId) {
    var changeStatusButton, taskStatus;

    changeStatusButton = createButton('change-status-button', taskId);
    changeStatusButton.innerHTML = 'Done';

    for (var i = 1; i <= document.getElementById('tasks-container').children.length; i++) {
        changeStatusButton.id = taskId + '-change-status-button';
    }

    changeStatusButton.addEventListener('click', function () {
        taskStatus = changeTaskStatus(taskId, taskStatus);
        changeTaskStatus(taskId, taskStatus);
        taskObj.setStatus(taskStatus);
        console.log(taskStatus);
    });
}
