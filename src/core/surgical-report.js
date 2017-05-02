'use strict'

var Handlebars = require('handlebars/runtime')
var path = require('path')
var views = require(path.join(__dirname, '/views.js'))

module.exports.build = (data, callback) => {
  Handlebars.registerPartial('documents/surgical/page', Handlebars.templates['documents/surgical/page'])
  Handlebars.registerPartial('style', Handlebars.templates['style'])

  Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
  Handlebars.registerPartial('documents/surgical/surgical-header', Handlebars.templates['documents/surgical/surgical-header'])
  Handlebars.registerPartial('partials/patient-information', Handlebars.templates['partials/patient-information'])
  Handlebars.registerPartial('documents/surgical/surgical-diagnosis', Handlebars.templates['documents/surgical/surgical-diagnosis'])
  Handlebars.registerPartial('partials/main-body', Handlebars.templates['partials/main-body'])
  Handlebars.registerPartial('partials/footer', Handlebars.templates['partials/footer'])

  var template = Handlebars.templates['documents/surgical/page']
  var html = template(data)
  callback(null, html)

}
