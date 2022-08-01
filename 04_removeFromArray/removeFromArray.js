const removeFromArray = function(array, one, two) {

    let indexOne = array.indexOf(one)
    let indexTwo = array.indexOf(two)

    if (indexOne < indexTwo) {
        let res = [indexOne, indexTwo]
        indexOne = res[1]
        indexTwo = res[0]
    }

    if (indexOne > -1) {
        array.splice(indexOne, 1)
    }
    if (indexTwo > -1) {
        array.splice(indexTwo, 1)
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
