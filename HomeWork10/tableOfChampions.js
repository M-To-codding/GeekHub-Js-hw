let playerCount = 1;

function getPlayerData() {
    let playerName = prompt('Your name'),
        areaSize = $('.cells option:selected').val(),
        time = 0 + 's';

    if (!playerName && $('td').text() !== 'Unknown-' + playerCount) {
        playerName = 'Unknown-' + playerCount;
    } else if (!playerName && $('td').text() == 'Unknown-' + playerCount) {
        playerCount++;
    }

    pasteDataInTable(playerName, areaSize, time);
}

function pasteDataInTable(playerName, areaSize, time) {

    $('.player-info').append(`<tr><td>${playerName}</td><td>${areaSize}x${areaSize}</td>
<td class="time-cell">${time}</td></tr>`);
}
