const findTheOldest = function(array) {

    let years = []

    array.forEach(obj => {
        if (obj.yearOfDeath !== undefined) {
            years.push(obj.yearOfDeath - obj.yearOfBirth)
        }

        else {
            const date = new Date()
            let yearsLived = date.getFullYear() - obj.yearOfBirth
            years.push(yearsLived)
        }
    })

    const maxYear = years.reduce((a, b) => Math.max(a, b))

    return array[years.indexOf(maxYear)]
};

// Do not edit below this line
module.exports = findTheOldest;
