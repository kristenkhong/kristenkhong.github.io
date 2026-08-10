// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"eJ23":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var math = {
  lerp: function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  },
  norm: function norm(value, min, max) {
    return (value - min) / (max - min);
  }
};
var config = {
  height: window.innerHeight,
  width: window.innerWidth
};

var Smooth = /*#__PURE__*/function () {
  function Smooth() {
    _classCallCheck(this, Smooth);

    this.bindMethods();
    this.data = {
      ease: 0.1,
      current: 0,
      last: 0,
      rounded: 0
    };
    this.dom = {
      el: document.querySelector('[data-scroll]'),
      content: document.querySelector('[data-scroll-content]')
    };
    this.rAF = null;
    this.init();
  }

  _createClass(Smooth, [{
    key: "bindMethods",
    value: function bindMethods() {
      var _this = this;

      ['scroll', 'run', 'resize'].forEach(function (fn) {
        return _this[fn] = _this[fn].bind(_this);
      });
    }
  }, {
    key: "setStyles",
    value: function setStyles() {
      Object.assign(this.dom.el.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden'
      });
    }
  }, {
    key: "setHeight",
    value: function setHeight() {
      document.body.style.height = "".concat(this.dom.content.getBoundingClientRect().height, "px");
    }
  }, {
    key: "resize",
    value: function resize() {
      this.setHeight();
      this.data.rounded = this.data.last = this.data.current;
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this2 = this;

      imagesLoaded(this.dom.content, function (instance) {
        _this2.setHeight();
      });
    }
  }, {
    key: "scroll",
    value: function scroll() {
      this.data.current = window.scrollY;
    }
  }, {
    key: "run",
    value: function run() {
      this.data.last += (this.data.current - this.data.last) * this.data.ease;
      this.data.rounded = Math.round(this.data.last * 100) / 100;
      var diff = this.data.current - this.data.rounded;
      var acc = diff / config.width;
      var velo = +acc;
      var skew = velo * 7.5;
      this.dom.content.style.transform = "translate3d(0, -".concat(this.data.rounded, "px, 0) skewY(").concat(skew, "deg)");
      this.requestAnimationFrame();
    }
  }, {
    key: "on",
    value: function on() {
      this.setStyles();
      this.setHeight();
      this.addEvents();
      this.requestAnimationFrame();
    }
  }, {
    key: "off",
    value: function off() {
      this.cancelAnimationFrame();
      this.removeEvents();
    }
  }, {
    key: "requestAnimationFrame",
    value: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      this.rAF = requestAnimationFrame(this.run);
    })
  }, {
    key: "cancelAnimationFrame",
    value: function (_cancelAnimationFrame) {
      function cancelAnimationFrame() {
        return _cancelAnimationFrame.apply(this, arguments);
      }

      cancelAnimationFrame.toString = function () {
        return _cancelAnimationFrame.toString();
      };

      return cancelAnimationFrame;
    }(function () {
      cancelAnimationFrame(this.rAF);
    })
  }, {
    key: "destroy",
    value: function destroy() {
      document.body.style.height = '';
      this.data = null;
      this.removeEvents();
      this.cancelAnimationFrame();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      window.addEventListener('resize', this.resize, {
        passive: true
      });
      window.addEventListener('scroll', this.scroll, {
        passive: true
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      window.removeEventListener('resize', this.resize, {
        passive: true
      });
      window.removeEventListener('scroll', this.scroll, {
        passive: true
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.preload();
      this.on();
    }
  }]);

  return Smooth;
}();

new Smooth();
},{}]},{},["eJ23"], null)
//# sourceMappingURL=/work.05098db1.js.map