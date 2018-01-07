'use strict';

function timer(cell) {
    var time = 0;

    this.startTimer = setInterval(function () {
        time++;
        // console.clear();
        // console.log(time);
        $(cell).text(time + 's');
    }, 1000);

    this.resetTimer = function resetTimer() {
        clearInterval(this.startTimer);
        return time = 0;
    };
}