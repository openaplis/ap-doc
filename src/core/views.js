var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['style'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "@media print {\r\n  body {\r\n    -webkit-print-color-adjust: exact;\r\n  }\r\n  .checkBox {\r\n    -webkit-print-color-adjust: exact;\r\n  }\r\n}\r\nhtml,\r\nbody {\r\n  background-color: #fff;\r\n  margin: 0px;\r\n}\r\n.page {\r\n  position: relative;\r\n  height: 278mm;\r\n  width: 217mm;\r\n  font-family: 'Verdana';\r\n  display: block;\r\n  background: #fff;\r\n  page-break-after: auto;\r\n  overflow: hidden;\r\n}\r\n.row {\r\n  height: 5mm;\r\n  width: 217mm;\r\n}\r\n.heading {\r\n  position: relative;\r\n  height: 5mm;\r\n  width: 217mm;\r\n  background: #a95346;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  letter-spacing: 0.1mm;\r\n  color: #a95346;\r\n}\r\n.whiteBox {\r\n  min-height: 5mm;\r\n  height: auto;\r\n  font-size: 3mm;\r\n  line-height: 2;\r\n  border-left: 1px solid #a95346;\r\n  border-bottom: 1px solid #a95346;\r\n  color: #000;\r\n  letter-spacing: 0.1mm;\r\n  float: left;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n.brownBox {\r\n  height: 5mm;\r\n  font-size: 3mm;\r\n  line-height: 2;\r\n  border-left: 1px solid #a95346;\r\n  border-bottom: 1px solid #a95346;\r\n  color: #a95346;\r\n  letter-spacing: 0.1mm;\r\n  float: left;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n.yellowBox {\r\n  height: 5mm;\r\n  font-size: 3mm;\r\n  line-height: 2;\r\n  border-left: 1px solid #a95346;\r\n  border-bottom: 1px solid #a95346;\r\n  color: #a95346;\r\n  letter-spacing: 0.1mm;\r\n  float: left;\r\n  display: inline-block;\r\n  text-align: center;\r\n  background-color: #fff19c;\r\n}\r\n.checkBox {\r\n  width: 2mm;\r\n  height: 2mm;\r\n  background-color: #fff;\r\n  position: relative;\r\n  display: inline-block;\r\n  box-shadow: 2px 2px #a95346;\r\n}\r\n.underLine {\r\n  height: 4mm;\r\n  width: 68mm;\r\n  position: relative;\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n.highlight {\r\n  background-color: #fff19c;\r\n}\r\n";
},"useData":true});
templates['layouts/base'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        Open AP LIS Report\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </title>\r\n    <style>\r\n"
    + ((stack1 = container.invokePartial(partials.style,depth0,{"name":"style","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </style>\r\n  <body>\r\n    <div class=\"page\">\r\n"
    + ((stack1 = container.invokePartial(partials["content-block"],depth0,{"name":"content-block","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n  </body>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
templates['partials/footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"brownBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm; text-align: right;\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"whiteBox\" style=\"width: 217.25mm; height: 32mm; border: 1px dotted;\">\r\n  <!--bottom portion of report-->\r\n  <div class=\"whiteBox\" style=\"width: 217mm; height: 3mm; border: none;\">\r\n    <div class=\"row\">\r\n      <div class=\"brownBox\" style=\"width: 100mm; border: none; text-align: left; font-size: 3mm; line-height: .75;\">Yellowstone Pathology Institute, Inc.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 74mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 74mm; height: 3mm; font-weight: bold; border: none; text-align: left; font-size: 3mm; line-height: .75; border-bottom: solid .5mm;\">Billings</div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.addressline1 : stack1), depth0))
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.addressline2 : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.state : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.zip : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">phone: <span style=\"font-weight: bold;\"> "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</span>  fax:<span style=\"font-weight: bold;\"> "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.fax : stack1), depth0))
    + "</span></div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">toll-free: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.tollfree : stack1), depth0))
    + "</span></div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 74mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 74mm; height: 3mm; font-weight: bold; border: none; text-align: left; font-size: 3mm; line-height: .75; border-bottom: solid .5mm;\">Cody</div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.addressline1 : stack1), depth0))
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.addressline2 : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.state : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.zip : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">phone: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</span> fax: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.fax : stack1), depth0))
    + "</span></div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">toll-free <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.tollfree : stack1), depth0))
    + "</span></div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 67mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 67mm; height: 3mm; border: none; text-align: left; font-size: 3mm; line-height: .75; text-align: right; border-bottom: solid .5mm;\">YellowstonePathology.com</div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pathologist : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});
templates['partials/header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--header section of page-->\r\n<div class=\"whiteBox\" style=\"width: 105mm; border: none; height: 30mm; text-align: left;\">\r\n  <img src=\"data:image/png;base64,"
    + alias4(((helper = (helper = helpers.logoImage || (depth0 != null ? depth0.logoImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoImage","hash":{},"data":data}) : helper)))
    + "\" height=\"115mm\" width=\"775mm\">\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 108.5mm; border: none; height: 30mm; text-align: left;\">\r\n  <div class=\"brownBox\" style=\"width: 100mm; border: none; font-size: 5mm; font-weight: bold; line-height: 2; text-align: right; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.report_type || (depth0 != null ? depth0.report_type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"report_type","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"brownBox\" style=\"width: 100mm; border: none; font-size: 4mm; line-height: 3; text-align: right;\">"
    + alias4(((helper = (helper = helpers.amendment_title || (depth0 != null ? depth0.amendment_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_title","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"whiteBox\" style= \"width: 100mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\"></div>\r\n  <div class=\"whiteBox\" style=\"width: 70mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">YPI Report #:</div>\r\n  <div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 4mm; line-height: 2; text-align: left;\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.panelSetOrder : depth0)) != null ? stack1.reportNo : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 70mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">Client Report #:</div>\r\n  <div class=\"whiteBox\" style=\"width: 25mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">"
    + alias4(((helper = (helper = helpers.client_rpt_no || (depth0 != null ? depth0.client_rpt_no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"client_rpt_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/interpretation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Interpretation</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_interpretation || (depth0 != null ? depth0.report_interpretation : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_interpretation","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/main-body'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Clinical Information</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.clinicalHistory : stack1), depth0))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Ancillary Studies</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(((helper = (helper = helpers.ancillary_studies_comment || (depth0 != null ? depth0.ancillary_studies_comment : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"ancillary_studies_comment","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; padding-left: 3.5mm; font-weight: bold;\">specimen type</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Immunohistochemistry(single)</div>\r\n  </div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Immunohistochemistry(dual)</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Cytochemical</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 60mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 10mm;\">Test</div>\r\n  <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Block</div>\r\n  <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Result</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 60mm; border: none; text-align: left; line-height: 1; padding-left: 10mm;\">"
    + alias1(((helper = (helper = helpers.stain_description || (depth0 != null ? depth0.stain_description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"stain_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; padding-left: 4.5mm;\">"
    + alias1(((helper = (helper = helpers.block_description || (depth0 != null ? depth0.block_description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"block_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; padding-left: 4.5mm;\">"
    + alias1(((helper = (helper = helpers.stain_result || (depth0 != null ? depth0.stain_result : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"stain_result","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Intraoperative consultation header</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(((helper = (helper = helpers.intraoperative_consultation_specimen || (depth0 != null ? depth0.intraoperative_consultation_specimen : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"intraoperative_consultation_specimen","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; padding-left: 5mm;\">"
    + alias1(((helper = (helper = helpers.intraoperative_consultation_text || (depth0 != null ? depth0.intraoperative_consultation_text : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"intraoperative_consultation_text","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/patient-information'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<!--top portion with patient information-->\r\n<div class=\"whiteBox\" style=\"width: 20mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">Patient:</div>\r\n<div class=\"whiteBox\" style=\"width: 60mm; border: none; font-size: 5mm; font-weight: bold; line-height: 1.25; text-align: left;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pLastName : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pFirstName : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pMiddleInitial : stack1), depth0))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 85mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left;\">(DOB: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pBirthdate : stack1), depth0))
    + ")</div>\r\n<div class=\"whiteBox\" style=\"width: 130mm; border: none;\"></div>\r\n<div class=\"whiteBox\" style=\"width: 46mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Report Date:</div>\r\n<div class=\"whiteBox\" style=\"width: 39mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.finalizedDate : stack1), depth0))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 19mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">Provider:</div>\r\n<div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left;\">"
    + alias2(((helper = (helper = helpers.physician_name || (depth0 != null ? depth0.physician_name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"physician_name","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 49mm; border: none; font-size: 3.5mm; line-height: 1.75; text-align: right; font-size: 4mm;\">Accessioned:</div>\r\n<div class=\"whiteBox\" style=\"width: 40mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.accessionDate : stack1), depth0))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 20mm; border: none;\"></div>\r\n<div class=\"whiteBox\" style=\"width: 108mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left;\">"
    + alias2(((helper = (helper = helpers.client_name || (depth0 != null ? depth0.client_name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"client_name","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 48mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Date of Service:</div>\r\n<div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.collectionDate : stack1), depth0))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 130mm; border: none;\"></div>\r\n<div class=\"whiteBox\" style=\"width: 46mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Client MRN:</div>\r\n<div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(((helper = (helper = helpers.client_mrn_no || (depth0 != null ? depth0.client_mrn_no : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"client_mrn_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"whiteBox\" style=\"width: 14mm; border: none;\"></div>\r\n<div class=\"whiteBox\" style=\"width: 105mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-bottom: 1mm;\">Full distribution list is provided at the end of the report</div>\r\n<div class=\"whiteBox\" style=\"width: 57mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm; padding-bottom: 1mm;\">Client Account No:</div>\r\n<div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 1mm; padding-bottom: 1mm;\">"
    + alias2(((helper = (helper = helpers.client_account_no || (depth0 != null ? depth0.client_account_no : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"client_account_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"useData":true});
templates['partials/references'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">References</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_references || (depth0 != null ? depth0.report_references : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_references","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/report-distribution'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Report Distribution</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_distribution || (depth0 != null ? depth0.report_distribution : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_distribution","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/report-method'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Method</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_method || (depth0 != null ? depth0.report_method : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_method","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/specimen-description'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<div class=\"whiteBox\" style=\"color: black; width: 216mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Specimen Description</div>\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Collection Date/Time</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(((helper = (helper = helpers.specimen_description || (depth0 != null ? depth0.specimen_description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"specimen_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.collectionDate : stack1), depth0))
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.collectionTime : stack1), depth0))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/test-details'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['partials/top-body'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<!--middle main body portion of the report-->\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Cancer Case Study</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(((helper = (helper = helpers.cancer_summary || (depth0 != null ? depth0.cancer_summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cancer_summary","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Microscopic Description</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none; text-align: left; line-height: 1;\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.panelSetOrder : depth0)) != null ? stack1.microscopicX : stack1), depth0))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/ypi-reports'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Other Yellowstone Pathology Institute Reports</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.other_ypi_cases || (depth0 != null ? depth0.other_ypi_cases : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"other_ypi_cases","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['documents/surgical/gross-description'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Gross Description</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.gross_description || (depth0 != null ? depth0.gross_description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gross_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['documents/surgical/page'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["partials/header"],depth0,{"name":"partials/header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/patient-information"],depth0,{"name":"partials/patient-information","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["documents/surgical/surgical-diagnosis"],depth0,{"name":"documents/surgical/surgical-diagnosis","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/top-body"],depth0,{"name":"partials/top-body","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/specimen-description"],depth0,{"name":"partials/specimen-description","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/main-body"],depth0,{"name":"partials/main-body","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["documents/surgical/gross-description"],depth0,{"name":"documents/surgical/gross-description","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/footer"],depth0,{"name":"partials/footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["layouts/base"],depth0,{"name":"layouts/base","hash":{"title":"Surgical"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content-block"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['documents/surgical/surgical-diagnosis'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"whiteBox\" style=\"width: 21mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: center; font-weight: bold;\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.specimenNumber : stack1), depth0))
    + ":</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--middle area with outlines-->\r\n<div class=\"whiteBox\" style=\"width: 215.5mm; border: solid .75mm black; border-bottom: solid .375mm black; padding: .25mm;\">\r\n  <div class=\"whiteBox\" style=\"width: 214.5mm; border: solid .25mm black;\">\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: 1px dotted; font-size: 3.5mm; line-height: 1.5; text-align: left; padding-left: 1mm; font-weight: bold;\">Diagnosis:</div>\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: 1px dotted;\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.specimenOrders : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"whiteBox\" style=\"width: 190mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm; font-weight: bold;\">"
    + alias4(((helper = (helper = helpers.specimen_type || (depth0 != null ? depth0.specimen_type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"specimen_type","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 21mm; border: 1px dotted;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 190mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.diagnosis || (depth0 != null ? depth0.diagnosis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"diagnosis","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: 1px dotted;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 30mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm; font-weight: bold;\">Comment:</div>\r\n    <div class=\"whiteBox\" style=\"width: 180mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.report_comment || (depth0 != null ? depth0.report_comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"report_comment","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 105mm; border: 1px dotted;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: 1px dotted; font-size: 3.5mm; line-height: 1; text-align: center;\">"
    + alias4(((helper = (helper = helpers.pathologist_signature || (depth0 != null ? depth0.pathologist_signature : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pathologist_signature","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 105mm; border: 1px dotted;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: 1px dotted; font-size: 2.5mm; text-align: center;\">*** E-signed "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.finalizedDate : stack1), depth0))
    + " ***</div>\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: 1px dotted;\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 215.5mm; border: solid .75mm black; border-top: solid .375mm black; padding: .25mm;\">\r\n  <div class=\"whiteBox\" style=\"width: 214.5mm; border: solid .25mm black;\">\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 5mm; font-weight: bold;\">"
    + alias4(((helper = (helper = helpers.amendment_date_time || (depth0 != null ? depth0.amendment_date_time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_date_time","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 5mm;\">"
    + alias4(((helper = (helper = helpers.amendment_text || (depth0 != null ? depth0.amendment_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_text","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 90mm; border: none;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 2; text-align: center;\">"
    + alias4(((helper = (helper = helpers.amendment_signature || (depth0 != null ? depth0.amendment_signature : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_signature","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 90mm; border: none;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 107mm; border: none; height: 3.5mm; border: none; font-size: 2.5mm; line-height: .75; text-align: center; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.signature_title || (depth0 != null ? depth0.signature_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"signature_title","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
