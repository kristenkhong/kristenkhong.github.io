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
})({"js/demo.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
  // helper functions
  var MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: function map(x, a, b, c, d) {
      return (x - a) * (d - c) / (b - a) + c;
    },
    // linear interpolation
    lerp: function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }
  }; // body element

  var body = document.body; // calculate the viewport size

  var winsize;

  var calcWinsize = function calcWinsize() {
    return winsize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  calcWinsize(); // and recalculate on resize

  window.addEventListener('resize', calcWinsize); // scroll position and update function

  var docScroll;

  var getPageYScroll = function getPageYScroll() {
    return docScroll = window.pageYOffset || document.documentElement.scrollTop;
  };

  window.addEventListener('scroll', getPageYScroll); // Item

  var Item = /*#__PURE__*/function () {
    function Item(el) {
      var _this = this;

      _classCallCheck(this, Item);

      // the .item element
      this.DOM = {
        el: el
      }; // the inner image

      this.DOM.image = this.DOM.el.querySelector('.item__img');
      this.renderedStyles = {
        // here we define which property will change as we scroll the page and the items is inside the viewport
        // in this case we will be translating the image on the y-axis
        // we interpolate between the previous and current value to achieve a smooth effect
        innerTranslationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // the maximum value to translate the image is set in a CSS variable (--overflow)
          maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
          // current value setter
          // the value of the translation will be:
          // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
          // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
          setValue: function setValue() {
            var maxValue = _this.renderedStyles.innerTranslationY.maxValue;
            var minValue = -1 * maxValue;
            return Math.max(Math.min(MathUtils.map(_this.props.top - docScroll, winsize.height, -1 * _this.props.height, minValue, maxValue), maxValue), minValue);
          }
        }
      }; // set the initial values

      this.update(); // use the IntersectionObserver API to check when the element is inside the viewport
      // only then the element translation will be updated

      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          return _this.isVisible = entry.intersectionRatio > 0;
        });
      });
      this.observer.observe(this.DOM.el); // init/bind events

      this.initEvents();
    }

    _createClass(Item, [{
      key: "update",
      value: function update() {
        // gets the item's height and top (relative to the document)
        this.getSize(); // sets the initial value (no interpolation)

        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // translate the image


        this.layout();
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var rect = this.DOM.el.getBoundingClientRect();
        this.props = {
          // item's height
          height: rect.height,
          // offset top relative to the document
          top: docScroll + rect.top
        };
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        window.addEventListener('resize', function () {
          return _this2.resize();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        // on resize rest sizes and update the translation value
        this.update();
      }
    }, {
      key: "render",
      value: function render() {
        // update the current and interpolated values
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and translates the image


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        // translates the image
        this.DOM.image.style.transform = "translate3d(0,".concat(this.renderedStyles.innerTranslationY.previous, "px,0)");
      }
    }]);

    return Item;
  }(); // SmoothScroll


  var SmoothScroll = /*#__PURE__*/function () {
    function SmoothScroll() {
      var _this3 = this;

      _classCallCheck(this, SmoothScroll);

      // the <main> element
      this.DOM = {
        main: document.querySelector('main')
      }; // the scrollable element
      // we translate this element when scrolling (y-axis)

      this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]'); // the items on the page

      this.items = [];

      _toConsumableArray(this.DOM.main.querySelectorAll('.content > .item')).forEach(function (item) {
        return _this3.items.push(new Item(item));
      }); // here we define which property will change as we scroll the page
      // in this case we will be translating on the y-axis
      // we interpolate between the previous and current value to achieve the smooth scrolling effect


      this.renderedStyles = {
        translationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          // in this case the value of the translation will be the same like the document scroll
          setValue: function setValue() {
            return docScroll;
          }
        }
      }; // set the body's height

      this.setSize(); // set the initial values

      this.update(); // the <main> element's style needs to be modified

      this.style(); // init/bind events

      this.initEvents(); // start the render loop

      requestAnimationFrame(function () {
        return _this3.render();
      });
    }

    _createClass(SmoothScroll, [{
      key: "update",
      value: function update() {
        // sets the initial value (no interpolation) - translate the scroll value
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // translate the scrollable element


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        // translates the scrollable element
        this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.renderedStyles.translationY.previous, "px,0)");
      }
    }, {
      key: "setSize",
      value: function setSize() {
        // set the heigh of the body in order to keep the scrollbar on the page
        body.style.height = "".concat(this.DOM.scrollable.scrollHeight, "px");
      }
    }, {
      key: "style",
      value: function style() {
        // the <main> needs to "stick" to the screen and not scroll
        // for that we set it to position fixed and overflow hidden 
        this.DOM.main.style.position = 'fixed';
        this.DOM.main.style.width = this.DOM.main.style.height = '100%';
        this.DOM.main.style.top = this.DOM.main.style.left = 0;
        this.DOM.main.style.overflow = 'hidden';
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this4 = this;

        // on resize reset the body's height
        window.addEventListener('resize', function () {
          return _this4.setSize();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        // update the current and interpolated values
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and translate the scrollable element


        this.layout(); // for every item

        var _iterator = _createForOfIteratorHelper(this.items),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            // if the item is inside the viewport call it's render function
            // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
            if (item.isVisible) {
              item.render();
            }
          } // loop..

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        requestAnimationFrame(function () {
          return _this5.render();
        });
      }
    }]);

    return SmoothScroll;
  }();
  /***********************************/

  /********** Preload stuff **********/
  // Preload images


  var preloadImages = function preloadImages() {
    return new Promise(function (resolve, reject) {
      imagesLoaded(document.querySelectorAll('.item__img'), {
        background: true
      }, resolve);
    });
  }; // And then..
  //preloadImages().then(() => {
  // Remove the loader
  //  document.body.classList.remove('loading');
  // Get the scroll position
  //  getPageYScroll();
  // Initialize the Smooth Scrolling
  //  new SmoothScroll();
  //});


  document.body.classList.remove('loading'); // Get the scroll position

  getPageYScroll(); // Initialize the Smooth Scrolling

  new SmoothScroll();
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51600" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/demo.js"], null)
//# sourceMappingURL=/demo.9ce5c2ea.js.map