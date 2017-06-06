'use strict'

module.exports = {
  write: function (doc) {
    doc.switchToPage(0)

    doc.image('./src/core/pdf/logoimage1.png', 20, 5, { scale: 0.4 })

    doc.fontSize(16)
    doc.font('src/core/pdf/fonts/verdanab.ttf')
    doc.text('Surgical Pathology Report', 300, 10, {
      align: 'right'
    })

    doc.fontSize(14)
    doc.font('src/core/pdf/fonts/verdanab.ttf')
    doc.text('amendement_title', 440, 30, {
      align: 'right'
    })
    doc.font('src/core/pdf/fonts/verdana.ttf')
    doc.text('YPI Report #: report_number', 350, 52, {
      align: 'right'
    })
    doc.text('Client Report #: client_rpt_no', 350, 70, {
      align: 'right'
    })
  }
}
