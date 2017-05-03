const assert = require('chai').assert
const path = require('path')

var inputData = require(path.join(__dirname, 'input-data'))

describe('Input Data Tests', function () {
  it('Input data tests', function (done) {
    inputData.build({
      masterAccessionNo: '17-10925',
      reportNo: '17-10925.S'
    }, function (err, data) {
      if(err) console.log(err)
      assert.equal(data.accessionOrder.masterAccessionNo, '17-10925')
      assert.equal(data.panelSetOrder.reportNo, '17-10925.S')
      done()
    })
  })
})
