const push = require ("./push");

function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        push(newArr, callback(arr[i], i, arr));
    }
    return newArr;
}

module.exports = map;