var fs = require('fs');
var jomini = require('./index');

process.stdin.setEncoding('utf8');

var fullFile = "";

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    fullFile += chunk;
  }
});

process.stdin.on('end', function() {
  console.log(JSON.stringify(jomini.parse(fullFile)));
});
