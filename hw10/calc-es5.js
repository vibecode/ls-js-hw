var Calc = (function () {
    var Calc = function (firstNumber) {
        this.firstNumber = firstNumber;
    };

    Calc.prototype.sum = function () {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prev, next) {
            return prev + next;
        }, this.firstNumber);
    };

    Calc.prototype.dif = function () {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prev, next) {
            return prev - next;
        }, this.firstNumber);
    };

    Calc.prototype.div = function () {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prev, next) {
            if (next === 0) {
                throw new Error('Вы пытаетесь поделить на ноль, не надо так!');
            }

            return prev / next;
        }, this.firstNumber);
    };

    Calc.prototype.mul = function () {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prev, next) {
            return prev * next;
        }, this.firstNumber);
    };

    return Calc;
})();

var SqCalc = (function () {
    var SqCalc = function () {
        Calc.apply(this, arguments);
    };

    SqCalc.prototype = Object.create(Calc.prototype);

    SqCalc.prototype.sum = function () {
        return Math.pow(Calc.prototype.sum.apply(this, arguments), 2);
    };

    SqCalc.prototype.dif = function () {
        return Math.pow(Calc.prototype.dif.apply(this, arguments), 2);
    };

    SqCalc.prototype.div = function () {
        return Math.pow(Calc.prototype.div.apply(this, arguments), 2);
    };

    SqCalc.prototype.mul = function () {
        return Math.pow(Calc.prototype.mul.apply(this, arguments), 2);
    };

    return SqCalc;
})();

let myCalc = new SqCalc(100);

console.log(myCalc.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalc.dif(10, 20)); //вернет 4 900
console.log(myCalc.div(2, 2)); //вернет 625
console.log(myCalc.mul(2, 2)); //вернет 160 000
