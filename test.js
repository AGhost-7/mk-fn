var mkFn = require('./index.js');
var assert = require('assert');

var fn0 = function() {};

var fn4 = mkFn(4, fn0);
assert.equal(fn4.length, 4, 'generates a function with given lenght');

var fn5 = mkFn(5, undefined);
assert.equal(fn5.length, 5, 'does not fail even if function argument is invalid');
