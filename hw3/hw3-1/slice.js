/* slice
 Копирует участок массива от begin до end, не включая end.
 Исходный массив при этом не меняется.
 Если не указать end – копирование будет до конца массива.
 Если вообще не указать аргументов – скопируется весь массив.
 Можно использовать отрицательные индексы, они отсчитываются с конца.*/

const push = require ("./push");

function slice(arr, begin = 0, end = arr.length) {
    var newArr = [];

    begin = isNaN(parseFloat(begin)) ? 0 : begin;

    if (begin < 0) {
        begin += arr.length;
        if (begin < 0) begin = 0;
    }

    if (end < 0) {
        end += arr.length;
    }

    if (end > arr.length) {
        end = arr.length;
    }

    for (var i = begin; i < end; i++) {
        push(newArr, arr[i]);
    }

    return newArr;
}
