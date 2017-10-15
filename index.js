var base64Img = require('base64-img')
var cssurl = require('css-reurl')

module.exports = transform

function transform (filename, source, options, done){
  try {
    if (/\/node_modules\//.test(filename)){
      done(null, source)
      return
    }

    cssurl(source, getBase64, source => {
      done(null, source)
    })

  } catch (e) {
    return done(e)
  }
}

function getBase64 (url){
  return new Promise((resolve, reject) => {

    base64Img.base64(url, (err, data) => {
      var oldUrl = url
      var newUrl = data

      if (data === void 0){
        newUrl = url
      }

      resolve({oldUrl, newUrl})
    })
  })
}
