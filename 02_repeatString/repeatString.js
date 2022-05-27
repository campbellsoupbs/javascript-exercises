const repeatString = function(string, num) {
    let output = ''
    if (num < 0) {return 'ERROR'}
    else if (string === '') {return ''}
    else {
        for (i=0;i<num;i++) {output += string};
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
