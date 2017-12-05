import base64Img from 'base64-img'
import cssReurl from 'css-reurl'

export default (filename, source, options, done) => {
  try {
    if (/\/node_modules\//.test(filename)){
      done(null, source)
      return
    }

    cssReurl(source, getBase64, source => {
      done(null, source)
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
