function feed() {
    //
    // element = document.createElement('img');
    // element.src = 'imgs/food.png';
    // document.body.appendChild(element);

    if (flower.health !==0) {
        if (flower.satiety < 50) {
            flower.satiety += 5;
            flower.health += 2;

            if (flower.health < 50) {
                flower.power += 2;
                document.querySelector('.health-count').innerHTML = flower.health;
            }

            if (flower.power < 10) {
                flower.power += 2;
                document.querySelector('.health-count').innerHTML = flower.power;
            }

            document.querySelector('.satiety-count').innerHTML = flower.satiety;

        } else {
            changeMessage('Flower is not hungry');
            setTimeout(function () {
                changeMessage(' ');
            }, 2000);
        }
    }
}

function treat() {

    if (flower.health !== 0) {
        if (flower.health < 99) {
            flower.health += 2;
            document.querySelector('.health-count').innerHTML = flower.health;

        } else {
            changeMessage('Flower is healthy');
            setTimeout(function () {
                changeMessage(' ');
            }, 2000);
        }
    }
}

function play() {

    if (flower.health !== 0) {
        if (flower.happiness < 50) {
            if (flower.satiety !== 0) {
                flower.happiness += 5;
                flower.power--;
                document.querySelector('.health-count').innerHTML = flower.health;
                document.querySelector('.power-count').innerHTML = flower.power;
            } else {
                changeMessage('Flower is tired');
                setTimeout(function () {
                    changeMessage(' ');
                }, 2000);
            }
        }
    }
}

function sleep() {

    if (flower.health !== 0) {
        if (flower.weariness < 50) {
            flower.weariness += 5;
            if (flower.power<10) {
                flower.power++;
                document.querySelector('.power-count').innerHTML = flower.power;
            }
            document.querySelector('.weariness-count').innerHTML = flower.weariness;
        } else {
            changeMessage('Flower is not tired');
            setTimeout(function () {
                changeMessage(' ');
            }, 2000);
        }
    }
}

function changeMessage(message) {
    var element = document.querySelector('.message-container');
    element.innerHTML = message;
}