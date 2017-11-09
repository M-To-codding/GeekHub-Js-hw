function createActionsPanel() {
    var panel,
        panelContent,
        messageContainer;

    panel = document.createElement('div');
    panel.classList.add('actionsPanel');
    panelContent = '<button class="button feed-button" onclick="feed()"><i class="fa fa-coffee" aria-hidden="true"></i>Feed</button>' +
        '<button class="button treat-button" onclick="treat()"><i class="fa fa-plus" aria-hidden="true"></i>Treat</button>' +
        '<button class="button play-button" onclick="play()"><i class="fa fa-music" aria-hidden="true"></i>Play</button>' +
        '<button class="button sleep-button" onclick="sleep()"><i class="fa fa-bed" aria-hidden="true"></i>Sleep</button>';

    messageContainer = '<div class="message-container"></div>';

    document.querySelector('.entity').appendChild(panel);
    document.querySelector('.actionsPanel').innerHTML = messageContainer + panelContent;
}

createActionsPanel();