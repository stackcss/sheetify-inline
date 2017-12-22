var base64Img = require('base64-img')
var cssurl = require('css-reurl')

module.exports = transform

function transform (filename, src, options, done){
  try {
    if (/\/node_modules\//.test(filename)){
      done(null, src)
      return
    }

    cssurl(src, getBase64, src => {
      done(null, src)
    })

  } catch (e) {
    return done(e)
  }
}

function getBase64 (url){
  return new Promise((resolve, reject) => {
    base64Img.base64(url, (err, data) => {
      if (data === void 0){
        resolve(url)
      }
      resolve(data)
    })
  })
}
