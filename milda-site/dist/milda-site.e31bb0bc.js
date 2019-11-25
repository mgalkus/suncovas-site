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
})({"assets/img-1.jpg":[function(require,module,exports) {
module.exports = "/img-1.d9cefce6.jpg";
},{}],"assets/img-10.jpg":[function(require,module,exports) {
module.exports = "/img-10.91ca4a7c.jpg";
},{}],"assets/img-11.jpg":[function(require,module,exports) {
module.exports = "/img-11.c3e9f938.jpg";
},{}],"assets/img-12.jpg":[function(require,module,exports) {
module.exports = "/img-12.462f4dbb.jpg";
},{}],"assets/img-13.jpg":[function(require,module,exports) {
module.exports = "/img-13.a5ab44a6.jpg";
},{}],"assets/img-14.jpg":[function(require,module,exports) {
module.exports = "/img-14.3c147d6c.jpg";
},{}],"assets/img-15.jpg":[function(require,module,exports) {
module.exports = "/img-15.ac7df218.jpg";
},{}],"assets/img-16.jpg":[function(require,module,exports) {
module.exports = "/img-16.237d7ad5.jpg";
},{}],"assets/img-17.jpg":[function(require,module,exports) {
module.exports = "/img-17.d6a778bf.jpg";
},{}],"assets/img-18.jpg":[function(require,module,exports) {
module.exports = "/img-18.7c6f09ea.jpg";
},{}],"assets/img-19.jpg":[function(require,module,exports) {
module.exports = "/img-19.76568509.jpg";
},{}],"assets/img-2.jpg":[function(require,module,exports) {
module.exports = "/img-2.1a909534.jpg";
},{}],"assets/img-20.jpg":[function(require,module,exports) {
module.exports = "/img-20.eb529bbe.jpg";
},{}],"assets/img-21.jpg":[function(require,module,exports) {
module.exports = "/img-21.a1620b6c.jpg";
},{}],"assets/img-22.jpg":[function(require,module,exports) {
module.exports = "/img-22.d78ed042.jpg";
},{}],"assets/img-23.jpg":[function(require,module,exports) {
module.exports = "/img-23.3416e60d.jpg";
},{}],"assets/img-24.jpg":[function(require,module,exports) {
module.exports = "/img-24.c59301f5.jpg";
},{}],"assets/img-25.jpg":[function(require,module,exports) {
module.exports = "/img-25.0749bfb1.jpg";
},{}],"assets/img-26.jpg":[function(require,module,exports) {
module.exports = "/img-26.4f4c99eb.jpg";
},{}],"assets/img-27.jpg":[function(require,module,exports) {
module.exports = "/img-27.dee33b09.jpg";
},{}],"assets/img-28.jpg":[function(require,module,exports) {
module.exports = "/img-28.fb75a547.jpg";
},{}],"assets/img-29.jpg":[function(require,module,exports) {
module.exports = "/img-29.feb4efcb.jpg";
},{}],"assets/img-3.jpg":[function(require,module,exports) {
module.exports = "/img-3.0934c93e.jpg";
},{}],"assets/img-30.jpg":[function(require,module,exports) {
module.exports = "/img-30.f63d4596.jpg";
},{}],"assets/img-31.jpg":[function(require,module,exports) {
module.exports = "/img-31.d17eed83.jpg";
},{}],"assets/img-32.jpg":[function(require,module,exports) {
module.exports = "/img-32.00b4bd9b.jpg";
},{}],"assets/img-33.jpg":[function(require,module,exports) {
module.exports = "/img-33.98fffe8d.jpg";
},{}],"assets/img-34.jpg":[function(require,module,exports) {
module.exports = "/img-34.bf109501.jpg";
},{}],"assets/img-35.jpg":[function(require,module,exports) {
module.exports = "/img-35.fb9e8229.jpg";
},{}],"assets/img-36.jpg":[function(require,module,exports) {
module.exports = "/img-36.5d7e022c.jpg";
},{}],"assets/img-37.jpg":[function(require,module,exports) {
module.exports = "/img-37.4fdecfbb.jpg";
},{}],"assets/img-38.jpg":[function(require,module,exports) {
module.exports = "/img-38.be418166.jpg";
},{}],"assets/img-39.jpg":[function(require,module,exports) {
module.exports = "/img-39.1e4e2c18.jpg";
},{}],"assets/img-4.jpg":[function(require,module,exports) {
module.exports = "/img-4.9d0aa0a4.jpg";
},{}],"assets/img-40.jpg":[function(require,module,exports) {
module.exports = "/img-40.4364d7cf.jpg";
},{}],"assets/img-41.jpg":[function(require,module,exports) {
module.exports = "/img-41.86d4b96c.jpg";
},{}],"assets/img-42.jpg":[function(require,module,exports) {
module.exports = "/img-42.d26d8713.jpg";
},{}],"assets/img-43.jpg":[function(require,module,exports) {
module.exports = "/img-43.86b5d8c1.jpg";
},{}],"assets/img-44.jpg":[function(require,module,exports) {
module.exports = "/img-44.94608397.jpg";
},{}],"assets/img-45.jpg":[function(require,module,exports) {
module.exports = "/img-45.9625c6f4.jpg";
},{}],"assets/img-46.jpg":[function(require,module,exports) {
module.exports = "/img-46.2d0c8485.jpg";
},{}],"assets/img-47.jpg":[function(require,module,exports) {
module.exports = "/img-47.1dabccb9.jpg";
},{}],"assets/img-48.jpg":[function(require,module,exports) {
module.exports = "/img-48.34a109fb.jpg";
},{}],"assets/img-49.jpg":[function(require,module,exports) {
module.exports = "/img-49.f5b9ee0a.jpg";
},{}],"assets/img-5.jpg":[function(require,module,exports) {
module.exports = "/img-5.2a0f0ed8.jpg";
},{}],"assets/img-50.jpg":[function(require,module,exports) {
module.exports = "/img-50.8b67afbb.jpg";
},{}],"assets/img-51.jpg":[function(require,module,exports) {
module.exports = "/img-51.18f0aed2.jpg";
},{}],"assets/img-52.jpg":[function(require,module,exports) {
module.exports = "/img-52.a0bee02f.jpg";
},{}],"assets/img-53.jpg":[function(require,module,exports) {
module.exports = "/img-53.f22992ea.jpg";
},{}],"assets/img-54.jpg":[function(require,module,exports) {
module.exports = "/img-54.9c5a1a75.jpg";
},{}],"assets/img-55.jpg":[function(require,module,exports) {
module.exports = "/img-55.243ff2ea.jpg";
},{}],"assets/img-56.jpg":[function(require,module,exports) {
module.exports = "/img-56.3269945f.jpg";
},{}],"assets/img-57.jpg":[function(require,module,exports) {
module.exports = "/img-57.0fea9a5a.jpg";
},{}],"assets/img-58.jpg":[function(require,module,exports) {
module.exports = "/img-58.c2a5961c.jpg";
},{}],"assets/img-59.jpg":[function(require,module,exports) {
module.exports = "/img-59.c8dab41e.jpg";
},{}],"assets/img-6.jpg":[function(require,module,exports) {
module.exports = "/img-6.25d74329.jpg";
},{}],"assets/img-60.jpg":[function(require,module,exports) {
module.exports = "/img-60.68092a12.jpg";
},{}],"assets/img-61.jpg":[function(require,module,exports) {
module.exports = "/img-61.3acaa26d.jpg";
},{}],"assets/img-62.jpg":[function(require,module,exports) {
module.exports = "/img-62.dda6bce4.jpg";
},{}],"assets/img-7.jpg":[function(require,module,exports) {
module.exports = "/img-7.90583400.jpg";
},{}],"assets/img-8.jpg":[function(require,module,exports) {
module.exports = "/img-8.603bd8cc.jpg";
},{}],"assets/img-9.jpg":[function(require,module,exports) {
module.exports = "/img-9.c0e1a30e.jpg";
},{}],"assets/img-*.jpg":[function(require,module,exports) {
module.exports = {
  "1": require("./img-1.jpg"),
  "2": require("./img-2.jpg"),
  "3": require("./img-3.jpg"),
  "4": require("./img-4.jpg"),
  "5": require("./img-5.jpg"),
  "6": require("./img-6.jpg"),
  "7": require("./img-7.jpg"),
  "8": require("./img-8.jpg"),
  "9": require("./img-9.jpg"),
  "10": require("./img-10.jpg"),
  "11": require("./img-11.jpg"),
  "12": require("./img-12.jpg"),
  "13": require("./img-13.jpg"),
  "14": require("./img-14.jpg"),
  "15": require("./img-15.jpg"),
  "16": require("./img-16.jpg"),
  "17": require("./img-17.jpg"),
  "18": require("./img-18.jpg"),
  "19": require("./img-19.jpg"),
  "20": require("./img-20.jpg"),
  "21": require("./img-21.jpg"),
  "22": require("./img-22.jpg"),
  "23": require("./img-23.jpg"),
  "24": require("./img-24.jpg"),
  "25": require("./img-25.jpg"),
  "26": require("./img-26.jpg"),
  "27": require("./img-27.jpg"),
  "28": require("./img-28.jpg"),
  "29": require("./img-29.jpg"),
  "30": require("./img-30.jpg"),
  "31": require("./img-31.jpg"),
  "32": require("./img-32.jpg"),
  "33": require("./img-33.jpg"),
  "34": require("./img-34.jpg"),
  "35": require("./img-35.jpg"),
  "36": require("./img-36.jpg"),
  "37": require("./img-37.jpg"),
  "38": require("./img-38.jpg"),
  "39": require("./img-39.jpg"),
  "40": require("./img-40.jpg"),
  "41": require("./img-41.jpg"),
  "42": require("./img-42.jpg"),
  "43": require("./img-43.jpg"),
  "44": require("./img-44.jpg"),
  "45": require("./img-45.jpg"),
  "46": require("./img-46.jpg"),
  "47": require("./img-47.jpg"),
  "48": require("./img-48.jpg"),
  "49": require("./img-49.jpg"),
  "50": require("./img-50.jpg"),
  "51": require("./img-51.jpg"),
  "52": require("./img-52.jpg"),
  "53": require("./img-53.jpg"),
  "54": require("./img-54.jpg"),
  "55": require("./img-55.jpg"),
  "56": require("./img-56.jpg"),
  "57": require("./img-57.jpg"),
  "58": require("./img-58.jpg"),
  "59": require("./img-59.jpg"),
  "60": require("./img-60.jpg"),
  "61": require("./img-61.jpg"),
  "62": require("./img-62.jpg")
};
},{"./img-1.jpg":"assets/img-1.jpg","./img-10.jpg":"assets/img-10.jpg","./img-11.jpg":"assets/img-11.jpg","./img-12.jpg":"assets/img-12.jpg","./img-13.jpg":"assets/img-13.jpg","./img-14.jpg":"assets/img-14.jpg","./img-15.jpg":"assets/img-15.jpg","./img-16.jpg":"assets/img-16.jpg","./img-17.jpg":"assets/img-17.jpg","./img-18.jpg":"assets/img-18.jpg","./img-19.jpg":"assets/img-19.jpg","./img-2.jpg":"assets/img-2.jpg","./img-20.jpg":"assets/img-20.jpg","./img-21.jpg":"assets/img-21.jpg","./img-22.jpg":"assets/img-22.jpg","./img-23.jpg":"assets/img-23.jpg","./img-24.jpg":"assets/img-24.jpg","./img-25.jpg":"assets/img-25.jpg","./img-26.jpg":"assets/img-26.jpg","./img-27.jpg":"assets/img-27.jpg","./img-28.jpg":"assets/img-28.jpg","./img-29.jpg":"assets/img-29.jpg","./img-3.jpg":"assets/img-3.jpg","./img-30.jpg":"assets/img-30.jpg","./img-31.jpg":"assets/img-31.jpg","./img-32.jpg":"assets/img-32.jpg","./img-33.jpg":"assets/img-33.jpg","./img-34.jpg":"assets/img-34.jpg","./img-35.jpg":"assets/img-35.jpg","./img-36.jpg":"assets/img-36.jpg","./img-37.jpg":"assets/img-37.jpg","./img-38.jpg":"assets/img-38.jpg","./img-39.jpg":"assets/img-39.jpg","./img-4.jpg":"assets/img-4.jpg","./img-40.jpg":"assets/img-40.jpg","./img-41.jpg":"assets/img-41.jpg","./img-42.jpg":"assets/img-42.jpg","./img-43.jpg":"assets/img-43.jpg","./img-44.jpg":"assets/img-44.jpg","./img-45.jpg":"assets/img-45.jpg","./img-46.jpg":"assets/img-46.jpg","./img-47.jpg":"assets/img-47.jpg","./img-48.jpg":"assets/img-48.jpg","./img-49.jpg":"assets/img-49.jpg","./img-5.jpg":"assets/img-5.jpg","./img-50.jpg":"assets/img-50.jpg","./img-51.jpg":"assets/img-51.jpg","./img-52.jpg":"assets/img-52.jpg","./img-53.jpg":"assets/img-53.jpg","./img-54.jpg":"assets/img-54.jpg","./img-55.jpg":"assets/img-55.jpg","./img-56.jpg":"assets/img-56.jpg","./img-57.jpg":"assets/img-57.jpg","./img-58.jpg":"assets/img-58.jpg","./img-59.jpg":"assets/img-59.jpg","./img-6.jpg":"assets/img-6.jpg","./img-60.jpg":"assets/img-60.jpg","./img-61.jpg":"assets/img-61.jpg","./img-62.jpg":"assets/img-62.jpg","./img-7.jpg":"assets/img-7.jpg","./img-8.jpg":"assets/img-8.jpg","./img-9.jpg":"assets/img-9.jpg"}],"index.js":[function(require,module,exports) {
(function useImages() {
  container = document.querySelector(".container");

  var images = require("./assets/img-*.jpg");

  for (var i = 1; i < 63; i++) {
    img = document.createElement("img"); // imgContainer.className = `img-container img-container--${i}`;
    // domString = `<img class="lazy img img--${i}" src="${images[i]}" data-src="${images[i]}" loading="lazy">`;
    // imgContainer.innerHTML = domString;

    img.className = "img img--".concat(i);
    img.src = images[i];
    img.loading = "lazy";
    container.appendChild(img);
  }
})();
},{"./assets/img-*.jpg":"assets/img-*.jpg"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54118" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/milda-site.e31bb0bc.js.map