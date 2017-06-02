'use strict'

module.exports = {
  write: function (doc) {
    doc.switchToPage(0)

    doc.image('./src/core/pdf/logoimage1.png', 20, 5, { scale: 0.4})

    doc.fontSize(18)
    doc.text('Surgical Pathology Report', 350, 10, {
      align: 'right'
    })

    doc.fontSize(14)
    doc.lineWidth(50)
    doc.text('amendement_title', 450, 35, {
      align: 'right'
    })

    doc.fontSize(14)
    doc.text('YPI Report #: report_number', 350, 62, {
      align: 'right'
    })

    doc.fontSize(14)
    doc.text('Client Report #: client_rpt_no', 350, 80, {
      align: 'right'
    })
  }
}
