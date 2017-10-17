# sheetify-inline [![stability][0]][1]
 [![npm version][2]][3] [![downloads][4]][5]
 ![travis build][6]

Plugin transforms img to base64 for sheetify

## Example

before:

```css
div{
  background: url('test.png')
}
```

after:

```css
div{
  background: url('data:image/png;base64,iVBORw0KGgoAAA...')
}

```
## Install

`npm install sheetify-inline`

## Test

`npm test`

## Command line
```sh
$ browserify entry.js -t [ sheetify/transform -u sheetify-inline ]
```

## JS api
```js
const browserify = require('browserify')

browserify()
 .transform('sheetify/transform', { use: [ 'sheetify-inline' ] })
 .bundle()
```

## Installation
```sh
$ npm install sheetify-inline
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/sheetify-inline.svg?style=flat-square
[3]: https://npmjs.org/package/sheetify-inline
[4]: http://img.shields.io/npm/dm/sheetify-inline.svg?style=flat-square
[5]: https://npmjs.org/package/sheetify-inline
[6]: https://travis-ci.org/ZhouHansen/sheetify-inline.svg?branch=master
