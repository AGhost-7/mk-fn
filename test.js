var mkFn = require('./index.js');
var assert = require('assert');

var fn0 = function() { return 1; };

var fn4 = mkFn(4, fn0);
assert.equal(fn4.length, 4, 'generates a function with given length');

assert.equal(fn0(), 1, 'it returns the result of the wrapped function');

var fn5 = mkFn(5, undefined);
assert.equal(fn5.length, 5, 'does not fail even if function argument is invalid');

console.log('all tests passed');
