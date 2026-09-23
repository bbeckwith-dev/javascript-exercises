const reverseString = function(word) {

const chars = word.split('');

let rWord = '';

for (i = 0; i < word.length; i++) {
  rWord += chars.pop();
}

return rWord;

};

// Do not edit below this line
module.exports = reverseString;
