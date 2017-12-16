//1. Create json object

function groupsObj(name, url, description) {
    this.name = name;
    this.url = url;
    this.description = description;
}

let extreme = new groupsObj('EXTREME', 'https://www.facebook.com/Extreme/', 'Founded in 1995, EXTREME is  on a' +
    ' mission to inspire, entertain and connect through action sport, adventure and fun.'),
    geekhub = new groupsObj('Geekhub', 'https://www.facebook.com/geekhub.ck/', 'GeekHub – це проект,' +
        ' що надає можливість талановитій молоді отримати практичні знання та навички в сфері розробки' +
        ' програмного забезпечення та IT вцілому.');

JSON.stringify([extreme, geekhub]);
console.log(JSON.stringify([extreme, geekhub]));

// 2. Create request to get json object by url
let myUrl = 'reportJSON.json',
    request = new XMLHttpRequest();


// 3. Get js obj based on json

request.onload = function () {
    if (this.status == 200) {
        let data = request.response;
        console.log(data);

        for (let o of data)
            showGroupsList(o);
    }
};

request.responseType = 'json';
request.open('GET', myUrl);
request.send();


// 4. Display data in html page

function showGroupsList(list) {
    let container = $('<div class="group-container"></div>'),
        name = $(`<h3 class="title"><a href="${list.url}">${list.name}</a></h3>`),
        description = $(`<p class="description">${list.description}</p>`);

    $(container).append(name);
    $(container).append(description);

    $('.container').append(container);
}