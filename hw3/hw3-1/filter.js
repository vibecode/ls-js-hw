const push = require ("./push");

function filter(arr, callback) {
    if (arguments.length > 1) {
        var thisArg = arguments[1];
    }

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof thisArg == 'undefined') {
            if (callback(arr[i], i, arr) === true) {
                push(newArr, arr[i]);
            }
        } else {
            if (callback.call(thisArg, arr[i], i, arr) === true) {
                push(newArr, arr[i]);
            }
        }
    }

    return newArr;
}

module.exports = filter;