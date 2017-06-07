'use strict'

var path = require('path')

var baseDoc = require(path.join(__dirname, 'base-pdf'))
var firstPageHeader = require(path.join(__dirname, 'first-page-header'))
var pageHeader = require(path.join(__dirname, 'page-header'))
var footer = require(path.join(__dirname, 'footer'))

module.exports = {
  create: function (callback) {
    var doc = baseDoc.new()
    firstPageHeader.write(doc)
    writeBody(doc)
    pageHeader.write(doc)
    footer.write(doc)
    baseDoc.save(doc, function (err, result) {
      if (err) return callback(err)
      callback(null, result)
    })
  }
}

function writeBody(doc) {
  doc.font('src/core/pdf/fonts/verdana.ttf')
  //doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.fontSize(9)
  doc.moveDown(1)
  doc.text('Patient:', 10, null)
  doc.moveUp(1)
  doc.fontSize(12)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('patient_name', 85, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('(DOB patient_birthdate, patient_age)', 200, null)
  doc.moveDown(1)
  doc.fontSize(9)
  doc.text('Provider', 10, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('physician_name', 85, null)
  doc.fontSize(9)
  doc.moveUp(1)
  doc.text('Date of Report:', 390, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('final_date', 500, null, {
    align: 'right'
  })
  doc.moveDown(.5)
  doc.text('client_name', 85, null)
  doc.fontSize(9)
  doc.moveUp(1)
  doc.text('Accessioned:', 390, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('accession_date', 500, null, {
    align: 'right'
  })
  doc.fontSize(9)
  doc.moveDown(.5)
  doc.text('Date fo service', 390, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('collection_date', 500, null, {
    align: 'right'
  })
  doc.fontSize(9)
  doc.moveDown(.5)
  doc.text('Client MRN:', 390, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('client_mrn_no', 500, null, {
    align: 'right'
  })
  doc.fontSize(7)
  doc.moveDown(.5)
  doc.text('Full distribution list is provided at the end of the report', 85, null)
  doc.fontSize(9)
  doc.moveUp(1)
  doc.text('Client Account No:', 390, null)
  doc.moveUp(1)
  doc.fontSize(8)
  doc.text('client_account_no', 490, null, {
    align: 'right'
  })
  doc.fontSize(9)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Diagnosis:', 18, null)
  doc.fontSize(8)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('specimen_blank_row', 18, null)
  doc.fontSize(7)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('s_id', 22, null)
  doc.moveUp(1)
  doc.text('specimen_type', 55, null)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('diagnosis', 55, null)
  doc.fontSize(8)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Comment:', 18, null)
  doc.fontSize(7)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.moveUp(1)
  doc.text('report_comment', 85, null)
  doc.fontSize(6)
  doc.text('pathologist_signature', 400, null)
  doc.text('*** E-signed final_date ***', 400, null)
  doc.fontSize(8)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('ammendment_blank_row', 18, null)
  doc.text('amendment_date_time', 18, null)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('amendment_text', 18, null)
  doc.moveDown(1)
  doc.text('amendment_signature', 400, null)
  doc.fontSize(6)
  doc.text('signature_title', 400, null)
  doc.fontSize(7)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Cancer Case Study', 18, null, {
    underline: true
  })
  doc.text('ajcc_stage', 500, null)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.moveUp(1)
  doc.text('cancer_summary', 18, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Microscopic Description', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 18, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Specimen Description', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text("Skin, upper nasal, punch biopsy", 18, null,)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.moveUp(2)
  doc.text('Collection Date/Time', 350, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('date_time_collected', 350, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Ancillary Studies', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('ancillary_studies_comment', 18, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('specimen_type', 28, null)
  doc.moveDown(.5)
  doc.text('Immunohistochemistry(single)', 35, null, {
    underline: true
  })
  doc.moveDown(.5)
  doc.text('Immunohistochemistry(dual)', 35, null, {
    underline: true
  })
  doc.moveDown(.5)
  doc.text('Cytochemical', 35, null, {
    underline: true
  })
  doc.moveDown(.5)
  doc.text('Test', 50, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('stain_description', 50, null)
  doc.moveUp(2)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Block', 150, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('block_description', 150, null)
  doc.moveUp(2)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Result', 250, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('stain_result', 250, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Clinical Information', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('clinical_information', 18, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('intraoperative consult header', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text('intraoperative_consultation_specimen', 18, null)
  doc.text('intraoperative_consultation_text', 35, null)
  doc.moveDown(1)
  doc.font('src/core/pdf/fonts/verdanab.ttf')
  doc.text('Gross Description', 18, null, {
    underline: true
  })
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rel.", 18, null)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rel.", 18, null)
  doc.font('src/core/pdf/fonts/verdana.ttf')
  doc.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rel.", 18, null)
  //doc.text('Additional Testing', 20, null, {
  //  underline: true
  //})
  //doc.text('additional_testing', 20, null)
  //doc.moveDown(1)
  //doc.text('Other Yellowstone Pathology Institute Reports', 20, null, {
  //  underline: true
  //})
  //doc.text('other_ypii_cases', 20, null)
  //doc.moveDown(1)
  //doc.text('previous diagnosis header', 20, null, {
  //  underline: true
  //})
  //doc.text('sidp', 20, null)
  //doc.text('specimen_type_previous', 55, null)
  //doc.text('diagnosis_previous', 55, null)
  //doc.text('previous_diagnosis_blank_line1', 20, null)
  //doc.text('Comment:', 25, null)
  //doc.text('report-comment_previous:', 75, null)
  //doc.text('previous_diagnosis_blank_line2', 20, null)
  //doc.text('previous_signature', 450, null)
  //doc.moveDown(1)
  //doc.text('Report Distribution', 20, null, {
  //  underline: true
  //})
  //doc.text('report_distribution:', 20, null)
  //doc.text('immuno_comment', 20, null)
  //doc.text('location_performed', 20, null)
}
