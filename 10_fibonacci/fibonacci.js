const fibonacci = function(index) {
    let fib = [1,1];
    if (index < 0) {
        return "OOPS";
    } else {
        for (i=2; i <= index-1; i++) {
            let newnum = fib[i-1]+fib[i-2];
            fib.push(newnum);
        }
        return fib[(index-1)];
    }

};

// Do not edit below this line
module.exports = fibonacci;
