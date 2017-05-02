'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime')
var views = require(__dirname + '/views.js')

module.exports.build = (data, callback) => {

  Handlebars.registerPartial('documents/surgical/page', Handlebars.templates['documents/surgical/page'])
  Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
  Handlebars.registerPartial('style', Handlebars.templates['style'])
  var template = Handlebars.templates['documents/surgical/page']

  var result = template(data)
  callback(null, result)

}
