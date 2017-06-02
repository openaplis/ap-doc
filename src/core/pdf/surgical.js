'use strict'

var path = require('path')

var baseDoc = require(path.join(__dirname, 'base-pdf'))
var header = require(path.join(__dirname, 'header'))
var body = require(path.join(__dirname, 'body'))

module.exports = {
  create: function (callback) {
    var doc = baseDoc.new()
    header.write(doc)
    body.write(doc)
    baseDoc.save(doc, function(err, result) {
      if(err) return callback(err)
      callback(null, result)
    })
  }
}
