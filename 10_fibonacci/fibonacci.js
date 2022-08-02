const fibonacci = function(variable) {

    const number = +variable
    if (number < 0) {
        return 'OOPS'
    }

    else {
        let fibonacci = [0, 1]

        for (let i = 2; i < 101; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        }

        return fibonacci[number]
    }

};
fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
