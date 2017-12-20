import base64Img from 'base64-img'
import cssReurl from 'css-reurl'

export default (filename, src, options, done) => {
  try {
    if (/\/node_modules\//.test(filename)){
      done(null, src)
      return
    }

    cssReurl(src, getBase64, src => {
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
