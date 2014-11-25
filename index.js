var fs = require('fs');
var less = require('less');

var css_to_js = function(css){
	return "if(typeof document!=='undefined')require('insert-css')(" + JSON.stringify(css) + ")";
};

module.exports = function(file, callback){
	fs.readFile(file, {encoding: "utf8"}, function(err, data){
		if(err)
			return callback(err);

		less.render(data.toString(), {compress: true}, function(err, out){
			if(err)
				return callback(err);

			fs.writeFile(file + ".js", css_to_js(out.css), {encoding: "utf8"}, function(err){
				 callback(err || null);
			});
		});
	});
};
