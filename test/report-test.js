const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const surgicalReport = require('../src/index.js').surgicalReport

var inputData = require(path.join(__dirname, 'input-data'))

describe('Surgical Report', function () {

  before(function (done) {
    inputData.build(function (err, data) {
      if (err) return err
      inputData = data
      done()
    })
  })

  it('Input data tests', function (done) {
    assert.notEqual(inputData, null, 'input data cannot be null')
    assert.isArray(inputData.addresses, 'addresses must be an array')
    done()
  })

  it('Surgical Report Tests', function (done) {
    surgicalReport.build(inputData, function (err, html) {
      assert.isNotNull(html)
      done()
    })
  })

})
