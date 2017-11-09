function addEntityImg(className) {
    var that = this,
        element;

    that.className = className;
    element = document.createElement('div');
    element.classList.add(that.className);
    document.querySelector('.entity').appendChild(element);
}

function changeStatus(health) {
    var status;
    if (health >= 60) {
        status = 'good';
    } else if (health < 60) {
        status = 'medium';
    } else if (health === 0) {
        status = 'dead';
    }

    return status;
}

function changeEntityImg(status) {

    if (status === 'good') {
        if (document.querySelector('.flower') == undefined) {
            addEntityImg('flower');
        }
        if (document.querySelector('.flower').classList.contains('flower-bad')){
            document.querySelector('.flower').classList.remove('flower-bad');
        }
    } else if (status === 'medium') {
        if (document.querySelector('.flower-bad') == undefined) {
            document.querySelector('.flower').classList.add('flower-bad');
        }
    } else if (status === 'dead') {
        document.querySelector('.flower').classList.add('flower-dead');
    }
}
