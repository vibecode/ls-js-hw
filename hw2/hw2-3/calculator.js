function calculator(firstNumber) {
	var calcObj = {
		sum: function() {
			var result = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				result += arguments[i];
			}
			return result;
		},
		dif: function() {
			var result = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				result -= arguments[i];
			}
			return result;
		},
		div: function() {
			var result = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] === 0) {
					throw new Error('Вы пытаетесь поделить на ноль, не надо так!');
				}
				result /= arguments[i];
			}
			return result;
		},
		mul: function() {
			var result = firstNumber;
			for (var i = 0; i < arguments.length; i++) {
				result *= arguments[i];
			}
			return result;
		}
	};

	return calcObj;
}

module.exports = calculator;


