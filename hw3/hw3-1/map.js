const push = require ("./push");

function map(arr, callback) {
    if (arguments.length > 2) {
        var thisArg = arguments[2];
    }
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof thisArg == 'undefined') {
            push(newArr, callback(arr[i], i, arr));
        } else {
            push(newArr, callback.call(thisArg, arr[i], i, arr));
        }
    }
    return newArr;
}

module.exports = map;