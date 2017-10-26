var object = {

    pop: function () {
        return this.length = this.length - 1;

    },

    push: function (element) {
        return this[this.length] = element;
    },

    slice: function (begin, end) {

        var result = [],
            count = 0;

        if (begin < 0) {
            // this.length = this.length + begin;
            for (var i = this.length + begin; i < this.length; i++) {
                result[count] = this[i];
                count++;
            }
        } else {

            if (end > this.length) {
                end = this.length;
            }
            if (begin == undefined && end == undefined || begin.length == 0 && end == 0) {
                begin = 0;
                end = this.length;
            }
            if (begin != undefined && end == undefined || begin.length > 0 && end == 0) {
                // begin = 0;
                end = this.length;
            }
            for (var i = begin; i < end; i++) {
                result[count] = this[i];
                count++;
            }
        }
        return result;
    },

    join: function (split) {
        var result = '';

        if (split == undefined) {
            split = ','
        }

        for (var i = 0; i < this.length; i++) {
            result += this[i] + ' ' + split;
        }

        result = result.substring(0, result.length - 1);
        while (result.slice(-1) === ',' || result.slice(-1) ===' '){
            result = result.substring(0, result.length -1);
        }

        return result;
    },

    reverse: function () {
        var result = [],
            count = 0;

        for (var i = this.length-1; i>=0; i--){
            result[count] = this[i];
            count++;
        }

        return result;
    }
}


var arr = ['a', 'b', 'c', 4, 5, 6];
console.log(arr + '\n\n');

console.log('pop()\n' + object.pop.call(arr)  + '\n\n');
Array.prototype.pop = object.pop;


console.log('push()\n' + object.push.call(arr, 'addedItem') + '\n\n');
Array.prototype.push = object.push;

console.log('slice()\n' + object.slice.call(arr, 3, 5) );
console.log(object.slice.call(arr, -3)+ '\n\n');
Array.prototype.slice = object.slice;


console.log('join()\n' + object.join.call(arr, ', ') + '\n\n');
Array.prototype.join = object.join;


console.log('reverse()\n' + object.reverse.call(arr) + '\n\n');
Array.prototype.reverse = object.reverse;

