'use strict'

var path = require('path')
var baseDoc = require(path.join(__dirname, 'base-pdf'))

module.exports = {
  create: function () {
    var doc = baseDoc.new()
    //doc.fontSize(25)
    //  .text('Surgical Report', 400, 25);
    //baseDoc.save(doc)
  }
}
