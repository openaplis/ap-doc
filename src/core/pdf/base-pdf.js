var fs = require('fs')
var PDFDocument = require('pdfkit')

module.exports = {
    new: function () {
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
      return doc
    },

    save: function (doc, callback) {
      doc.flushPages()
      var ws = doc.pipe(fs.createWriteStream('./file.pdf'))
      doc.end()

      ws.on('error', function (err) {
        callback(err)
      })

      ws.on('finish', function () {
        callback(null, 'Document has been saved.')
      })
    }

}
