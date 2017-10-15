var base64Img = require('base64-img')
var cssurl = require('css-reurl')

module.exports = transform

function transform (filename, source, options, done){
  try {
    if (/\/node_modules\//.test(filename)){
      done(null, source)
      return
    }
    
    cssurl(source, (url, done2) => {
      base64Img.base64(url, (err, data) => {
        if (data === void 0){
          done2(url)
          return
        }

        done2(data)
      })
    }, source => {
      done(null, source)
    })
  } catch (e) {
    return done(e)
  }
}
