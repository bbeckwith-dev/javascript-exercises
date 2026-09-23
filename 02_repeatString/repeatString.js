const repeatString = function(string, num) {

let rString = string;
let rNum = num;

if (num < 0) {
    return 'ERROR';
}

if (num === 0) {
    return "";
}

for (i = 1; i < num; i++) {
    rString = rString + string;
}

return rString;

};



// Do not edit below this line
module.exports = repeatString;
