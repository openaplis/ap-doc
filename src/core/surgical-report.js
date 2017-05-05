'use strict'

var Handlebars = require('handlebars/runtime')
var path = require('path')
var views = require(path.join(__dirname, '/views.js')) // eslint-disable-line

module.exports.build = (data, callback) => {
  Handlebars.registerPartial('documents/surgical/page', Handlebars.templates['documents/surgical/page'])
  Handlebars.registerPartial('style', Handlebars.templates['style'])

  Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
  Handlebars.registerPartial('partials/header', Handlebars.templates['partials/header'])
  Handlebars.registerPartial('partials/patient-information', Handlebars.templates['partials/patient-information'])
  Handlebars.registerPartial('documents/surgical/surgical-diagnosis', Handlebars.templates['documents/surgical/surgical-diagnosis'])
  Handlebars.registerPartial('documents/surgical/ancillary-studies', Handlebars.templates['documents/surgical/ancillary-studies'])
  Handlebars.registerPartial('partials/cancer-case-study', Handlebars.templates['partials/cancer-case-study'])
  Handlebars.registerPartial('partials/microscopic-description', Handlebars.templates['partials/microscopic-description'])
  Handlebars.registerPartial('partials/specimen-description', Handlebars.templates['partials/specimen-description'])
  Handlebars.registerPartial('partials/report-distribution', Handlebars.templates['partials/report-distribution'])
  Handlebars.registerPartial('documents/surgical/gross-description', Handlebars.templates['documents/surgical/gross-description'])
  Handlebars.registerPartial('partials/amendment', Handlebars.templates['partials/amendment'])
  Handlebars.registerPartial('partials/clinical-information', Handlebars.templates['partials/clinical-information'])
  Handlebars.registerPartial('partials/intraoperative-consult', Handlebars.templates['partials/intraoperative-consult'])
  Handlebars.registerPartial('partials/footer', Handlebars.templates['partials/footer'])

  var template = Handlebars.templates['documents/surgical/page']
  var html = template(data)
  callback(null, html)
}
