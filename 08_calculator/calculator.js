const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
    return array.reduce((a, b) => a + b)
};

const multiply = function(array) {
    return array.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {

    let number = 1
	for (let i = 1; i < a; i++) {
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
