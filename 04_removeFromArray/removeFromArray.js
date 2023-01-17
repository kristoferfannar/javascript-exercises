const removeFromArray = function(arr, ...values) {

    for (const val of values) {
        let index = arr.findIndex( element => element === val); // for every element in the array, return the index if it is equal "===" to val.
        if (index !== -1) arr.splice(index, 1);    
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
