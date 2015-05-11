var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');
var partials = require('./partials');

function templates (docsDir) {
  if (!fs.existsSync(docsDir)) {
    console.error('Not able to find documentation source folder at %s', docsDir);
    process.exit(1);
  }

  partials(docsDir);

  return fs.readdirSync(docsDir).map(function (name) {
    return {
      name: name,
      path: path.join(docsDir, name)
    };
  }).filter(function (template) {
    return !fs.statSync(template.path).isDirectory();
  }).map(function (template) {
    var file = fs.readFileSync(template.path).toString();
    template.compiled = handlebars.compile(file);
    return template;
  });
}

module.exports = templates;
