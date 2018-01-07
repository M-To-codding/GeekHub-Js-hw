'use strict';

window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(function () {

    for (var i = 3; i <= 10; i++) {
        $('.cells').append($('<option value="' + i + '">' + i + 'x' + i + '</option>'));
    }
});

var counter = {};

function pazzleGame(cells) {

    if (getPlayerData() === false) {

        $('.play-btn').removeAttr('disabled');
        $('.restart-btn').attr('disabled', 'true');

        return;
    }
    ;

    cells = $('.cells option:selected').val() || 3;
    $('.play-btn').attr('disabled', 'true');
    $('.restart-btn').removeAttr('disabled');

    function changeWidthOfArea() {
        var areaSize = 355;

        if (cells > 3) {
            for (var i = 3; i < cells; i++) {
                areaSize += 110;
            }
        }

        $('.play-area').css('width', areaSize + 'px');
    }

    var elemCount = cells * cells,
        arrOfItems = [],
        pazzleItemObj = {};

    if (document.querySelector('.grid-item')) {
        return;
    }

    function createGrid() {

        for (var i = 0; i < elemCount; i++) {
            arrOfItems[i] = '<div id="grid-item' + (i + 1) + '" class="grid-item"></div>';
        }

        appendGridItems(arrOfItems);
    }

    function appendGridItems(arr) {

        $.each(arr, function (index, value) {
            $(value).css('display', 'none');
            $(value).appendTo('.play-area');
        });
        $('.grid-item').fadeOut('100');
        $('.grid-item').fadeIn('1000');
    }

    function createPazzleItems() {
        var arrOfItems = [];

        if ($('.grid-item')) {

            for (var i = 0; i < elemCount; i++) {
                arrOfItems[i] = '<div id="pazzle-item' + (i + 1) + '" class="pazzle-item"></div>';
            }
        }

        appendPazzleItems(arrOfItems);
    }

    function appendPazzleItems(arr) {

        var numArr = [];
        numArr = generateSomeNumbers();
        numArr = shuffle(numArr);

        for (var i = 0; i < elemCount - 1; i++) {
            $(arr[i]).css('display', 'none');
            $(arr[i]).appendTo($('#grid-item' + (i + 1)));
            $('#pazzle-item' + (i + 1)).html(numArr[i]);

            $('.pazzle-item').fadeOut();
        }
        $('.pazzle-item').fadeIn();
    }

    function generateSomeNumbers() {

        var arrOfNums = [];

        for (var i = 0; i < elemCount; i++) {
            arrOfNums[i] = i + 1;
        }

        return arrOfNums;
    }

    function shuffle(array) {
        var currentIndex = array.length - 1,
            tmp,
            randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }

        return array;
    }

    function getItemPosition() {
        var allItems = $('.grid-item');

        for (var i = 0; i < allItems.length; i++) {
            if (!allItems[i].firstChild) {
                allItems[i].setAttribute('empty-cell', 'true');
                pazzleItemObj.emptyCellPosX = allItems[i].offsetLeft;
                pazzleItemObj.emptyCellPosY = allItems[i].offsetTop;
            }
        }

        checkWin();

        return pazzleItemObj;
    }

    function keyHandler() {
        var up = 38,
            left = 37,
            down = 40,
            right = 39,
            itemsArr = $('.grid-item'),
            emptyCell = $('[empty-cell=true]');

        $(window).keydown(function (e) {

            if (e.which == left) {

                for (var i = 0; i < itemsArr.length; i++) {
                    if (itemsArr[i].offsetLeft - itemsArr[i].offsetWidth == pazzleItemObj.emptyCellPosX && itemsArr[i].offsetTop + itemsArr[i].offsetHeight == pazzleItemObj.emptyCellPosY + itemsArr[i].offsetHeight) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        return;
                    }
                }
            }
            if (e.which == up) {

                for (var _i = 0; _i < itemsArr.length; _i++) {
                    if (itemsArr[_i].offsetLeft + itemsArr[_i].offsetWidth == pazzleItemObj.emptyCellPosX + itemsArr[_i].offsetWidth && itemsArr[_i].offsetTop - itemsArr[_i].offsetHeight == pazzleItemObj.emptyCellPosY) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[_i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        return;
                    }
                }
            }
            if (e.which == right) {

                for (var _i2 = 0; _i2 < itemsArr.length; _i2++) {
                    if (itemsArr[_i2].offsetLeft + itemsArr[_i2].offsetWidth == pazzleItemObj.emptyCellPosX && itemsArr[_i2].offsetTop + itemsArr[_i2].offsetHeight == pazzleItemObj.emptyCellPosY + itemsArr[_i2].offsetHeight) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[_i2].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        return;
                    }
                }
            }
            if (e.which == down) {

                for (var _i3 = 0; _i3 < itemsArr.length; _i3++) {
                    if (itemsArr[_i3].offsetLeft + itemsArr[_i3].offsetWidth == pazzleItemObj.emptyCellPosX + itemsArr[_i3].offsetWidth && itemsArr[_i3].offsetTop + itemsArr[_i3].offsetHeight == pazzleItemObj.emptyCellPosY) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[_i3].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        return;
                    }
                }
            }
        });
    }

    function checkWin() {
        var arrOfItems = $('.grid-item'),
            checkNumbers = [],
            itemsNum = [],
            message = $('<div class="message-for-winner">You win!!!</div>'),
            str = void 0;

        for (var i = 0; i < arrOfItems.length; i++) {
            itemsNum[i] = arrOfItems[i].innerText;
        }

        for (var i = 0; i < arrOfItems.length - 1; i++) {
            checkNumbers[i] = i + 1;
        }

        if (!str) {
            str = itemsNum.join('');
            str = str.split('\n').join('');
            str = str.split('\n').join('');
        }

        if (checkNumbers.join('') == str) {

            message.appendTo($('.play-area'));
            $('.time-cell').removeClass('time-cell');
            counter.resetTimer();
            $(window).off('keydown');
            console.log('Win!!!');
        }

        console.log('checkNumbers ' + checkNumbers.join('') + '\n' + 'itemsNum ' + str);
    }

    createGrid(cells);
    changeWidthOfArea();
    setTimeout(createPazzleItems, 500);
    setTimeout(getItemPosition, 500);
    setTimeout(keyHandler, 100);
    counter = new timer('.time-cell');
}

function restartGame() {
    $('.time-cell').removeClass('time-cell');
    counter.resetTimer();
    $('.message-for-winner').remove();

    $('.grid-item').remove();
    pazzleGame(3, 3);
}