// Filename: eventhookmulti.spec.js  
// Timestamp: 2013.11.11-16:54:58 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  


var eventhookmulti = require('../eventhookmulti');

describe("eventhookmulti.getNew", function () {

  it("should return an eventhook object", function () {
    var ehookmulti = eventhookmulti.getNew({
      throttlems : 500
    });
    expect( ehookmulti.throttlems ).toBe( 500 );
  });

});

describe("ehookmulti.addTypeFn( _eventType_, _fn_)", function () {

  it("should define `idname` with _eventType_ on `fn` ", function () {
    var ehookmulti = eventhookmulti.getNew({
      throttlems : 500
    });

    var myfun = function () {};

    ehookmulti.addTypeFn('change', myfun);
    expect( myfun.idname ).toBe( 'change' );
  });

});

describe("ehookmulti.throttleFire( _eventType_, function (exitFn) {})", function () {

  it("should call callback function if eventType was previously added", function () {
    var ehookmulti = eventhookmulti.getNew({
      throttlems : 500
    });

    var x = 0;
    var myfun = function () { x++; };

    ehookmulti.addTypeFn('change', myfun);
    ehookmulti.throttleFire('change', function (exitfn) {
      exitfn(null, 'success');
    });

    expect( x ).toBe( 1 );
  });

  it("should not callback function if eventType was not previously added", function () {
    var ehookmulti = eventhookmulti.getNew({
      throttlems : 500
    });

    var x = 0;
    var myfun = function () { x++; };

    ehookmulti.addTypeFn('change', myfun);
    ehookmulti.throttleFire('keyup', function (exitfn) {
      exitfn(null, 'success');
    });

    expect( x ).toBe( 0 );
  });

  it("should call two callbacks in throttle time, first and last called within throttle time", function (done) {
    var ehookmulti = eventhookmulti.getNew({
      throttlems : 500
    });

    var x = 0;
    var myfun_change = function () { x++; };
    var myfun_keyup = function () { x++;x++; };

    ehookmulti.addTypeFn('change', myfun_change);
    ehookmulti.addTypeFn('keyup', myfun_keyup);
    ehookmulti.throttleFire('change', function (exitfn) {
      setTimeout(function () {
        exitfn(null, 'success');
      }, 500);
    });
    ehookmulti.throttleFire('keyup', function (exitfn) {
      exitfn(null, 'success');
    });
    ehookmulti.throttleFire('keyup', function (exitfn) {
      exitfn(null, 'success');
    });
    ehookmulti.throttleFire('keyup', function (exitfn) {
      exitfn(null, 'success');
    });
    ehookmulti.throttleFire('keyup', function (exitfn) {
      exitfn(null, 'success');
    });
    ehookmulti.throttleFire('change', function (exitfn) {
      exitfn(null, 'success');
    });

    setTimeout(function () {
      expect( x ).toBe( 2 );
      done();
    }, 600);
  });
});
