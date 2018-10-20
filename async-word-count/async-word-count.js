var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
  var total = 0
  getWordCount(filePathOne, (err, data1) => {
    if (err) { throw err }
    // console.log(err, data1)
    total += data1
    getWordCount(filePathTwo, (err, data2) => {
      if (err) { throw err }
      // console.log(err, data2)
      total += data2
      callback(total)
    })
  })
};

module.exports = getTotalWordCount;
