Number.prototype.sum = function (num) {
    return parseInt(this) + num;
};
var a = 2,
result = a.sum(2);
console.log('sum()\n' + result + '\n\n');