'use strict'

module.exports = {
  write: function (doc) {
    var pageCount = doc.bufferedPageRange().count
    for(var i=1; i<pageCount; i++) {
      doc.switchToPage(i)
      writeHeader(doc, i, pageCount)
    }
  }
}

function writeHeader(doc, pageNumber, lastPageNumber) {
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.fontSize(9)
  doc.text('page2_header', 20, 10)
  doc.text('Page ' + pageNumber + ' of ' + lastPageNumber, 500, 10)
}
