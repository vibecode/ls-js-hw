function deepEqual(obj1, obj2) {

    //для начала оба объекта должны быть объектами
    if (!( obj1 instanceof Object ) || !( obj2 instanceof Object )) {
        return false;
    }

    //проверка ссылаются ли переменные на один и тот же объект
    if (obj1 === obj2 ) {
        return true;
    }

    //если длина массива перечисляемых свойств разная - объекты заведомо разные
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    //проверка дат
    if ((obj1 instanceof Date && obj2 instanceof Date)) {
         return obj1.toString() === obj2.toString();
    }

    //пройдемся по свойствам
    for (var prop in obj1) {
        if (obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) {
            return false;
        } else if (typeof obj1[prop] !== typeof obj2[prop]) {
            return false;
        }

        if (obj1[prop] !== obj2[prop]) {
            return false;
        }

        if (typeof (obj1[prop]) === 'object') {
            deepEqual(obj1[prop], obj2[prop]);
        }
    }

    for (var prop in obj2) {
        if (obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) {
            return false;
        } else if (typeof obj1[prop] !== typeof obj2[prop]) {
            return false;
        }
    }

    return true;
}

module.exports = deepEqual;