'use strict'

module.exports = {
  write: function (doc) {
    doc.font('verdanab.ttf')
    doc.fontSize(12)
    doc.text('patient_name', 85, 98)
    doc.fontSize(9)
    doc.text('ajcc_stage', 500, 400)
    doc.fontSize(8)
    doc.text('specimen_blank_row', 18, 213)
    doc.fontSize(7)
    doc.text('Diagnosis:', 18, 198)
    doc.text('s_id', 18, 228)
    doc.text('specimen_type', 55, 228)
    doc.text('Comment:', 18, 273)
    doc.text('ammendment_blank_row', 18, 315)
    doc.text('amendment_date_time', 18, 335)
    doc.text('Cancer Case Study', 18, 405, {
      underline: true
    })
    doc.text('Microscopic Description', 18, 430, {
      underline: true
    })
    doc.text('Specimen Description', 18, 455, {
      underline: true
    })
    doc.text('Collection Date/Time', 350, 455, {
      underline: true
    })
    doc.text('Ancillary Studies', 18, 480, {
      underline: true
    })
    doc.text('specimen_type', 28, 505)
    doc.text('Immunohistochemistry(single)', 35, 515, {
      underline: true
    })
    doc.text('Immunohistochemistry(dual)', 35, 525, {
      underline: true
    })
    doc.text('Cytochemical', 35, 535, {
      underline: true
    })
    doc.text('Test', 50, 545, {
      underline: true
    })
    doc.text('Block', 150, 545, {
      underline: true
    })
    doc.text('Result', 250, 545, {
      underline: true
    })
    doc.text('Clinical Information', 18, 570, {
      underline: true
    })
    doc.text('intraoperative consult header', 18, 595, {
      underline: true
    })
    doc.text('Gross Description', 18, 630, {
      underline: true
    })





    doc.font('verdana.ttf')
    doc.fontSize(9)
    doc.text('Patient:', 10, 100)
    doc.text('Date of Report:', 390, 115)
    doc.text('Provider', 10, 130)
    doc.text('Accessioned:', 390, 130)
    doc.text('Date fo service', 390, 145)
    doc.text('Clinet MRN:', 390, 160)
    doc.text('Client Account No:', 390, 175)
    doc.fontSize(8)
    doc.text('(DOB patient_birthdate, patient_age)', 200, 100)
    doc.text('final_date', 500, 115, {
      align: 'right'
    })
    doc.text('physician_name', 85, 130)

    doc.text('accession_date', 500, 130, {
      align: 'right'
    })
    doc.text('client_name', 85, 145)

    doc.text('collection_date', 500, 145, {
      align: 'right'
    })

    doc.text('client_mrn_no', 500, 160, {
      align: 'right'
    })

    doc.text('client_account_no', 490, 175, {
      align: 'right'
    })
    doc.text('diagnosis', 55, 243)
    doc.text('report_comment', 85, 273)
    doc.text('pathologist_signature', 400, 288)
    doc.text('amendment_text', 18, 350)
    doc.text('amendment_signature', 400, 375)
    doc.fontSize(7)
    doc.text('Full distribution list is provided at the end of the report', 85, 175)
    doc.text('cancer_summary', 18, 415)
    doc.text('microscopic_description', 18, 440)
    doc.text('specimen_description', 18, 465)
    doc.text('date_time_collected', 350, 465)
    doc.text('ancillary_studies_comment', 18, 490)
    doc.text('clinical_information', 18, 580)
    doc.text('intraoperative_consultation_specimen', 18, 605)
    doc.text('intraoperative_consultation_text', 35, 615)
    doc.text('gross_description', 18, 640)
    doc.text('stain_description', 50, 555)
    doc.text('block_description', 150, 555)
    doc.text('stain_result', 250, 555)
    doc.fontSize(6)
    doc.text('*** E-signed final_date ***', 400, 303)
    doc.text('signature_title', 400, 385)

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
