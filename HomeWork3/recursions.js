function calcFactorialRecursion(num) {
    if (num === 1) {
        return num;
    } else {
        return num * calcFactorialRecursion(num - 1);
    }
}

function calcFactorial(num) {
    var result = 1;

    for (var i = num; i > 0; i--) {
        result *= i;
    }
    return result;
}

function calcDegreeRecursion(a, n) {
    var count = 1;

    if (count < n) {
        return a * calcDegreeRecursion(a, n - 1);
    } else {
        return a;
    }
}

function calcDegree(a, n) {
    var num = 1;

    for (var i = 1; i <= n; i++) {
        num *= a;
    }
    return num;
}

function sumNumbersRecursion(num) {
    var sum = 0;
    sum += num % 10;

    if (num > 0) {
        return sum += sumNumbersRecursion(Math.floor(num / 10));
    } else if (num === 0) {
        return sum;
    }
}

function sumNumbers(num) {
    var result = 0;
    result += num % 10;

    for (var i = 0; i < num; i++) {
        num = Math.floor(num / 10);
        result += num % 10;
    }

    return result;
}


console.log('calcFactorialRecursion()\n' + calcFactorialRecursion(5) + '\n');
console.log('calcFactorial()\n' + calcFactorial(5) + '\n\n');


console.log('calcDegreeRecursion()\n' + calcDegreeRecursion(5, 3) + '\n');
console.log('calcDegree()\n' + calcDegree(5, 3) + '\n\n');


console.log('sumNumbersRecursion()\n' + sumNumbersRecursion(123));
console.log('sumNumbers()\n' + sumNumbers(123) + '\n\n');
