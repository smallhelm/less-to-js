var fs = require('fs');
var less = require('less');
var CleanCSS = require('clean-css');
var cssToJS = require('css-to-css.js');

var minifyCSS = function(css){
  return new CleanCSS({
  }).minify(css).styles;
};

module.exports = function(file, callback){
  fs.readFile(file, {encoding: "utf8"}, function(err, data){
    if(err) return callback(err);

    less.render(data.toString(), function(err, out){
      if(err) return callback(err);

      fs.writeFile(file + ".js", cssToJS(minifyCSS(out.css)), {encoding: "utf8"}, callback);
    });
  });
};
