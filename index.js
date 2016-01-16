/**
 * Module dependencies
 */

var compiler = require('ess-compiler');
var utils = require('loader-utils');

module.exports = function(source, path) {
  this.cacheable && this.cacheable();

  var filename = utils.getRemainingRequest(this).replace(/^!/, "");

  var opts = utils.parseQuery(this.query);
  opts.filename = filename;
  return compiler(source, opts);
};
