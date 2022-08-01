const sumAll = function(varOne, varTwo) {
    let sum = 0

    if (varOne < 0 || varTwo < 0 || typeof varOne !== 'number' || typeof varTwo !== 'number') {
        return 'ERROR'
    }
    else if (varOne < varTwo) {
        for (let i = varOne; i < varTwo + 1; i++) {
            sum += i
        }
    }

    else {
        for (let i = varTwo; i < varOne + 1; i++) {
            sum += i
        }
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
