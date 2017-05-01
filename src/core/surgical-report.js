'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime')

module.exports.build = (data, callback) => {
  fs.readFile(function (err, content) {
    if (err) return callback(err)
    Handlebars.registerPartial('documents/surgical/page', Handlebars.template['documents/surgical/page'])

    // Handlebars.registerPartial('layouts/base-html', Handlebars.template['layouts/base-html'])
    // Handlebars.registerPartial('surgical/gross-description', Handlebars.template['surgical/gross-description'])
    // Handlebars.registerPartial('surgical/surgical-diagnosis', Handlebars.template['surgical/surgical-diagnosis'])
    // Handlebars.registerPartial('surgical/surgical-header', Handlebars.template['surgical/surgical-header'])
    var template = Handlebars.templates['documents/surgical/page']

    var result = template(data)
    callback(null, result)
  })
}
