var path = require('path');
var fs = require('fs');
var gaze = require('gaze');

var context = require('./context');
var templates = require('./templates');

function redok (options) {

  options.rootDir = process.cwd();
  options.dir = options.dir || '.docs';
  options.docsDir = path.join(options.rootDir, options.dir);
  options.context = context(options);

  function generate () {
    templates(options.docsDir).forEach(function (template) {
      var rendered = template.compiled(options.context);
      rendered = rendered
        .replace(/&#123;/g, '{')
        .replace(/&#125;/g, '}')
        .replace(/\n\|\n\|/g, '|\n|');
      var renderPath = path.join(options.rootDir, template.name);
      fs.writeFileSync(renderPath, rendered);
      console.log('Generated %s', renderPath);
    });
  }

  if (options.watch) {
    gaze(
      [path.join(options.docsDir, '*'),
      [path.join(options.rootDir, 'package.json')]
    ], function () {
      console.log('Watching %s for changes', options.docsDir);
      this.on('all', function () {
        console.log('Change detected, re-rendering documentation...');
        generate();
      });
    });
  }

  generate();
}

module.exports = redok;
