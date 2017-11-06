function Entity(name) {
    var that = this;
    that.name = name;
    that.health = 100;
    that.satiety = 50;
    that.power = 10;
    that.happiness = 50;
    that.fatigue = 50;
    that.status = 'good';
};

function feed(food) {
    var element;

    element = document.createElement('img');
    element.src = food;
    document.body.appendChild(element);
}

function entityImg(className) {
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

function changeImg(status) {

    if (status === 'good') {
        if (document.querySelector('.flower') == undefined) {
            entityImg('flower');
        }
    } else if (status === 'medium') {
        if (document.querySelector('.flower-bad') == undefined) {
            document.querySelector('.flower').classList.add('flower-bad');
        }
    } else if (status === 'dead') {
        document.querySelector('.flower').classList.add('flower-dead');
    }
}

function Flower() {
    var that = this,
        element;

    Entity.call(that, name);
    name = "Flower";

    element = document.createElement('main');
    element.classList.add('entity');

    var healthStatus;

    function changeSatietyStatus(satiety) {

        if (that.satiety !== 0) {
            that.satiety -= 5;
            document.querySelector('.satiety-count').innerHTML = that.satiety;
        }
    }

    function changeHealthStatus() {

        if (that.health !== 0) {
            that.health -= 2;
            document.querySelector('.health-count').innerHTML = that.health;
            healthStatus = changeStatus(that.health);
            changeImg(healthStatus);
        } else {
            changeImg('dead');
        }
    }

    function changeHappinessStatus() {
        if (that.health < 60 || that.satiety < 30) {
            that.happiness = -5;
        }
    }

    function changePowerStatus() {
        if (that.health < 80) {
            that.power--;
        }
    }

    changeImg(status);
    element.innerHTML = '<div class="container">' +
        '<p class="entity-item name">' + '<h3 class="name"><b>Name:</b> ' + name + '</h3></p>' +
        '<p class="entity-item health">' + '<b>Health:</b> ' + '<span class="health-count"> ' + that.health + '</span></p>' +
        '<p class="entity-item health">' + '<b>Satiety</b>: ' + '<span class="satiety-count"> ' + that.satiety + '</span></p>' +
        '<p class="entity-item health">' + '<b>Power:</b> ' + '<span class="power-count"> ' + that.power + '</span></p>' +
        '<p class="entity-item health">' + '<b>Happiness:</b> ' + that.happiness + '</p>'
        + '</div>';

    document.body.appendChild(element);
    entityImg('flower');
    setTimeout(function () {
        setInterval(changeSatietyStatus, 3000);
    }, 3000);

    if (that.satiety > 35) {
        setInterval(changeHealthStatus, 3000);
    } else if (that.satiety <= 35) {
        setInterval(changeHealthStatus, 1000);
    }
}

var flower = new Flower('Flower');