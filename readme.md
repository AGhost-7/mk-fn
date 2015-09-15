## mk-fn
This module allows you to create a function with a given length property. This is used for certain
functional programming facilities, and is used in [pogostic](https://github.com/AGhost-7/pogostick) to be able 
to create remote functions which have the same length property on the server as the client.

Here are some reasons why you would use this instead of other libraries.
- [Performance](http://jsperf.com/functions-with-custom-length).
- Security:  The alternative workaround is to use `eval`, which depending on what your security 
is, might not be acceptable.
- Flexibility: This module supports up to 27 arguments, more than you'll ever need.

```javascript
var mkFn = require('mk-fn');
var fun = function() {};
console.log(fun.length); // -> 0
var fn4 = mkFn(fun, 4);
console.log(fn4.length); // -> 4
```
