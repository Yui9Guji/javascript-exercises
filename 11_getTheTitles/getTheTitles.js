const getTheTitles = function(array) {

    let books = []

    array.forEach(variable => {
        books.push(variable.title)
    })

    return books
};

// Do not edit below this line
module.exports = getTheTitles;
