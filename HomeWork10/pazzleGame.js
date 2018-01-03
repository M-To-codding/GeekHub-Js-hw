$(function () {

    for (let i = 3; i <= 10; i++) {
        $('.cells').append($(`<option value="${i}">${i}x${i}</option>`));
    }

})

function pazzleGame(cells) {
        cells = $('.cells option:selected').val() || 3;


    function changeWidthOfArea() {
        let areaSize = 355;

        if (cells > 3) {
            for (let i = 3; i<cells; i++) {
                areaSize += 110;
            }
        }

        $('.play-area').css('width', areaSize + 'px');
    }

    let elemCount = cells*cells,
        arrOfItems = [],
        pazzleItemObj = {};

    console.log(cells);

    if (document.querySelector('.grid-item')) {
        return;
    }

    function createGrid() {

        for (let i = 0; i < elemCount; i++) {
            arrOfItems[i] = `<div id="grid-item${i + 1}" class="grid-item"></div>`;
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
        let arrOfItems = [];

        if ($('.grid-item')) {

            for (let i = 0; i < elemCount; i++) {
                arrOfItems[i] = `<div id="pazzle-item${i + 1}" class="pazzle-item"></div>`;
            }

        }

        appendPazzleItems(arrOfItems);
    }

    function appendPazzleItems(arr) {

        let numArr = [];
        numArr = generateSomeNumbers();
        numArr = shuffle(numArr);

        for (let i = 0; i < (elemCount - 1); i++) {
            $(arr[i]).css('display', 'none');
            $(arr[i]).appendTo($('#grid-item' + (i + 1)));
            $('#pazzle-item' + (i + 1)).html(numArr[i]);

            $('.pazzle-item').fadeOut();
        }
        $('.pazzle-item').fadeIn();


    }

    function generateSomeNumbers() {

        let arrOfNums = [];

        for (let i = 0; i < elemCount; i++) {
            arrOfNums[i] = i + 1;
        }

        return arrOfNums;

    }

    function shuffle(array) {
        var currentIndex = array.length-1, tmp, randomIndex;

        console.log(currentIndex);
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex );
            currentIndex -= 1;

            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }

        return array;
    }

    function getItemPosition() {
        var allItems = $('.grid-item');

        for (let i = 0; i < allItems.length; i++) {
            if (!allItems[i].firstChild) {
                allItems[i].setAttribute('empty-cell', 'true');
                pazzleItemObj.emptyCellPosX = allItems[i].offsetLeft;
                pazzleItemObj.emptyCellPosY = allItems[i].offsetTop;
            }
        }

        // keyHandler();
        return pazzleItemObj;
    }

    function keyHandler() {
        let up = 38,
            left = 37,
            down = 40,
            right = 39,
            itemsArr = $('.grid-item'),
            emptyCell = $('[empty-cell=true]');

        $(window).keydown(function (e) {
            if (e.which == left) {

                for (let i = 0; i < itemsArr.length; i++) {
                    if ((itemsArr[i].offsetLeft - itemsArr[i].offsetWidth) == pazzleItemObj.emptyCellPosX &&
                        (itemsArr[i].offsetTop + itemsArr[i].offsetHeight) == pazzleItemObj.emptyCellPosY + itemsArr[i].offsetHeight) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        console.log(getItemPosition());
                        return;
                    }
                }

            }
            if (e.which == up) {

                for (let i = 0; i < itemsArr.length; i++) {
                    if ((itemsArr[i].offsetLeft + itemsArr[i].offsetWidth) == pazzleItemObj.emptyCellPosX + itemsArr[i].offsetWidth &&
                        (itemsArr[i].offsetTop - itemsArr[i].offsetHeight) == pazzleItemObj.emptyCellPosY) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        console.log(getItemPosition());
                        return;
                    }
                }

            }
            if (e.which == right) {

                for (let i = 0; i < itemsArr.length; i++) {
                    if ((itemsArr[i].offsetLeft + itemsArr[i].offsetWidth) == pazzleItemObj.emptyCellPosX &&
                        (itemsArr[i].offsetTop + itemsArr[i].offsetHeight) == pazzleItemObj.emptyCellPosY + itemsArr[i].offsetHeight) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        console.log(getItemPosition());
                        return;
                    }
                }
                // console.log(emptyCell);
            }
            if (e.which == down) {

                for (let i = 0; i < itemsArr.length; i++) {
                    if ((itemsArr[i].offsetLeft + itemsArr[i].offsetWidth) == pazzleItemObj.emptyCellPosX + itemsArr[i].offsetWidth &&
                        (itemsArr[i].offsetTop + itemsArr[i].offsetHeight) == pazzleItemObj.emptyCellPosY) {

                        emptyCell = $('[empty-cell=true]');
                        $(itemsArr[i].firstChild).appendTo(emptyCell);
                        emptyCell.removeAttr('empty-cell');
                        getItemPosition();
                        emptyCell = $('[empty-cell=true]');
                        console.log(getItemPosition());
                        return;
                    }
                }

            }

            checkWin();
        })
    }

    function checkWin() {
        var arrOfItems = $('.grid-item'),
            checkNumbers = [],
            itemsNum = arrOfItems.text;
            message = $('<div class="message-for-winner">You win!!!</div>');

        for (var i = 0; i < arrOfItems.length; i++) {

            checkNumbers[i] = '' + (i+1);
        }

        if (checkNumbers == itemsNum){
            (message).appendTo($('.play-area'));
        }
    }

    createGrid(cells);
    changeWidthOfArea();
    setTimeout(createPazzleItems, 500);
    setTimeout(getItemPosition, 500);
    setTimeout(keyHandler, 100);

}

function restartGame() {
    $('.grid-item').remove();
    pazzleGame(3, 3);
}