'use strict'

module.exports = {
  write: function (doc) {
    doc.font('verdanab.ttf')
    doc.fontSize(14)
    doc.text('patient_name', 85, 98)
    doc.font('verdana.ttf')
    doc.fontSize(10)
    doc.text('Patient:', 10, 100)
    doc.text('(DOB patient_birthdate, patient_age)', 200, 100)
    doc.text('Date of Report:', 400, 115)
    doc.text('final_date', 500, 115)
    doc.text('Provider', 10, 130)
    doc.text('physician_name', 85, 130)
    doc.text('Accessioned:', 400, 130)
    doc.text('accession_date', 500, 130)
    doc.text('client_name', 85, 145)
    doc.text('Date fo service', 400, 145)
    doc.text('collection_date', 500, 145)
    doc.text('Clinet MRN:', 400, 160)
    doc.text('client_mrn_no', 500, 160)
    doc.text('Client Account No:', 400, 175)
    doc.text('client_account_no', 500, 175)
    doc.text('Diagnosis:', 18, 198)
    doc.text('specimen_blank_row', 18, 213)
    doc.text('s_id', 18, 228)
    doc.text('specimen_type', 45, 228)
    doc.text('diagnosis', 45, 243)
    doc.text('Comment:', 18, 273)
    doc.text('report_comment', 75, 273)
    doc.text('pathologist_signature', 400, 288)
    doc.text('ammendment_blank_row', 18, 318)
    doc.text('amendment_date_time', 18, 335)
    doc.text('amendment_text', 18, 350)
    doc.text('amendment_signature', 400, 375)
    doc.text('Cancer Case Study', 18, 415, {
      underline: true
    })
    doc.text('cancer_summary', 18, 430)
    doc.text('Microscopic Description', 18, 455, {
      underline: true
    })
    doc.text('microscopic_description', 18, 470)
    doc.text('Specimen Description', 18, 490, {
      underline: true
    })
    doc.text('specimen_description', 18, 505)
    doc.text('Collection Date/Time', 350, 490, {
      underline: true
    })
    doc.text('date_time_collected', 350, 505)
    doc.text('Ancillary Studies', 18, 525, {
      underline: true
    })
    doc.text('ancillary_studies_comment', 18, 540)
    doc.text('specimen_type', 28, 560)
    doc.text('Immunohistochemistry(single)', 35, 575, {
      underline: true
    })
    doc.text('Immunohistochemistry(dual)', 35, 590, {
      underline: true
    })
    doc.text('Cytochemical', 35, 605, {
      underline: true
    })
    doc.text('Test', 50, 620, {
      underline: true
    })
    doc.text('Block', 150, 620, {
      underline: true
    })
    doc.text('Result', 250, 620, {
      underline: true
    })

    doc.fontSize(8)
    doc.text('Full distribution list is provided at the end of the report', 85, 175)
    doc.text('*** E-signed final_date ***', 400, 303)
    doc.text('signature_title', 400, 385)

    doc.fontSize(12)
    doc.text('ajcc_stage', 500, 415)

    doc.lineWidth(1.5)
    doc.lineCap('butt').moveTo(10, 190).lineTo(590, 190).stroke() // top
    doc.lineCap('butt').moveTo(10, 330).lineTo(590, 330).stroke() // bottom
    doc.lineCap('butt').moveTo(10, 190).lineTo(10, 330).stroke() // left
    doc.lineCap('butt').moveTo(590, 190).lineTo(590, 330).stroke() // right
    doc.lineCap('butt').moveTo(10, 330).lineTo(10, 400).stroke()
    doc.lineCap('butt').moveTo(590, 330).lineTo(590, 400).stroke()
    doc.lineCap('butt').moveTo(10, 400).lineTo(590, 400).stroke()

    doc.lineWidth(1)
    doc.lineCap('butt').moveTo(12, 192).lineTo(588, 192).stroke()
    doc.lineCap('butt').moveTo(12, 192).lineTo(12, 328).stroke()
    doc.lineCap('butt').moveTo(588, 192).lineTo(588, 328).stroke()
    doc.lineCap('butt').moveTo(12, 328).lineTo(588, 328).stroke()
    doc.lineCap('butt').moveTo(12, 328).lineTo(12, 398).stroke()
    doc.lineCap('butt').moveTo(588, 328).lineTo(588, 398).stroke()
    doc.lineCap('butt').moveTo(12, 398).lineTo(588, 398).stroke()
  }
}
