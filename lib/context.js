var path = require('path');
var getRepoInfo = require('git-repo-info');

function context (options) {

  var ctx = {};

  ctx.package = require(path.join(options.rootDir, 'package.json'));
  ctx.git = getRepoInfo();

  if (ctx.package.repository) {
    ctx.git.slug = ctx.package.repository.url
      .split('github.com/')[1]
      .replace(/\.git$/, '');
  }

  return ctx;
}

module.exports = context;
