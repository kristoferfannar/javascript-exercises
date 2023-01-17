const convertToCelsius = function(degree) {
  let cels = (degree - 32) * 5 / 9;
  return +cels.toFixed(1);
};

const convertToFahrenheit = function(degree) {
  let deg = degree * 9 / 5 + 32;
  return +deg.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
