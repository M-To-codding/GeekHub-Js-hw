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
};