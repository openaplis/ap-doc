'use strict'

module.exports = {
  write: function (doc) {
    doc.fontSize(25)
    doc.text('This is the body', 10, 300)    
  }
}
