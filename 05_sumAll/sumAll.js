const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || num1 <= 0) {
        return "ERROR";
      }
    if (!Number.isInteger(num2) || num2 <= 0) {
    return "ERROR";
    }

    let addNum = [];
    let smolNum = Math.min(num1, num2);
    let bigNum = Math.max(num1, num2);

    for (i = smolNum; i <=bigNum; i++) {
        addNum.push(i);
    }
    sum = addNum.reduce((acc, val) => acc + val, 0);
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
