eventhookmulti
==============
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  


### Overview:

Add callbacks to publish/subscribe style model. `eventhookmulti` may be used to throttle the activity publishing the event.

For example, two page objects, 1) text field and 2) gallery. When text is added to the field the gallery is rerendered with related images. When text is typed to the input, several events may be fired -`keydown`, `keyup`, `onchange`, `onblur`.

You want to throttle the activity bound to these events so that filtering happens once only withing a certain time period. Use eventhook multi.

It augments an [eventhook][1] object with locking functions from [lockfn][2]. So that you can throttle the activity from multiple events on the same object.

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://github.com/iambumblehead/eventhook            "eventhook"
[2]: https://github.com/iambumblehead/lockfn                  "lockfn"

---------------------------------------------------------
#### <a id="install"></a>Install:

eventhookmulti may be downloaded directly or installed through `npm`.

 * **npm**

 ```bash
 $ npm install eventhookmulti
 ```

 * **Direct Download**
 
 ```bash
 $ git clone https://github.com/iambumblehead/eventhookmulti.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

to run tests, use `npm test` from a shell.

```bash
$ npm test
```

---------------------------------------------------------
#### <a id="get-started">GET STARTED:

```javascript
// construct an eventhookmulti object
var ehookmulti = eventhookmulti.getNew({
    throttlems : 500
});
  
// add a subscriber function to the 'change' event on the ehookmulti object
ehookmulti.addTypeFn('change', function (err, res) {
    console.log('change event! ' + (res || ''));
});
  
// fire events on the ehookmulti object
ehookmulti.throttleFire('keyup')  // 
ehookmulti.throttleFire('change') // 'change event! '
ehookmulti.throttleFire('change') //
  
// when throttleFire is called, the functions passed to the event are throttled
// so only the first and last functions given to throttleFire in the 'throttlems'
// time are called.
ehookmulti.throttleFire('change', function (exitfn) {
    setTimeout(function () {
        exitfn(null, 'success!');  // 'change event! success!'
    }, 500);
});
  
// if functions are fired from events on an input text field the first event
// function and last event functions would be called.
```

---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
