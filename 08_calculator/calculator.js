const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
    if (array.length === 0) {
        return 0
    }
    else return array.reduce((a, b) => a + b)
};

const multiply = function(array) {
    return array.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
    let number = 1
	for (let i = 1; i < a + 1; i++) {
        number *= i
    }
    return number
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
