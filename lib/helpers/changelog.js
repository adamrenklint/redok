function changelog (options) {
  var hash = options.hash;
  var ctx = options.data.root;

  return '## v' + hash.version + ' (' + hash.date + ') [diff](' + ctx.github.url + '/compare/' + hash.from + '...' + hash.to + ')\n\n' + options.fn(ctx);
}

module.exports = changelog;
