const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }

    else {
        let addition = ''
        for (let i = 0; i < num; i++) {
            addition += string
        }
        return addition
    }
};

// Do not edit below this line
module.exports = repeatString;
