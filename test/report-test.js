const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const requisitions = require('../src/index.js')

var inputData = require(path.join(__dirname, 'input-data'))

describe('surgicalReport', function () {
  before(function (done) {
    inputData.build(function (err, data) {
      if (err) return err
      inputData = data
      done()
    })
  })

  describe('surgicalReport', function () {
    it('testing surgicalReport', function (done) {
      requisitions.surgicalReport.build(inputData, function (err, result) {
        if (err) console.log(err)
        assert.notEqual(result, null)
        var requisitionPath = './requisitions/surgical-report.html'
        fs.writeFile(requisitionPath, result, function (err) {
          if (err) console.log(err)
          done()
        })
      })
    })
  })
})
