# less-to-js

[![build status](https://secure.travis-ci.org/smallhelm/less-to-js.svg)](https://travis-ci.org/smallhelm/less-to-js)

What it does
------------
Turns `.less` files into `.js` files that can run in the browser or in node. (just does nothing in node)

hello.less
```less
.hello {
  .world {
    color: lighten(red, 20%);
  }
}
```
turns into

hello.less.js
```javascript
(function(e){if("undefined"!=typeof document){var t=document;if(t.less_to_js__inserted=t.less_to_js__inserted||{},!t.less_to_js__inserted[e]){t.less_to_js__inserted[e]=!0;var s=t.createElement("style");s.setAttribute("type","text/css"),"textContent"in s?s.textContent=e:s.styleSheet.cssText=e,t.getElementsByTagName("head")[0].appendChild(s)}}}(".hello .world{color:#f66}"));
```

Which can then be used in the browser or server. For example requried in a project using browserify

app.js
```javascript
require('./hello.less.js');
```

How to use it
-------------

### Command Line
install
```sh
$ sudo npm install -g less-to-js
```
simply run it with file path globs that you want to compile
```sh
$ less-to-js src/**/*.css src/**/*.less
```

### Node API
install
```sh
$ npm install less-to-js
```
Usage example
```javascript
var less_to_js = require("less-to-js");

var file = "./asdf.less";

less_to_js(file, function(err){
  console.log(err ? "failed!" : "Done! created " + file + ".js");
});
```

## License
MIT
