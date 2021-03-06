## metaleft-pad

String left pad

## Install

```bash
$ npm install metaleft-pad
```

## Usage

```js
const leftPad = require('metaleft-pad')

leftPad('foo', 5)
// => "  foo"

leftPad('foobar', 6)
// => "foobar"

leftPad(1, 2, '0')
// => "01"

leftPad(17, 5, 0)
// => "00017"
```

**NOTE:** The third argument should be a single `char`. However the module doesn't throw an error if you supply more than one `char`s. See [#28](https://github.com/stevemao/left-pad/pull/28).

**NOTE:** Characters having code points outside of [BMP plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) are considered two distinct characters. See [#58](https://github.com/stevemao/left-pad/issues/58).

[travis-image]: https://travis-ci.org/stevemao/left-pad.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/left-pad
