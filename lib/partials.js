var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');

function partials (docsDir) {
  var partialsDir = path.join(docsDir, 'partials');

  if (!fs.existsSync(partialsDir)) {
    return console.warn('Not able to find documentation partials source folder at %s', partialsDir);
  }

  function addPartials (dir, base) {
    base = base || dir;
    fs.readdirSync(dir).forEach(function (name) {
      var partialPath = path.join(dir, name);

      if (fs.statSync(partialPath).isDirectory()) {
        addPartials(partialPath, base);
      }
      else {
        var refName = partialPath.replace(base + '/', '').replace(/\.hbs$/, '');
        var file = fs.readFileSync(partialPath).toString();
        var compiled = handlebars.compile(file);
        handlebars.registerPartial(refName, compiled);
      }
    });
  }

  addPartials(partialsDir);
  addPartials(path.join(__dirname, '../partials'));
}

module.exports = partials;
