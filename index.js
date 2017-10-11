var base64Img = require('base64-img')
var cssurl = require('css-reurl')

module.exports = transform

function transform (filename, source, options, done){
  try {
    cssurl(source, url=>{
      return base64Img.base64Sync(url)
    }, source=>{
      done(null, source)
    })
  } catch (e) {
    return done(e)
  }
}
