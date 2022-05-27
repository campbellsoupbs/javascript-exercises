const removeFromArray = function(input) {
    let args = Array.from(arguments)
    let output = args[0]
    for (let i=1;i<arguments.length; i++) {
        for (let a=0; a<output.length;a++)
            if (args[i] === output[a]) {
                output.splice(a,1); 
            }
            else {continue};
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
