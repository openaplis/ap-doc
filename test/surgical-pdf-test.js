const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const surgical = require('../src/core/pdf/surgical.js')

describe('Surgical Report', function () {

  it('Input data tests', function (done) {
    surgical.create(function (err, result) {
      if(err) return console.log(err)
      console.log(result)
      done()
    })
  })

})
