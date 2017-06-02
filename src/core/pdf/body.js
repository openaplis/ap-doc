'use strict'

module.exports = {
  write: function (doc) {
    doc.fontSize(10)
    doc.text('Patient:', 10, 100)

    doc.fontSize(14)
    doc.text('patient_name', 85, 98)

    doc.fontSize(10)
    doc.text('(DOB patient_birthdate, patient_age)', 190, 100)
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

    doc.fontSize(8)
    doc.text('Full distribution list is provided at the end of the report', 85, 175)

    doc.fontSize(10)
    doc.text('Client Account No:', 400, 175)
    doc.text('client_account_no', 500, 175)

    doc.lineWidth(1.5);
    doc.lineCap('butt').moveTo(10, 190).lineTo(590, 190).stroke() //top
    doc.lineCap('butt').moveTo(10, 330).lineTo(590, 330).stroke() //bottom
    doc.lineCap('butt').moveTo(10, 190).lineTo(10, 330).stroke() //left
    doc.lineCap('butt').moveTo(590, 190).lineTo(590, 330).stroke() //right


    doc.lineWidth(1);
    doc.lineCap('butt').moveTo(12, 192).lineTo(588, 192).stroke()
    doc.lineCap('butt').moveTo(12, 192).lineTo(12, 328).stroke()
    doc.lineCap('butt').moveTo(588, 192).lineTo(588, 328).stroke()
    doc.lineCap('butt').moveTo(12, 328).lineTo(588, 328).stroke()

    doc.fontSize(10)
    doc.text('Diagnosis:', 18, 198)
    doc.text('specimen_blank_row', 18, 213)
    doc.text('s_id', 18, 228)
    doc.text('specimen_type', 45, 228)
    doc.text('diagnosis', 45, 243)
    doc.text('Comment:', 18, 273)
    doc.text('report_comment', 75, 273)
    doc.text('pathologist_signature', 400, 288)
    doc.text('ammendment_blank_row', 18, 318)

    doc.fontSize(8)
    doc.text('*** E-signed final_date ***', 400, 303)



  }
}
