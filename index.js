var fs = require('fs');
var less = require('less');

module.exports = function(file){
	less.render(fs.readFileSync(file, "utf8").toString(), {
		compress: true
	}, function(err, out){
		if(err){
			throw err;
		}
		fs.writeFileSync(file + ".js", "if(typeof document!=='undefined')require('insert-css')(" + JSON.stringify(out.css) + ")");
	});
};
