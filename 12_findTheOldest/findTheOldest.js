const findTheOldest = function(people) {
    people.forEach(person => {
        if ("yearOfDeath" in person) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
        } else {
            person['age'] = (new Date()).getFullYear() - person.yearOfBirth;
        }
    });

    people.sort((a,b) => (a.age > b.age) ? -1:1);

    // console.table(people);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
