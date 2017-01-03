/*
 Взять калькулятор, который был сделан в контексте ДЗ от 8 ноября.
 Необходимо модифицировать калькулятор следующим образом:
 Превратить калькулятор в Класс (конструктор + прототип)
 Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
 SqrCalc должен расширять все методы оригинального калькулятора таким образом,
 чтобы возводить в квадрат результат всех расчетов. Например:

let myCalc = new SqCalc(100);

console.log(myCalc.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalc.dif(10, 20)); //вернет 4 900
console.log(myCalc.div(2, 2)); //вернет 625
console.log(myCalc.mul(2, 2)); //вернет 160 000

Обратите внимание, что не должно быть дублирования кода из методов оригинального калькулятора. Необходимо применить наследование. Задачу необходимо выполнить в двух вариантах: ES5 и ES6.*/


class Calc {
    constructor(firstNumber) {
        this.firstNumber = firstNumber;
    }

    sum() {
        let args = [...arguments];
        return args.reduce((prev, next) => {
            return prev + next;
        }, this.firstNumber);
    }

    dif() {
        let args = [...arguments];

        return args.reduce((prev, next) => {
            return prev - next;
        }, this.firstNumber);
    }

    div() {
        let args = [...arguments];

        return args.reduce((prev, next) => {
            if (next === 0) {
                throw new Error('Вы пытаетесь поделить на ноль, не надо так!');
            }
            return prev / next;
        }, this.firstNumber);
    }

    mul() {
        let args = [...arguments];

        return args.reduce((prev, next) => {
            return prev * next;
        }, this.firstNumber);
    }
}

class SqCalc extends Calc {
    constructor(firstNumber) {
        super(firstNumber);
    }

    sum() {
        return Math.pow(super.sum(...arguments), 2);
    }

    dif() {
        return Math.pow(super.dif(...arguments), 2);
    }

    div() {
        return Math.pow(super.div(...arguments), 2);
    }

    mul() {
        return Math.pow(super.mul(...arguments), 2);
    }
}
