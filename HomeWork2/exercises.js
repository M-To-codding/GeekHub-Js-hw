function addNewLines(taskNum) {
    console.log('\n\n\n' + taskNum);
}

// 1. Rectangle in the loop
function showRectangle() {
    console.log('// 1. Rectangle in the loop')
    var result = '';

    for (var i = 0; i < 7; i++) {
        result += '#';
        console.log(result);
    }
}

// 2. FizzBuzz
function showFizzBuzz() {
    addNewLines('// 2. FizzBuzz');
    var count = 1;

    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            count = 'Fizz';
        } else if (i % 5 == 0 && i % 3 != 0) {
            count = 'Buzz';
        } else if (i % 5 == 0 && i % 3 == 0) {
            count = 'FizzBuzz';
        } else {
            count = i;
        }
        console.log(count);
    }
}

// 3. Chessboard
function showChessboard() {
    addNewLines('// 3. Chessboard');
    var cellsStart = '#### ';
    var cellsEnd = ' ####';

    for (var i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            console.log(cellsStart + '\n');
        } else {
            console.log(cellsEnd + '\n');
        }
    }
}

// 4. Min
function min(a, b) {
    addNewLines('// 4. Min ' + '\nmin(5, -5):');
    var minNum = 0;

    if (a < b) {
        minNum = a;
    } else {
        minNum = b;
    }

    return console.log(minNum);
}

// 5. Recursion
function isEven(number) {

    if (number == 0) {
        addNewLines('// 5. Recursion ' + 'isEven(-10): ');
        return console.log(true);
    } else if (number == 1 || number == -1) {

        addNewLines('// 5. Recursion ' + 'isEven(-10): ');
        return console.log(false);
    }
    //solution for negative numbers
    else if (number < 0) {
        return isEven(number + 2);
    }
    //////////
    else {
        return isEven(number - 2);
    }
}


// 6. Beans
function countBs(someString) {
    addNewLines('// 6. Beans');
    var h = [];
    for (i = 0; i < someString.length; i++) {
        if (someString[i] == 'b') {
            h += someString[i];
        }
    }
    return console.log(h.length);
}


showRectangle();
showFizzBuzz();
showChessboard();
min(5, -5);
isEven(-10);
countBs('bbsb sfhd jfhd sbb');