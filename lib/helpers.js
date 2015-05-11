var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');

function helpers (options) {

  var helpersDir = path.join(__dirname, 'helpers');
  fs.readdirSync(helpersDir).forEach(function (name) {
    var helperPath = path.join(helpersDir, name);
    var helper = require(helperPath);
    var refName = name.replace(/\.js$/, '');
    handlebars.registerHelper(refName, helper);
  });
}

module.exports = helpers;
