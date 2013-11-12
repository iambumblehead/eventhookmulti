// Filename: eventhookmulti.js
// Timestamp: 2013.11.10-14:48:25 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: eventhook.js, lockfn.js

var eventhook = require('eventhook');
var lockfn = require('lockfn');

var eventhookmulti = ((typeof module === 'object') ? module : {}).exports = (function () {

  var proto = Object.create(eventhook.proto);

  proto.types = [];

  proto.hasType = function (type) {
    return this.types.indexOf(type) === -1 ? false : true;
  };

  proto.addType = function (type) {
    var that = this;
  
    if (!that.hasType(type)) {
      that.types.push(type);
    }
  };

  proto.addTypeFn = function (id, fn) {
    if (typeof id === 'string') {
      this.addType(id);
      fn.idname = id;
    }     
    this.addFn(fn);
  };

  proto.fireType = function (id, a1,a2,a3,a4) {
    this.fnArr.map(function (fn) {
      if (fn.idname === id) {
        fn(a1,a2,a3,a4);
      }
    });
  };
  
  proto.getThrottle = function () {
    return this.throttle || 
      (this.throttle = lockfn.Throttling.getNew({
        ms : this.throttlems
      }));
  };


  proto.fireTypeThrottle = function (id, a1,a2,a3,a4) {
    var that = this;

    if (that.hasType(id)) {
      that.getThrottle()(function () {
        that.fnArr.map(function (fn) {
          if (fn.idname === id) {
            fn(a1,a2,a3,a4);
          }
        });
      });
    }
  };

  proto.throttleFire = function (id, fn) {
    var that = this;

    if (that.hasType(id)) {
      that.getThrottle()(function () {
        fn(function (err, res, a, b, c) {
          that.fireType(id, err, res, a ,b ,c);
        });
/*        
        that.fnArr.map(function (fn) {
          if (fn.idname === id) {
            fn(a1,a2,a3,a4);
          }
        });
*/
      });
    }
  };


  return {
    proto : proto,
    getNew : function (spec) {
      var that = Object.create(proto);
      that.fnArr = [];
      that.types = [];
      that.throttlems = spec.throttlems;
      return that;
    }
  };
  
}());
