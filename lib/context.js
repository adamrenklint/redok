var path = require('path');
var getRepoInfo = require('git-repo-info');

function context (options) {

  var ctx = {};

  ctx.package = require(path.join(options.rootDir, 'package.json'));
  ctx.npm = {
    url: 'https://www.npmjs.com/package/' + ctx.package.name
  };
  ctx.git = getRepoInfo();

  if (ctx.package.repository) {
    ctx.github = {
      slug: ctx.package.repository.url.split('github.com/')[1].replace(/\.git$/, '')
    };
  }

  return ctx;
}

module.exports = context;
