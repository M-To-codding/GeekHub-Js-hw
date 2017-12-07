function pazzleGame(cols, rows) {
    let elemCount = '',
        arrOfItems = [];

    function createGrid(cols, rows) {
        elemCount = cols * rows;

        for (let i = 0; i < elemCount; i++) {
            arrOfItems[i] = '<div id="item' + (i + 1) + '" class="grid-item"></div>';
        }

        appendGridItems(arrOfItems);

    }

    function appendGridItems(arr) {

        $.each(arr, function (index, value) {
            $(value).css('display', 'none');
            $(value).appendTo('.play-area');
            $('.grid-item').fadeOut('slow');
            $('.grid-item').fadeIn('500');
        });

    }

    createGrid(cols, rows);


}