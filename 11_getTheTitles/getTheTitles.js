const getTheTitles = function(array) {
    let answer = [];
    array.forEach(element => {
        answer.push(element['title']);
    });
    return answer;
};

// Do not edit below this line
module.exports = getTheTitles;
