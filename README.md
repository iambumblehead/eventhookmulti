eventhookmulti
==============
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

<!-- pagevanilla -->

### Overview:

An object through which callbacks may be added and called through publish/subscribe model. What's special is that it wil throttle the `publish` event.

For example, you have two page objects, a text field and a gallery. Each time text is added to the input, you'd like to update the gallery with related images. When someone types text into the input, several events may be fired -`keydown`, `keyup`, `onchange`, `onblur`.

You may want to filter gallery data with text from the input on each of these events. You want to throttle the process so that when events are fired in the same time frame, filtering happens once only. Use eventhook multi.

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

get started


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
