var base64Img = require('base64-img')
var cssurl = require('css-reurl')

module.exports = transform

function transform (filename, source, options, done){
  try {
    cssurl(source, (url, done2)=>{
      base64Img.base64(url, (err, data)=>{
        done2(data)
      })
    }, source=>{
      done(null, source)
    })
  } catch (e) {
    return done(e)
  }
}
