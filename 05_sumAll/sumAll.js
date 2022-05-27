const sumAll = function(start, stop) {
    let sum = 0;
    if (typeof(start) !== 'number' || typeof(stop) !== 'number') 
        {return 'ERROR'}
    else if (start < 0 || stop < 0)
        {return 'ERROR'}
    else if (start < stop) {
        for (i = start; i <= stop; i++) {sum += i}} 
    else if (start > stop) {
        for (i = stop; i <= start; i++) {sum += i}}


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
