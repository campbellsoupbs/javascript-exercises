const palindromes = function (string) {
    let forward = '';
    let backward = '';
    
    for (let x of string) {
        if (x.match(/[a-zA-Z]/) !== null) {
            forward = forward+x;
            backward = x+backward;
        }
    }
    
    forward = forward.toLowerCase();
    backward = backward.toLowerCase();

    return forward === backward

    // console.log(`foward: ${forward}`);
    // console.log(`backward: ${backward}`);
};

// Do not edit below this line
module.exports = palindromes;
