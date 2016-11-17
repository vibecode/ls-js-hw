function push(arr) {
    for (var i = 0; i < arguments.length - 1; i++) {
        arr[arr.length] = arguments[i + 1];
    }
}

module.exports = push;