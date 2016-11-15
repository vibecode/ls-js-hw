/*
 применяет функцию callback по очереди к каждому элементу массива слева направо,
 сохраняя при этом промежуточный результат.

 аргументы:
 previousValue – последний результат вызова функции, он же «промежуточный результат».
 currentItem – текущий элемент массива,
 index – номер текущего элемента.
 arr – обрабатываемый массив.

 также можно передать initialValue
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

module.exports = reduce;