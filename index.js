var fs = require('fs');
var less = require('less');
var CleanCSS = require('clean-css');

var css_to_js = function(css){
  //see css-to-js-fn.template.js
  return '(function(e){if("undefined"!=typeof document){var t=document;if(t.less_to_js__inserted=t.less_to_js__inserted||{},!t.less_to_js__inserted[e]){t.less_to_js__inserted[e]=!0;var s=t.createElement("style");s.setAttribute("type","text/css"),"textContent"in s?s.textContent=e:s.styleSheet.cssText=e,t.getElementsByTagName("head")[0].appendChild(s)}}}(' + JSON.stringify(css) + "));";
};

var minifyCSS = function(css){
  return new CleanCSS({
    advanced: true,
    keepSpecialComments: 0
  }).minify(css).styles;
};

module.exports = function(file, callback){
  fs.readFile(file, {encoding: "utf8"}, function(err, data){
    if(err) return callback(err);

    less.render(data.toString(), {}, function(err, out){
      if(err) return callback(err);

      fs.writeFile(file + ".js", css_to_js(minifyCSS(out.css)), {encoding: "utf8"}, callback);
    });
  });
};
