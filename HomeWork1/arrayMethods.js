var languages = ["C", "C++", "Java", "C#", "JavaScript"],
    numbers = [1, 2, 3, 4],
    orderNum = 1;

//0.
function reset() {
    console.log("\n\n");
}

function clearConsole() {
    console.clear();
}

//1.
function sortOutItems(orderNum) {
    reset();
    if (orderNum === undefined) {
        orderNum = 1;
    }
    console.log(orderNum + ")");
    languages.forEach(function (item, i) {
        console.log(i + ". " + item);
    });

}

//2.
function addNewLastItem() {
    reset();
    languages.push('Ruby');
    sortOutItems(2);
}

//3.
function removeLastItem() {
    reset();
    languages.pop();
    sortOutItems(3);
}

//4.
function joinArrays() {
    reset();
    languages = languages.concat(numbers);
    sortOutItems(4);
}

//5.
function getElementIndexByName() {
    reset();

    try {
        var name = document.getElementById("indexInput").value
    } catch (e) {
        if (name === null) {
            name = 'C';
        }
    }

    console.log("5)\n" + languages.indexOf(name));
}

//6.
function joinArrayElementsInToString() {
    reset();
    var languagesToString = languages.join(', ');
    console.log("6)\n" + languagesToString);
}

//7.
function filterArray() {
    reset();

    function returnNumber(number) {
        return number >= 2;
    }

    console.log("7)\n" + numbers.filter(returnNumber));
}

//8. 
function setMethodForEachItem() {
    reset();
    var splittedWords = languages.map(function (name) {
        if (typeof name === "string") {
            return name.charAt(0);
        }
        else {
            return '' + name;
        }
    });
    console.log("8)\n" + splittedWords);
}

//9.
function findFirstCoincidence() {
    reset();

    function checkArray(number) {
        return number >= 2 && number <= 5;
    }

    var num = numbers.find(checkArray);
    console.log("9)\n" + num);
}

// 10.
function copyPartOfArray() {
    reset();
    console.log("10)\n" + languages.slice(0, 2));
}

// 11.
function removeAndPasteItem() {
    reset();
    languages.splice(-2, 1, 'Php', 'Piton');
    sortOutItems(11);
}

// 12.
function addItemInFirstPosition() {
    reset();
    languages.unshift("TypeScript");
    sortOutItems(12);
}

// 13.
function removeFirstItem() {
    reset();
    languages.shift();
    sortOutItems(13);
}


sortOutItems();
addNewLastItem();
removeLastItem();
joinArrays();
getElementIndexByName();
joinArrayElementsInToString();
filterArray();
setMethodForEachItem();
findFirstCoincidence();
copyPartOfArray();
removeAndPasteItem();
addItemInFirstPosition();
removeFirstItem();
