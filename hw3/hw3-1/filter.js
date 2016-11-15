const push = require ("./push");

function filter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            push(newArr, arr[i]);
        }
    }
    return newArr;
}

module.exports = filter;