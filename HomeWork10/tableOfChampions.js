let playerCount = 0;

function getPlayerData() {

    let playerName = prompt('Your name'),
        areaSize = $('.cells option:selected').val(),
        time = 0 + 's';

    if (playerName === null) {
        return false;
    }

    if (!playerName && $('td').text() !== 'Unknown-' + playerCount) {
        playerName = 'Unknown-' + playerCount;
    }
    if (playerName == 'Unknown-' + playerCount) {
        playerCount++;
        playerName = 'Unknown-' + playerCount;
    }

    pasteDataInTable(playerName, areaSize, time);

}

function pasteDataInTable(playerName, areaSize, time) {

    $('.player-info').append(`<tr><td class="player">${playerName}</td><td class="area-size">${areaSize}x${areaSize}</td>
<td class="time time-cell">${time}</td></tr>`);

}

