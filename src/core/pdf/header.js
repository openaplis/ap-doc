<<<<<<< HEAD
var fs = require('fs')
var PDFDocument = require('pdfkit')

var doc = new PDFDocument({
  size: [612, 792],
  bufferPages: true,
  margins: {
    top: 150,
    bottom: 25,
    left: 25,
    right: 25
  },
  info: {
    Title: 'Tile of File Here',
    Author: 'Some Author',
  }
})

doc.bufferedPageRange()

range = doc.bufferedPageRange()
var pageCount = doc.bufferedPageRange().count

doc.switchToPage(0)
doc.image('logoimage1.png', 20, 5, { scale: 0.4})

doc.switchToPage(0)
doc.fontSize(18)
doc.text('Surgical Pathology Report', 350, 10, {
  align: 'right'
});

doc.switchToPage(0)
doc.fontSize(14)
doc.lineWidth(50)
doc.text('amendement_title', 450, 35, {
  align: 'right'
})

doc.switchToPage(0)
doc.fontSize(14)
doc.text('YPI Report #: report_number', 350, 62, {
  align: 'right'
})

doc.switchToPage(0)
doc.fontSize(14)
doc.text('Client Report #: client_rpt_no', 350, 80, {
  align: 'right'
})

doc.flushPages();

// Stream contents to a file
doc.pipe(
  fs.createWriteStream('./file.pdf')
).on('finish', function () {
  console.log('PDF closed')
})

// Close PDF and write file.
doc.end();
=======
'use strict'

module.exports = {
  write: function (doc) {
    doc.fontSize(25)
    doc.text('Surgical Report', 400, 25);    
  }
}
>>>>>>> a8fad6077f16f8a6a2c04dd3ad06808ed3496575
