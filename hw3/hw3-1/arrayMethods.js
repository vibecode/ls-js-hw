// forEach
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// filter
function filter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// map
function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

/* slice
Копирует участок массива от begin до end, не включая end.
Исходный массив при этом не меняется.
Если не указать end – копирование будет до конца массива.
Если вообще не указать аргументов – скопируется весь массив.
Можно использовать отрицательные индексы, они отсчитываются с конца.*/

function slice(arr, begin = 0, end = arr.length) {
    var newArr = [];

    begin = isNaN(parseFloat(begin)) ? 0 : begin;

    if (begin < 0 ) {
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
       newArr.push(arr[i]);
    }

    return newArr;
}

// reduce
/*
Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки
каждого элемента массива с сохранением промежуточного результата.

Он применяет функцию callback по очереди к каждому элементу массива слева направо,
сохраняя при этом промежуточный результат.

Аргументы функции callback(previousValue, currentItem, index, arr):
previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.

Кроме callback, методу можно передать «начальное значение» – аргумент initialValue.
Если он есть, то на первом вызове значение previousValue будет равно initialValue,
а если у reduce нет второго аргумента, то оно равно первому элементу массива,
а перебор начинается со второго.*/

function reduce(arr, callback, initialValue) {
    if (arguments[2] !== undefined) {
        var previousValue = initialValue;
        var i = 0;
    } else {
        previousValue = arr[0];
        i = 1;
    }

    for (i; i < arr.length; i++) {
        previousValue = callback(previousValue, arr[i], i, arr);
    }

    return previousValue;
}

// splice
// coming soon
function splice() {

}

