const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const surgical = require('../src/core/pdf/surgical.js')

describe('Surgical Report', function () {

  it('Input data tests', function (done) {
<<<<<<< HEAD
    console.log('done')
    //surgicalReport.new()
    //assert.equal(surgicalReport, null)
    done()
=======
    surgical.create(function (err, result) {
      if(err) return console.log(err)
      console.log(result)
      done()
    })
>>>>>>> a8fad6077f16f8a6a2c04dd3ad06808ed3496575
  })

})
