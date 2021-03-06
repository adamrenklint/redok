var path = require('path');
var fs = require('fs');
var gaze = require('gaze');
var dateFormat = require('dateformat');

var context = require('./context');
var templates = require('./templates');
var helpers = require('./helpers');

function redok (options) {

  options.rootDir = process.cwd();
  options.dir = options.dir || '.docs';
  options.docsDir = path.join(options.rootDir, options.dir);
  options.context = context(options);

  helpers(options);

  function generate () {
    templates(options.docsDir).forEach(function (template) {
      var rendered = template.compiled(options.context);
      rendered = rendered
        .replace(/&#123;/g, '{')
        .replace(/&#125;/g, '}')
        .replace(/\n\|\n/g, '|\n');
      var renderPath = path.join(options.rootDir, template.name);

      var now = new Date();
      rendered += '\n---\n*Generated with [redok](https://github.com/adamrenklint/redok) @ ' + dateFormat(now, "dddd mmmm dS, yyyy - h:MM:ss TT") + '*';

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
