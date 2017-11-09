function Flower() {
    var that = this,
        element;

    Entity.call(that, name);
    name = "Flower";

    element = document.createElement('main');
    element.classList.add('entity');

    function changeHealthStatus() {
        var healthStatus;
        changeHappinessStatus(that.health);

        if (that.health !== 0) {
            that.health -= 2;
            document.querySelector('.health-count').innerHTML = that.health;
            healthStatus = changeStatus(that.health);
            changeEntityImg(healthStatus);
        } else {
            changeEntityImg('dead');
        }
    }

    function changeHappinessStatus(health) {
        if (health !== 0) {
            if (health < 60) {
                if (that.happiness === 0) {
                    return document.querySelector('.happiness-count').innerHTML = 0;
                } else {
                    that.happiness -= 2;
                    document.querySelector('.happiness-count').innerHTML = that.happiness;
                }
            }
        }
    }

    function changeSatietyStatus() {

        if (that.health !== 0) {
            if (that.satiety !== 0) {
                that.satiety -= 5;
                document.querySelector('.satiety-count').innerHTML = that.satiety;
            }
        }
    }

    function changePowerStatus(health) {
        if (that.health !== 0) {
            if (that.health < 80) {
                if (that.power === 0) {
                    document.querySelector('.power-count').innerHTML = 0;
                } else {
                    that.power--;
                    document.querySelector('.power-count').innerHTML = that.power;
                }
            }
        }
    }

    function changeWearinessStatus() {
        if (that.health !== 0) {
            if (that.weariness !== 0) {
                if (that.power < 8 || that.health < 75) {
                    that.weariness -= 2;
                    document.querySelector('.weariness-count').innerHTML = that.weariness;
                }
            }
        }
    }

    changeEntityImg(status);
    element.innerHTML = '<div class="container">' +
        '<p class="entity-item name">' + '<h3 class="name"><b>Name:</b> ' + name + '</h3></p>' +
        '<p class="entity-item health">' + '<i class="fa fa-heartbeat" aria-hidden="true"></i><b>Health:</b> ' + '<span class="health-count"> ' + that.health + '</span></p>' +
        '<p class="entity-item satiety">' + '<i class="fa fa-cutlery" aria-hidden="true"></i><b>Satiety</b>: ' + '<span class="satiety-count"> ' + that.satiety + '</span></p>' +
        '<p class="entity-item power">' + '<i class="fa fa-battery-three-quarters" aria-hidden="true"></i><b>Power:</b> ' + '<span class="power-count"> ' + that.power + '</span></p>' +
        '<p class="entity-item happiness">' + '<i class="fa fa-child" aria-hidden="true"></i><b>Happiness:</b> ' + '<span class="happiness-count"> ' + that.happiness + '</span></p>' +
        '<p class="entity-item weariness">' + '<i class="fa fa-moon-o" aria-hidden="true"></i><b>Weariness:</b> ' + '<span class="weariness-count"> ' + that.weariness + '</span></p>'
        + '</div>';

    document.body.appendChild(element);
    addEntityImg('flower');

    setInterval(changeHealthStatus, 1500);
    setInterval(changeSatietyStatus, 3000);
    setInterval(changePowerStatus, 5000);
    setInterval(changeWearinessStatus, 2000);
}

var flower = new Flower('Flower');