const reverseString = function(string) {
    const stringList = []
    
    for (const x of string) {stringList.push(x)}
    
    stringList.reverse();
    let output = stringList.join('');
    return output;

};

// Do not edit below this line
module.exports = reverseString;
