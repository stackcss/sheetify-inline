'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base64Img = require('base64-img');

var _base64Img2 = _interopRequireDefault(_base64Img);

var _cssReurl = require('css-reurl');

var _cssReurl2 = _interopRequireDefault(_cssReurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (filename, src, options, done) {
  try {
    if (/\/node_modules\//.test(filename)) {
      done(null, src);
      return;
    }

    (0, _cssReurl2.default)(src, getBase64, function (src) {
      done(null, src);
    });
  } catch (e) {
    return done(e);
  }
};

function getBase64(url) {
  return new Promise(function (resolve, reject) {
    _base64Img2.default.base64(url, function (err, data) {
      if (data === void 0) {
        resolve(url);
      }
      resolve(data);
    });
  });
}
