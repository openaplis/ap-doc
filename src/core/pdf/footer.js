'use strict'

module.exports = {
  write: function (doc) {
    doc.switchToPage(0)

    doc.fontSize(8)
    doc.font('src/core/pdf/fonts/Candarab.ttf')
    doc.text('Yellowstone Pathology Institute, Inc.', 18, 675)
    doc.text('Billings', 18, 685)
    doc.text('Cody', 250, 685)
    doc.text('406.238.6360', 45, 730)
    doc.text('406.238.6361', 125, 730)
    doc.text('307.578.1850', 277, 730)
    doc.text('406.238.6361', 357, 730)
    doc.font('src/core/pdf/fonts/Candara.ttf')
    doc.text('YellowstonePathology.com', 480, 685, {
      align: 'right'
    })
    doc.text('2900 12th Avenue North, Suite 295W', 18, 700)
    doc.text('707 Sheridan Avenue', 250, 700)
    doc.text('Michael S. Brown, MD, FCAP', 480, 700, {
      align: 'right'
    })
    doc.text('Billings, MT 59101', 18, 710)
    doc.text('Cody, WY 82414', 250, 710)
    doc.text('Pamela C. Clegg, MD, FCAP', 480, 710, {
      align: 'right'
    })
    doc.text('Angela F. Durden, MD, FCAP', 480, 720, {
      align: 'right'
    })
    doc.text('phone', 18, 730)
    doc.text('fax', 108, 730)
    doc.text('phone', 250, 730)
    doc.text('fax', 340, 730)
    doc.text('Kerrie R. Emerick, MD, FCAP', 480, 730, {
      align: 'right'
    })
    doc.text('toll-free', 18, 740)
    doc.text('toll-free', 250, 740)
    doc.text('Christopher J. Nero, MD, FCAP', 460, 740, {
      align: 'right'
    })
    doc.text('Duane A. Schultz, MD, FCAP', 480, 750, {
      align: 'right'
    })

    doc.lineWidth(1.5)
    doc.lineCap('butt').moveTo(10, 695).lineTo(590, 695).stroke()
  }
}
