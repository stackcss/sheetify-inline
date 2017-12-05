import transform from '../'
import path from 'path'
import fs from 'fs'

describe("sheetify-inline", () => {
  it("test", done => {
    var file = './__tests__/fixtures/basic.css'
    var src = fs.readFileSync(file, 'utf8')

    transform(file, src, {}, function(err, actual){
      if (err) console.log(err)

      expect(actual).toMatchSnapshot()
      done()
    })
  })
})
