const convertToCelsius = function(temp) {
    let new_temp = ((temp - 32)*5)/9;
    let round_temp = new_temp.toFixed(1);
    return parseFloat(round_temp);
};

const convertToFahrenheit = function(temp) {
    let new_temp = (temp * 9 / 5) + 32;
    let round_temp = new_temp.toFixed(1);
    return parseFloat(round_temp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
