function forEach(arr, callback) {
    if (arguments.length > 1) {
        var thisArg = arguments[1];
    }
        for (var i = 0; i < arr.length; i++) {
            if (typeof thisArg == 'undefined') {
                callback(arr[i], i, arr);
            } else {
                callback.call(thisArg, arr[i], i, arr);
            }
        }
}

module.exports = forEach;
