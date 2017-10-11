var base64Img = require('base64-img')
var cssurl = require('css-url-rewriter')

module.exports = transform

function transform (filename, source, options, done){
  try {
    source = cssurl(source, url=>{
      return base64Img.base64Sync(url)
    })
  } catch (e) {
    return done(e)
  }

  done(null, source)
}
