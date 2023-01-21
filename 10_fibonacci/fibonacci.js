const fibonacci = function(times) {
    times = +times;
    if (times < 0) return "OOPS";
    if (times == 0 || times == 1) return times;

    return fibonacci(times - 1) + fibonacci(times - 2);
};

// Do not edit below this line
module.exports = fibonacci;
