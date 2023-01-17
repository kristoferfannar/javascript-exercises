const sumAll = function(minNum, maxNum) {
    if (minNum < 0 || maxNum < 0 || typeof minNum !== "number" || typeof maxNum !== "number") {
        return "ERROR";
    }

    if (minNum > maxNum) {
        let placeholder = minNum;
        minNum = maxNum;
        maxNum = placeholder;
    }

    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
