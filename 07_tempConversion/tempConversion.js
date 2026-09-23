const convertToCelsius = function(fTemp) {
  //C=(1.8)*(F-32)
  tempInCelsius = (fTemp-32)*(5/9);
  return Number(tempInCelsius.toFixed(1));
  // return finalC;
};




const convertToFahrenheit = function(cTemp) {
  //F = Cx(1.8)+32
  tempInFahrenheit = cTemp*(9/5)+32;
  return Number(tempInFahrenheit.toFixed(1));
  // return finalF;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
