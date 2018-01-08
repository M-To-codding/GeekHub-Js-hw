'use strict';

var objArr = [];

function tableData() {
    var data = $('td'),
        obj = {};

    return obj = {
        player: $(data[data.length - 3]).text(),
        areaSize: $(data[data.length - 2]).text(),
        gameTime: $(data[data.length - 1]).text()
    };
}

function saveToLocalStorage() {
    var obj = new tableData();
    objArr.push(obj);

    localStorage.setItem('users', JSON.stringify(objArr));
}

function getAllUsers() {

    for (var i = 0; i < allSavedUsers.length; i++) {
        objArr.push(allSavedUsers[i]);

        $('.player-info').append('<tr><td class="player">' + objArr[i].player + '</td><td class="area-size">\n' + objArr[i].areaSize + '</td>\n<td class="time">' + objArr[i].gameTime + '</td></tr>');
    }
}