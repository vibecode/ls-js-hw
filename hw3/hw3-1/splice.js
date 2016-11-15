const push = require ("./push");

function splice(arr, index, deleteCount = 0) {
    if (index < 0) {
        index += arr.length;
        if (index < 0) index = 0;
    }

    if (deleteCount < 0) deleteCount = 0;

    var deleted = [];
    var arrCash = [];

    // создаем массив из удаленных элементов
    for (var i = index; i < index + deleteCount; i++) {
        push(deleted, arr[i]);
    }

    //копируем оригинальный массив до начала выреза
    for (i = 0; i < index; i++) {
        push(arrCash, arr[i]);
    }

    //добавляем аргументы переданные для вставки
    if (arguments.length > 3) {
        for (i = 3; i < arguments.length; i++) {
            push(arrCash, arguments[i]);
        }
    }

    //добавляем оставшийся хвост
    for (i = index + deleteCount; i < arr.length; i++) {
        push(arrCash, arr[i]);
    }

    arr.length = 0;

    //переписываем оригинальный массив
    for (var i = 0; i < arrCash.length; i++) {
        arr[i] = arrCash[i];
    }

    return deleted;
}

module.exports = splice;
