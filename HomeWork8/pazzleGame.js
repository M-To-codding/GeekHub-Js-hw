function pazzleGame(cols, rows) {
    let elemCount = cols * rows,
        arrOfItems = [];

    if (document.querySelectorAll('.grid-item').length == elemCount) {
        return;
    }

    function createGrid() {

        for (let i = 0; i < elemCount; i++) {
            arrOfItems[i] = '<div id="grid-item' + (i + 1) + '" class="grid-item"></div>';
        }

        appendGridItems(arrOfItems);

    }

    function appendGridItems(arr) {

        $.each(arr, function (index, value) {
            $(value).css('display', 'none');
            $(value).appendTo('.play-area');
            $('.grid-item').fadeOut('400');
            $('.grid-item').fadeIn('100');
        });
    }

    function createPazzleItems() {
        let arrOfItems = [];

        if ($('.grid-item')) {

            for (let i = 0; i < elemCount; i++) {
                arrOfItems[i] = '<div id="pazzle-item' + (i + 1) + '" class="pazzle-item"></div>';
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
            $('.pazzle-item').fadeOut('400');
            $('.pazzle-item').fadeIn('100');
        }

        console.log(numArr);

    }

    function generateSomeNumbers() {

        let arrOfNums = [];
        // tmp = Math.floor(Math.random() * elemCount + 1);

        for (let i = 0; i < elemCount; i++) {
            arrOfNums[i] = i + 1;
        }

        return arrOfNums;

    }

    function shuffle(array) {
        var currentIndex = array.length, tmp, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }

        return array;
    }

    createGrid(cols, rows);
    setTimeout(createPazzleItems, 1000);
}