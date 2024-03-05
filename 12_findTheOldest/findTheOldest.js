const findTheOldest = function(people) {
    let age = people.map((individual) => {
        if (individual.yearOfDeath) {
            return [ individual.name, individual.yearOfDeath - individual.yearOfBirth];
        } else {
            return [ individual.name, 2024 - individual.yearOfBirth ];
        }
    });
    let sortAge = age.sort((a,b) => b[1] - a[1]);
    return people.find((individual) => individual['name'] == sortAge[0][0]);
    
    
};

// Do not edit below this line
module.exports = findTheOldest;
