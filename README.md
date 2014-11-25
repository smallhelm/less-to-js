What it does
------------
Turns `.less` files into `.js` files that can run in the browser or in node. (just does nothing in node)

hello.less
```less
.hello{
  .world {
    color: lighten(red, 20%);
  }
}
```
Then compile the less to js
```sh
$ less-to-js hello.less
```
Which will create a new file
hello.less.js
```javascript
if(typeof document!=='undefined')require('insert-css')(".hello .world{color:#f66}")
```
Which file can be used in the browser or server. i.e. requried in a project using browserify
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
simply run it with a file path globs that you want to compile
```sh
$ less-to-js src/**/*.css src/**/*.less
```

### Node API
install
```sh
$ npm install less-to-js
```
Usage example:
```javascript
var less_to_js = require("less-to-js");

var file = "./asdf.less";

less_to_js(file, function(err){
  console.log(err ? "failed!" : "Done! created " + file + ".js");
});
```

License
-------
The MIT License (MIT)

Copyright (c) 2014 Small Helm LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
