const findTheOldest = function(people) {
    const oldestSort = people.sort((a, b) => {
        let ageA = findAge(a);
        let ageB = findAge(b);
        
        if (ageA >= ageB) return -1;
        return 1
    })
    
    return oldestSort[0];
};

function findAge(person) {
    return person.yearOfDeath === undefined ? (new Date()).getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
