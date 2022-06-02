const add = function() {
	const args = Array.from(arguments);
  const answer = args.reduce((total, number)=> {
    total += number;
    return total;
  },0);
  return answer;
};

const subtract = function() {
  const args = Array.from(arguments);
  let total = args[0];
  for (let i=1; i<args.length; i++) {
    total -= args[i]; 
  }
  return total;
}

const sum = function(array) {
	let total = 0;
  if (array === undefined) {
    return total;
  } else {
    array.forEach(number => {
      total += number;
    });
    return total
  }

};

const multiply = function(array) {
  let total = 1;
  if (array === undefined) {
    return 0;
  } else {
    array.forEach(number => {
      total *= number;
    });
    return total
  }

};

const power = function(a,b) {
  total = a**b;
  return total
};

const factorial = function(n) {
	if (n === 0 || n === 1) {return 1}
  else {
    let total = n;
    for (let i = n-1; i>0; i--) {
      total *= i
    }
    return total;
  }
};





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
