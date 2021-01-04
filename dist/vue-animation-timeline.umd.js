(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-animation-timeline"] = factory(require("vue"));
	else
		root["vue-animation-timeline"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cache = new Map();
/**
 * 注册计算包围盒的算法
 * @param type 方法名
 * @param method 方法
 */
function register(type, method) {
    cache.set(type, method);
}
exports.register = register;
/**
 * 获取计算包围盒的算法
 * @param type 方法名
 */
function getMethod(type) {
    return cache.get(type);
}
exports.getMethod = getMethod;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = __webpack_require__("bd8b");
exports.default = (function (value) {
    return Array.isArray ?
        Array.isArray(value) :
        is_type_1.default(value, 'Array');
});
//# sourceMappingURL=is-array.js.map

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0f7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _antv_g_base_lib_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3480");
/* harmony import */ var _antv_g_base_lib_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antv_g_base_lib_types__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
// 导出 g-base 中的 types

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "1322":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = __webpack_require__("00c0");
exports.getBBoxMethod = register_1.getMethod;
var rect_1 = __webpack_require__("29d7");
var circle_1 = __webpack_require__("6cac");
var polyline_1 = __webpack_require__("2b23");
var polygon_1 = __webpack_require__("79cf");
var text_1 = __webpack_require__("83bc");
var path_1 = __webpack_require__("2d1f");
var line_1 = __webpack_require__("d5f3");
var ellipse_1 = __webpack_require__("71f5");
register_1.register('rect', rect_1.default);
register_1.register('image', rect_1.default); // image 使用 rect 的包围盒计算
register_1.register('circle', circle_1.default);
register_1.register('marker', circle_1.default); // marker 使用 circle 的计算方案
register_1.register('polyline', polyline_1.default);
register_1.register('polygon', polygon_1.default);
register_1.register('text', text_1.default);
register_1.register('path', path_1.default);
register_1.register('line', line_1.default);
register_1.register('ellipse', ellipse_1.default);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "18f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("8937");
var regexTags = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/ig;
var regexDot = /[^\s\,]+/ig;
function parsePath(p) {
    var path = p || [];
    if (util_1.isArray(path)) {
        return path;
    }
    if (util_1.isString(path)) {
        path = path.match(regexTags);
        util_1.each(path, function (item, index) {
            // @ts-ignore
            item = item.match(regexDot);
            if (item[0].length > 1) {
                var tag = item[0].charAt(0);
                // @ts-ignore
                item.splice(1, 0, item[0].substr(1));
                // @ts-ignore
                item[0] = tag;
            }
            // @ts-ignore
            util_1.each(item, function (sub, i) {
                if (!isNaN(sub)) {
                    // @ts-ignore
                    item[i] = +sub;
                }
            });
            // @ts-ignore
            path[index] = item;
        });
        return path;
    }
}
exports.default = parsePath;
//# sourceMappingURL=parse-path.js.map

/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1b1c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-01d84ecd]{width:1em;height:1em;fill:currentColor;overflow:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("8937");
var SPACES = '\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029';
var PATH_COMMAND = new RegExp('([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)', 'ig');
var PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');
// Parses given path string into an array of arrays of path segments
function parsePathString(pathString) {
    if (!pathString) {
        return null;
    }
    if (util_1.isArray(pathString)) {
        return pathString;
    }
    var paramCounts = {
        a: 7,
        c: 6,
        o: 2,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        u: 3,
        z: 0,
    };
    var data = [];
    String(pathString).replace(PATH_COMMAND, function (a, b, c) {
        var params = [];
        var name = b.toLowerCase();
        c.replace(PATH_VALUES, function (a, b) {
            b && params.push(+b);
        });
        if (name === 'm' && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = 'l';
            b = b === 'm' ? 'l' : 'L';
        }
        if (name === 'o' && params.length === 1) {
            data.push([b, params[0]]);
        }
        if (name === 'r') {
            data.push([b].concat(params));
        }
        else {
            while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        }
        return '';
    });
    return data;
}
exports.default = parsePathString;
//# sourceMappingURL=parse-path-string.js.map

/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1f05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c94d");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "2047":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */
var is_type_1 = __webpack_require__("bd8b");
exports.default = (function (value) {
    return is_type_1.default(value, 'Function');
});
//# sourceMappingURL=is-function.js.map

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "2412":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.distanceAtSegment = exports.angleAtSegments = exports.pointAtSegments = exports.lengthOfSegment = void 0;
var line_1 = __webpack_require__("c3e2");
var util_1 = __webpack_require__("b455");
function analyzePoints(points) {
    // 计算每段的长度和总的长度
    var totalLength = 0;
    var segments = [];
    for (var i = 0; i < points.length - 1; i++) {
        var from = points[i];
        var to = points[i + 1];
        var length_1 = util_1.distance(from[0], from[1], to[0], to[1]);
        var seg = {
            from: from,
            to: to,
            length: length_1,
        };
        segments.push(seg);
        totalLength += length_1;
    }
    return { segments: segments, totalLength: totalLength };
}
function lengthOfSegment(points) {
    if (points.length < 2) {
        return 0;
    }
    var totalLength = 0;
    for (var i = 0; i < points.length - 1; i++) {
        var from = points[i];
        var to = points[i + 1];
        totalLength += util_1.distance(from[0], from[1], to[0], to[1]);
    }
    return totalLength;
}
exports.lengthOfSegment = lengthOfSegment;
/**
 * 按照比例在数据片段中获取点
 * @param {array} points 点的集合
 * @param {number} t 百分比 0-1
 * @return {object} 点的坐标
 */
function pointAtSegments(points, t) {
    // 边界判断
    if (t > 1 || t < 0 || points.length < 2) {
        return null;
    }
    var _a = analyzePoints(points), segments = _a.segments, totalLength = _a.totalLength;
    // 多个点有可能重合
    if (totalLength === 0) {
        return {
            x: points[0][0],
            y: points[0][1],
        };
    }
    // 计算比例
    var startRatio = 0;
    var point = null;
    for (var i = 0; i < segments.length; i++) {
        var seg = segments[i];
        var from = seg.from, to = seg.to;
        var currentRatio = seg.length / totalLength;
        if (t >= startRatio && t <= startRatio + currentRatio) {
            var localRatio = (t - startRatio) / currentRatio;
            point = line_1.default.pointAt(from[0], from[1], to[0], to[1], localRatio);
            break;
        }
        startRatio += currentRatio;
    }
    return point;
}
exports.pointAtSegments = pointAtSegments;
/**
 * 按照比例在数据片段中获取切线的角度
 * @param {array} points 点的集合
 * @param {number} t 百分比 0-1
 */
function angleAtSegments(points, t) {
    // 边界判断
    if (t > 1 || t < 0 || points.length < 2) {
        return 0;
    }
    var _a = analyzePoints(points), segments = _a.segments, totalLength = _a.totalLength;
    // 计算比例
    var startRatio = 0;
    var angle = 0;
    for (var i = 0; i < segments.length; i++) {
        var seg = segments[i];
        var from = seg.from, to = seg.to;
        var currentRatio = seg.length / totalLength;
        if (t >= startRatio && t <= startRatio + currentRatio) {
            angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
            break;
        }
        startRatio += currentRatio;
    }
    return angle;
}
exports.angleAtSegments = angleAtSegments;
function distanceAtSegment(points, x, y) {
    var minDistance = Infinity;
    for (var i = 0; i < points.length - 1; i++) {
        var point = points[i];
        var nextPoint = points[i + 1];
        var distance_1 = line_1.default.pointDistance(point[0], point[1], nextPoint[0], nextPoint[1], x, y);
        if (distance_1 < minDistance) {
            minDistance = distance_1;
        }
    }
    return minDistance;
}
exports.distanceAtSegment = distanceAtSegment;
//# sourceMappingURL=segments.js.map

/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "28f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// isFinite,
var isNil = function (value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
    return value === null || value === undefined;
};
exports.default = isNil;
//# sourceMappingURL=is-nil.js.map

/***/ }),

/***/ "29d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height;
    return {
        x: x,
        y: y,
        width: width,
        height: height,
    };
}
exports.default = default_1;
//# sourceMappingURL=rect.js.map

/***/ }),

/***/ "29f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PRECISION = 0.00001; // numbers less than this is considered as 0
function isNumberEqual(a, b, precision) {
    if (precision === void 0) { precision = PRECISION; }
    return Math.abs((a - b)) < precision;
}
exports.default = isNumberEqual;
;
//# sourceMappingURL=is-number-equal.js.map

/***/ }),

/***/ "2a37":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@antv/g-base\",\"version\":\"0.4.7\",\"description\":\"A common util collection for antv projects\",\"main\":\"lib/index.js\",\"module\":\"esm/index.js\",\"types\":\"lib/index.d.ts\",\"files\":[\"package.json\",\"esm\",\"lib\",\"LICENSE\",\"README.md\"],\"scripts\":{\"build\":\"npm run clean && run-p build:*\",\"build:esm\":\"tsc -p tsconfig.json --target ES5 --module ESNext --outDir esm\",\"build:cjs\":\"tsc -p tsconfig.json --target ES5 --module commonjs --outDir lib\",\"clean\":\"rm -rf esm lib\",\"watch:cjs\":\"tsc-watch -p tsconfig.json --target ES5 --module commonjs --outDir lib --compiler typescript/bin/tsc\",\"coverage\":\"npm run coverage-generator && npm run coverage-viewer\",\"coverage-generator\":\"torch --coverage --compile --source-pattern src/*.js,src/**/*.js --opts tests/mocha.opts\",\"coverage-viewer\":\"torch-coverage\",\"test\":\"torch --renderer --compile --opts tests/mocha.opts\",\"test-live\":\"torch --compile --interactive --opts tests/mocha.opts\",\"tsc\":\"tsc --noEmit\",\"typecheck\":\"tsc --noEmit\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/antvis/util.git\"},\"keywords\":[\"util\",\"antv\",\"g\"],\"publishConfig\":{\"access\":\"public\"},\"author\":\"https://github.com/orgs/antvis/people\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/antvis/util/issues\"},\"devDependencies\":{\"@antv/torch\":\"^1.0.0\",\"gl-matrix\":\"^3.0.0\",\"less\":\"^3.9.0\",\"npm-run-all\":\"^4.1.5\",\"tsc-watch\":\"^4.0.0\"},\"homepage\":\"https://github.com/antvis/util#readme\",\"dependencies\":{\"@antv/event-emitter\":\"^0.1.1\",\"@antv/g-math\":\"^0.1.3\",\"@antv/matrix-util\":\"^3.1.0-beta.1\",\"@antv/path-util\":\"~2.0.5\",\"@antv/util\":\"~2.0.0\",\"@types/d3-timer\":\"^1.0.9\",\"d3-ease\":\"^1.0.5\",\"d3-interpolate\":\"^1.3.2\",\"d3-timer\":\"^1.0.9\",\"detect-browser\":\"^5.1.0\"},\"__npminstall_done\":false,\"gitHead\":\"eb6a2503cb7bb8154697592b10680939d954a31a\"}");

/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2b23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
var util_2 = __webpack_require__("3d7d");
function default_1(shape) {
    var attrs = shape.attr();
    var points = attrs.points;
    var xArr = [];
    var yArr = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        xArr.push(point[0]);
        yArr.push(point[1]);
    }
    var _a = util_1.getBBoxByArray(xArr, yArr), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var bbox = {
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height,
    };
    bbox = util_2.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2d1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var quadratic_1 = __webpack_require__("c31b");
var cubic_1 = __webpack_require__("7d16");
var arc_1 = __webpack_require__("a12b");
var path_2_segments_1 = __webpack_require__("be6e");
var is_number_equal_1 = __webpack_require__("29f4");
var util_1 = __webpack_require__("3d7d");
function getPathBox(segments, lineWidth) {
    var xArr = [];
    var yArr = [];
    var segmentsWithAngle = [];
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        var currentPoint = segment.currentPoint, params = segment.params, prePoint = segment.prePoint;
        var box = void 0;
        switch (segment.command) {
            case 'Q':
                box = quadratic_1.default.box(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4]);
                break;
            case 'C':
                box = cubic_1.default.box(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6]);
                break;
            case 'A':
                var arcParams = segment.arcParams;
                box = arc_1.default.box(arcParams.cx, arcParams.cy, arcParams.rx, arcParams.ry, arcParams.xRotation, arcParams.startAngle, arcParams.endAngle);
                break;
            default:
                xArr.push(currentPoint[0]);
                yArr.push(currentPoint[1]);
                break;
        }
        if (box) {
            segment.box = box;
            xArr.push(box.x, box.x + box.width);
            yArr.push(box.y, box.y + box.height);
        }
        if (lineWidth && (segment.command === 'L' || segment.command === 'M') && segment.prePoint && segment.nextPoint) {
            segmentsWithAngle.push(segment);
        }
    }
    // bbox calculation should ignore NaN for path attribute
    // ref: https://github.com/antvis/g/issues/210
    xArr = xArr.filter(function (item) { return !Number.isNaN(item); });
    yArr = yArr.filter(function (item) { return !Number.isNaN(item); });
    var minX = Math.min.apply(null, xArr);
    var minY = Math.min.apply(null, yArr);
    var maxX = Math.max.apply(null, xArr);
    var maxY = Math.max.apply(null, yArr);
    if (segmentsWithAngle.length === 0) {
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    for (var i = 0; i < segmentsWithAngle.length; i++) {
        var segment = segmentsWithAngle[i];
        var currentPoint = segment.currentPoint;
        var extra = void 0;
        if (currentPoint[0] === minX) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            minX = minX - extra.xExtra;
        }
        else if (currentPoint[0] === maxX) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            maxX = maxX + extra.xExtra;
        }
        if (currentPoint[1] === minY) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            minY = minY - extra.yExtra;
        }
        else if (currentPoint[1] === maxY) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            maxY = maxY + extra.yExtra;
        }
    }
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
function getExtraFromSegmentWithAngle(segment, lineWidth) {
    var prePoint = segment.prePoint, currentPoint = segment.currentPoint, nextPoint = segment.nextPoint;
    var currentAndPre = Math.pow(currentPoint[0] - prePoint[0], 2) + Math.pow(currentPoint[1] - prePoint[1], 2);
    var currentAndNext = Math.pow(currentPoint[0] - nextPoint[0], 2) + Math.pow(currentPoint[1] - nextPoint[1], 2);
    var preAndNext = Math.pow(prePoint[0] - nextPoint[0], 2) + Math.pow(prePoint[1] - nextPoint[1], 2);
    // 以 currentPoint 为顶点的夹角
    var currentAngle = Math.acos((currentAndPre + currentAndNext - preAndNext) / (2 * Math.sqrt(currentAndPre) * Math.sqrt(currentAndNext)));
    // 夹角为空、 0 或 PI 时，不需要计算夹角处的额外宽度
    // 注意: 由于计算精度问题，夹角为 0 的情况计算出来的角度可能是一个很小的值，还需要判断其与 0 是否近似相等
    if (!currentAngle || Math.sin(currentAngle) === 0 || is_number_equal_1.default(currentAngle, 0)) {
        return {
            xExtra: 0,
            yExtra: 0,
        };
    }
    var xAngle = Math.abs(Math.atan2(nextPoint[1] - currentPoint[1], nextPoint[0] - currentPoint[0]));
    var yAngle = Math.abs(Math.atan2(nextPoint[0] - currentPoint[0], nextPoint[1] - currentPoint[1]));
    // 将夹角转为锐角
    xAngle = xAngle > Math.PI / 2 ? Math.PI - xAngle : xAngle;
    yAngle = yAngle > Math.PI / 2 ? Math.PI - yAngle : yAngle;
    // 这里不考虑在水平和垂直方向的投影，直接使用最大差值
    // 由于上层统一加减了二分之一线宽，这里需要进行弥补
    var extra = {
        // 水平方向投影
        xExtra: Math.cos(currentAngle / 2 - xAngle) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
        // 垂直方向投影
        yExtra: Math.cos(yAngle - currentAngle / 2) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
    };
    return extra;
}
function default_1(shape) {
    var attrs = shape.attr();
    var path = attrs.path, stroke = attrs.stroke;
    var lineWidth = stroke ? attrs.lineWidth : 0; // 只有有 stroke 时，lineWidth 才生效
    var segments = shape.get('segments') || path_2_segments_1.default(path);
    var _a = getPathBox(segments, lineWidth), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var bbox = {
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height,
    };
    bbox = util_1.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "2f32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon3_vue_vue_type_style_index_0_id_01d84ecd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e018");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon3_vue_vue_type_style_index_0_id_01d84ecd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon3_vue_vue_type_style_index_0_id_01d84ecd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3480":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "34f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isVue2 */
/* unused harmony export isVue3 */
/* unused harmony export install */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "computed")) __webpack_require__.d(__webpack_exports__, "computed", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "getCurrentInstance")) __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "isRef")) __webpack_require__.d(__webpack_exports__, "isRef", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["isRef"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "nextTick")) __webpack_require__.d(__webpack_exports__, "nextTick", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onMounted")) __webpack_require__.d(__webpack_exports__, "onMounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onUnmounted")) __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "ref")) __webpack_require__.d(__webpack_exports__, "ref", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "unref")) __webpack_require__.d(__webpack_exports__, "unref", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["unref"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "watch")) __webpack_require__.d(__webpack_exports__, "watch", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["watch"]; });



var isVue2 = false
var isVue3 = true

function install() {}





/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "3753":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RADIAN = Math.PI / 180;
var toRadian = function (degree) {
    return RADIAN * degree;
};
exports.default = toRadian;
//# sourceMappingURL=to-radian.js.map

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3970":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-031c70af]{width:1em;height:1em;fill:currentColor;overflow:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3c5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var to_string_1 = __webpack_require__("739e");
var upperFirst = function (value) {
    var str = to_string_1.default(value);
    return str.charAt(0).toUpperCase() + str.substring(1);
};
exports.default = upperFirst;
//# sourceMappingURL=upper-first.js.map

/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3d7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 合并包围盒
function mergeBBox(bbox1, bbox2) {
    if (!bbox1 || !bbox2) {
        return bbox1 || bbox2;
    }
    return {
        minX: Math.min(bbox1.minX, bbox2.minX),
        minY: Math.min(bbox1.minY, bbox2.minY),
        maxX: Math.max(bbox1.maxX, bbox2.maxX),
        maxY: Math.max(bbox1.maxY, bbox2.maxY),
    };
}
exports.mergeBBox = mergeBBox;
// 合并箭头的包围盒
function mergeArrowBBox(shape, bbox) {
    var startArrowShape = shape.get('startArrowShape');
    var endArrowShape = shape.get('endArrowShape');
    var startArrowBBox = null;
    var endArrowBBox = null;
    if (startArrowShape) {
        startArrowBBox = startArrowShape.getCanvasBBox();
        bbox = mergeBBox(bbox, startArrowBBox);
    }
    if (endArrowShape) {
        endArrowBBox = endArrowShape.getCanvasBBox();
        bbox = mergeBBox(bbox, endArrowBBox);
    }
    return bbox;
}
exports.mergeArrowBBox = mergeArrowBBox;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4799":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Base", function() { return /* reexport */ base; });
__webpack_require__.d(__webpack_exports__, "Circle", function() { return /* reexport */ circle; });
__webpack_require__.d(__webpack_exports__, "Ellipse", function() { return /* reexport */ ellipse; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ shape_image; });
__webpack_require__.d(__webpack_exports__, "Line", function() { return /* reexport */ shape_line; });
__webpack_require__.d(__webpack_exports__, "Marker", function() { return /* reexport */ marker; });
__webpack_require__.d(__webpack_exports__, "Path", function() { return /* reexport */ shape_path; });
__webpack_require__.d(__webpack_exports__, "Polygon", function() { return /* reexport */ polygon; });
__webpack_require__.d(__webpack_exports__, "Polyline", function() { return /* reexport */ shape_polyline; });
__webpack_require__.d(__webpack_exports__, "Rect", function() { return /* reexport */ rect; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ shape_text; });

// NAMESPACE OBJECT: ./node_modules/@antv/g-canvas/esm/shape/index.js
var shape_namespaceObject = {};
__webpack_require__.r(shape_namespaceObject);
__webpack_require__.d(shape_namespaceObject, "Base", function() { return base; });
__webpack_require__.d(shape_namespaceObject, "Circle", function() { return circle; });
__webpack_require__.d(shape_namespaceObject, "Ellipse", function() { return ellipse; });
__webpack_require__.d(shape_namespaceObject, "Image", function() { return shape_image; });
__webpack_require__.d(shape_namespaceObject, "Line", function() { return shape_line; });
__webpack_require__.d(shape_namespaceObject, "Marker", function() { return marker; });
__webpack_require__.d(shape_namespaceObject, "Path", function() { return shape_path; });
__webpack_require__.d(shape_namespaceObject, "Polygon", function() { return polygon; });
__webpack_require__.d(shape_namespaceObject, "Polyline", function() { return shape_polyline; });
__webpack_require__.d(shape_namespaceObject, "Rect", function() { return rect; });
__webpack_require__.d(shape_namespaceObject, "Text", function() { return shape_text; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/@antv/g-base/esm/index.js + 44 modules
var esm = __webpack_require__("6855");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/util.js
var util = __webpack_require__("7326");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/draw.js + 1 modules
var draw = __webpack_require__("f5e5");

// EXTERNAL MODULE: ./node_modules/@antv/g-base/lib/bbox/index.js
var lib_bbox = __webpack_require__("1322");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/group.js
var group = __webpack_require__("c2ad");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/base.js







var base_ShapeBase = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(ShapeBase, _super);
    function ShapeBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeBase.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        // 设置默认值
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { lineWidth: 1, lineAppendWidth: 0, strokeOpacity: 1, fillOpacity: 1 });
    };
    ShapeBase.prototype.getShapeBase = function () {
        return shape_namespaceObject;
    };
    ShapeBase.prototype.getGroupBase = function () {
        return group["a" /* default */];
    };
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    ShapeBase.prototype.onCanvasChange = function (changeType) {
        Object(draw["f" /* refreshElement */])(this, changeType);
    };
    ShapeBase.prototype.calculateBBox = function () {
        var type = this.get('type');
        var lineWidth = this.getHitLineWidth();
        // const attrs = this.attr();
        var bboxMethod = Object(lib_bbox["getBBoxMethod"])(type);
        var box = bboxMethod(this);
        var halfLineWidth = lineWidth / 2;
        var minX = box.x - halfLineWidth;
        var minY = box.y - halfLineWidth;
        var maxX = box.x + box.width + halfLineWidth;
        var maxY = box.y + box.height + halfLineWidth;
        return {
            x: minX,
            minX: minX,
            y: minY,
            minY: minY,
            width: box.width + lineWidth,
            height: box.height + lineWidth,
            maxX: maxX,
            maxY: maxY,
        };
    };
    ShapeBase.prototype.isFill = function () {
        return !!this.attrs['fill'] || this.isClipShape();
    };
    ShapeBase.prototype.isStroke = function () {
        return !!this.attrs['stroke'];
    };
    // 同 shape 中的方法重复了
    ShapeBase.prototype._applyClip = function (context, clip) {
        if (clip) {
            context.save();
            // 将 clip 的属性挂载到 context 上
            Object(draw["a" /* applyAttrsToContext */])(context, clip);
            // 绘制 clip 路径
            clip.createPath(context);
            context.restore();
            // 裁剪
            context.clip();
            clip._afterDraw();
        }
    };
    // 绘制图形时需要考虑 region 限制
    ShapeBase.prototype.draw = function (context, region) {
        var clip = this.getClip();
        // 如果指定了区域，当与指定区域相交时，才会触发渲染
        if (region) {
            // 是否相交需要考虑 clip 的包围盒
            var bbox = clip ? Object(draw["d" /* getMergedRegion */])([this, clip]) : this.getCanvasBBox();
            if (!Object(util["f" /* intersectRect */])(region, bbox)) {
                // 图形的包围盒与重绘区域不相交时，也需要清除标记
                this.set('hasChanged', false);
                return;
            }
        }
        context.save();
        // 先将 attrs 应用到上下文中，再设置 clip。因为 clip 应该被当前元素的 matrix 所影响
        Object(draw["a" /* applyAttrsToContext */])(context, this);
        this._applyClip(context, this.getClip());
        this.drawPath(context);
        context.restore();
        this._afterDraw();
    };
    ShapeBase.prototype._afterDraw = function () {
        var bbox = this.getCanvasBBox();
        var canvas = this.getCanvas();
        // 绘制的时候缓存包围盒
        this.set('cacheCanvasBBox', bbox);
        if (canvas) {
            // @ts-ignore
            var viewRange = canvas.getViewRange();
            this.set('isInView', Object(util["f" /* intersectRect */])(bbox, viewRange));
        }
        // 绘制后消除标记
        this.set('hasChanged', false);
    };
    ShapeBase.prototype.skipDraw = function () {
        this.set('cacheCanvasBBox', null);
        this.set('isInView', null);
        this.set('hasChanged', false);
    };
    /**
     * 绘制图形的路径
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.drawPath = function (context) {
        this.createPath(context);
        this.strokeAndFill(context);
        this.afterDrawPath(context);
    };
    /**
     * @protected
     * 填充图形
     * @param {CanvasRenderingContext2D} context context 上下文
     */
    ShapeBase.prototype.fill = function (context) {
        context.fill();
    };
    /**
     * @protected
     * 绘制图形边框
     * @param {CanvasRenderingContext2D} context context 上下文
     */
    ShapeBase.prototype.stroke = function (context) {
        context.stroke();
    };
    // 绘制或者填充
    ShapeBase.prototype.strokeAndFill = function (context) {
        var _a = this.attrs, lineWidth = _a.lineWidth, opacity = _a.opacity, strokeOpacity = _a.strokeOpacity, fillOpacity = _a.fillOpacity;
        if (this.isFill()) {
            if (!Object(util["i" /* isNil */])(fillOpacity) && fillOpacity !== 1) {
                context.globalAlpha = fillOpacity;
                this.fill(context);
                context.globalAlpha = opacity;
            }
            else {
                this.fill(context);
            }
        }
        if (this.isStroke()) {
            if (lineWidth > 0) {
                if (!Object(util["i" /* isNil */])(strokeOpacity) && strokeOpacity !== 1) {
                    context.globalAlpha = strokeOpacity;
                }
                this.stroke(context);
            }
        }
        this.afterDrawPath(context);
    };
    /**
     * @protected
     * 绘制图形的路径
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.createPath = function (context) { };
    /**
     * 绘制完成 path 后的操作
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.afterDrawPath = function (context) { };
    ShapeBase.prototype.isInShape = function (refX, refY) {
        // return HitUtil.isHitShape(this, refX, refY);
        var isStroke = this.isStroke();
        var isFill = this.isFill();
        var lineWidth = this.getHitLineWidth();
        return this.isInStrokeOrPath(refX, refY, isStroke, isFill, lineWidth);
    };
    // 之所以不拆成 isInStroke 和 isInPath 在于两者存在一些共同的计算
    ShapeBase.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        return false;
    };
    /**
     * 获取线拾取的宽度
     * @returns {number} 线的拾取宽度
     */
    ShapeBase.prototype.getHitLineWidth = function () {
        if (!this.isStroke()) {
            return 0;
        }
        var attrs = this.attrs;
        return attrs['lineWidth'] + attrs['lineAppendWidth'];
    };
    return ShapeBase;
}(esm["c" /* AbstractShape */]));
/* harmony default export */ var base = (base_ShapeBase);
//# sourceMappingURL=base.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/circle.js
/**
 * @fileoverview 圆
 * @author dxq613@gmail.com
 */



// TODO: 暂时不需要圆的工具方法，后续如果需要支持 pointAt，tangentAngle 时再引入
// import CircleUtil from '@antv/g-math/lib/circle';
var circle_Circle = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x: 0, y: 0, r: 0 });
    };
    Circle.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var r = attrs.r;
        var halfLineWidth = lineWidth / 2;
        var absDistance = Object(util["b" /* distance */])(cx, cy, x, y);
        // 直接用距离，如果同时存在边和填充时，可以减少两次计算
        if (isFill && isStroke) {
            return absDistance <= r + halfLineWidth;
        }
        if (isFill) {
            return absDistance <= r;
        }
        if (isStroke) {
            return absDistance >= r - halfLineWidth && absDistance <= r + halfLineWidth;
        }
        return false;
    };
    Circle.prototype.createPath = function (context) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var r = attrs.r;
        context.beginPath();
        context.arc(cx, cy, r, 0, Math.PI * 2, false);
        context.closePath();
    };
    return Circle;
}(base));
/* harmony default export */ var circle = (circle_Circle);
//# sourceMappingURL=circle.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/ellipse.js
/**
 * @fileoverview 椭圆
 * @author dxq613@gmail.com
 */


// 暂时不需要
// import EllipseUtil from '@antv/g-math/lib/ellipse';
// 根据椭圆公式计算 x*x/rx*rx + y*y/ry*ry;
function ellipseDistance(squareX, squareY, rx, ry) {
    return squareX / (rx * rx) + squareY / (ry * ry);
}
var ellipse_Ellipse = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Ellipse, _super);
    function Ellipse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ellipse.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x: 0, y: 0, rx: 0, ry: 0 });
    };
    Ellipse.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var halfLineWith = lineWidth / 2;
        var cx = attrs.x;
        var cy = attrs.y;
        var rx = attrs.rx, ry = attrs.ry;
        var squareX = (x - cx) * (x - cx);
        var squareY = (y - cy) * (y - cy);
        // 使用椭圆的公式： x*x/rx*rx + y*y/ry*ry = 1;
        if (isFill && isStroke) {
            return ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
        }
        if (isFill) {
            return ellipseDistance(squareX, squareY, rx, ry) <= 1;
        }
        if (isStroke) {
            return (ellipseDistance(squareX, squareY, rx - halfLineWith, ry - halfLineWith) >= 1 &&
                ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1);
        }
        return false;
    };
    Ellipse.prototype.createPath = function (context) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var rx = attrs.rx;
        var ry = attrs.ry;
        context.beginPath();
        // 兼容逻辑
        if (context.ellipse) {
            context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2, false);
        }
        else {
            // 如果不支持，则使用圆来绘制，进行变形
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;
            context.save();
            context.translate(cx, cy);
            context.scale(scaleX, scaleY);
            context.arc(0, 0, r, 0, Math.PI * 2);
            context.restore();
            context.closePath();
        }
    };
    return Ellipse;
}(base));
/* harmony default export */ var ellipse = (ellipse_Ellipse);
//# sourceMappingURL=ellipse.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/image.js
/**
 * @fileoverview 图片
 * @author dxq613@gmail.com
 */



function isCanvas(dom) {
    return dom instanceof HTMLElement && Object(util["k" /* isString */])(dom.nodeName) && dom.nodeName.toUpperCase() === 'CANVAS';
}
var image_ImageShape = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(ImageShape, _super);
    function ImageShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageShape.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x: 0, y: 0, width: 0, height: 0 });
    };
    ImageShape.prototype.initAttrs = function (attrs) {
        this._setImage(attrs.img);
    };
    // image 不计算 stroke
    ImageShape.prototype.isStroke = function () {
        return false;
    };
    // 仅仅使用包围盒检测来进行拾取
    // 所以不需要复写 isInStrokeOrPath 的方法
    ImageShape.prototype.isOnlyHitBox = function () {
        return true;
    };
    ImageShape.prototype._afterLoading = function () {
        if (this.get('toDraw') === true) {
            var canvas = this.get('canvas');
            if (canvas) {
                // 这段应该改成局部渲染
                canvas.draw();
            }
            else {
                // 这种方式如果发生遮挡会出现问题
                this.createPath(this.get('context'));
            }
        }
    };
    ImageShape.prototype._setImage = function (img) {
        var _this = this;
        var attrs = this.attrs;
        if (Object(util["k" /* isString */])(img)) {
            var image_1 = new Image();
            image_1.onload = function () {
                // 图片未加载完，则已经被销毁
                if (_this.destroyed) {
                    return false;
                }
                // 缓存原始地址，可以做对比，防止重复加载图片
                // 如果考虑到在加载过程中可能替换 img 属性，则情况更加复杂
                // this.set('imgSrc', img);
                // 这里会循环调用 _setImage 方法，但不会再走这个分支
                _this.attr('img', image_1);
                _this.set('loading', false);
                _this._afterLoading();
                var callback = _this.get('callback');
                if (callback) {
                    callback.call(_this);
                }
            };
            // 设置跨域
            image_1.crossOrigin = 'Anonymous';
            image_1.src = img;
            // loading 过程中不绘制
            this.set('loading', true);
        }
        else if (img instanceof Image) {
            // 如果是一个 image 对象，则设置宽高
            if (!attrs.width) {
                attrs.width = img.width;
            }
            if (!attrs.height) {
                attrs.height = img.height;
            }
        }
        else if (isCanvas(img)) {
            // 如果设置了 canvas 对象
            if (!attrs.width) {
                attrs.width = Number(img.getAttribute('width'));
            }
            if (!attrs.height) {
                attrs.height, Number(img.getAttribute('height'));
            }
        }
    };
    ImageShape.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        // 如果加载的已经是当前图片，则不再处理
        if (name === 'img') {
            // 可以加缓冲，&& this.get('imgSrc') !== value
            this._setImage(value);
        }
    };
    ImageShape.prototype.createPath = function (context) {
        // 正在加载则不绘制
        if (this.get('loading')) {
            this.set('toDraw', true); // 加载完成后绘制
            this.set('context', context);
            return;
        }
        var attrs = this.attr();
        var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, sx = attrs.sx, sy = attrs.sy, swidth = attrs.swidth, sheight = attrs.sheight;
        var img = attrs.img;
        if (img instanceof Image || isCanvas(img)) {
            if (!Object(util["i" /* isNil */])(sx) && !Object(util["i" /* isNil */])(sy) && !Object(util["i" /* isNil */])(swidth) && !Object(util["i" /* isNil */])(sheight)) {
                context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
            }
            else {
                context.drawImage(img, x, y, width, height);
            }
        }
    };
    return ImageShape;
}(base));
/* harmony default export */ var shape_image = (image_ImageShape);
//# sourceMappingURL=image.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-math/lib/line.js
var line = __webpack_require__("c3e2");
var line_default = /*#__PURE__*/__webpack_require__.n(line);

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-stroke/line.js

function inLine(x1, y1, x2, y2, lineWidth, x, y) {
    var minX = Math.min(x1, x2);
    var maxX = Math.max(x1, x2);
    var minY = Math.min(y1, y2);
    var maxY = Math.max(y1, y2);
    var halfWidth = lineWidth / 2;
    // 因为目前的方案是计算点到直线的距离，而有可能会在延长线上，所以要先判断是否在包围盒内
    // 这种方案会在水平或者竖直的情况下载线的延长线上有半 lineWidth 的误差
    if (!(x >= minX - halfWidth && x <= maxX + halfWidth && y >= minY - halfWidth && y <= maxY + halfWidth)) {
        return false;
    }
    // 因为已经计算了包围盒，所以仅需要计算到直线的距离即可，可以显著提升性能
    return line_default.a.pointToLine(x1, y1, x2, y2, x, y) <= lineWidth / 2;
}
//# sourceMappingURL=line.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/arrow.js
var arrow = __webpack_require__("9f27");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/line.js

/**
 * @fileoverview 圆
 * @author dxq613@gmail.com
 */




var line_Line = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x1: 0, y1: 0, x2: 0, y2: 0, startArrow: false, endArrow: false });
    };
    Line.prototype.initAttrs = function (attrs) {
        this.setArrow();
    };
    // 更新属性时，检测是否更改了箭头
    Line.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        // 由于箭头的绘制依赖于 line 的诸多 attrs，因此这里不再对每个 attr 进行判断，attr 每次变化都会影响箭头的更新
        this.setArrow();
    };
    Line.prototype.setArrow = function () {
        var attrs = this.attr();
        var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        if (startArrow) {
            arrow["b" /* addStartArrow */](this, attrs, x2, y2, x1, y1);
        }
        if (endArrow) {
            arrow["a" /* addEndArrow */](this, attrs, x1, y1, x2, y2);
        }
    };
    Line.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        if (!isStroke || !lineWidth) {
            return false;
        }
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return inLine(x1, y1, x2, y2, lineWidth, x, y);
    };
    Line.prototype.createPath = function (context) {
        var attrs = this.attr();
        var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        var startArrowDistance = {
            dx: 0,
            dy: 0,
        };
        var endArrowDistance = {
            dx: 0,
            dy: 0,
        };
        if (startArrow && startArrow.d) {
            startArrowDistance = arrow["c" /* getShortenOffset */](x1, y1, x2, y2, attrs.startArrow.d);
        }
        if (endArrow && endArrow.d) {
            endArrowDistance = arrow["c" /* getShortenOffset */](x1, y1, x2, y2, attrs.endArrow.d);
        }
        context.beginPath();
        // 如果自定义箭头，线条相应缩进
        context.moveTo(x1 + startArrowDistance.dx, y1 + startArrowDistance.dy);
        context.lineTo(x2 - endArrowDistance.dx, y2 - endArrowDistance.dy);
    };
    Line.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get length of line
     * @return {number} length
     */
    Line.prototype.getTotalLength = function () {
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return line_default.a.length(x1, y1, x2, y2);
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    Line.prototype.getPoint = function (ratio) {
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return line_default.a.pointAt(x1, y1, x2, y2, ratio);
    };
    return Line;
}(base));
/* harmony default export */ var shape_line = (line_Line);
//# sourceMappingURL=line.js.map
// EXTERNAL MODULE: ./node_modules/@antv/util/esm/index.js + 105 modules
var util_esm = __webpack_require__("8937");

// EXTERNAL MODULE: ./node_modules/@antv/path-util/lib/path-2-absolute.js
var path_2_absolute = __webpack_require__("e3ad");
var path_2_absolute_default = /*#__PURE__*/__webpack_require__.n(path_2_absolute);

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/marker.js
/**
 * @fileoverview Marker
 * @author dxq613@gmail.com
 */






var Symbols = {
    // 圆
    circle: function (x, y, r) {
        return [
            ['M', x - r, y],
            ['A', r, r, 0, 1, 0, x + r, y],
            ['A', r, r, 0, 1, 0, x - r, y],
        ];
    },
    // 正方形
    square: function (x, y, r) {
        return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
    },
    // 菱形
    diamond: function (x, y, r) {
        return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
    },
    // 三角形
    triangle: function (x, y, r) {
        var diffY = r * Math.sin((1 / 3) * Math.PI);
        return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
    },
    // 倒三角形
    'triangle-down': function (x, y, r) {
        var diffY = r * Math.sin((1 / 3) * Math.PI);
        return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
    },
};
var marker_Marker = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Marker, _super);
    function Marker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marker.prototype.initAttrs = function (attrs) {
        this._resetParamsCache();
    };
    // 重置绘制 path 存储的缓存
    Marker.prototype._resetParamsCache = function () {
        // 为了加速 path 的绘制、拾取和计算，这个地方可以缓存很多东西
        // 这些缓存都是第一次需要时计算和存储，虽然增加了复杂度，但是频繁调用的方法，性能有很大提升
        this.set('paramsCache', {}); // 清理缓存
    };
    // 更新属性时，检测是否更改了 path
    Marker.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (['symbol', 'x', 'y', 'r', 'radius'].indexOf(name) !== -1) {
            // path 相关属性更改时，清理缓存
            this._resetParamsCache();
        }
    };
    // 仅仅使用包围盒检测来进行拾取
    // 所以不需要复写 isInStrokeOrPath 的方法
    Marker.prototype.isOnlyHitBox = function () {
        return true;
    };
    Marker.prototype._getR = function (attrs) {
        // 兼容 r 和 radius 两种写法，推荐使用 r
        return Object(util_esm["isNil"])(attrs.r) ? attrs.radius : attrs.r;
    };
    Marker.prototype._getPath = function () {
        var attrs = this.attr();
        var x = attrs.x, y = attrs.y;
        var symbol = attrs.symbol || 'circle';
        var r = this._getR(attrs);
        var method;
        var path;
        if (Object(util["h" /* isFunction */])(symbol)) {
            method = symbol;
            path = method(x, y, r);
            // 将 path 转成绝对路径
            path = path_2_absolute_default()(path);
        }
        else {
            // 内置 symbol 的 path 都是绝对路径，直接绘制即可，不需要对 path 进行特殊处理
            method = Marker.Symbols[symbol];
            path = method(x, y, r);
        }
        if (!method) {
            console.warn(symbol + " marker is not supported.");
            return null;
        }
        return path;
    };
    Marker.prototype.createPath = function (context) {
        var path = this._getPath();
        var paramsCache = this.get('paramsCache');
        Object(draw["c" /* drawPath */])(this, context, { path: path }, paramsCache);
    };
    Marker.Symbols = Symbols;
    return Marker;
}(base));
/* harmony default export */ var marker = (marker_Marker);
//# sourceMappingURL=marker.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-math/lib/cubic.js
var cubic = __webpack_require__("7d16");
var cubic_default = /*#__PURE__*/__webpack_require__.n(cubic);

// EXTERNAL MODULE: ./node_modules/@antv/path-util/lib/path-2-segments.js
var path_2_segments = __webpack_require__("be6e");
var path_2_segments_default = /*#__PURE__*/__webpack_require__.n(path_2_segments);

// EXTERNAL MODULE: ./node_modules/@antv/g-base/lib/util/offscreen.js
var offscreen = __webpack_require__("f4c8");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-path/point-in-path.js

function isPointInPath(shape, x, y) {
    var ctx = Object(offscreen["getOffScreenContext"])();
    shape.createPath(ctx);
    return ctx.isPointInPath(x, y);
}
//# sourceMappingURL=point-in-path.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-path/polygon.js
/**
 * @fileoverview 判断点是否在多边形内
 * @author dxq613@gmail.com
 */
// 多边形的射线检测，参考：https://blog.csdn.net/WilliamSun0122/article/details/77994526
var tolerance = 1e-6;
// 三态函数，判断两个double在eps精度下的大小关系
function dcmp(x) {
    if (Math.abs(x) < tolerance) {
        return 0;
    }
    return x < 0 ? -1 : 1;
}
// 判断点Q是否在p1和p2的线段上
function onSegment(p1, p2, q) {
    if ((q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) &&
        Math.min(p1[0], p2[0]) <= q[0] &&
        q[0] <= Math.max(p1[0], p2[0]) &&
        Math.min(p1[1], p2[1]) <= q[1] &&
        q[1] <= Math.max(p1[1], p2[1])) {
        return true;
    }
    return false;
}
// 判断点P在多边形内-射线法
function isInPolygon(points, x, y) {
    var isHit = false;
    var n = points.length;
    if (n <= 2) {
        // svg 中点小于 3 个时，不显示，也无法被拾取
        return false;
    }
    for (var i = 0; i < n; i++) {
        var p1 = points[i];
        var p2 = points[(i + 1) % n];
        if (onSegment(p1, p2, [x, y])) {
            // 点在多边形一条边上
            return true;
        }
        // 前一个判断min(p1[1],p2[1])<P.y<=max(p1[1],p2[1])
        // 后一个判断被测点 在 射线与边交点 的左边
        if (dcmp(p1[1] - y) > 0 !== dcmp(p2[1] - y) > 0 &&
            dcmp(x - ((y - p1[1]) * (p1[0] - p2[0])) / (p1[1] - p2[1]) - p1[0]) < 0) {
            isHit = !isHit;
        }
    }
    return isHit;
}
//# sourceMappingURL=polygon.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-math/lib/quadratic.js
var quadratic = __webpack_require__("c31b");
var quadratic_default = /*#__PURE__*/__webpack_require__.n(quadratic);

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-stroke/arc.js

function arc(cx, cy, r, startAngle, endAngle, lineWidth, x, y) {
    var angle = (Math.atan2(y - cy, x - cx) + Math.PI * 2) % (Math.PI * 2); // 转换到 0 - 2 * Math.PI 之间
    if (angle < startAngle || angle > endAngle) {
        return false;
    }
    var point = {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
    };
    return Object(util["b" /* distance */])(point.x, point.y, x, y) <= lineWidth / 2;
}
//# sourceMappingURL=arc.js.map
// EXTERNAL MODULE: ./node_modules/gl-matrix/esm/mat3.js
var mat3 = __webpack_require__("1f05");

// EXTERNAL MODULE: ./node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__("9fe7");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/path.js

/**
 * @fileoverview path 的一些工具
 * @author dxq613@gmail.com
 */








function path_hasArc(path) {
    var hasArc = false;
    var count = path.length;
    for (var i = 0; i < count; i++) {
        var params = path[i];
        var cmd = params[0];
        if (cmd === 'C' || cmd === 'A' || cmd === 'Q') {
            hasArc = true;
            break;
        }
    }
    return hasArc;
}
function isPointInStroke(segments, lineWidth, x, y) {
    var isHit = false;
    var halfWidth = lineWidth / 2;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        var currentPoint = segment.currentPoint, params = segment.params, prePoint = segment.prePoint, box = segment.box;
        // 如果在前面已经生成过包围盒，直接按照包围盒计算
        if (box && !Object(util["e" /* inBox */])(box.x - halfWidth, box.y - halfWidth, box.width + lineWidth, box.height + lineWidth, x, y)) {
            continue;
        }
        switch (segment.command) {
            // L 和 Z 都是直线， M 不进行拾取
            case 'L':
            case 'Z':
                isHit = inLine(prePoint[0], prePoint[1], currentPoint[0], currentPoint[1], lineWidth, x, y);
                break;
            case 'Q':
                var qDistance = quadratic_default.a.pointDistance(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], x, y);
                isHit = qDistance <= lineWidth / 2;
                break;
            case 'C':
                var cDistance = cubic_default.a.pointDistance(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6], x, y);
                isHit = cDistance <= lineWidth / 2;
                break;
            case 'A':
                // 计算点到椭圆圆弧的距离，暂时使用近似算法，后面可以改成切割法求最近距离
                var arcParams = segment.arcParams;
                var cx = arcParams.cx, cy = arcParams.cy, rx = arcParams.rx, ry = arcParams.ry, startAngle = arcParams.startAngle, endAngle = arcParams.endAngle, xRotation = arcParams.xRotation;
                var p = [x, y, 1];
                var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                var r = rx > ry ? rx : ry;
                var scaleX = rx > ry ? 1 : rx / ry;
                var scaleY = rx > ry ? ry / rx : 1;
                mat3["translate"](m, m, [-cx, -cy]);
                mat3["rotate"](m, m, -xRotation);
                mat3["scale"](m, m, [1 / scaleX, 1 / scaleY]);
                vec3["a" /* transformMat3 */](p, p, m);
                isHit = arc(0, 0, r, startAngle, endAngle, lineWidth, p[0], p[1]);
                break;
            default:
                break;
        }
        if (isHit) {
            break;
        }
    }
    return isHit;
}
/**
 * 提取出内部的闭合多边形和非闭合的多边形，假设 path 不存在圆弧
 * @param {Array} path 路径
 * @returns {Array} 点的集合
 */
function extractPolygons(path) {
    var count = path.length;
    var polygons = [];
    var polylines = [];
    var points = []; // 防止第一个命令不是 'M'
    for (var i = 0; i < count; i++) {
        var params = path[i];
        var cmd = params[0];
        if (cmd === 'M') {
            // 遇到 'M' 判定是否是新数组，新数组中没有点
            if (points.length) {
                // 如果存在点，则说明没有遇到 'Z'，开始了一个新的多边形
                polylines.push(points);
                points = []; // 创建新的点
            }
            points.push([params[1], params[2]]);
        }
        else if (cmd === 'Z') {
            if (points.length) {
                // 存在点
                polygons.push(points);
                points = []; // 开始新的点集合
            }
            // 如果不存在点，同时 'Z'，则说明是错误，不处理
        }
        else {
            points.push([params[1], params[2]]);
        }
    }
    // 说明 points 未放入 polygons 或者 polyline
    // 仅当只有一个 M，没有 Z 时会发生这种情况
    if (points.length > 0) {
        polylines.push(points);
    }
    return {
        polygons: polygons,
        polylines: polylines,
    };
}
/* harmony default export */ var util_path = (Object(tslib_es6["a" /* __assign */])({ hasArc: path_hasArc,
    extractPolygons: extractPolygons,
    isPointInStroke: isPointInStroke }, esm["d" /* PathUtil */]));
//# sourceMappingURL=path.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/path.js











// 是否在多个多边形内部
function isInPolygons(polygons, x, y) {
    var isHit = false;
    for (var i = 0; i < polygons.length; i++) {
        var points = polygons[i];
        isHit = isInPolygon(points, x, y);
        if (isHit) {
            break;
        }
    }
    return isHit;
}
var path_Path = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Path, _super);
    function Path() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Path.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { startArrow: false, endArrow: false });
    };
    Path.prototype.initAttrs = function (attrs) {
        this._setPathArr(attrs.path);
        this.setArrow();
    };
    // 更新属性时，检测是否更改了 path
    Path.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name === 'path') {
            this._setPathArr(value);
        }
        // 由于箭头的绘制依赖于 line 的诸多 attrs，因此这里不再对每个 attr 进行判断，attr 每次变化都会影响箭头的更新
        this.setArrow();
    };
    // 将 path 转换成绝对路径
    Path.prototype._setPathArr = function (path) {
        // 转换 path 的格式
        this.attrs.path = path_2_absolute_default()(path);
        var hasArc = util_path.hasArc(path);
        // 为了加速 path 的绘制、拾取和计算，这个地方可以缓存很多东西
        // 这些缓存都是第一次需要时计算和存储，虽然增加了复杂度，但是频繁调用的方法，性能有很大提升
        this.set('hasArc', hasArc);
        this.set('paramsCache', {}); // 清理缓存
        this.set('segments', null); // 延迟生成 path，在动画场景下可能不会有拾取
        this.set('curve', null);
        this.set('tCache', null);
        this.set('totalLength', null);
    };
    Path.prototype.getSegments = function () {
        var segments = this.get('segements');
        if (!segments) {
            segments = path_2_segments_default()(this.attr('path'));
            this.set('segments', segments);
        }
        return segments;
    };
    Path.prototype.setArrow = function () {
        var attrs = this.attr();
        var startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        if (startArrow) {
            var tangent = this.getStartTangent();
            arrow["b" /* addStartArrow */](this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
        }
        if (endArrow) {
            var tangent = this.getEndTangent();
            arrow["a" /* addEndArrow */](this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
        }
    };
    Path.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var segments = this.getSegments();
        var hasArc = this.get('hasArc');
        var isHit = false;
        if (isStroke) {
            isHit = util_path.isPointInStroke(segments, lineWidth, x, y);
        }
        if (!isHit && isFill) {
            if (hasArc) {
                // 存在曲线时，暂时使用 canvas 的 api 计算，后续可以进行多边形切割
                isHit = isPointInPath(this, x, y);
            }
            else {
                var path = this.attr('path');
                var extractResutl = util_path.extractPolygons(path);
                // 提取出来的多边形包含闭合的和非闭合的，在这里统一按照多边形处理
                isHit = isInPolygons(extractResutl.polygons, x, y) || isInPolygons(extractResutl.polylines, x, y);
            }
        }
        return isHit;
    };
    Path.prototype.createPath = function (context) {
        var attrs = this.attr();
        var paramsCache = this.get('paramsCache'); // 由于计算圆弧的参数成本很大，所以要缓存
        Object(draw["c" /* drawPath */])(this, context, attrs, paramsCache);
    };
    Path.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get total length of path
     * @return {number} length
     */
    Path.prototype.getTotalLength = function () {
        var totalLength = this.get('totalLength');
        if (!Object(util_esm["isNil"])(totalLength)) {
            return totalLength;
        }
        this._calculateCurve();
        this._setTcache();
        return this.get('totalLength');
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    Path.prototype.getPoint = function (ratio) {
        var tCache = this.get('tCache');
        if (!tCache) {
            this._calculateCurve();
            this._setTcache();
            tCache = this.get('tCache');
        }
        var subt;
        var index;
        var curve = this.get('curve');
        if (!tCache || tCache.length === 0) {
            if (curve) {
                return {
                    x: curve[0][1],
                    y: curve[0][2],
                };
            }
            return null;
        }
        Object(util_esm["each"])(tCache, function (v, i) {
            if (ratio >= v[0] && ratio <= v[1]) {
                subt = (ratio - v[0]) / (v[1] - v[0]);
                index = i;
            }
        });
        var seg = curve[index];
        if (Object(util_esm["isNil"])(seg) || Object(util_esm["isNil"])(index)) {
            return null;
        }
        var l = seg.length;
        var nextSeg = curve[index + 1];
        return cubic_default.a.pointAt(seg[l - 2], seg[l - 1], nextSeg[1], nextSeg[2], nextSeg[3], nextSeg[4], nextSeg[5], nextSeg[6], subt);
    };
    Path.prototype._calculateCurve = function () {
        var path = this.attr().path;
        this.set('curve', util_path.pathToCurve(path));
    };
    Path.prototype._setTcache = function () {
        var totalLength = 0;
        var tempLength = 0;
        // 每段 curve 对应起止点的长度比例列表，形如: [[0, 0.25], [0.25, 0.6]. [0.6, 0.9], [0.9, 1]]
        var tCache = [];
        var segmentT;
        var segmentL;
        var segmentN;
        var l;
        var curve = this.get('curve');
        if (!curve) {
            return;
        }
        Object(util_esm["each"])(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
                totalLength +=
                    cubic_default.a.length(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]) || 0;
            }
        });
        this.set('totalLength', totalLength);
        if (totalLength === 0) {
            this.set('tCache', []);
            return;
        }
        Object(util_esm["each"])(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
                segmentT = [];
                segmentT[0] = tempLength / totalLength;
                segmentL = cubic_default.a.length(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]);
                // 当 path 不连续时，segmentL 可能为空，为空时需要作为 0 处理
                tempLength += segmentL || 0;
                segmentT[1] = tempLength / totalLength;
                tCache.push(segmentT);
            }
        });
        this.set('tCache', tCache);
    };
    /**
     * Get start tangent vector
     * @return {Array}
     */
    Path.prototype.getStartTangent = function () {
        var segments = this.getSegments();
        var result;
        if (segments.length > 1) {
            var startPoint = segments[0].currentPoint;
            var endPoint = segments[1].currentPoint;
            var tangent = segments[1].startTangent;
            result = [];
            if (tangent) {
                result.push([startPoint[0] - tangent[0], startPoint[1] - tangent[1]]);
                result.push([startPoint[0], startPoint[1]]);
            }
            else {
                result.push([endPoint[0], endPoint[1]]);
                result.push([startPoint[0], startPoint[1]]);
            }
        }
        return result;
    };
    /**
     * Get end tangent vector
     * @return {Array}
     */
    Path.prototype.getEndTangent = function () {
        var segments = this.getSegments();
        var length = segments.length;
        var result;
        if (length > 1) {
            var startPoint = segments[length - 2].currentPoint;
            var endPoint = segments[length - 1].currentPoint;
            var tangent = segments[length - 1].endTangent;
            result = [];
            if (tangent) {
                result.push([endPoint[0] - tangent[0], endPoint[1] - tangent[1]]);
                result.push([endPoint[0], endPoint[1]]);
            }
            else {
                result.push([startPoint[0], startPoint[1]]);
                result.push([endPoint[0], endPoint[1]]);
            }
        }
        return result;
    };
    return Path;
}(base));
/* harmony default export */ var shape_path = (path_Path);
//# sourceMappingURL=path.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-stroke/polyline.js

function inPolyline(points, lineWidth, x, y, isClose) {
    var count = points.length;
    if (count < 2) {
        return false;
    }
    for (var i = 0; i < count - 1; i++) {
        var x1 = points[i][0];
        var y1 = points[i][1];
        var x2 = points[i + 1][0];
        var y2 = points[i + 1][1];
        if (inLine(x1, y1, x2, y2, lineWidth, x, y)) {
            return true;
        }
    }
    // 如果封闭，则计算起始点和结束点的边
    if (isClose) {
        var first = points[0];
        var last = points[count - 1];
        if (inLine(first[0], first[1], last[0], last[1], lineWidth, x, y)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=polyline.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/polygon.js
/**
 * @fileoverview 多边形
 * @author dxq613@gmail.com
 */




var polygon_Polygon = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var points = this.attr().points;
        var isHit = false;
        if (isStroke) {
            isHit = inPolyline(points, lineWidth, x, y, true);
        }
        if (!isHit && isFill) {
            isHit = isInPolygon(points, x, y); // isPointInPath(shape, x, y);
        }
        return isHit;
    };
    Polygon.prototype.createPath = function (context) {
        var attrs = this.attr();
        var points = attrs.points;
        if (points.length < 2) {
            return;
        }
        context.beginPath();
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (i === 0) {
                context.moveTo(point[0], point[1]);
            }
            else {
                context.lineTo(point[0], point[1]);
            }
        }
        context.closePath();
    };
    return Polygon;
}(base));
/* harmony default export */ var polygon = (polygon_Polygon);
//# sourceMappingURL=polygon.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-math/lib/polyline.js
var polyline = __webpack_require__("d6a3");
var polyline_default = /*#__PURE__*/__webpack_require__.n(polyline);

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/polyline.js







var polyline_PolyLine = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(PolyLine, _super);
    function PolyLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolyLine.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { startArrow: false, endArrow: false });
    };
    PolyLine.prototype.initAttrs = function (attrs) {
        this.setArrow();
    };
    // 更新属性时，检测是否更改了 points
    PolyLine.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        this.setArrow();
        if (['points'].indexOf(name) !== -1) {
            this._resetCache();
        }
    };
    PolyLine.prototype._resetCache = function () {
        this.set('totalLength', null);
        this.set('tCache', null);
    };
    PolyLine.prototype.setArrow = function () {
        var attrs = this.attr();
        var _a = this.attrs, points = _a.points, startArrow = _a.startArrow, endArrow = _a.endArrow;
        var length = points.length;
        var x1 = points[0][0];
        var y1 = points[0][1];
        var x2 = points[length - 1][0];
        var y2 = points[length - 1][1];
        if (startArrow) {
            arrow["b" /* addStartArrow */](this, attrs, points[1][0], points[1][1], x1, y1);
        }
        if (endArrow) {
            arrow["a" /* addEndArrow */](this, attrs, points[length - 2][0], points[length - 2][1], x2, y2);
        }
    };
    // 不允许 fill
    PolyLine.prototype.isFill = function () {
        return false;
    };
    PolyLine.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        // 没有设置 stroke 不能被拾取, 没有线宽不能被拾取
        if (!isStroke || !lineWidth) {
            return false;
        }
        var points = this.attr().points;
        return inPolyline(points, lineWidth, x, y, false);
    };
    // 始终填充
    PolyLine.prototype.isStroke = function () {
        return true;
    };
    PolyLine.prototype.createPath = function (context) {
        var _a = this.attr(), points = _a.points, startArrow = _a.startArrow, endArrow = _a.endArrow;
        var length = points.length;
        if (points.length < 2) {
            return;
        }
        var x1 = points[0][0];
        var y1 = points[0][1];
        var x2 = points[length - 1][0];
        var y2 = points[length - 1][1];
        // 如果定义了箭头，并且是自定义箭头，线条相应缩进
        if (startArrow && startArrow.d) {
            var distance = arrow["c" /* getShortenOffset */](x1, y1, points[1][0], points[1][1], startArrow.d);
            x1 += distance.dx;
            y1 += distance.dy;
        }
        if (endArrow && endArrow.d) {
            var distance = arrow["c" /* getShortenOffset */](points[length - 2][0], points[length - 2][1], x2, y2, endArrow.d);
            x2 -= distance.dx;
            y2 -= distance.dy;
        }
        context.beginPath();
        context.moveTo(x1, y1);
        for (var i = 0; i < length - 1; i++) {
            var point = points[i];
            context.lineTo(point[0], point[1]);
        }
        context.lineTo(x2, y2);
    };
    PolyLine.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get length of polyline
     * @return {number} length
     */
    PolyLine.prototype.getTotalLength = function () {
        var points = this.attr().points;
        // get totalLength from cache
        var totalLength = this.get('totalLength');
        if (!Object(util_esm["isNil"])(totalLength)) {
            return totalLength;
        }
        this.set('totalLength', polyline_default.a.length(points));
        return this.get('totalLength');
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    PolyLine.prototype.getPoint = function (ratio) {
        var points = this.attr().points;
        // get tCache from cache
        var tCache = this.get('tCache');
        if (!tCache) {
            this._setTcache();
            tCache = this.get('tCache');
        }
        var subt;
        var index;
        Object(util_esm["each"])(tCache, function (v, i) {
            if (ratio >= v[0] && ratio <= v[1]) {
                subt = (ratio - v[0]) / (v[1] - v[0]);
                index = i;
            }
        });
        return line_default.a.pointAt(points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], subt);
    };
    PolyLine.prototype._setTcache = function () {
        var points = this.attr().points;
        if (!points || points.length === 0) {
            return;
        }
        var totalLength = this.getTotalLength();
        if (totalLength <= 0) {
            return;
        }
        var tempLength = 0;
        var tCache = [];
        var segmentT;
        var segmentL;
        Object(util_esm["each"])(points, function (p, i) {
            if (points[i + 1]) {
                segmentT = [];
                segmentT[0] = tempLength / totalLength;
                segmentL = line_default.a.length(p[0], p[1], points[i + 1][0], points[i + 1][1]);
                tempLength += segmentL;
                segmentT[1] = tempLength / totalLength;
                tCache.push(segmentT);
            }
        });
        this.set('tCache', tCache);
    };
    /**
     * Get start tangent vector
     * @return {Array}
     */
    PolyLine.prototype.getStartTangent = function () {
        var points = this.attr().points;
        var result = [];
        result.push([points[1][0], points[1][1]]);
        result.push([points[0][0], points[0][1]]);
        return result;
    };
    /**
     * Get end tangent vector
     * @return {Array}
     */
    PolyLine.prototype.getEndTangent = function () {
        var points = this.attr().points;
        var l = points.length - 1;
        var result = [];
        result.push([points[l - 1][0], points[l - 1][1]]);
        result.push([points[l][0], points[l][1]]);
        return result;
    };
    return PolyLine;
}(base));
/* harmony default export */ var shape_polyline = (polyline_PolyLine);
//# sourceMappingURL=polyline.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/parse.js
var parse = __webpack_require__("af40");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-stroke/rect.js

function inRect(minX, minY, width, height, lineWidth, x, y) {
    var halfWidth = lineWidth / 2;
    // 将四个边看做矩形来检测，比边的检测算法要快
    return (Object(util["e" /* inBox */])(minX - halfWidth, minY - halfWidth, width, lineWidth, x, y) || // 上边
        Object(util["e" /* inBox */])(minX + width - halfWidth, minY - halfWidth, lineWidth, height, x, y) || // 右边
        Object(util["e" /* inBox */])(minX + halfWidth, minY + height - halfWidth, width, lineWidth, x, y) || // 下边
        Object(util["e" /* inBox */])(minX - halfWidth, minY + halfWidth, lineWidth, height, x, y)); // 左边
}
//# sourceMappingURL=rect.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/in-stroke/rect-radius.js


function rectWithRadius(minX, minY, width, height, radius, lineWidth, x, y) {
    var halfWidth = lineWidth / 2;
    return (inLine(minX + radius, minY, minX + width - radius, minY, lineWidth, x, y) ||
        inLine(minX + width, minY + radius, minX + width, minY + height - radius, lineWidth, x, y) ||
        inLine(minX + width - radius, minY + height, minX + radius, minY + height, lineWidth, x, y) ||
        inLine(minX, minY + height - radius, minX, minY + radius, lineWidth, x, y) ||
        arc(minX + width - radius, minY + radius, radius, 1.5 * Math.PI, 2 * Math.PI, lineWidth, x, y) ||
        arc(minX + width - radius, minY + height - radius, radius, 0, 0.5 * Math.PI, lineWidth, x, y) ||
        arc(minX + radius, minY + height - radius, radius, 0.5 * Math.PI, Math.PI, lineWidth, x, y) ||
        arc(minX + radius, minY + radius, radius, Math.PI, 1.5 * Math.PI, lineWidth, x, y));
}
//# sourceMappingURL=rect-radius.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/rect.js
/**
 * @fileoverview 矩形
 * @author dxq613@gmail.com
 */







var rect_Rect = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rect.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x: 0, y: 0, width: 0, height: 0, radius: 0 });
    };
    Rect.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var minX = attrs.x;
        var minY = attrs.y;
        var width = attrs.width;
        var height = attrs.height;
        var radius = attrs.radius;
        // 无圆角时的策略
        if (!radius) {
            var halfWidth = lineWidth / 2;
            // 同时填充和带有边框
            if (isFill && isStroke) {
                return Object(util["e" /* inBox */])(minX - halfWidth, minY - halfWidth, width + halfWidth, height + halfWidth, x, y);
            }
            // 仅填充
            if (isFill) {
                return Object(util["e" /* inBox */])(minX, minY, width, height, x, y);
            }
            if (isStroke) {
                return inRect(minX, minY, width, height, lineWidth, x, y);
            }
        }
        else {
            var isHit = false;
            if (isStroke) {
                isHit = rectWithRadius(minX, minY, width, height, radius, lineWidth, x, y);
            }
            // 仅填充时带有圆角的矩形直接通过图形拾取
            // 以后可以改成纯数学的近似拾取，将圆弧切割成多边形
            if (!isHit && isFill) {
                isHit = isPointInPath(this, x, y);
            }
            return isHit;
        }
    };
    Rect.prototype.createPath = function (context) {
        var attrs = this.attr();
        var x = attrs.x;
        var y = attrs.y;
        var width = attrs.width;
        var height = attrs.height;
        var radius = attrs.radius;
        context.beginPath();
        if (radius === 0) {
            // 改成原生的rect方法
            context.rect(x, y, width, height);
        }
        else {
            var _a = Object(parse["a" /* parseRadius */])(radius), r1 = _a[0], r2 = _a[1], r3 = _a[2], r4 = _a[3];
            context.moveTo(x + r1, y);
            context.lineTo(x + width - r2, y);
            r2 !== 0 && context.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
            context.lineTo(x + width, y + height - r3);
            r3 !== 0 && context.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
            context.lineTo(x + r4, y + height);
            r4 !== 0 && context.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
            context.lineTo(x, y + r1);
            r1 !== 0 && context.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
            context.closePath();
        }
    };
    return Rect;
}(base));
/* harmony default export */ var rect = (rect_Rect);
//# sourceMappingURL=rect.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-base/lib/util/text.js
var util_text = __webpack_require__("5d64");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/text.js
/**
 * @fileoverview 文本
 * @author dxq613@gmail.com
 */




var text_Text = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 默认文本属性
    Text.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({}, attrs), { x: 0, y: 0, text: null, fontSize: 12, fontFamily: 'sans-serif', fontStyle: 'normal', fontWeight: 'normal', fontVariant: 'normal', textAlign: 'start', textBaseline: 'bottom' });
    };
    // 仅仅使用包围盒检测来进行拾取
    Text.prototype.isOnlyHitBox = function () {
        return true;
    };
    // 初始化时组合 font，同时判断 text 是否换行
    Text.prototype.initAttrs = function (attrs) {
        this._assembleFont();
        if (attrs.text) {
            this._setText(attrs.text);
        }
    };
    // 组装字体
    Text.prototype._assembleFont = function () {
        var attrs = this.attrs;
        attrs.font = Object(util_text["assembleFont"])(attrs);
    };
    // 如果文本换行，则缓存数组
    Text.prototype._setText = function (text) {
        var textArr = null;
        if (Object(util["k" /* isString */])(text) && text.indexOf('\n') !== -1) {
            textArr = text.split('\n');
        }
        this.set('textArr', textArr);
    };
    // 更新属性时，检测是否更改了 font、text
    Text.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name.startsWith('font')) {
            this._assembleFont();
        }
        if (name === 'text') {
            this._setText(value);
        }
    };
    // 这个方法在 text 时没有可以做的事情，如果要支持文字背景时可以考虑
    // createPath(context) {
    // }
    // 如果文本多行，需要获取文本间距
    Text.prototype._getSpaceingY = function () {
        var attrs = this.attrs;
        var lineHeight = attrs.lineHeight;
        var fontSize = attrs.fontSize * 1;
        return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
    };
    // 绘制文本，考虑多行的场景
    Text.prototype._drawTextArr = function (context, textArr, isFill) {
        var attrs = this.attrs;
        var textBaseline = attrs.textBaseline;
        var x = attrs.x;
        var y = attrs.y;
        var fontSize = attrs.fontSize * 1;
        var spaceingY = this._getSpaceingY();
        var height = Object(util_text["getTextHeight"])(attrs.text, attrs.fontSize, attrs.lineHeight);
        var subY;
        Object(util["c" /* each */])(textArr, function (subText, index) {
            subY = y + index * (spaceingY + fontSize) - height + fontSize; // bottom;
            if (textBaseline === 'middle')
                subY += height - fontSize - (height - fontSize) / 2;
            if (textBaseline === 'top')
                subY += height - fontSize;
            if (isFill) {
                context.fillText(subText, x, subY);
            }
            else {
                context.strokeText(subText, x, subY);
            }
        });
    };
    // 绘制文本，同时考虑填充和绘制边框
    Text.prototype._drawText = function (context, isFill) {
        var attrs = this.attr();
        var x = attrs.x;
        var y = attrs.y;
        var textArr = this.get('textArr');
        if (textArr) {
            this._drawTextArr(context, textArr, isFill);
        }
        else {
            var text = attrs.text;
            if (isFill) {
                context.fillText(text, x, y);
            }
            else {
                context.strokeText(text, x, y);
            }
        }
    };
    // 复写绘制和填充的逻辑：对于文本，应该先绘制边框，再进行填充
    Text.prototype.strokeAndFill = function (context) {
        var _a = this.attrs, lineWidth = _a.lineWidth, opacity = _a.opacity, strokeOpacity = _a.strokeOpacity, fillOpacity = _a.fillOpacity;
        if (this.isStroke()) {
            if (lineWidth > 0) {
                if (!Object(util["i" /* isNil */])(strokeOpacity) && strokeOpacity !== 1) {
                    context.globalAlpha = opacity;
                }
                this.stroke(context);
            }
        }
        if (this.isFill()) {
            if (!Object(util["i" /* isNil */])(fillOpacity) && fillOpacity !== 1) {
                context.globalAlpha = fillOpacity;
                this.fill(context);
                context.globalAlpha = opacity;
            }
            else {
                this.fill(context);
            }
        }
        this.afterDrawPath(context);
    };
    // 复写填充逻辑
    Text.prototype.fill = function (context) {
        this._drawText(context, true);
    };
    // 复写绘制边框的逻辑
    Text.prototype.stroke = function (context) {
        this._drawText(context, false);
    };
    return Text;
}(base));
/* harmony default export */ var shape_text = (text_Text);
//# sourceMappingURL=text.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/shape/index.js











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "493b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.snapLength = exports.nearestPoint = void 0;
var util_1 = __webpack_require__("b455");
var EPSILON = 0.0001;
/**
 * 使用牛顿切割法求最近的点
 * @param {number[]} xArr      点的 x 数组
 * @param {number[]} yArr      点的 y 数组
 * @param {number}   x         指定的点 x
 * @param {number}   y         指定的点 y
 * @param {Function} tCallback 差值函数
 */
function nearestPoint(xArr, yArr, x, y, tCallback, length) {
    var t;
    var d = Infinity;
    var v0 = [x, y];
    var segNum = 20;
    if (length && length > 200) {
        segNum = length / 10;
    }
    var increaseRate = 1 / segNum;
    var interval = increaseRate / 10;
    for (var i = 0; i <= segNum; i++) {
        var _t = i * increaseRate;
        var v1 = [tCallback.apply(null, xArr.concat([_t])), tCallback.apply(null, yArr.concat([_t]))];
        var d1 = util_1.distance(v0[0], v0[1], v1[0], v1[1]);
        if (d1 < d) {
            t = _t;
            d = d1;
        }
    }
    // 提前终止
    if (t === 0) {
        return {
            x: xArr[0],
            y: yArr[0],
        };
    }
    if (t === 1) {
        var count = xArr.length;
        return {
            x: xArr[count - 1],
            y: yArr[count - 1],
        };
    }
    d = Infinity;
    for (var i = 0; i < 32; i++) {
        if (interval < EPSILON) {
            break;
        }
        var prev = t - interval;
        var next = t + interval;
        var v1 = [tCallback.apply(null, xArr.concat([prev])), tCallback.apply(null, yArr.concat([prev]))];
        var d1 = util_1.distance(v0[0], v0[1], v1[0], v1[1]);
        if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
        }
        else {
            var v2 = [tCallback.apply(null, xArr.concat([next])), tCallback.apply(null, yArr.concat([next]))];
            var d2 = util_1.distance(v0[0], v0[1], v2[0], v2[1]);
            if (next <= 1 && d2 < d) {
                t = next;
                d = d2;
            }
            else {
                interval *= 0.5;
            }
        }
    }
    return {
        x: tCallback.apply(null, xArr.concat([t])),
        y: tCallback.apply(null, yArr.concat([t])),
    };
}
exports.nearestPoint = nearestPoint;
// 近似求解 https://community.khronos.org/t/3d-cubic-bezier-segment-length/62363/2
function snapLength(xArr, yArr) {
    var totalLength = 0;
    var count = xArr.length;
    for (var i = 0; i < count; i++) {
        var x = xArr[i];
        var y = yArr[i];
        var nextX = xArr[(i + 1) % count];
        var nextY = yArr[(i + 1) % count];
        totalLength += util_1.distance(x, y, nextX, nextY);
    }
    return totalLength / 2;
}
exports.snapLength = snapLength;
//# sourceMappingURL=bezier.js.map

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4c7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon2_vue_vue_type_style_index_0_id_031c70af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3d5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon2_vue_vue_type_style_index_0_id_031c70af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_SvgIcon2_vue_vue_type_style_index_0_id_031c70af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "503e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}
function mix(dist, src1, src2, src3) {
    if (src1)
        _mix(dist, src1);
    if (src2)
        _mix(dist, src2);
    if (src3)
        _mix(dist, src3);
    return dist;
}
exports.default = mix;
//# sourceMappingURL=mix.js.map

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "53c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export version */
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4799");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0f7e");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5f38");
/* harmony import */ var _antv_g_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6855");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b182");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c2ad");

var pkg = __webpack_require__("6813");
var version = pkg.version;






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5d64":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("d080");
var offscreen_1 = __webpack_require__("f4c8");
/**
 * 获取文本的高度
 * @param text 文本
 * @param fontSize 字体大小
 * @param lineHeight 行高，可以为空
 */
function getTextHeight(text, fontSize, lineHeight) {
    var lineCount = 1;
    if (util_1.isString(text)) {
        lineCount = text.split('\n').length;
    }
    if (lineCount > 1) {
        var spaceingY = getLineSpaceing(fontSize, lineHeight);
        return fontSize * lineCount + spaceingY * (lineCount - 1);
    }
    return fontSize;
}
exports.getTextHeight = getTextHeight;
/**
 * 获取行间距如果文本多行，需要获取文本间距
 * @param fontSize 字体大小
 * @param lineHeight 行高
 */
function getLineSpaceing(fontSize, lineHeight) {
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
}
exports.getLineSpaceing = getLineSpaceing;
/**
 * 字体宽度
 * @param text 文本
 * @param font 字体
 */
function getTextWidth(text, font) {
    var context = offscreen_1.getOffScreenContext(); // 获取离屏的 ctx 进行计算
    var width = 0;
    // null 或者 undefined 时，宽度为 0
    if (util_1.isNil(text) || text === '') {
        return width;
    }
    context.save();
    context.font = font;
    if (util_1.isString(text) && text.includes('\n')) {
        var textArr = text.split('\n');
        util_1.each(textArr, function (subText) {
            var measureWidth = context.measureText(subText).width;
            if (width < measureWidth) {
                width = measureWidth;
            }
        });
    }
    else {
        width = context.measureText(text).width;
    }
    context.restore();
    return width;
}
exports.getTextWidth = getTextWidth;
function assembleFont(attrs) {
    var fontSize = attrs.fontSize, fontFamily = attrs.fontFamily, fontWeight = attrs.fontWeight, fontStyle = attrs.fontStyle, fontVariant = attrs.fontVariant;
    return [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(' ').trim();
}
exports.assembleFont = assembleFont;
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "5db7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var flattenIntoArray = __webpack_require__("a2bf");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var aFunction = __webpack_require__("1c0b");
var arraySpeciesCreate = __webpack_require__("65f0");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "5f38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _antv_g_base_lib_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a755");
/* harmony import */ var _antv_g_base_lib_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antv_g_base_lib_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
// 导出 g-base 中的 interfaces

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "61d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_type_1 = __webpack_require__("bd8b");
exports.default = (function (str) {
    return is_type_1.default(str, 'String');
});
//# sourceMappingURL=is-string.js.map

/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6711":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c94d");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__[/* RANDOM */ "c"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "6813":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@antv/g-canvas\",\"version\":\"0.4.15\",\"description\":\"A canvas library which providing 2d\",\"main\":\"lib/index.js\",\"module\":\"esm/index.js\",\"unpkg\":\"dist/g.min.js\",\"types\":\"lib/index.d.ts\",\"files\":[\"package.json\",\"esm\",\"lib\",\"dist\",\"LICENSE\",\"README.md\"],\"scripts\":{\"build\":\"npm run clean && run-p build:*\",\"build:esm\":\"tsc -p tsconfig.json --target ES5 --module ESNext --outDir esm\",\"build:cjs\":\"tsc -p tsconfig.json --target ES5 --module commonjs --outDir lib\",\"build:umd\":\"webpack --config webpack.config.js --mode production\",\"clean\":\"rm -rf esm lib dist\",\"coverage\":\"npm run coverage-generator && npm run coverage-viewer\",\"coverage-generator\":\"torch --coverage --compile --source-pattern src/*.js,src/**/*.js --opts tests/mocha.opts\",\"coverage-viewer\":\"torch-coverage\",\"test\":\"torch --renderer --compile --opts tests/mocha.opts\",\"test-live\":\"torch --compile --interactive --opts tests/mocha.opts\",\"tsc\":\"tsc --noEmit\",\"typecheck\":\"tsc --noEmit\",\"dist\":\"webpack --config webpack.config.js --mode production\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/antvis/g.git\"},\"keywords\":[\"util\",\"antv\",\"g\"],\"publishConfig\":{\"access\":\"public\"},\"author\":\"https://github.com/orgs/antvis/people\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/antvis/g/issues\"},\"devDependencies\":{\"@antv/torch\":\"^1.0.0\",\"less\":\"^3.9.0\",\"npm-run-all\":\"^4.1.5\",\"webpack\":\"^4.26.1\",\"webpack-cli\":\"^3.1.2\"},\"homepage\":\"https://github.com/antvis/g#readme\",\"dependencies\":{\"@antv/g-base\":\"^0.4.7\",\"@antv/g-math\":\"^0.1.3\",\"@antv/path-util\":\"~2.0.5\",\"@antv/util\":\"~2.0.0\",\"gl-matrix\":\"^3.0.0\"},\"__npminstall_done\":false,\"gitHead\":\"9092384bf6b7efd6ec71bbcdec1b801a0079c403\"}");

/***/ }),

/***/ "6855":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ abstract_canvas; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ abstract_group; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ abstract_shape; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ path_namespaceObject; });

// UNUSED EXPORTS: version, Event, Base

// NAMESPACE OBJECT: ./node_modules/@antv/g-base/esm/util/path.js
var path_namespaceObject = {};
__webpack_require__.r(path_namespaceObject);
__webpack_require__.d(path_namespaceObject, "catmullRomToBezier", function() { return catmullRomToBezier; });
__webpack_require__.d(path_namespaceObject, "fillPath", function() { return fillPath; });
__webpack_require__.d(path_namespaceObject, "fillPathByDiff", function() { return fillPathByDiff; });
__webpack_require__.d(path_namespaceObject, "formatPath", function() { return formatPath; });
__webpack_require__.d(path_namespaceObject, "intersection", function() { return intersection; });
__webpack_require__.d(path_namespaceObject, "parsePathArray", function() { return parsePathArray; });
__webpack_require__.d(path_namespaceObject, "parsePathString", function() { return parsePathString; });
__webpack_require__.d(path_namespaceObject, "pathToAbsolute", function() { return pathToAbsolute; });
__webpack_require__.d(path_namespaceObject, "pathToCurve", function() { return pathToCurve; });
__webpack_require__.d(path_namespaceObject, "rectPath", function() { return rectPath; });

// NAMESPACE OBJECT: ./node_modules/@antv/matrix-util/esm/ext.js
var ext_namespaceObject = {};
__webpack_require__.r(ext_namespaceObject);
__webpack_require__.d(ext_namespaceObject, "leftTranslate", function() { return leftTranslate; });
__webpack_require__.d(ext_namespaceObject, "leftRotate", function() { return leftRotate; });
__webpack_require__.d(ext_namespaceObject, "leftScale", function() { return leftScale; });
__webpack_require__.d(ext_namespaceObject, "transform", function() { return transform; });
__webpack_require__.d(ext_namespaceObject, "direction", function() { return direction; });
__webpack_require__.d(ext_namespaceObject, "angleTo", function() { return angleTo; });
__webpack_require__.d(ext_namespaceObject, "vertical", function() { return vertical; });

// NAMESPACE OBJECT: ./node_modules/d3-ease/src/index.js
var src_namespaceObject = {};
__webpack_require__.r(src_namespaceObject);
__webpack_require__.d(src_namespaceObject, "easeLinear", function() { return linear; });
__webpack_require__.d(src_namespaceObject, "easeQuad", function() { return quadInOut; });
__webpack_require__.d(src_namespaceObject, "easeQuadIn", function() { return quadIn; });
__webpack_require__.d(src_namespaceObject, "easeQuadOut", function() { return quadOut; });
__webpack_require__.d(src_namespaceObject, "easeQuadInOut", function() { return quadInOut; });
__webpack_require__.d(src_namespaceObject, "easeCubic", function() { return cubicInOut; });
__webpack_require__.d(src_namespaceObject, "easeCubicIn", function() { return cubicIn; });
__webpack_require__.d(src_namespaceObject, "easeCubicOut", function() { return cubicOut; });
__webpack_require__.d(src_namespaceObject, "easeCubicInOut", function() { return cubicInOut; });
__webpack_require__.d(src_namespaceObject, "easePoly", function() { return polyInOut; });
__webpack_require__.d(src_namespaceObject, "easePolyIn", function() { return polyIn; });
__webpack_require__.d(src_namespaceObject, "easePolyOut", function() { return polyOut; });
__webpack_require__.d(src_namespaceObject, "easePolyInOut", function() { return polyInOut; });
__webpack_require__.d(src_namespaceObject, "easeSin", function() { return sinInOut; });
__webpack_require__.d(src_namespaceObject, "easeSinIn", function() { return sinIn; });
__webpack_require__.d(src_namespaceObject, "easeSinOut", function() { return sinOut; });
__webpack_require__.d(src_namespaceObject, "easeSinInOut", function() { return sinInOut; });
__webpack_require__.d(src_namespaceObject, "easeExp", function() { return expInOut; });
__webpack_require__.d(src_namespaceObject, "easeExpIn", function() { return expIn; });
__webpack_require__.d(src_namespaceObject, "easeExpOut", function() { return expOut; });
__webpack_require__.d(src_namespaceObject, "easeExpInOut", function() { return expInOut; });
__webpack_require__.d(src_namespaceObject, "easeCircle", function() { return circleInOut; });
__webpack_require__.d(src_namespaceObject, "easeCircleIn", function() { return circleIn; });
__webpack_require__.d(src_namespaceObject, "easeCircleOut", function() { return circleOut; });
__webpack_require__.d(src_namespaceObject, "easeCircleInOut", function() { return circleInOut; });
__webpack_require__.d(src_namespaceObject, "easeBounce", function() { return bounceOut; });
__webpack_require__.d(src_namespaceObject, "easeBounceIn", function() { return bounceIn; });
__webpack_require__.d(src_namespaceObject, "easeBounceOut", function() { return bounceOut; });
__webpack_require__.d(src_namespaceObject, "easeBounceInOut", function() { return bounceInOut; });
__webpack_require__.d(src_namespaceObject, "easeBack", function() { return backInOut; });
__webpack_require__.d(src_namespaceObject, "easeBackIn", function() { return backIn; });
__webpack_require__.d(src_namespaceObject, "easeBackOut", function() { return backOut; });
__webpack_require__.d(src_namespaceObject, "easeBackInOut", function() { return backInOut; });
__webpack_require__.d(src_namespaceObject, "easeElastic", function() { return elastic_elasticOut; });
__webpack_require__.d(src_namespaceObject, "easeElasticIn", function() { return elastic_elasticIn; });
__webpack_require__.d(src_namespaceObject, "easeElasticOut", function() { return elastic_elasticOut; });
__webpack_require__.d(src_namespaceObject, "easeElasticInOut", function() { return elastic_elasticInOut; });

// EXTERNAL MODULE: ./node_modules/@antv/util/esm/index.js + 105 modules
var esm = __webpack_require__("8937");

// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/util/path.js

var SPACES = '\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029';
var PATH_COMMAND = new RegExp("([a-z])[" + SPACES + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + SPACES + "]*,?[" + SPACES + "]*)+)", 'ig');
var PATH_VALUES = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + SPACES + "]*,?[" + SPACES + "]*", 'ig');
// Parse given path string into an array of arrays of path segments
var parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    if (Object(esm["isArray"])(pathString)) {
        return pathString;
    }
    var paramCounts = {
        a: 7,
        c: 6,
        o: 2,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        u: 3,
        z: 0,
    };
    var data = [];
    String(pathString).replace(PATH_COMMAND, function (a, b, c) {
        var params = [];
        var name = b.toLowerCase();
        c.replace(PATH_VALUES, function (a, b) {
            b && params.push(+b);
        });
        if (name === 'm' && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = 'l';
            b = b === 'm' ? 'l' : 'L';
        }
        if (name === 'o' && params.length === 1) {
            data.push([b, params[0]]);
        }
        if (name === 'r') {
            data.push([b].concat(params));
        }
        else {
            while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        }
        return pathString;
    });
    return data;
};
// http://schepers.cc/getting-to-the-point
var catmullRomToBezier = function (crp, z) {
    var d = [];
    // @ts-ignore
    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
        var p = [
            {
                x: +crp[i - 2],
                y: +crp[i - 1],
            },
            {
                x: +crp[i],
                y: +crp[i + 1],
            },
            {
                x: +crp[i + 2],
                y: +crp[i + 3],
            },
            {
                x: +crp[i + 4],
                y: +crp[i + 5],
            },
        ];
        if (z) {
            if (!i) {
                p[0] = {
                    x: +crp[iLen - 2],
                    y: +crp[iLen - 1],
                };
            }
            else if (iLen - 4 === i) {
                p[3] = {
                    x: +crp[0],
                    y: +crp[1],
                };
            }
            else if (iLen - 2 === i) {
                p[2] = {
                    x: +crp[0],
                    y: +crp[1],
                };
                p[3] = {
                    x: +crp[2],
                    y: +crp[3],
                };
            }
        }
        else {
            if (iLen - 4 === i) {
                p[3] = p[2];
            }
            else if (!i) {
                p[0] = {
                    x: +crp[i],
                    y: +crp[i + 1],
                };
            }
        }
        d.push([
            'C',
            (-p[0].x + 6 * p[1].x + p[2].x) / 6,
            (-p[0].y + 6 * p[1].y + p[2].y) / 6,
            (p[1].x + 6 * p[2].x - p[3].x) / 6,
            (p[1].y + 6 * p[2].y - p[3].y) / 6,
            p[2].x,
            p[2].y,
        ]);
    }
    return d;
};
var ellipsePath = function (x, y, rx, ry, a) {
    var res = [];
    if (a === null && ry === null) {
        ry = rx;
    }
    x = +x;
    y = +y;
    rx = +rx;
    ry = +ry;
    if (a !== null) {
        var rad = Math.PI / 180;
        var x1 = x + rx * Math.cos(-ry * rad);
        var x2 = x + rx * Math.cos(-a * rad);
        var y1 = y + rx * Math.sin(-ry * rad);
        var y2 = y + rx * Math.sin(-a * rad);
        res = [
            ['M', x1, y1],
            ['A', rx, rx, 0, +(a - ry > 180), 0, x2, y2],
        ];
    }
    else {
        res = [['M', x, y], ['m', 0, -ry], ['a', rx, ry, 0, 1, 1, 0, 2 * ry], ['a', rx, ry, 0, 1, 1, 0, -2 * ry], ['z']];
    }
    return res;
};
var pathToAbsolute = function (pathArray) {
    pathArray = parsePathString(pathArray);
    if (!pathArray || !pathArray.length) {
        return [['M', 0, 0]];
    }
    var res = [];
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var start = 0;
    var pa0;
    var dots;
    if (pathArray[0][0] === 'M') {
        x = +pathArray[0][1];
        y = +pathArray[0][2];
        mx = x;
        my = y;
        start++;
        res[0] = ['M', x, y];
    }
    var crz = pathArray.length === 3 &&
        pathArray[0][0] === 'M' &&
        pathArray[1][0].toUpperCase() === 'R' &&
        pathArray[2][0].toUpperCase() === 'Z';
    for (var r = void 0, pa = void 0, i = start, ii = pathArray.length; i < ii; i++) {
        res.push((r = []));
        pa = pathArray[i];
        pa0 = pa[0];
        if (pa0 !== pa0.toUpperCase()) {
            r[0] = pa0.toUpperCase();
            switch (r[0]) {
                case 'A':
                    r[1] = pa[1];
                    r[2] = pa[2];
                    r[3] = pa[3];
                    r[4] = pa[4];
                    r[5] = pa[5];
                    r[6] = +pa[6] + x;
                    r[7] = +pa[7] + y;
                    break;
                case 'V':
                    r[1] = +pa[1] + y;
                    break;
                case 'H':
                    r[1] = +pa[1] + x;
                    break;
                case 'R':
                    dots = [x, y].concat(pa.slice(1));
                    for (var j = 2, jj = dots.length; j < jj; j++) {
                        dots[j] = +dots[j] + x;
                        dots[++j] = +dots[j] + y;
                    }
                    res.pop();
                    res = res.concat(catmullRomToBezier(dots, crz));
                    break;
                case 'O':
                    res.pop();
                    dots = ellipsePath(x, y, pa[1], pa[2]);
                    dots.push(dots[0]);
                    res = res.concat(dots);
                    break;
                case 'U':
                    res.pop();
                    res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                    r = ['U'].concat(res[res.length - 1].slice(-2));
                    break;
                case 'M':
                    mx = +pa[1] + x;
                    my = +pa[2] + y;
                    break; // for lint
                default:
                    for (var j = 1, jj = pa.length; j < jj; j++) {
                        r[j] = +pa[j] + (j % 2 ? x : y);
                    }
            }
        }
        else if (pa0 === 'R') {
            dots = [x, y].concat(pa.slice(1));
            res.pop();
            res = res.concat(catmullRomToBezier(dots, crz));
            r = ['R'].concat(pa.slice(-2));
        }
        else if (pa0 === 'O') {
            res.pop();
            dots = ellipsePath(x, y, pa[1], pa[2]);
            dots.push(dots[0]);
            res = res.concat(dots);
        }
        else if (pa0 === 'U') {
            res.pop();
            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
            r = ['U'].concat(res[res.length - 1].slice(-2));
        }
        else {
            for (var k = 0, kk = pa.length; k < kk; k++) {
                r[k] = pa[k];
            }
        }
        pa0 = pa0.toUpperCase();
        if (pa0 !== 'O') {
            switch (r[0]) {
                case 'Z':
                    x = +mx;
                    y = +my;
                    break;
                case 'H':
                    x = r[1];
                    break;
                case 'V':
                    y = r[1];
                    break;
                case 'M':
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break; // for lint
                default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
            }
        }
    }
    return res;
};
var l2c = function (x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
};
var q2c = function (x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3;
    var _23 = 2 / 3;
    return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
};
var a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    if (rx === ry) {
        rx += 1;
    }
    var _120 = (Math.PI * 120) / 180;
    var rad = (Math.PI / 180) * (+angle || 0);
    var res = [];
    var xy;
    var f1;
    var f2;
    var cx;
    var cy;
    var rotate = function (x, y, rad) {
        var X = x * Math.cos(rad) - y * Math.sin(rad);
        var Y = x * Math.sin(rad) + y * Math.cos(rad);
        return {
            x: X,
            y: Y,
        };
    };
    if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        if (x1 === x2 && y1 === y2) {
            // 若弧的起始点和终点重叠则错开一点
            x2 += 1;
            y2 += 1;
        }
        // const cos = Math.cos(Math.PI / 180 * angle);
        // const sin = Math.sin(Math.PI / 180 * angle);
        var x = (x1 - x2) / 2;
        var y = (y1 - y2) / 2;
        var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
        if (h > 1) {
            h = Math.sqrt(h);
            rx = h * rx;
            ry = h * ry;
        }
        var rx2 = rx * rx;
        var ry2 = ry * ry;
        var k = (large_arc_flag === sweep_flag ? -1 : 1) *
            Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
        cx = (k * rx * y) / ry + (x1 + x2) / 2;
        cy = (k * -ry * x) / rx + (y1 + y2) / 2;
        // @ts-ignore
        f1 = Math.asin(((y1 - cy) / ry).toFixed(9));
        // @ts-ignore
        f2 = Math.asin(((y2 - cy) / ry).toFixed(9));
        f1 = x1 < cx ? Math.PI - f1 : f1;
        f2 = x2 < cx ? Math.PI - f2 : f2;
        f1 < 0 && (f1 = Math.PI * 2 + f1);
        f2 < 0 && (f2 = Math.PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
            f1 = f1 - Math.PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
            f2 = f2 - Math.PI * 2;
        }
    }
    else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
    }
    var df = f2 - f1;
    if (Math.abs(df) > _120) {
        var f2old = f2;
        var x2old = x2;
        var y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
    }
    df = f2 - f1;
    var c1 = Math.cos(f1);
    var s1 = Math.sin(f1);
    var c2 = Math.cos(f2);
    var s2 = Math.sin(f2);
    var t = Math.tan(df / 4);
    var hx = (4 / 3) * rx * t;
    var hy = (4 / 3) * ry * t;
    var m1 = [x1, y1];
    var m2 = [x1 + hx * s1, y1 - hy * c1];
    var m3 = [x2 + hx * s2, y2 - hy * c2];
    var m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [m2, m3, m4].concat(res);
    }
    res = [m2, m3, m4]
        .concat(res)
        .join()
        .split(',');
    var newres = [];
    for (var i = 0, ii = res.length; i < ii; i++) {
        newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }
    return newres;
};
var pathToCurve = function (path, path2) {
    var p = pathToAbsolute(path);
    var p2 = path2 && pathToAbsolute(path2);
    var attrs = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null,
    };
    var attrs2 = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null,
    };
    var pcoms1 = []; // path commands of original path p
    var pcoms2 = []; // path commands of original path p2
    var pfirst = ''; // temporary holder for original path command
    var pcom = ''; // holder for previous path command of original path
    var ii;
    var processPath = function (path, d, pcom) {
        var nx;
        var ny;
        if (!path) {
            return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
        }
        !(path[0] in
            {
                T: 1,
                Q: 1,
            }) && (d.qx = d.qy = null);
        switch (path[0]) {
            case 'M':
                d.X = path[1];
                d.Y = path[2];
                break;
            case 'A':
                path = ['C'].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                break;
            case 'S':
                if (pcom === 'C' || pcom === 'S') {
                    // In "S" case we have to take into account, if the previous command is C/S.
                    nx = d.x * 2 - d.bx; // And reflect the previous
                    ny = d.y * 2 - d.by; // command's control point relative to the current point.
                }
                else {
                    // or some else or nothing
                    nx = d.x;
                    ny = d.y;
                }
                path = ['C', nx, ny].concat(path.slice(1));
                break;
            case 'T':
                if (pcom === 'Q' || pcom === 'T') {
                    // In "T" case we have to take into account, if the previous command is Q/T.
                    d.qx = d.x * 2 - d.qx; // And make a reflection similar
                    d.qy = d.y * 2 - d.qy; // to case "S".
                }
                else {
                    // or something else or nothing
                    d.qx = d.x;
                    d.qy = d.y;
                }
                path = ['C'].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                break;
            case 'Q':
                d.qx = path[1];
                d.qy = path[2];
                path = ['C'].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                break;
            case 'L':
                path = ['C'].concat(l2c(d.x, d.y, path[1], path[2]));
                break;
            case 'H':
                path = ['C'].concat(l2c(d.x, d.y, path[1], d.y));
                break;
            case 'V':
                path = ['C'].concat(l2c(d.x, d.y, d.x, path[1]));
                break;
            case 'Z':
                path = ['C'].concat(l2c(d.x, d.y, d.X, d.Y));
                break;
            default:
                break;
        }
        return path;
    };
    var fixArc = function (pp, i) {
        if (pp[i].length > 7) {
            pp[i].shift();
            var pi = pp[i];
            while (pi.length) {
                pcoms1[i] = 'A'; // if created multiple C:s, their original seg is saved
                p2 && (pcoms2[i] = 'A'); // the same as above
                pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
            }
            pp.splice(i, 1);
            ii = Math.max(p.length, (p2 && p2.length) || 0);
        }
    };
    var fixM = function (path1, path2, a1, a2, i) {
        if (path1 && path2 && path1[i][0] === 'M' && path2[i][0] !== 'M') {
            path2.splice(i, 0, ['M', a2.x, a2.y]);
            a1.bx = 0;
            a1.by = 0;
            a1.x = path1[i][1];
            a1.y = path1[i][2];
            ii = Math.max(p.length, (p2 && p2.length) || 0);
        }
    };
    ii = Math.max(p.length, (p2 && p2.length) || 0);
    for (var i = 0; i < ii; i++) {
        p[i] && (pfirst = p[i][0]); // save current path command
        if (pfirst !== 'C') {
            // C is not saved yet, because it may be result of conversion
            pcoms1[i] = pfirst; // Save current path command
            i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
        }
        p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath
        if (pcoms1[i] !== 'A' && pfirst === 'C')
            pcoms1[i] = 'C'; // A is the only command
        // which may produce multiple C:s
        // so we have to make sure that C is also C in original path
        fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1
        if (p2) {
            // the same procedures is done to p2
            p2[i] && (pfirst = p2[i][0]);
            if (pfirst !== 'C') {
                pcoms2[i] = pfirst;
                i && (pcom = pcoms2[i - 1]);
            }
            p2[i] = processPath(p2[i], attrs2, pcom);
            if (pcoms2[i] !== 'A' && pfirst === 'C') {
                pcoms2[i] = 'C';
            }
            fixArc(p2, i);
        }
        fixM(p, p2, attrs, attrs2, i);
        fixM(p2, p, attrs2, attrs, i);
        var seg = p[i];
        var seg2 = p2 && p2[i];
        var seglen = seg.length;
        var seg2len = p2 && seg2.length;
        attrs.x = seg[seglen - 2];
        attrs.y = seg[seglen - 1];
        attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
        attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
        attrs2.bx = p2 && (parseFloat(seg2[seg2len - 4]) || attrs2.x);
        attrs2.by = p2 && (parseFloat(seg2[seg2len - 3]) || attrs2.y);
        attrs2.x = p2 && seg2[seg2len - 2];
        attrs2.y = p2 && seg2[seg2len - 1];
    }
    return p2 ? [p, p2] : p;
};
var p2s = /,?([a-z]),?/gi;
var parsePathArray = function (path) {
    return path.join(',').replace(p2s, '$1');
};
var base3 = function (t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
    var t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
};
var bezlen = function (x1, y1, x2, y2, x3, y3, x4, y4, z) {
    if (z === null) {
        z = 1;
    }
    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2;
    var n = 12;
    var Tvalues = [
        -0.1252,
        0.1252,
        -0.3678,
        0.3678,
        -0.5873,
        0.5873,
        -0.7699,
        0.7699,
        -0.9041,
        0.9041,
        -0.9816,
        0.9816,
    ];
    var Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
    var sum = 0;
    for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2;
        var xbase = base3(ct, x1, x2, x3, x4);
        var ybase = base3(ct, y1, y2, y3, y4);
        var comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * Math.sqrt(comb);
    }
    return z2 * sum;
};
var curveDim = function (x0, y0, x1, y1, x2, y2, x3, y3) {
    var tvalues = [];
    var bounds = [[], []];
    var a;
    var b;
    var c;
    var t;
    for (var i = 0; i < 2; ++i) {
        if (i === 0) {
            b = 6 * x0 - 12 * x1 + 6 * x2;
            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
            c = 3 * x1 - 3 * x0;
        }
        else {
            b = 6 * y0 - 12 * y1 + 6 * y2;
            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
            c = 3 * y1 - 3 * y0;
        }
        if (Math.abs(a) < 1e-12) {
            if (Math.abs(b) < 1e-12) {
                continue;
            }
            t = -c / b;
            if (t > 0 && t < 1) {
                tvalues.push(t);
            }
            continue;
        }
        var b2ac = b * b - 4 * c * a;
        var sqrtb2ac = Math.sqrt(b2ac);
        if (b2ac < 0) {
            continue;
        }
        var t1 = (-b + sqrtb2ac) / (2 * a);
        if (t1 > 0 && t1 < 1) {
            tvalues.push(t1);
        }
        var t2 = (-b - sqrtb2ac) / (2 * a);
        if (t2 > 0 && t2 < 1) {
            tvalues.push(t2);
        }
    }
    var j = tvalues.length;
    var jlen = j;
    var mt;
    while (j--) {
        t = tvalues[j];
        mt = 1 - t;
        bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
        bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    }
    bounds[0][jlen] = x0;
    bounds[1][jlen] = y0;
    bounds[0][jlen + 1] = x3;
    bounds[1][jlen + 1] = y3;
    bounds[0].length = bounds[1].length = jlen + 2;
    return {
        min: {
            x: Math.min.apply(0, bounds[0]),
            y: Math.min.apply(0, bounds[1]),
        },
        max: {
            x: Math.max.apply(0, bounds[0]),
            y: Math.max.apply(0, bounds[1]),
        },
    };
};
var intersect = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    if (Math.max(x1, x2) < Math.min(x3, x4) ||
        Math.min(x1, x2) > Math.max(x3, x4) ||
        Math.max(y1, y2) < Math.min(y3, y4) ||
        Math.min(y1, y2) > Math.max(y3, y4)) {
        return;
    }
    var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
    var ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
    var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (!denominator) {
        return;
    }
    var px = nx / denominator;
    var py = ny / denominator;
    var px2 = +px.toFixed(2);
    var py2 = +py.toFixed(2);
    if (px2 < +Math.min(x1, x2).toFixed(2) ||
        px2 > +Math.max(x1, x2).toFixed(2) ||
        px2 < +Math.min(x3, x4).toFixed(2) ||
        px2 > +Math.max(x3, x4).toFixed(2) ||
        py2 < +Math.min(y1, y2).toFixed(2) ||
        py2 > +Math.max(y1, y2).toFixed(2) ||
        py2 < +Math.min(y3, y4).toFixed(2) ||
        py2 > +Math.max(y3, y4).toFixed(2)) {
        return;
    }
    return {
        x: px,
        y: py,
    };
};
var isPointInsideBBox = function (bbox, x, y) {
    return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
};
var rectPath = function (x, y, w, h, r) {
    if (r) {
        return [
            ['M', +x + +r, y],
            ['l', w - r * 2, 0],
            ['a', r, r, 0, 0, 1, r, r],
            ['l', 0, h - r * 2],
            ['a', r, r, 0, 0, 1, -r, r],
            ['l', r * 2 - w, 0],
            ['a', r, r, 0, 0, 1, -r, -r],
            ['l', 0, r * 2 - h],
            ['a', r, r, 0, 0, 1, r, -r],
            ['z'],
        ];
    }
    var res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
    // @ts-ignore
    res.parsePathArray = parsePathArray;
    return res;
};
var path_box = function (x, y, width, height) {
    if (x === null) {
        x = y = width = height = 0;
    }
    if (y === null) {
        y = x.y;
        width = x.width;
        height = x.height;
        x = x.x;
    }
    return {
        x: x,
        y: y,
        width: width,
        w: width,
        height: height,
        h: height,
        x2: x + width,
        y2: y + height,
        cx: x + width / 2,
        cy: y + height / 2,
        r1: Math.min(width, height) / 2,
        r2: Math.max(width, height) / 2,
        r0: Math.sqrt(width * width + height * height) / 2,
        path: rectPath(x, y, width, height),
        vb: [x, y, width, height].join(' '),
    };
};
var isBBoxIntersect = function (bbox1, bbox2) {
    bbox1 = path_box(bbox1);
    bbox2 = path_box(bbox2);
    return (isPointInsideBBox(bbox2, bbox1.x, bbox1.y) ||
        isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) ||
        isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) ||
        isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) ||
        isPointInsideBBox(bbox1, bbox2.x, bbox2.y) ||
        isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) ||
        isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) ||
        isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) ||
        (((bbox1.x < bbox2.x2 && bbox1.x > bbox2.x) || (bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)) &&
            ((bbox1.y < bbox2.y2 && bbox1.y > bbox2.y) || (bbox2.y < bbox1.y2 && bbox2.y > bbox1.y))));
};
var bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
    if (!Object(esm["isArray"])(p1x)) {
        p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
    }
    var bbox = curveDim.apply(null, p1x);
    return path_box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
};
var findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t;
    var t13 = Math.pow(t1, 3);
    var t12 = Math.pow(t1, 2);
    var t2 = t * t;
    var t3 = t2 * t;
    var x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x;
    var y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
    var mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x);
    var my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y);
    var nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x);
    var ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y);
    var ax = t1 * p1x + t * c1x;
    var ay = t1 * p1y + t * c1y;
    var cx = t1 * c2x + t * p2x;
    var cy = t1 * c2y + t * p2y;
    var alpha = 90 - (Math.atan2(mx - nx, my - ny) * 180) / Math.PI;
    // (mx > nx || my < ny) && (alpha += 180);
    return {
        x: x,
        y: y,
        m: {
            x: mx,
            y: my,
        },
        n: {
            x: nx,
            y: ny,
        },
        start: {
            x: ax,
            y: ay,
        },
        end: {
            x: cx,
            y: cy,
        },
        alpha: alpha,
    };
};
var interHelper = function (bez1, bez2, justCount) {
    var bbox1 = bezierBBox(bez1);
    var bbox2 = bezierBBox(bez2);
    if (!isBBoxIntersect(bbox1, bbox2)) {
        return justCount ? 0 : [];
    }
    var l1 = bezlen.apply(0, bez1);
    var l2 = bezlen.apply(0, bez2);
    var n1 = ~~(l1 / 8);
    var n2 = ~~(l2 / 8);
    var dots1 = [];
    var dots2 = [];
    var xy = {};
    var res = justCount ? 0 : [];
    for (var i = 0; i < n1 + 1; i++) {
        var d = findDotsAtSegment.apply(0, bez1.concat(i / n1));
        dots1.push({
            x: d.x,
            y: d.y,
            t: i / n1,
        });
    }
    for (var i = 0; i < n2 + 1; i++) {
        var d = findDotsAtSegment.apply(0, bez2.concat(i / n2));
        dots2.push({
            x: d.x,
            y: d.y,
            t: i / n2,
        });
    }
    for (var i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
            var di = dots1[i];
            var di1 = dots1[i + 1];
            var dj = dots2[j];
            var dj1 = dots2[j + 1];
            var ci = Math.abs(di1.x - di.x) < 0.001 ? 'y' : 'x';
            var cj = Math.abs(dj1.x - dj.x) < 0.001 ? 'y' : 'x';
            var is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
            if (is) {
                if (xy[is.x.toFixed(4)] === is.y.toFixed(4)) {
                    continue;
                }
                xy[is.x.toFixed(4)] = is.y.toFixed(4);
                var t1 = di.t + Math.abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t);
                var t2 = dj.t + Math.abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                    if (justCount) {
                        // @ts-ignore
                        res += 1;
                    }
                    else {
                        // @ts-ignore
                        res.push({
                            x: is.x,
                            y: is.y,
                            t1: t1,
                            t2: t2,
                        });
                    }
                }
            }
        }
    }
    return res;
};
var interPathHelper = function (path1, path2, justCount) {
    path1 = pathToCurve(path1);
    path2 = pathToCurve(path2);
    var x1;
    var y1;
    var x2;
    var y2;
    var x1m;
    var y1m;
    var x2m;
    var y2m;
    var bez1;
    var bez2;
    var res = justCount ? 0 : [];
    for (var i = 0, ii = path1.length; i < ii; i++) {
        var pi = path1[i];
        if (pi[0] === 'M') {
            x1 = x1m = pi[1];
            y1 = y1m = pi[2];
        }
        else {
            if (pi[0] === 'C') {
                bez1 = [x1, y1].concat(pi.slice(1));
                x1 = bez1[6];
                y1 = bez1[7];
            }
            else {
                bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                x1 = x1m;
                y1 = y1m;
            }
            for (var j = 0, jj = path2.length; j < jj; j++) {
                var pj = path2[j];
                if (pj[0] === 'M') {
                    x2 = x2m = pj[1];
                    y2 = y2m = pj[2];
                }
                else {
                    if (pj[0] === 'C') {
                        bez2 = [x2, y2].concat(pj.slice(1));
                        x2 = bez2[6];
                        y2 = bez2[7];
                    }
                    else {
                        bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                        x2 = x2m;
                        y2 = y2m;
                    }
                    var intr = interHelper(bez1, bez2, justCount);
                    if (justCount) {
                        // @ts-ignore
                        res += intr;
                    }
                    else {
                        // @ts-ignore
                        for (var k = 0, kk = intr.length; k < kk; k++) {
                            intr[k].segment1 = i;
                            intr[k].segment2 = j;
                            intr[k].bez1 = bez1;
                            intr[k].bez2 = bez2;
                        }
                        // @ts-ignore
                        res = res.concat(intr);
                    }
                }
            }
        }
    }
    return res;
};
var intersection = function (path1, path2) {
    return interPathHelper(path1, path2);
};
function decasteljau(points, t) {
    var left = [];
    var right = [];
    function recurse(points, t) {
        if (points.length === 1) {
            left.push(points[0]);
            right.push(points[0]);
        }
        else {
            var middlePoints = [];
            for (var i = 0; i < points.length - 1; i++) {
                if (i === 0) {
                    left.push(points[0]);
                }
                if (i === points.length - 2) {
                    right.push(points[i + 1]);
                }
                middlePoints[i] = [
                    (1 - t) * points[i][0] + t * points[i + 1][0],
                    (1 - t) * points[i][1] + t * points[i + 1][1],
                ];
            }
            recurse(middlePoints, t);
        }
    }
    if (points.length) {
        recurse(points, t);
    }
    return { left: left, right: right.reverse() };
}
function splitCurve(start, end, count) {
    var points = [[start[1], start[2]]];
    count = count || 2;
    var segments = [];
    if (end[0] === 'A') {
        points.push(end[6]);
        points.push(end[7]);
    }
    else if (end[0] === 'C') {
        points.push([end[1], end[2]]);
        points.push([end[3], end[4]]);
        points.push([end[5], end[6]]);
    }
    else if (end[0] === 'S' || end[0] === 'Q') {
        points.push([end[1], end[2]]);
        points.push([end[3], end[4]]);
    }
    else {
        points.push([end[1], end[2]]);
    }
    var leftSegments = points;
    var t = 1 / count;
    for (var i = 0; i < count - 1; i++) {
        var rt = t / (1 - t * i);
        var split = decasteljau(leftSegments, rt);
        segments.push(split.left);
        leftSegments = split.right;
    }
    segments.push(leftSegments);
    var result = segments.map(function (segment) {
        var cmd = [];
        if (segment.length === 4) {
            cmd.push('C');
            cmd = cmd.concat(segment[2]);
        }
        if (segment.length >= 3) {
            if (segment.length === 3) {
                cmd.push('Q');
            }
            cmd = cmd.concat(segment[1]);
        }
        if (segment.length === 2) {
            cmd.push('L');
        }
        cmd = cmd.concat(segment[segment.length - 1]);
        return cmd;
    });
    return result;
}
var splitSegment = function (start, end, count) {
    if (count === 1) {
        return [[].concat(start)];
    }
    var segments = [];
    if (end[0] === 'L' || end[0] === 'C' || end[0] === 'Q') {
        segments = segments.concat(splitCurve(start, end, count));
    }
    else {
        var temp = [].concat(start);
        if (temp[0] === 'M') {
            temp[0] = 'L';
        }
        for (var i = 0; i <= count - 1; i++) {
            segments.push(temp);
        }
    }
    return segments;
};
var fillPath = function (source, target) {
    if (source.length === 1) {
        return source;
    }
    var sourceLen = source.length - 1;
    var targetLen = target.length - 1;
    var ratio = sourceLen / targetLen;
    var segmentsToFill = [];
    if (source.length === 1 && source[0][0] === 'M') {
        for (var i = 0; i < targetLen - sourceLen; i++) {
            source.push(source[0]);
        }
        return source;
    }
    for (var i = 0; i < targetLen; i++) {
        var index = Math.floor(ratio * i);
        segmentsToFill[index] = (segmentsToFill[index] || 0) + 1;
    }
    var filled = segmentsToFill.reduce(function (filled, count, i) {
        if (i === sourceLen) {
            return filled.concat(source[sourceLen]);
        }
        return filled.concat(splitSegment(source[i], source[i + 1], count));
    }, []);
    filled.unshift(source[0]);
    if (target[targetLen] === 'Z' || target[targetLen] === 'z') {
        filled.push('Z');
    }
    return filled;
};
var isEqual = function (obj1, obj2) {
    if (obj1.length !== obj2.length) {
        return false;
    }
    var result = true;
    Object(esm["each"])(obj1, function (item, i) {
        if (item !== obj2[i]) {
            result = false;
            return false;
        }
    });
    return result;
};
function getMinDiff(del, add, modify) {
    var type = null;
    var min = modify;
    if (add < min) {
        min = add;
        type = 'add';
    }
    if (del < min) {
        min = del;
        type = 'del';
    }
    return {
        type: type,
        min: min,
    };
}
/*
 * https://en.wikipedia.org/wiki/Levenshtein_distance
 * 计算两条path的编辑距离
 */
var levenshteinDistance = function (source, target) {
    var sourceLen = source.length;
    var targetLen = target.length;
    var sourceSegment;
    var targetSegment;
    var temp = 0;
    if (sourceLen === 0 || targetLen === 0) {
        return null;
    }
    var dist = [];
    for (var i = 0; i <= sourceLen; i++) {
        dist[i] = [];
        dist[i][0] = { min: i };
    }
    for (var j = 0; j <= targetLen; j++) {
        dist[0][j] = { min: j };
    }
    for (var i = 1; i <= sourceLen; i++) {
        sourceSegment = source[i - 1];
        for (var j = 1; j <= targetLen; j++) {
            targetSegment = target[j - 1];
            if (isEqual(sourceSegment, targetSegment)) {
                temp = 0;
            }
            else {
                temp = 1;
            }
            var del = dist[i - 1][j].min + 1;
            var add = dist[i][j - 1].min + 1;
            var modify = dist[i - 1][j - 1].min + temp;
            dist[i][j] = getMinDiff(del, add, modify);
        }
    }
    return dist;
};
var fillPathByDiff = function (source, target) {
    var diffMatrix = levenshteinDistance(source, target);
    var sourceLen = source.length;
    var targetLen = target.length;
    var changes = [];
    var index = 1;
    var minPos = 1;
    // 如果source和target不是完全不相等
    if (diffMatrix[sourceLen][targetLen].min !== sourceLen) {
        // 获取从source到target所需改动
        for (var i = 1; i <= sourceLen; i++) {
            var min = diffMatrix[i][i].min;
            minPos = i;
            for (var j = index; j <= targetLen; j++) {
                if (diffMatrix[i][j].min < min) {
                    min = diffMatrix[i][j].min;
                    minPos = j;
                }
            }
            index = minPos;
            if (diffMatrix[i][index].type) {
                changes.push({ index: i - 1, type: diffMatrix[i][index].type });
            }
        }
        // 对source进行增删path
        for (var i = changes.length - 1; i >= 0; i--) {
            index = changes[i].index;
            if (changes[i].type === 'add') {
                source.splice(index, 0, [].concat(source[index]));
            }
            else {
                source.splice(index, 1);
            }
        }
    }
    // source尾部补齐
    sourceLen = source.length;
    var diff = targetLen - sourceLen;
    if (sourceLen < targetLen) {
        for (var i = 0; i < diff; i++) {
            if (source[sourceLen - 1][0] === 'z' || source[sourceLen - 1][0] === 'Z') {
                source.splice(sourceLen - 2, 0, source[sourceLen - 2]);
            }
            else {
                source.push(source[sourceLen - 1]);
            }
            sourceLen += 1;
        }
    }
    return source;
};
// 将两个点均分成count个点
function _splitPoints(points, former, count) {
    var result = [].concat(points);
    var index;
    var t = 1 / (count + 1);
    var formerEnd = _getSegmentPoints(former)[0];
    for (var i = 1; i <= count; i++) {
        t *= i;
        index = Math.floor(points.length * t);
        if (index === 0) {
            result.unshift([formerEnd[0] * t + points[index][0] * (1 - t), formerEnd[1] * t + points[index][1] * (1 - t)]);
        }
        else {
            result.splice(index, 0, [
                formerEnd[0] * t + points[index][0] * (1 - t),
                formerEnd[1] * t + points[index][1] * (1 - t),
            ]);
        }
    }
    return result;
}
/*
 * 抽取pathSegment中的关键点
 * M,L,A,Q,H,V一个端点
 * Q, S抽取一个端点，一个控制点
 * C抽取一个端点，两个控制点
 */
function _getSegmentPoints(segment) {
    var points = [];
    switch (segment[0]) {
        case 'M':
            points.push([segment[1], segment[2]]);
            break;
        case 'L':
            points.push([segment[1], segment[2]]);
            break;
        case 'A':
            points.push([segment[6], segment[7]]);
            break;
        case 'Q':
            points.push([segment[3], segment[4]]);
            points.push([segment[1], segment[2]]);
            break;
        case 'T':
            points.push([segment[1], segment[2]]);
            break;
        case 'C':
            points.push([segment[5], segment[6]]);
            points.push([segment[1], segment[2]]);
            points.push([segment[3], segment[4]]);
            break;
        case 'S':
            points.push([segment[3], segment[4]]);
            points.push([segment[1], segment[2]]);
            break;
        case 'H':
            points.push([segment[1], segment[1]]);
            break;
        case 'V':
            points.push([segment[1], segment[1]]);
            break;
        default:
    }
    return points;
}
var formatPath = function (fromPath, toPath) {
    if (fromPath.length <= 1) {
        return fromPath;
    }
    var points;
    for (var i = 0; i < toPath.length; i++) {
        if (fromPath[i][0] !== toPath[i][0]) {
            // 获取fromPath的pathSegment的端点，根据toPath的指令对其改造
            points = _getSegmentPoints(fromPath[i]);
            switch (toPath[i][0]) {
                case 'M':
                    fromPath[i] = ['M'].concat(points[0]);
                    break;
                case 'L':
                    fromPath[i] = ['L'].concat(points[0]);
                    break;
                case 'A':
                    fromPath[i] = [].concat(toPath[i]);
                    fromPath[i][6] = points[0][0];
                    fromPath[i][7] = points[0][1];
                    break;
                case 'Q':
                    if (points.length < 2) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 1);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['Q'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                case 'T':
                    fromPath[i] = ['T'].concat(points[0]);
                    break;
                case 'C':
                    if (points.length < 3) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 2);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['C'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                case 'S':
                    if (points.length < 2) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 1);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['S'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                default:
                    fromPath[i] = toPath[i];
            }
        }
    }
    return fromPath;
};

//# sourceMappingURL=path.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/event/graph-event.js
var GraphEvent = /** @class */ (function () {
    function GraphEvent(type, event) {
        /**
         * 是否允许冒泡
         * @type {boolean}
         */
        this.bubbles = true;
        /**
         * 触发对象
         * @type {object}
         */
        this.target = null;
        /**
         * 监听对象
         * @type {object}
         */
        this.currentTarget = null;
        /**
         * 委托对象
         * @type {object}
         */
        this.delegateTarget = null;
        /**
         * 委托事件监听对象的代理对象，即 ev.delegateObject = ev.currentTarget.get('delegateObject')
         * @type {object}
         */
        this.delegateObject = null;
        /**
         * 是否阻止了原生事件
         * @type {boolean}
         */
        this.defaultPrevented = false;
        /**
         * 是否阻止传播（向上冒泡）
         * @type {boolean}
         */
        this.propagationStopped = false;
        /**
         * 触发事件的图形
         * @type {IShape}
         */
        this.shape = null;
        /**
         * 开始触发事件的图形
         * @type {IShape}
         */
        this.fromShape = null;
        /**
         * 事件结束时的触发图形
         * @type {IShape}
         */
        this.toShape = null;
        // 触发事件的路径
        this.propagationPath = [];
        this.type = type;
        this.name = type;
        this.originalEvent = event;
        this.timeStamp = event.timeStamp;
    }
    /**
     * 阻止浏览器默认的行为
     */
    GraphEvent.prototype.preventDefault = function () {
        this.defaultPrevented = true;
        if (this.originalEvent.preventDefault) {
            this.originalEvent.preventDefault();
        }
    };
    /**
     * 阻止冒泡
     */
    GraphEvent.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    GraphEvent.prototype.toString = function () {
        var type = this.type;
        return "[Event (type=" + type + ")]";
    };
    GraphEvent.prototype.save = function () { };
    GraphEvent.prototype.restore = function () { };
    return GraphEvent;
}());
/* harmony default export */ var graph_event = (GraphEvent);
//# sourceMappingURL=graph-event.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// CONCATENATED MODULE: ./node_modules/@antv/event-emitter/esm/index.js
var WILDCARD = '*';
/* event-emitter */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = {};
    }
    /**
     * 监听一个事件
     * @param evt
     * @param callback
     * @param once
     */
    EventEmitter.prototype.on = function (evt, callback, once) {
        if (!this._events[evt]) {
            this._events[evt] = [];
        }
        this._events[evt].push({
            callback: callback,
            once: !!once,
        });
        return this;
    };
    /**
     * 监听一个事件一次
     * @param evt
     * @param callback
     */
    EventEmitter.prototype.once = function (evt, callback) {
        this.on(evt, callback, true);
        return this;
    };
    /**
     * 触发一个事件
     * @param evt
     * @param args
     */
    EventEmitter.prototype.emit = function (evt) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events[evt] || [];
        var wildcardEvents = this._events[WILDCARD] || [];
        // 实际的处理 emit 方法
        var doEmit = function (es) {
            var length = es.length;
            for (var i = 0; i < length; i++) {
                if (!es[i]) {
                    continue;
                }
                var _a = es[i], callback = _a.callback, once = _a.once;
                if (once) {
                    es.splice(i, 1);
                    if (es.length === 0) {
                        delete _this._events[evt];
                    }
                    length--;
                    i--;
                }
                callback.apply(_this, args);
            }
        };
        doEmit(events);
        doEmit(wildcardEvents);
    };
    /**
     * 取消监听一个事件，或者一个channel
     * @param evt
     * @param callback
     */
    EventEmitter.prototype.off = function (evt, callback) {
        if (!evt) {
            // evt 为空全部清除
            this._events = {};
        }
        else {
            if (!callback) {
                // evt 存在，callback 为空，清除事件所有方法
                delete this._events[evt];
            }
            else {
                // evt 存在，callback 存在，清除匹配的
                var events = this._events[evt] || [];
                var length_1 = events.length;
                for (var i = 0; i < length_1; i++) {
                    if (events[i].callback === callback) {
                        events.splice(i, 1);
                        length_1--;
                        i--;
                    }
                }
                if (events.length === 0) {
                    delete this._events[evt];
                }
            }
        }
        return this;
    };
    /* 当前所有的事件 */
    EventEmitter.prototype.getEvents = function () {
        return this._events;
    };
    return EventEmitter;
}());
/* harmony default export */ var event_emitter_esm = (EventEmitter);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@antv/util/lib/is-nil.js
var is_nil = __webpack_require__("28f9");
var is_nil_default = /*#__PURE__*/__webpack_require__.n(is_nil);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/is-function.js
var is_function = __webpack_require__("2047");
var is_function_default = /*#__PURE__*/__webpack_require__.n(is_function);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/is-string.js
var is_string = __webpack_require__("61d8");
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/is-object.js
var is_object = __webpack_require__("9ab4f");
var is_object_default = /*#__PURE__*/__webpack_require__.n(is_object);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/is-array.js
var is_array = __webpack_require__("01f9");

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/mix.js
var mix = __webpack_require__("503e");
var mix_default = /*#__PURE__*/__webpack_require__.n(mix);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/each.js
var each = __webpack_require__("72fb");
var each_default = /*#__PURE__*/__webpack_require__.n(each);

// EXTERNAL MODULE: ./node_modules/@antv/util/lib/upper-first.js
var upper_first = __webpack_require__("3c5c");
var upper_first_default = /*#__PURE__*/__webpack_require__.n(upper_first);

// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/util/util.js
function removeFromArray(arr, obj) {
    var index = arr.indexOf(obj);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';








// 是否元素的父容器
function isParent(container, shape) {
    // 所有 shape 都是 canvas 的子元素
    if (container.isCanvas()) {
        return true;
    }
    var parent = shape.getParent();
    var isParent = false;
    while (parent) {
        if (parent === container) {
            isParent = true;
            break;
        }
        parent = parent.getParent();
    }
    return isParent;
}
function isAllowCapture(element) {
    // @ts-ignore
    return element.cfg.visible && element.cfg.capture;
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/base.js



var base_Base = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Base, _super);
    function Base(cfg) {
        var _this = _super.call(this) || this;
        /**
         * 是否被销毁
         * @type {boolean}
         */
        _this.destroyed = false;
        var defaultCfg = _this.getDefaultCfg();
        _this.cfg = mix_default()(defaultCfg, cfg);
        return _this;
    }
    /**
     * @protected
     * 默认的配置项
     * @returns {object} 默认的配置项
     */
    Base.prototype.getDefaultCfg = function () {
        return {};
    };
    // 实现接口的方法
    Base.prototype.get = function (name) {
        return this.cfg[name];
    };
    // 实现接口的方法
    Base.prototype.set = function (name, value) {
        this.cfg[name] = value;
    };
    // 实现接口的方法
    Base.prototype.destroy = function () {
        this.cfg = {
            destroyed: true,
        };
        this.off();
        this.destroyed = true;
    };
    return Base;
}(event_emitter_esm));
/* harmony default export */ var base = (base_Base);
//# sourceMappingURL=base.js.map
// EXTERNAL MODULE: ./node_modules/detect-browser/es/index.js
var es = __webpack_require__("7b46");

// EXTERNAL MODULE: ./node_modules/gl-matrix/esm/mat3.js
var mat3 = __webpack_require__("1f05");

// EXTERNAL MODULE: ./node_modules/gl-matrix/esm/vec2.js
var vec2 = __webpack_require__("6711");

// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/index.js











// CONCATENATED MODULE: ./node_modules/@antv/matrix-util/esm/ext.js
/**
 * @description 扩展方法，提供 gl-matrix 为提供的方法
 * */

function leftTranslate(out, a, v) {
    var transMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    mat3.fromTranslation(transMat, v);
    return mat3.multiply(out, transMat, a);
}
function leftRotate(out, a, rad) {
    var rotateMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    mat3.fromRotation(rotateMat, rad);
    return mat3.multiply(out, rotateMat, a);
}
function leftScale(out, a, v) {
    var scaleMat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    mat3.fromScaling(scaleMat, v);
    return mat3.multiply(out, scaleMat, a);
}
function leftMultiply(out, a, a1) {
    return mat3.multiply(out, a1, a);
}
/**
 * 根据 actions 来做 transform
 * @param m
 * @param actions
 */
function transform(m, actions) {
    var matrix = m ? [].concat(m) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    for (var i = 0, len = actions.length; i < len; i++) {
        var action = actions[i];
        switch (action[0]) {
            case 't':
                leftTranslate(matrix, matrix, [action[1], action[2]]);
                break;
            case 's':
                leftScale(matrix, matrix, [action[1], action[2]]);
                break;
            case 'r':
                leftRotate(matrix, matrix, action[1]);
                break;
            case 'm':
                leftMultiply(matrix, matrix, action[1]);
                break;
            default:
                break;
        }
    }
    return matrix;
}
/**
 * 向量 v1 到 向量 v2 夹角的方向
 * @param  {Array} v1 向量
 * @param  {Array} v2 向量
 * @return {Boolean} >= 0 顺时针 < 0 逆时针
 */
function direction(v1, v2) {
    return v1[0] * v2[1] - v2[0] * v1[1];
}
/**
 * 二维向量 v1 到 v2 的夹角
 * @param v1
 * @param v2
 * @param direct
 */
function angleTo(v1, v2, direct) {
    var ang = vec2.angle(v1, v2);
    var angleLargeThanPI = direction(v1, v2) >= 0;
    if (direct) {
        if (angleLargeThanPI) {
            return Math.PI * 2 - ang;
        }
        return ang;
    }
    if (angleLargeThanPI) {
        return ang;
    }
    return Math.PI * 2 - ang;
}
/**
 * 计算二维向量的垂直向量
 * @param out
 * @param v
 * @param flag
 */
function vertical(out, v, flag) {
    if (flag) {
        out[0] = v[1];
        out[1] = -1 * v[0];
    }
    else {
        out[0] = -1 * v[1];
        out[1] = v[0];
    }
    return out;
}
//# sourceMappingURL=ext.js.map
// CONCATENATED MODULE: ./node_modules/@antv/matrix-util/esm/index.js



//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/util/matrix.js
/**
 * @fileoverview 矩阵运算，本来是要引入 gl-matrix, 但是考虑到 g-mobile 对大小有限制，同时 g-webgl 使用的 matrix 不一致
 * 所以，这里仅实现 2D 几个运算，上层自己引入 gl-matrix
 * @author dxq613@gmail.com
 */
/**
 * 3阶矩阵相乘
 * @param {number[]} a 矩阵1
 * @param {number[]} b 矩阵2
 */
function multiplyMatrix(a, b) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b10 = b[3];
    var b11 = b[4];
    var b12 = b[5];
    var b20 = b[6];
    var b21 = b[7];
    var b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
/**
 * 3阶矩阵同2阶向量相乘
 * @param {number[]} m 矩阵
 * @param {number[]} v 二阶向量
 */
function multiplyVec2(m, v) {
    var out = [];
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
/**
 * 矩阵的逆
 * @param {number[]} a 矩阵
 */
function invert(a) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
//# sourceMappingURL=matrix.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/element.js






var MATRIX = 'matrix';
var CLONE_CFGS = ['zIndex', 'capture', 'visible', 'type'];
// 可以在 toAttrs 中设置，但不属于绘图属性的字段
var RESERVED_PORPS = ['repeat'];
var DELEGATION_SPLIT = ':';
var element_WILDCARD = '*';
// 需要考虑数组嵌套数组的场景
// 数组嵌套对象的场景不考虑
function _cloneArrayAttr(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (Object(esm["isArray"])(arr[i])) {
            result.push([].concat(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
function getFormatFromAttrs(toAttrs, shape) {
    var fromAttrs = {};
    var attrs = shape.attrs;
    for (var k in toAttrs) {
        fromAttrs[k] = attrs[k];
    }
    return fromAttrs;
}
function getFormatToAttrs(props, shape) {
    var toAttrs = {};
    var attrs = shape.attr();
    Object(esm["each"])(props, function (v, k) {
        if (RESERVED_PORPS.indexOf(k) === -1 && !Object(esm["isEqual"])(attrs[k], v)) {
            toAttrs[k] = v;
        }
    });
    return toAttrs;
}
function checkExistedAttrs(animations, animation) {
    if (animation.onFrame) {
        return animations;
    }
    var startTime = animation.startTime, delay = animation.delay, duration = animation.duration;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    Object(esm["each"])(animations, function (item) {
        // 后一个动画开始执行的时间 < 前一个动画的结束时间 && 后一个动画的执行时间 > 前一个动画的延迟
        if (startTime + delay < item.startTime + item.delay + item.duration && duration > item.delay) {
            Object(esm["each"])(animation.toAttrs, function (v, k) {
                if (hasOwnProperty.call(item.toAttrs, k)) {
                    delete item.toAttrs[k];
                    delete item.fromAttrs[k];
                }
            });
        }
    });
    return animations;
}
var element_Element = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Element, _super);
    function Element(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @protected
         * 图形属性
         * @type {ShapeAttrs}
         */
        _this.attrs = {};
        var attrs = _this.getDefaultAttrs();
        Object(esm["mix"])(attrs, cfg.attrs);
        _this.attrs = attrs;
        _this.initAttrs(attrs);
        _this.initAnimate(); // 初始化动画
        return _this;
    }
    // override
    Element.prototype.getDefaultCfg = function () {
        return {
            visible: true,
            capture: true,
            zIndex: 0,
        };
    };
    /**
     * @protected
     * 获取默认的属相
     */
    Element.prototype.getDefaultAttrs = function () {
        return {
            matrix: this.getDefaultMatrix(),
            opacity: 1,
        };
    };
    /**
     * @protected
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Element.prototype.onCanvasChange = function (changeType) { };
    /**
     * @protected
     * 初始化属性，有些属性需要加工
     * @param {object} attrs 属性值
     */
    Element.prototype.initAttrs = function (attrs) { };
    /**
     * @protected
     * 初始化动画
     */
    Element.prototype.initAnimate = function () {
        this.set('animable', true);
        this.set('animating', false);
    };
    Element.prototype.isGroup = function () {
        return false;
    };
    Element.prototype.getParent = function () {
        return this.get('parent');
    };
    Element.prototype.getCanvas = function () {
        return this.get('canvas');
    };
    Element.prototype.attr = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var name = args[0], value = args[1];
        if (!name)
            return this.attrs;
        if (Object(esm["isObject"])(name)) {
            for (var k in name) {
                this.setAttr(k, name[k]);
            }
            this.afterAttrsChange(name);
            return this;
        }
        if (args.length === 2) {
            this.setAttr(name, value);
            this.afterAttrsChange((_a = {},
                _a[name] = value,
                _a));
            return this;
        }
        return this.attrs[name];
    };
    // 是否被裁剪，被裁剪则不显示，不参与拾取
    Element.prototype.isClipped = function (refX, refY) {
        var clip = this.getClip();
        return clip && !clip.isHit(refX, refY);
    };
    /**
     * 内部设置属性值的接口
     * @param {string} name 属性名
     * @param {any} value 属性值
     */
    Element.prototype.setAttr = function (name, value) {
        var originValue = this.attrs[name];
        if (originValue !== value) {
            this.attrs[name] = value;
            this.onAttrChange(name, value, originValue);
        }
    };
    /**
     * @protected
     * 属性值发生改变
     * @param {string} name 属性名
     * @param {any} value 属性值
     * @param {any} originValue 属性值
     */
    Element.prototype.onAttrChange = function (name, value, originValue) {
        if (name === 'matrix') {
            this.set('totalMatrix', null);
        }
    };
    /**
     * 属性更改后需要做的事情
     * @protected
     */
    Element.prototype.afterAttrsChange = function (targetAttrs) {
        this.onCanvasChange('attr');
    };
    Element.prototype.show = function () {
        // 不是高频操作直接使用 set
        this.set('visible', true);
        this.onCanvasChange('show');
        return this;
    };
    Element.prototype.hide = function () {
        // 不是高频操作直接使用 set
        this.set('visible', false);
        this.onCanvasChange('hide');
        return this;
    };
    Element.prototype.setZIndex = function (zIndex) {
        this.set('zIndex', zIndex);
        var parent = this.getParent();
        if (parent) {
            // 改变 zIndex 不应该立即触发渲染 (调用 onCanvasChange('zIndex'))，需要经过 sort 再触发
            parent.sort();
        }
        return this;
    };
    Element.prototype.toFront = function () {
        var parent = this.getParent();
        if (!parent) {
            return;
        }
        var children = parent.getChildren();
        var el = this.get('el');
        var index = children.indexOf(this);
        children.splice(index, 1);
        children.push(this);
        this.onCanvasChange('zIndex');
    };
    Element.prototype.toBack = function () {
        var parent = this.getParent();
        if (!parent) {
            return;
        }
        var children = parent.getChildren();
        var el = this.get('el');
        var index = children.indexOf(this);
        children.splice(index, 1);
        children.unshift(this);
        this.onCanvasChange('zIndex');
    };
    Element.prototype.remove = function (destroy) {
        if (destroy === void 0) { destroy = true; }
        var parent = this.getParent();
        if (parent) {
            removeFromArray(parent.getChildren(), this);
            if (!parent.get('clearing')) {
                // 如果父元素正在清理，当前元素不触发 remove
                this.onCanvasChange('remove');
            }
        }
        else {
            this.onCanvasChange('remove');
        }
        if (destroy) {
            this.destroy();
        }
    };
    Element.prototype.resetMatrix = function () {
        this.attr(MATRIX, this.getDefaultMatrix());
        this.onCanvasChange('matrix');
    };
    Element.prototype.getMatrix = function () {
        return this.attr(MATRIX);
    };
    Element.prototype.setMatrix = function (m) {
        this.attr(MATRIX, m);
        this.onCanvasChange('matrix');
    };
    // 获取总的 matrix
    Element.prototype.getTotalMatrix = function () {
        var totalMatrix = this.get('totalMatrix');
        if (!totalMatrix) {
            var currentMatrix = this.attr('matrix');
            var parentMatrix = this.get('parentMatrix');
            if (parentMatrix && currentMatrix) {
                totalMatrix = multiplyMatrix(parentMatrix, currentMatrix);
            }
            else {
                totalMatrix = currentMatrix || parentMatrix;
            }
            this.set('totalMatrix', totalMatrix);
        }
        return totalMatrix;
    };
    // 上层分组设置 matrix
    Element.prototype.applyMatrix = function (matrix) {
        var currentMatrix = this.attr('matrix');
        var totalMatrix = null;
        if (matrix && currentMatrix) {
            totalMatrix = multiplyMatrix(matrix, currentMatrix);
        }
        else {
            totalMatrix = currentMatrix || matrix;
        }
        this.set('totalMatrix', totalMatrix);
        this.set('parentMatrix', matrix);
    };
    /**
     * @protected
     * 获取默认的矩阵
     * @returns {number[]|null} 默认的矩阵
     */
    Element.prototype.getDefaultMatrix = function () {
        return null;
    };
    // 将向量应用设置的矩阵
    Element.prototype.applyToMatrix = function (v) {
        var matrix = this.attr('matrix');
        if (matrix) {
            return multiplyVec2(matrix, v);
        }
        return v;
    };
    // 根据设置的矩阵，将向量转换相对于图形/分组的位置
    Element.prototype.invertFromMatrix = function (v) {
        var matrix = this.attr('matrix');
        if (matrix) {
            var invertMatrix = invert(matrix);
            if (invertMatrix) {
                return multiplyVec2(invertMatrix, v);
            }
        }
        return v;
    };
    // 设置 clip
    Element.prototype.setClip = function (clipCfg) {
        var canvas = this.getCanvas();
        // 应该只设置当前元素的 clip，不应该去修改 clip 本身，方便 clip 被复用
        // TODO: setClip 的传参既 shape 配置，也支持 shape 对象
        // const preShape = this.get('clipShape');
        // if (preShape) {
        //   // 将之前的 clipShape 销毁
        //   preShape.destroy();
        // }
        var clipShape = null;
        // 如果配置项为 null，则不移除 clipShape
        if (clipCfg) {
            var ShapeBase = this.getShapeBase();
            var shapeType = Object(esm["upperFirst"])(clipCfg.type);
            var Cons = ShapeBase[shapeType];
            if (Cons) {
                clipShape = new Cons({
                    type: clipCfg.type,
                    isClipShape: true,
                    attrs: clipCfg.attrs,
                    canvas: canvas,
                });
            }
        }
        this.set('clipShape', clipShape);
        this.onCanvasChange('clip');
        return clipShape;
    };
    Element.prototype.getClip = function () {
        // 高频率调用的地方直接使用 this.cfg.xxx
        var clipShape = this.cfg.clipShape;
        // 未设置时返回 Null，保证一致性
        if (!clipShape) {
            return null;
        }
        return clipShape;
    };
    Element.prototype.clone = function () {
        var _this = this;
        var originAttrs = this.attrs;
        var attrs = {};
        Object(esm["each"])(originAttrs, function (i, k) {
            if (Object(esm["isArray"])(originAttrs[k])) {
                attrs[k] = _cloneArrayAttr(originAttrs[k]);
            }
            else {
                attrs[k] = originAttrs[k];
            }
        });
        var cons = this.constructor;
        // @ts-ignore
        var clone = new cons({ attrs: attrs });
        Object(esm["each"])(CLONE_CFGS, function (cfgName) {
            clone.set(cfgName, _this.get(cfgName));
        });
        return clone;
    };
    Element.prototype.destroy = function () {
        var destroyed = this.destroyed;
        if (destroyed) {
            return;
        }
        this.attrs = {};
        _super.prototype.destroy.call(this);
        // this.onCanvasChange('destroy');
    };
    /**
     * 是否处于动画暂停状态
     * @return {boolean} 是否处于动画暂停状态
     */
    Element.prototype.isAnimatePaused = function () {
        return this.get('_pause').isPaused;
    };
    /**
     * 执行动画，支持多种函数签名
     * 1. animate(toAttrs: ElementAttrs, duration: number, easing?: string, callback?: () => void, delay?: number)
     * 2. animate(onFrame: OnFrame, duration: number, easing?: string, callback?: () => void, delay?: number)
     * 3. animate(toAttrs: ElementAttrs, cfg: AnimateCfg)
     * 4. animate(onFrame: OnFrame, cfg: AnimateCfg)
     * 各个参数的含义为:
     *   toAttrs  动画最终状态
     *   onFrame  自定义帧动画函数
     *   duration 动画执行时间
     *   easing   动画缓动效果
     *   callback 动画执行后的回调
     *   delay    动画延迟时间
     */
    Element.prototype.animate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.set('animating', true);
        var timeline = this.get('timeline');
        if (!timeline) {
            timeline = this.get('canvas').get('timeline');
            this.set('timeline', timeline);
        }
        var animations = this.get('animations') || [];
        // 初始化 tick
        if (!timeline.timer) {
            timeline.initTimer();
        }
        var toAttrs = args[0], duration = args[1], _a = args[2], easing = _a === void 0 ? 'easeLinear' : _a, _b = args[3], callback = _b === void 0 ? esm["noop"] : _b, _c = args[4], delay = _c === void 0 ? 0 : _c;
        var onFrame;
        var repeat;
        var pauseCallback;
        var resumeCallback;
        var animateCfg;
        // 第二个参数，既可以是动画最终状态 toAttrs，也可以是自定义帧动画函数 onFrame
        if (Object(esm["isFunction"])(toAttrs)) {
            onFrame = toAttrs;
            toAttrs = {};
        }
        else if (Object(esm["isObject"])(toAttrs) && toAttrs.onFrame) {
            // 兼容 3.0 中的写法，onFrame 和 repeat 可在 toAttrs 中设置
            onFrame = toAttrs.onFrame;
            repeat = toAttrs.repeat;
        }
        // 第二个参数，既可以是执行时间 duration，也可以是动画参数 animateCfg
        if (Object(esm["isObject"])(duration)) {
            animateCfg = duration;
            duration = animateCfg.duration;
            easing = animateCfg.easing || 'easeLinear';
            delay = animateCfg.delay || 0;
            // animateCfg 中的设置优先级更高
            repeat = animateCfg.repeat || repeat || false;
            callback = animateCfg.callback || esm["noop"];
            pauseCallback = animateCfg.pauseCallback || esm["noop"];
            resumeCallback = animateCfg.resumeCallback || esm["noop"];
        }
        else {
            // 第四个参数，既可以是回调函数 callback，也可以是延迟时间 delay
            if (Object(esm["isNumber"])(callback)) {
                delay = callback;
                callback = null;
            }
            // 第三个参数，既可以是缓动参数 easing，也可以是回调函数 callback
            if (Object(esm["isFunction"])(easing)) {
                callback = easing;
                easing = 'easeLinear';
            }
            else {
                easing = easing || 'easeLinear';
            }
        }
        var formatToAttrs = getFormatToAttrs(toAttrs, this);
        var animation = {
            fromAttrs: getFormatFromAttrs(formatToAttrs, this),
            toAttrs: formatToAttrs,
            duration: duration,
            easing: easing,
            repeat: repeat,
            callback: callback,
            pauseCallback: pauseCallback,
            resumeCallback: resumeCallback,
            delay: delay,
            startTime: timeline.getTime(),
            id: Object(esm["uniqueId"])(),
            onFrame: onFrame,
            pathFormatted: false,
        };
        // 如果动画元素队列中已经有这个图形了
        if (animations.length > 0) {
            // 先检查是否需要合并属性。若有相同的动画，将该属性从前一个动画中删除,直接用后一个动画中
            animations = checkExistedAttrs(animations, animation);
        }
        else {
            // 否则将图形添加到动画元素队列
            timeline.addAnimator(this);
        }
        animations.push(animation);
        this.set('animations', animations);
        this.set('_pause', { isPaused: false });
    };
    /**
     * 停止动画
     * @param {boolean} toEnd 是否到动画的最终状态
     */
    Element.prototype.stopAnimate = function (toEnd) {
        var _this = this;
        if (toEnd === void 0) { toEnd = true; }
        var animations = this.get('animations');
        Object(esm["each"])(animations, function (animation) {
            // 将动画执行到最后一帧
            if (toEnd) {
                if (animation.onFrame) {
                    _this.attr(animation.onFrame(1));
                }
                else {
                    _this.attr(animation.toAttrs);
                }
            }
            if (animation.callback) {
                // 动画停止时的回调
                animation.callback();
            }
        });
        this.set('animating', false);
        this.set('animations', []);
    };
    /**
     * 暂停动画
     */
    Element.prototype.pauseAnimate = function () {
        var timeline = this.get('timeline');
        var animations = this.get('animations');
        var pauseTime = timeline.getTime();
        Object(esm["each"])(animations, function (animation) {
            animation._paused = true;
            animation._pauseTime = pauseTime;
            if (animation.pauseCallback) {
                // 动画暂停时的回调
                animation.pauseCallback();
            }
        });
        // 记录下是在什么时候暂停的
        this.set('_pause', {
            isPaused: true,
            pauseTime: pauseTime,
        });
        return this;
    };
    /**
     * 恢复动画
     */
    Element.prototype.resumeAnimate = function () {
        var timeline = this.get('timeline');
        var current = timeline.getTime();
        var animations = this.get('animations');
        var pauseTime = this.get('_pause').pauseTime;
        // 之后更新属性需要计算动画已经执行的时长，如果暂停了，就把初始时间调后
        Object(esm["each"])(animations, function (animation) {
            animation.startTime = animation.startTime + (current - pauseTime);
            animation._paused = false;
            animation._pauseTime = null;
            if (animation.resumeCallback) {
                animation.resumeCallback();
            }
        });
        this.set('_pause', {
            isPaused: false,
        });
        this.set('animations', animations);
        return this;
    };
    /**
     * 触发委托事件
     * @param  {string}     type 事件类型
     * @param  {GraphEvent} eventObj 事件对象
     */
    Element.prototype.emitDelegation = function (type, eventObj) {
        var _this = this;
        var paths = eventObj.propagationPath;
        var events = this.getEvents();
        var relativeShape;
        if (type === 'mouseenter') {
            relativeShape = eventObj.fromShape;
        }
        else if (type === 'mouseleave') {
            relativeShape = eventObj.toShape;
        }
        var _loop_1 = function (i) {
            var element = paths[i];
            // 暂定跟 name 绑定
            var name_1 = element.get('name');
            if (name_1) {
                // 第一个 mouseenter 和 mouseleave 的停止即可，因为后面的都是前面的 Parent
                if (
                // 只有 element 是 Group 或者 Canvas 的时候，才需要判断 isParent
                (element.isGroup() || (element.isCanvas && element.isCanvas())) &&
                    relativeShape &&
                    isParent(element, relativeShape)) {
                    return "break";
                }
                if (Object(esm["isArray"])(name_1)) {
                    Object(esm["each"])(name_1, function (subName) {
                        _this.emitDelegateEvent(element, subName, eventObj);
                    });
                }
                else {
                    this_1.emitDelegateEvent(element, name_1, eventObj);
                }
            }
        };
        var this_1 = this;
        // 至少有一个对象，且第一个对象为 shape
        for (var i = 0; i < paths.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    Element.prototype.emitDelegateEvent = function (element, name, eventObj) {
        var events = this.getEvents();
        // 事件委托的形式 name:type
        var eventName = name + DELEGATION_SPLIT + eventObj.type;
        if (events[eventName] || events[element_WILDCARD]) {
            // 对于通配符 *，事件名称 = 委托事件名称
            eventObj.name = eventName;
            eventObj.currentTarget = element;
            eventObj.delegateTarget = this;
            // 将委托事件的监听对象 delegateObject 挂载到事件对象上
            eventObj.delegateObject = element.get('delegateObject');
            this.emit(eventName, eventObj);
        }
    };
    /**
     * 移动元素
     * @param {number} translateX 水平移动距离
     * @param {number} translateY 垂直移动距离
     * @return {IElement} 元素
     */
    Element.prototype.translate = function (translateX, translateY) {
        if (translateX === void 0) { translateX = 0; }
        if (translateY === void 0) { translateY = 0; }
        var matrix = this.getMatrix();
        var newMatrix = ext_namespaceObject.transform(matrix, [['t', translateX, translateY]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 移动元素到目标位置
     * @param {number} targetX 目标位置的水平坐标
     * @param {number} targetX 目标位置的垂直坐标
     * @return {IElement} 元素
     */
    Element.prototype.move = function (targetX, targetY) {
        var x = this.attr('x') || 0;
        var y = this.attr('y') || 0;
        this.translate(targetX - x, targetY - y);
        return this;
    };
    /**
     * 移动元素到目标位置，等价于 move 方法。由于 moveTo 的语义性更强，因此在文档中推荐使用 moveTo 方法
     * @param {number} targetX 目标位置的 x 轴坐标
     * @param {number} targetY 目标位置的 y 轴坐标
     * @return {IElement} 元素
     */
    Element.prototype.moveTo = function (targetX, targetY) {
        return this.move(targetX, targetY);
    };
    /**
     * 缩放元素
     * @param {number} ratioX 水平缩放比例
     * @param {number} ratioY 垂直缩放比例
     * @return {IElement} 元素
     */
    Element.prototype.scale = function (ratioX, ratioY) {
        var matrix = this.getMatrix();
        var newMatrix = ext_namespaceObject.transform(matrix, [['s', ratioX, ratioY || ratioX]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以画布左上角 (0, 0) 为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotate = function (radian) {
        var matrix = this.getMatrix();
        var newMatrix = ext_namespaceObject.transform(matrix, [['r', radian]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以起始点为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotateAtStart = function (rotate) {
        var _a = this.attr(), x = _a.x, y = _a.y;
        var matrix = this.getMatrix();
        var newMatrix = ext_namespaceObject.transform(matrix, [
            ['t', -x, -y],
            ['r', rotate],
            ['t', x, y],
        ]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以任意点 (x, y) 为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotateAtPoint = function (x, y, rotate) {
        var matrix = this.getMatrix();
        var newMatrix = ext_namespaceObject.transform(matrix, [
            ['t', -x, -y],
            ['r', rotate],
            ['t', x, y],
        ]);
        this.setMatrix(newMatrix);
        return this;
    };
    return Element;
}(base));
/* harmony default export */ var abstract_element = (element_Element);
//# sourceMappingURL=element.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/container.js



var SHAPE_MAP = {};
var INDEX = '_INDEX';
function afterAdd(element) {
    if (element.isGroup()) {
        if (element.isEntityGroup() || element.get('children').length) {
            element.onCanvasChange('add');
        }
    }
    else {
        element.onCanvasChange('add');
    }
}
/**
 * 设置 canvas
 * @param {IElement} element 元素
 * @param {ICanvas}  canvas  画布
 */
function setCanvas(element, canvas) {
    element.set('canvas', canvas);
    if (element.isGroup()) {
        var children = element.get('children');
        if (children.length) {
            children.forEach(function (child) {
                setCanvas(child, canvas);
            });
        }
    }
}
/**
 * 设置 timeline
 * @param {IElement} element  元素
 * @param {Timeline} timeline 时间轴
 */
function setTimeline(element, timeline) {
    element.set('timeline', timeline);
    if (element.isGroup()) {
        var children = element.get('children');
        if (children.length) {
            children.forEach(function (child) {
                setTimeline(child, timeline);
            });
        }
    }
}
function contains(container, element) {
    var children = container.getChildren();
    return children.indexOf(element) >= 0;
}
function removeChild(container, element, destroy) {
    if (destroy === void 0) { destroy = true; }
    // 不再调用 element.remove() 方法，会出现循环调用
    if (destroy) {
        element.destroy();
    }
    else {
        element.set('parent', null);
        element.set('canvas', null);
    }
    removeFromArray(container.getChildren(), element);
}
function getComparer(compare) {
    return function (left, right) {
        var result = compare(left, right);
        return result === 0 ? left[INDEX] - right[INDEX] : result;
    };
}
var container_Container = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.isCanvas = function () {
        return false;
    };
    // 根据子节点确定 BBox
    Container.prototype.getBBox = function () {
        // 所有的值可能在画布的可视区外
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        var xArr = [];
        var yArr = [];
        // 将可见元素、图形以及不为空的图形分组筛选出来，用于包围盒合并
        var children = this.getChildren().filter(function (child) {
            return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
        });
        if (children.length > 0) {
            each_default()(children, function (child) {
                var box = child.getBBox();
                xArr.push(box.minX, box.maxX);
                yArr.push(box.minY, box.maxY);
            });
            minX = Math.min.apply(null, xArr);
            maxX = Math.max.apply(null, xArr);
            minY = Math.min.apply(null, yArr);
            maxY = Math.max.apply(null, yArr);
        }
        else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
        }
        var box = {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return box;
    };
    // 获取画布的包围盒
    Container.prototype.getCanvasBBox = function () {
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        var xArr = [];
        var yArr = [];
        // 将可见元素、图形以及不为空的图形分组筛选出来，用于包围盒合并
        var children = this.getChildren().filter(function (child) {
            return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
        });
        if (children.length > 0) {
            each_default()(children, function (child) {
                var box = child.getCanvasBBox();
                xArr.push(box.minX, box.maxX);
                yArr.push(box.minY, box.maxY);
            });
            minX = Math.min.apply(null, xArr);
            maxX = Math.max.apply(null, xArr);
            minY = Math.min.apply(null, yArr);
            maxY = Math.max.apply(null, yArr);
        }
        else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
        }
        var box = {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return box;
    };
    Container.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        cfg['children'] = [];
        return cfg;
    };
    Container.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name === 'matrix') {
            var totalMatrix = this.getTotalMatrix();
            this._applyChildrenMarix(totalMatrix);
        }
    };
    // 不但应用到自己身上还要应用于子元素
    Container.prototype.applyMatrix = function (matrix) {
        var preTotalMatrix = this.getTotalMatrix();
        _super.prototype.applyMatrix.call(this, matrix);
        var totalMatrix = this.getTotalMatrix();
        // totalMatrix 没有发生变化时，这里仅考虑两者都为 null 时
        // 不继续向下传递矩阵
        if (totalMatrix === preTotalMatrix) {
            return;
        }
        this._applyChildrenMarix(totalMatrix);
    };
    // 在子元素上设置矩阵
    Container.prototype._applyChildrenMarix = function (totalMatrix) {
        var children = this.getChildren();
        each_default()(children, function (child) {
            child.applyMatrix(totalMatrix);
        });
    };
    // 兼容老版本的接口
    Container.prototype.addShape = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var type = args[0];
        var cfg = args[1];
        if (is_object_default()(type)) {
            cfg = type;
        }
        else {
            cfg['type'] = type;
        }
        var shapeType = SHAPE_MAP[cfg.type];
        if (!shapeType) {
            shapeType = upper_first_default()(cfg.type);
            SHAPE_MAP[cfg.type] = shapeType;
        }
        var ShapeBase = this.getShapeBase();
        var shape = new ShapeBase[shapeType](cfg);
        this.add(shape);
        return shape;
    };
    Container.prototype.addGroup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var groupClass = args[0], cfg = args[1];
        var group;
        if (is_function_default()(groupClass)) {
            if (cfg) {
                group = new groupClass(cfg);
            }
            else {
                group = new groupClass({
                    // canvas,
                    parent: this,
                });
            }
        }
        else {
            var tmpCfg = groupClass || {};
            var TmpGroupClass = this.getGroupBase();
            group = new TmpGroupClass(tmpCfg);
        }
        this.add(group);
        return group;
    };
    Container.prototype.getCanvas = function () {
        var canvas;
        if (this.isCanvas()) {
            canvas = this;
        }
        else {
            canvas = this.get('canvas');
        }
        return canvas;
    };
    Container.prototype.getShape = function (x, y, ev) {
        // 如果不支持拾取，则直接返回
        if (!isAllowCapture(this)) {
            return null;
        }
        var children = this.getChildren();
        var shape;
        // 如果容器是 group
        if (!this.isCanvas()) {
            var v = [x, y, 1];
            // 将 x, y 转换成对应于 group 的局部坐标
            v = this.invertFromMatrix(v);
            if (!this.isClipped(v[0], v[1])) {
                shape = this._findShape(children, v[0], v[1], ev);
            }
        }
        else {
            shape = this._findShape(children, x, y, ev);
        }
        return shape;
    };
    Container.prototype._findShape = function (children, x, y, ev) {
        var shape = null;
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            if (isAllowCapture(child)) {
                if (child.isGroup()) {
                    shape = child.getShape(x, y, ev);
                }
                else if (child.isHit(x, y)) {
                    shape = child;
                }
            }
            if (shape) {
                break;
            }
        }
        return shape;
    };
    Container.prototype.add = function (element) {
        var canvas = this.getCanvas();
        var children = this.getChildren();
        var timeline = this.get('timeline');
        var preParent = element.getParent();
        if (preParent) {
            removeChild(preParent, element, false);
        }
        element.set('parent', this);
        if (canvas) {
            setCanvas(element, canvas);
        }
        if (timeline) {
            setTimeline(element, timeline);
        }
        children.push(element);
        afterAdd(element);
        this._applyElementMatrix(element);
    };
    // 将当前容器的矩阵应用到子元素
    Container.prototype._applyElementMatrix = function (element) {
        var totalMatrix = this.getTotalMatrix();
        // 添加图形或者分组时，需要把当前图元的矩阵设置进去
        if (totalMatrix) {
            element.applyMatrix(totalMatrix);
        }
    };
    Container.prototype.getChildren = function () {
        return this.get('children');
    };
    Container.prototype.sort = function () {
        var children = this.getChildren();
        // 稳定排序
        each_default()(children, function (child, index) {
            child[INDEX] = index;
            return child;
        });
        children.sort(getComparer(function (obj1, obj2) {
            return obj1.get('zIndex') - obj2.get('zIndex');
        }));
        this.onCanvasChange('sort');
    };
    Container.prototype.clear = function () {
        this.set('clearing', true);
        if (this.destroyed) {
            return;
        }
        var children = this.getChildren();
        for (var i = children.length - 1; i >= 0; i--) {
            children[i].destroy(); // 销毁子元素
        }
        this.set('children', []);
        this.onCanvasChange('clear');
        this.set('clearing', false);
    };
    Container.prototype.destroy = function () {
        if (this.get('destroyed')) {
            return;
        }
        this.clear();
        _super.prototype.destroy.call(this);
    };
    /**
     * 获取第一个子元素
     * @return {IElement} 第一个元素
     */
    Container.prototype.getFirst = function () {
        return this.getChildByIndex(0);
    };
    /**
     * 获取最后一个子元素
     * @return {IElement} 元素
     */
    Container.prototype.getLast = function () {
        var children = this.getChildren();
        return this.getChildByIndex(children.length - 1);
    };
    /**
     * 根据索引获取子元素
     * @return {IElement} 第一个元素
     */
    Container.prototype.getChildByIndex = function (index) {
        var children = this.getChildren();
        return children[index];
    };
    /**
     * 子元素的数量
     * @return {number} 子元素数量
     */
    Container.prototype.getCount = function () {
        var children = this.getChildren();
        return children.length;
    };
    /**
     * 是否包含对应元素
     * @param {IElement} element 元素
     * @return {boolean}
     */
    Container.prototype.contain = function (element) {
        var children = this.getChildren();
        return children.indexOf(element) > -1;
    };
    /**
     * 移除对应子元素
     * @param {IElement} element 子元素
     * @param {boolean} destroy 是否销毁子元素，默认为 true
     */
    Container.prototype.removeChild = function (element, destroy) {
        if (destroy === void 0) { destroy = true; }
        if (this.contain(element)) {
            element.remove(destroy);
        }
    };
    /**
     * 查找所有匹配的元素
     * @param  {ElementFilterFn}   fn  匹配函数
     * @return {IElement[]} 元素数组
     */
    Container.prototype.findAll = function (fn) {
        var rst = [];
        var children = this.getChildren();
        each_default()(children, function (element) {
            if (fn(element)) {
                rst.push(element);
            }
            if (element.isGroup()) {
                rst = rst.concat(element.findAll(fn));
            }
        });
        return rst;
    };
    /**
     * 查找元素，找到第一个返回
     * @param  {ElementFilterFn} fn    匹配函数
     * @return {IElement|null} 元素，可以为空
     */
    Container.prototype.find = function (fn) {
        var rst = null;
        var children = this.getChildren();
        each_default()(children, function (element) {
            if (fn(element)) {
                rst = element;
            }
            else if (element.isGroup()) {
                rst = element.find(fn);
            }
            if (rst) {
                return false;
            }
        });
        return rst;
    };
    /**
     * 根据 ID 查找元素
     * @param {string} id 元素 id
     * @return {IElement|null} 元素
     */
    Container.prototype.findById = function (id) {
        return this.find(function (element) {
            return element.get('id') === id;
        });
    };
    /**
     * 该方法即将废弃，不建议使用
     * 根据 className 查找元素
     * TODO: 该方式定义暂时只给 G6 3.3 以后的版本使用，待 G6 中的 findByClassName 方法移除后，G 也需要同步移除
     * @param {string} className 元素 className
     * @return {IElement | null} 元素
     */
    Container.prototype.findByClassName = function (className) {
        return this.find(function (element) {
            return element.get('className') === className;
        });
    };
    /**
     * 根据 name 查找元素列表
     * @param {string}      name 元素名称
     * @return {IElement[]} 元素
     */
    Container.prototype.findAllByName = function (name) {
        return this.findAll(function (element) {
            return element.get('name') === name;
        });
    };
    return Container;
}(abstract_element));
/* harmony default export */ var abstract_container = (container_Container);
//# sourceMappingURL=container.js.map
// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/linear.js
function linear(t) {
  return +t;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/quad.js
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/poly.js
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/sin.js
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return (+t === 1) ? 1 : 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/math.js
// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/exp.js


function expIn(t) {
  return tpmt(1 - +t);
}

function expOut(t) {
  return 1 - tpmt(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/circle.js
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-ease/src/back.js
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/elastic.js


var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elastic_elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * tpmt(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elastic_elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elastic_elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * tpmt(-t) * Math.sin((s - t) / p)
        : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

// CONCATENATED MODULE: ./node_modules/d3-ease/src/index.js




















// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
/* harmony default export */ var define = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color_color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color_color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, color_rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ var src_basis = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ var basisClosed = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


function color_linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? color_linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? color_linear(a, d) : constant(isNaN(a) ? b : a);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ var src_rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ var numberArray = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/array.js



/* harmony default export */ var array = (function(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = src_value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/date.js
/* harmony default export */ var date = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ var number = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/object.js


/* harmony default export */ var object = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = src_value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ var string = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/value.js










/* harmony default export */ var src_value = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = color_color(b)) ? (b = c, src_rgb) : string)
      : b instanceof color_color ? src_rgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
});

// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/util/color.js
var isColorProp = function (prop) { return ['fill', 'stroke', 'fillStyle', 'strokeStyle'].includes(prop); };
var isGradientColor = function (val) { return /^[r,R,L,l]{1}[\s]*\(/.test(val); };
//# sourceMappingURL=color.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/animate/timeline.js



 // 目前整体动画只需要数值和数组的差值计算


var IDENTITY_MATRIX = [1, 0, 0, 0, 1, 0, 0, 0, 1];
/**
 * 使用 ratio 进行插值计算来更新属性
 * @param {IElement}  shape    元素
 * @param {Animation} animation 动画
 * @param {number}    ratio    比例
 * @return {boolean}  动画是否执行完成
 */
function _update(shape, animation, ratio) {
    var cProps = {}; // 此刻属性
    var fromAttrs = animation.fromAttrs, toAttrs = animation.toAttrs;
    if (shape.destroyed) {
        return;
    }
    var interf; //  差值函数
    for (var k in toAttrs) {
        if (!Object(esm["isEqual"])(fromAttrs[k], toAttrs[k])) {
            if (k === 'path') {
                var toPath = toAttrs[k];
                var fromPath = fromAttrs[k];
                if (toPath.length > fromPath.length) {
                    toPath = parsePathString(toAttrs[k]); // 终点状态
                    fromPath = parsePathString(fromAttrs[k]); // 起始状态
                    fromPath = fillPathByDiff(fromPath, toPath);
                    fromPath = formatPath(fromPath, toPath);
                    animation.fromAttrs.path = fromPath;
                    animation.toAttrs.path = toPath;
                }
                else if (!animation.pathFormatted) {
                    toPath = parsePathString(toAttrs[k]);
                    fromPath = parsePathString(fromAttrs[k]);
                    fromPath = formatPath(fromPath, toPath);
                    animation.fromAttrs.path = fromPath;
                    animation.toAttrs.path = toPath;
                    animation.pathFormatted = true;
                }
                cProps[k] = [];
                for (var i = 0; i < toPath.length; i++) {
                    var toPathPoint = toPath[i];
                    var fromPathPoint = fromPath[i];
                    var cPathPoint = [];
                    for (var j = 0; j < toPathPoint.length; j++) {
                        if (Object(esm["isNumber"])(toPathPoint[j]) && fromPathPoint && Object(esm["isNumber"])(fromPathPoint[j])) {
                            interf = src_value(fromPathPoint[j], toPathPoint[j]);
                            cPathPoint.push(interf(ratio));
                        }
                        else {
                            cPathPoint.push(toPathPoint[j]);
                        }
                    }
                    cProps[k].push(cPathPoint);
                }
            }
            else if (k === 'matrix') {
                /*
                 对矩阵进行插值时，需要保证矩阵不为空，为空则使用单位矩阵
                 TODO: 二维和三维场景下单位矩阵不同，之后 WebGL 版需要做进一步处理
                 */
                var matrixFn = array(fromAttrs[k] || IDENTITY_MATRIX, toAttrs[k] || IDENTITY_MATRIX);
                var currentMatrix = matrixFn(ratio);
                cProps[k] = currentMatrix;
            }
            else if (isColorProp(k) && isGradientColor(toAttrs[k])) {
                cProps[k] = toAttrs[k];
            }
            else if (!Object(esm["isFunction"])(toAttrs[k])) {
                // 非函数类型的值才能做插值
                interf = src_value(fromAttrs[k], toAttrs[k]);
                cProps[k] = interf(ratio);
            }
        }
    }
    shape.attr(cProps);
}
/**
 * 根据自定义帧动画函数 onFrame 来更新属性
 * @param {IElement}  shape    元素
 * @param {Animation} animation 动画
 * @param {number}    elapsed  动画执行时间(毫秒)
 * @return {boolean}  动画是否执行完成
 */
function update(shape, animation, elapsed) {
    var startTime = animation.startTime, delay = animation.delay;
    // 如果还没有开始执行或暂停，先不更新
    if (elapsed < startTime + delay || animation._paused) {
        return false;
    }
    var ratio;
    var duration = animation.duration;
    var easing = animation.easing;
    // 已执行时间
    elapsed = elapsed - startTime - animation.delay;
    if (animation.repeat) {
        // 如果动画重复执行，则 elapsed > duration，计算 ratio 时需取模
        ratio = (elapsed % duration) / duration;
        ratio = src_namespaceObject[easing](ratio);
    }
    else {
        ratio = elapsed / duration;
        if (ratio < 1) {
            // 动画未执行完
            ratio = src_namespaceObject[easing](ratio);
        }
        else {
            // 动画已执行完
            if (animation.onFrame) {
                shape.attr(animation.onFrame(1));
            }
            else {
                shape.attr(animation.toAttrs);
            }
            return true;
        }
    }
    if (animation.onFrame) {
        var attrs = animation.onFrame(ratio);
        shape.attr(attrs);
    }
    else {
        _update(shape, animation, ratio);
    }
    return false;
}
var timeline_Timeline = /** @class */ (function () {
    /**
     * 时间轴构造函数，依赖于画布
     * @param {}
     */
    function Timeline(canvas) {
        /**
         * 执行动画的元素列表
         * @type {IElement[]}
         */
        this.animators = [];
        /**
         * 当前时间
         * @type {number}
         */
        this.current = 0;
        /**
         * 定时器
         * @type {d3Timer.Timer}
         */
        this.timer = null;
        this.canvas = canvas;
    }
    /**
     * 初始化定时器
     */
    Timeline.prototype.initTimer = function () {
        var _this = this;
        var isFinished = false;
        var shape;
        var animations;
        var animation;
        this.timer = timer(function (elapsed) {
            _this.current = elapsed;
            if (_this.animators.length > 0) {
                for (var i = _this.animators.length - 1; i >= 0; i--) {
                    shape = _this.animators[i];
                    if (shape.destroyed) {
                        // 如果已经被销毁，直接移出队列
                        _this.removeAnimator(i);
                        continue;
                    }
                    if (!shape.isAnimatePaused()) {
                        animations = shape.get('animations');
                        for (var j = animations.length - 1; j >= 0; j--) {
                            animation = animations[j];
                            isFinished = update(shape, animation, elapsed);
                            if (isFinished) {
                                animations.splice(j, 1);
                                isFinished = false;
                                if (animation.callback) {
                                    animation.callback();
                                }
                            }
                        }
                    }
                    if (animations.length === 0) {
                        _this.removeAnimator(i);
                    }
                }
                var autoDraw = _this.canvas.get('autoDraw');
                // 非自动渲染模式下，手动调用 canvas.draw() 重新渲染
                if (!autoDraw) {
                    _this.canvas.draw();
                }
            }
        });
    };
    /**
     * 增加动画元素
     */
    Timeline.prototype.addAnimator = function (shape) {
        this.animators.push(shape);
    };
    /**
     * 移除动画元素
     */
    Timeline.prototype.removeAnimator = function (index) {
        this.animators.splice(index, 1);
    };
    /**
     * 是否有动画在执行
     */
    Timeline.prototype.isAnimating = function () {
        return !!this.animators.length;
    };
    /**
     * 停止定时器
     */
    Timeline.prototype.stop = function () {
        if (this.timer) {
            this.timer.stop();
        }
    };
    /**
     * 停止时间轴上所有元素的动画，并置空动画元素列表
     * @param {boolean} toEnd 是否到动画的最终状态，用来透传给动画元素的 stopAnimate 方法
     */
    Timeline.prototype.stopAllAnimations = function (toEnd) {
        if (toEnd === void 0) { toEnd = true; }
        this.animators.forEach(function (animator) {
            animator.stopAnimate(toEnd);
        });
        this.animators = [];
        this.canvas.draw();
    };
    /**
     * 获取当前时间
     */
    Timeline.prototype.getTime = function () {
        return this.current;
    };
    return Timeline;
}());
/* harmony default export */ var animate_timeline = (timeline_Timeline);
//# sourceMappingURL=timeline.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/event/event-contoller.js
/**
 * @fileoverview 事件处理器
 * @author dxq613@gmail.com
 */


var CLICK_OFFSET = 40;
var LEFT_BTN_CODE = 0;
var event_contoller_DELEGATION_SPLIT = ':';
var EVENTS = [
    'mousedown',
    'mouseup',
    'dblclick',
    'mouseout',
    'mouseover',
    'mousemove',
    'mouseleave',
    'mouseenter',
    'touchstart',
    'touchmove',
    'touchend',
    'dragenter',
    'dragover',
    'dragleave',
    'drop',
    'contextmenu',
    'mousewheel',
];
// 是否有委托事件监听
function hasDelegation(events, type) {
    for (var key in events) {
        if (events.hasOwnProperty(key) && key.indexOf(event_contoller_DELEGATION_SPLIT + type) >= 0) {
            return true;
        }
    }
    return false;
}
// 触发目标事件，目标只能是 shape 或 canvas
function emitTargetEvent(target, type, eventObj) {
    eventObj.name = type;
    eventObj.target = target;
    eventObj.currentTarget = target;
    eventObj.delegateTarget = target;
    target.emit(type, eventObj);
}
// 事件冒泡, enter 和 leave 需要对 fromShape 和 toShape 进行判同
function bubbleEvent(container, type, eventObj) {
    if (eventObj.bubbles) {
        var relativeShape = void 0;
        var isOverEvent = false;
        if (type === 'mouseenter') {
            relativeShape = eventObj.fromShape;
            isOverEvent = true;
        }
        else if (type === 'mouseleave') {
            isOverEvent = true;
            relativeShape = eventObj.toShape;
        }
        // canvas 上的 mouseenter， mouseleave 事件，仅当进入或者移出 canvas 时触发
        if (container.isCanvas() && isOverEvent) {
            return;
        }
        // 如果相关图形同当前图形在同一个容器内，不触发事件
        if (relativeShape && isParent(container, relativeShape)) {
            // 阻止继续向上冒泡
            eventObj.bubbles = false;
            return;
        }
        // 事件名称可能在委托过程中被修改，因此事件冒泡时需要重新设置事件名称
        eventObj.name = type;
        eventObj.currentTarget = container;
        eventObj.delegateTarget = container;
        container.emit(type, eventObj);
    }
}
var event_contoller_EventController = /** @class */ (function () {
    function EventController(cfg) {
        var _this = this;
        // 正在被拖拽的图形
        this.draggingShape = null;
        this.dragging = false;
        // 当前鼠标/touch所在位置的图形
        this.currentShape = null;
        this.mousedownShape = null;
        this.mousedownPoint = null;
        // 统一处理所有的回调
        this._eventCallback = function (ev) {
            var type = ev.type;
            _this._triggerEvent(type, ev);
        };
        // 在 document 处理拖拽到画布外的事件，处理从图形上移除画布未被捕捉的问题
        this._onDocumentMove = function (ev) {
            var canvas = _this.canvas;
            var el = canvas.get('el');
            if (el !== ev.target) {
                // 不在 canvas 上移动
                if (_this.dragging || _this.currentShape) {
                    var pointInfo = _this._getPointInfo(ev);
                    // 还在拖拽过程中
                    if (_this.dragging) {
                        _this._emitEvent('drag', ev, pointInfo, _this.draggingShape);
                    }
                    // 说明从某个图形直接移动到了画布外面，
                    // 修复了 mouseleave 的 bug 后不再出现这种情况
                    // if (this.currentShape) {
                    //   this._emitEvent('mouseleave', ev, pointInfo, this.currentShape, this.currentShape, null);
                    //   this.currentShape = null;
                    // }
                }
            }
        };
        // 在 document 上处理拖拽到外面，释放鼠标时触发 dragend
        this._onDocumentMouseUp = function (ev) {
            var canvas = _this.canvas;
            var el = canvas.get('el');
            if (el !== ev.target) {
                // 不在 canvas 上移动
                if (_this.dragging) {
                    var pointInfo = _this._getPointInfo(ev);
                    if (_this.draggingShape) {
                        // 如果存在拖拽的图形，则也触发 drop 事件
                        _this._emitEvent('drop', ev, pointInfo, null);
                    }
                    _this._emitEvent('dragend', ev, pointInfo, _this.draggingShape);
                    _this._afterDrag(_this.draggingShape, pointInfo, ev);
                }
            }
        };
        this.canvas = cfg.canvas;
    }
    EventController.prototype.init = function () {
        this._bindEvents();
    };
    // 注册事件
    EventController.prototype._bindEvents = function () {
        var _this = this;
        var el = this.canvas.get('el');
        each_default()(EVENTS, function (eventName) {
            el.addEventListener(eventName, _this._eventCallback);
        });
        if (document) {
            // 处理移动到外面没有触发 shape mouse leave 的事件
            // 处理拖拽到外部的问题
            document.addEventListener('mousemove', this._onDocumentMove);
            // 处理拖拽过程中在外部释放鼠标的问题
            document.addEventListener('mouseup', this._onDocumentMouseUp);
        }
    };
    // 清理事件
    EventController.prototype._clearEvents = function () {
        var _this = this;
        var el = this.canvas.get('el');
        each_default()(EVENTS, function (eventName) {
            el.removeEventListener(eventName, _this._eventCallback);
        });
        if (document) {
            document.removeEventListener('mousemove', this._onDocumentMove);
            document.removeEventListener('mouseup', this._onDocumentMouseUp);
        }
    };
    EventController.prototype._getEventObj = function (type, event, point, target, fromShape, toShape) {
        var eventObj = new graph_event(type, event);
        eventObj.fromShape = fromShape;
        eventObj.toShape = toShape;
        eventObj.x = point.x;
        eventObj.y = point.y;
        eventObj.clientX = point.clientX;
        eventObj.clientY = point.clientY;
        eventObj.propagationPath.push(target);
        // 事件的x,y应该是基于画布左上角的，与canvas的matrix无关
        return eventObj;
    };
    // 根据点获取图形，提取成独立方法，便于后续优化
    EventController.prototype._getShape = function (point, ev) {
        return this.canvas.getShape(point.x, point.y, ev);
    };
    // 获取事件的当前点的信息
    EventController.prototype._getPointInfo = function (ev) {
        var canvas = this.canvas;
        var clientPoint = canvas.getClientByEvent(ev);
        var point = canvas.getPointByEvent(ev);
        return {
            x: point.x,
            y: point.y,
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        };
    };
    // 触发事件
    EventController.prototype._triggerEvent = function (type, ev) {
        var pointInfo = this._getPointInfo(ev);
        // 每次都获取图形有一定成本，后期可以考虑进行缓存策略
        var shape = this._getShape(pointInfo, ev);
        var method = this["_on" + type];
        var leaveCanvas = false;
        if (method) {
            method.call(this, pointInfo, shape, ev);
        }
        else {
            var preShape = this.currentShape;
            // 如果进入、移出画布时存在图形，则要分别触发事件
            if (type === 'mouseenter' || type === 'dragenter' || type === 'mouseover') {
                this._emitEvent(type, ev, pointInfo, null, null, shape); // 先进入画布
                if (shape) {
                    this._emitEvent(type, ev, pointInfo, shape, null, shape); // 再触发图形的事件
                }
                if (type === 'mouseenter' && this.draggingShape) {
                    // 如果正在拖拽图形, 则触发 dragleave
                    this._emitEvent('dragenter', ev, pointInfo, null);
                }
            }
            else if (type === 'mouseleave' || type === 'dragleave' || type === 'mouseout') {
                leaveCanvas = true;
                if (preShape) {
                    this._emitEvent(type, ev, pointInfo, preShape, preShape, null); // 先触发图形的事件
                }
                this._emitEvent(type, ev, pointInfo, null, preShape, null); // 再触发离开画布事件
                if (type === 'mouseleave' && this.draggingShape) {
                    this._emitEvent('dragleave', ev, pointInfo, null);
                }
            }
            else {
                this._emitEvent(type, ev, pointInfo, shape, null, null); // 一般事件中不需要考虑 from, to
            }
        }
        if (!leaveCanvas) {
            this.currentShape = shape;
        }
        // 当鼠标从画布移动到 shape 或者从 preShape 移动到 shape 时，应用 shape 上的鼠标样式
        if (shape && !shape.get('destroyed')) {
            var canvas = this.canvas;
            var el = canvas.get('el');
            el.style.cursor = shape.attr('cursor') || canvas.get('cursor');
        }
    };
    // 记录下点击的位置、图形，便于拖拽事件、click 事件的判定
    EventController.prototype._onmousedown = function (pointInfo, shape, event) {
        // 只有鼠标左键的 mousedown 事件才会设置 mousedownShape 等属性，避免鼠标右键的 mousedown 事件引起其他事件发生
        if (event.button === LEFT_BTN_CODE) {
            this.mousedownShape = shape;
            this.mousedownPoint = pointInfo;
            this.mousedownTimeStamp = event.timeStamp;
        }
        this._emitEvent('mousedown', event, pointInfo, shape, null, null); // mousedown 不考虑fromShape, toShape
    };
    // mouseleave 和 mouseenter 都是成对存在的
    // mouseenter 和 mouseover 同时触发
    EventController.prototype._emitMouseoverEvents = function (event, pointInfo, fromShape, toShape) {
        var el = this.canvas.get('el');
        if (fromShape !== toShape) {
            if (fromShape) {
                this._emitEvent('mouseout', event, pointInfo, fromShape, fromShape, toShape);
                this._emitEvent('mouseleave', event, pointInfo, fromShape, fromShape, toShape);
                // 当鼠标从 fromShape 移动到画布上时，重置鼠标样式
                if (!toShape || toShape.get('destroyed')) {
                    el.style.cursor = this.canvas.get('cursor');
                }
            }
            if (toShape) {
                this._emitEvent('mouseover', event, pointInfo, toShape, fromShape, toShape);
                this._emitEvent('mouseenter', event, pointInfo, toShape, fromShape, toShape);
            }
        }
    };
    // dragover 不等同于 mouseover，而等同于 mousemove
    EventController.prototype._emitDragoverEvents = function (event, pointInfo, fromShape, toShape, isCanvasEmit) {
        if (toShape) {
            if (toShape !== fromShape) {
                if (fromShape) {
                    this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
                }
                this._emitEvent('dragenter', event, pointInfo, toShape, fromShape, toShape);
            }
            if (!isCanvasEmit) {
                this._emitEvent('dragover', event, pointInfo, toShape);
            }
        }
        else if (fromShape) {
            // TODO: 此处判断有问题，当 drag 图形时，也会触发一次 dragleave 事件，因为此时 toShape 为 null，这不是所期望的
            // 经过空白区域
            this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
        }
        if (isCanvasEmit) {
            this._emitEvent('dragover', event, pointInfo, toShape);
        }
    };
    // drag 完成后，需要做一些清理工作
    EventController.prototype._afterDrag = function (draggingShape, pointInfo, event) {
        if (draggingShape) {
            draggingShape.set('capture', true); // 恢复可以拾取
            this.draggingShape = null;
        }
        this.dragging = false;
        // drag 完成后，有可能 draggingShape 已经移动到了当前位置，所以不能直接取当前图形
        var shape = this._getShape(pointInfo, event);
        // 拖拽完成后，进行 enter，leave 的判定
        if (shape !== draggingShape) {
            this._emitMouseoverEvents(event, pointInfo, draggingShape, shape);
        }
        this.currentShape = shape; // 更新当前 shape，如果不处理当前图形的 mouseleave 事件可能会出问题
    };
    // 按键抬起时，会终止拖拽、触发点击
    EventController.prototype._onmouseup = function (pointInfo, shape, event) {
        // eevent.button === 0 表示鼠标左键事件，此处加上判断主要是为了避免右键鼠标会触发 mouseup 和 click 事件
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
        if (event.button === LEFT_BTN_CODE) {
            var draggingShape = this.draggingShape;
            if (this.dragging) {
                // 存在可以拖拽的图形，同时拖拽到其他图形上时触发 drag 事件
                if (draggingShape) {
                    this._emitEvent('drop', event, pointInfo, shape);
                }
                this._emitEvent('dragend', event, pointInfo, draggingShape);
                this._afterDrag(draggingShape, pointInfo, event);
            }
            else {
                this._emitEvent('mouseup', event, pointInfo, shape); // 先触发 mouseup 再触发 click
                if (shape === this.mousedownShape) {
                    this._emitEvent('click', event, pointInfo, shape);
                }
                this.mousedownShape = null;
                this.mousedownPoint = null;
            }
        }
    };
    // 当触发浏览器的 dragover 事件时，不会再触发 mousemove ，所以这时候的 dragenter, dragleave 事件需要重新处理
    EventController.prototype._ondragover = function (pointInfo, shape, event) {
        event.preventDefault(); // 如果不对 dragover 进行 preventDefault，则不会在 canvas 上触发 drop 事件
        var preShape = this.currentShape;
        this._emitDragoverEvents(event, pointInfo, preShape, shape, true);
    };
    // 大量的图形事件，都通过 mousemove 模拟
    EventController.prototype._onmousemove = function (pointInfo, shape, event) {
        var canvas = this.canvas;
        var preShape = this.currentShape;
        var draggingShape = this.draggingShape;
        // 正在拖拽时
        if (this.dragging) {
            // 正在拖拽中
            if (draggingShape) {
                // 如果拖拽了 shape 会触发 dragenter, dragleave, dragover 和 drag 事件
                this._emitDragoverEvents(event, pointInfo, preShape, shape, false);
            }
            // 如果存在 draggingShape 则会在 draggingShape 上触发 drag 事件，冒泡到 canvas 上
            // 否则在 canvas 上触发 drag 事件
            this._emitEvent('drag', event, pointInfo, draggingShape);
        }
        else {
            var mousedownPoint = this.mousedownPoint;
            if (mousedownPoint) {
                // 当鼠标点击下去，同时移动时，进行 drag 判定
                var mousedownShape = this.mousedownShape;
                var now = event.timeStamp;
                var timeWindow = now - this.mousedownTimeStamp;
                var dx = mousedownPoint.clientX - pointInfo.clientX;
                var dy = mousedownPoint.clientY - pointInfo.clientY;
                var dist = dx * dx + dy * dy;
                if (timeWindow > 120 || dist > CLICK_OFFSET) {
                    if (mousedownShape && mousedownShape.get('draggable')) {
                        // 设置了 draggable 的 shape 才能触发 drag 相关的事件
                        draggingShape = this.mousedownShape; // 拖动鼠标点下时的 shape
                        draggingShape.set('capture', false); // 禁止继续拾取，否则无法进行 dragover,dragenter,dragleave,drop的判定
                        this.draggingShape = draggingShape;
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, draggingShape);
                        // 清理按下鼠标时缓存的值
                        this.mousedownShape = null;
                        this.mousedownPoint = null;
                    }
                    else if (!mousedownShape && canvas.get('draggable')) {
                        // 设置了 draggable 的 canvas 才能触发 drag 相关的事件
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, null);
                        // 清理按下鼠标时缓存的值
                        this.mousedownShape = null;
                        this.mousedownPoint = null;
                    }
                    else {
                        this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                        this._emitEvent('mousemove', event, pointInfo, shape);
                    }
                }
                else {
                    this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                    this._emitEvent('mousemove', event, pointInfo, shape);
                }
            }
            else {
                // 没有按键按下时，则直接触发 mouse over 相关的各种事件
                this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                // 始终触发移动
                this._emitEvent('mousemove', event, pointInfo, shape);
            }
        }
    };
    // 触发事件
    EventController.prototype._emitEvent = function (type, event, pointInfo, shape, fromShape, toShape) {
        var eventObj = this._getEventObj(type, event, pointInfo, shape, fromShape, toShape);
        // 存在 shape 触发，则进行冒泡处理
        if (shape) {
            eventObj.shape = shape;
            // 触发 shape 上的事件
            emitTargetEvent(shape, type, eventObj);
            var parent_1 = shape.getParent();
            // 执行冒泡
            while (parent_1) {
                // 委托事件要先触发
                parent_1.emitDelegation(type, eventObj);
                // 事件冒泡停止，不能妨碍委托事件
                if (!eventObj.propagationStopped) {
                    bubbleEvent(parent_1, type, eventObj);
                }
                eventObj.propagationPath.push(parent_1);
                parent_1 = parent_1.getParent();
            }
        }
        else {
            // 如果没有 shape 直接在 canvas 上触发
            var canvas = this.canvas;
            // 直接触发 canvas 上的事件
            emitTargetEvent(canvas, type, eventObj);
        }
    };
    EventController.prototype.destroy = function () {
        // 清理事件
        this._clearEvents();
        // 清理缓存的对象
        this.canvas = null;
        this.currentShape = null;
        this.draggingShape = null;
        this.mousedownPoint = null;
        this.mousedownShape = null;
        this.mousedownTimeStamp = null;
    };
    return EventController;
}());
/* harmony default export */ var event_contoller = (event_contoller_EventController);
//# sourceMappingURL=event-contoller.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/canvas.js






var PX_SUFFIX = 'px';
var browser = Object(es["a" /* detect */])();
var isFirefox = browser && browser.name === 'firefox';
var canvas_Canvas = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Canvas, _super);
    function Canvas(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.initContainer();
        _this.initDom();
        _this.initEvents();
        _this.initTimeline();
        return _this;
    }
    Canvas.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        // set default cursor style for canvas
        cfg['cursor'] = 'default';
        // CSS transform 目前尚未经过长时间验证，为了避免影响上层业务，默认关闭，上层按需开启
        cfg['supportCSSTransform'] = false;
        return cfg;
    };
    /**
     * @protected
     * 初始化容器
     */
    Canvas.prototype.initContainer = function () {
        var container = this.get('container');
        if (is_string_default()(container)) {
            container = document.getElementById(container);
            this.set('container', container);
        }
    };
    /**
     * @protected
     * 初始化 DOM
     */
    Canvas.prototype.initDom = function () {
        var el = this.createDom();
        this.set('el', el);
        // 附加到容器
        var container = this.get('container');
        container.appendChild(el);
        // 设置初始宽度
        this.setDOMSize(this.get('width'), this.get('height'));
    };
    /**
     * @protected
     * 初始化绑定的事件
     */
    Canvas.prototype.initEvents = function () {
        var eventController = new event_contoller({
            canvas: this,
        });
        eventController.init();
        this.set('eventController', eventController);
    };
    /**
     * @protected
     * 初始化时间轴
     */
    Canvas.prototype.initTimeline = function () {
        var timeline = new animate_timeline(this);
        this.set('timeline', timeline);
    };
    /**
     * @protected
     * 修改画布对应的 DOM 的大小
     * @param {number} width  宽度
     * @param {number} height 高度
     */
    Canvas.prototype.setDOMSize = function (width, height) {
        var el = this.get('el');
        if (isBrowser) {
            el.style.width = width + PX_SUFFIX;
            el.style.height = height + PX_SUFFIX;
        }
    };
    // 实现接口
    Canvas.prototype.changeSize = function (width, height) {
        this.setDOMSize(width, height);
        this.set('width', width);
        this.set('height', height);
        this.onCanvasChange('changeSize');
    };
    /**
     * 获取当前的渲染引擎
     * @return {Renderer} 返回当前的渲染引擎
     */
    Canvas.prototype.getRenderer = function () {
        return this.get('renderer');
    };
    /**
     * 获取画布的 cursor 样式
     * @return {Cursor}
     */
    Canvas.prototype.getCursor = function () {
        return this.get('cursor');
    };
    /**
     * 设置画布的 cursor 样式
     * @param {Cursor} cursor  cursor 样式
     */
    Canvas.prototype.setCursor = function (cursor) {
        this.set('cursor', cursor);
        var el = this.get('el');
        if (isBrowser && el) {
            // 直接设置样式，不等待鼠标移动时再设置
            el.style.cursor = cursor;
        }
    };
    // 实现接口
    Canvas.prototype.getPointByEvent = function (ev) {
        var supportCSSTransform = this.get('supportCSSTransform');
        if (supportCSSTransform) {
            // For Firefox <= 38
            if (isFirefox && !is_nil_default()(ev.layerX) && ev.layerX !== ev.offsetX) {
                return {
                    x: ev.layerX,
                    y: ev.layerY,
                };
            }
            if (!is_nil_default()(ev.offsetX)) {
                // For IE6+, Firefox >= 39, Chrome, Safari, Opera
                return {
                    x: ev.offsetX,
                    y: ev.offsetY,
                };
            }
        }
        // should calculate by self for other cases, like Safari in ios
        // TODO: support CSS transform
        var _a = this.getClientByEvent(ev), clientX = _a.x, clientY = _a.y;
        return this.getPointByClient(clientX, clientY);
    };
    // 获取 touch 事件的 clientX 和 clientY 需要单独处理
    Canvas.prototype.getClientByEvent = function (ev) {
        var clientInfo = ev;
        if (ev.touches) {
            if (ev.type === 'touchend') {
                clientInfo = ev.changedTouches[0];
            }
            else {
                clientInfo = ev.touches[0];
            }
        }
        return {
            x: clientInfo.clientX,
            y: clientInfo.clientY,
        };
    };
    // 实现接口
    Canvas.prototype.getPointByClient = function (clientX, clientY) {
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: clientX - bbox.left,
            y: clientY - bbox.top,
        };
    };
    // 实现接口
    Canvas.prototype.getClientByPoint = function (x, y) {
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: x + bbox.left,
            y: y + bbox.top,
        };
    };
    // 实现接口
    Canvas.prototype.draw = function () { };
    /**
     * @protected
     * 销毁 DOM 容器
     */
    Canvas.prototype.removeDom = function () {
        var el = this.get('el');
        el.parentNode.removeChild(el);
    };
    /**
     * @protected
     * 清理所有的事件
     */
    Canvas.prototype.clearEvents = function () {
        var eventController = this.get('eventController');
        eventController.destroy();
    };
    Canvas.prototype.isCanvas = function () {
        return true;
    };
    Canvas.prototype.getParent = function () {
        return null;
    };
    Canvas.prototype.destroy = function () {
        var timeline = this.get('timeline');
        if (this.get('destroyed')) {
            return;
        }
        this.clear();
        // 同初始化时相反顺序调用
        if (timeline) {
            // 画布销毁时自动停止动画
            timeline.stop();
        }
        this.clearEvents();
        this.removeDom();
        _super.prototype.destroy.call(this);
    };
    return Canvas;
}(abstract_container));
/* harmony default export */ var abstract_canvas = (canvas_Canvas);
//# sourceMappingURL=canvas.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/group.js


var group_AbstractGroup = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(AbstractGroup, _super);
    function AbstractGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractGroup.prototype.isGroup = function () {
        return true;
    };
    AbstractGroup.prototype.isEntityGroup = function () {
        return false;
    };
    AbstractGroup.prototype.clone = function () {
        var clone = _super.prototype.clone.call(this);
        // 获取构造函数
        var children = this.getChildren();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            clone.add(child.clone());
        }
        return clone;
    };
    return AbstractGroup;
}(abstract_container));
/* harmony default export */ var abstract_group = (group_AbstractGroup);
//# sourceMappingURL=group.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/abstract/shape.js



var shape_AbstractShape = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(AbstractShape, _super);
    function AbstractShape(cfg) {
        return _super.call(this, cfg) || this;
    }
    // 是否在包围盒内
    AbstractShape.prototype._isInBBox = function (refX, refY) {
        var bbox = this.getBBox();
        return bbox.minX <= refX && bbox.maxX >= refX && bbox.minY <= refY && bbox.maxY >= refY;
    };
    /**
     * 属性更改后需要做的事情
     * @protected
     * @param {ShapeAttrs} targetAttrs 渲染的图像属性
     */
    AbstractShape.prototype.afterAttrsChange = function (targetAttrs) {
        _super.prototype.afterAttrsChange.call(this, targetAttrs);
        this.clearCacheBBox();
    };
    // 计算包围盒时，需要缓存，这是一个高频的操作
    AbstractShape.prototype.getBBox = function () {
        var bbox = this.get('bbox');
        if (!bbox) {
            bbox = this.calculateBBox();
            this.set('bbox', bbox);
        }
        return bbox;
    };
    // 计算相对于画布的包围盒
    AbstractShape.prototype.getCanvasBBox = function () {
        var canvasBox = this.get('canvasBox');
        if (!canvasBox) {
            canvasBox = this.calculateCanvasBBox();
            this.set('canvasBox', canvasBox);
        }
        return canvasBox;
    };
    AbstractShape.prototype.applyMatrix = function (matrix) {
        _super.prototype.applyMatrix.call(this, matrix);
        // 清理掉缓存的包围盒
        this.set('canvasBox', null);
    };
    /**
     * 计算相对于画布的包围盒，默认等同于 bbox
     * @return {BBox} 包围盒
     */
    AbstractShape.prototype.calculateCanvasBBox = function () {
        var bbox = this.getBBox();
        var totalMatrix = this.getTotalMatrix();
        var minX = bbox.minX, minY = bbox.minY, maxX = bbox.maxX, maxY = bbox.maxY;
        if (totalMatrix) {
            var topLeft = multiplyVec2(totalMatrix, [bbox.minX, bbox.minY]);
            var topRight = multiplyVec2(totalMatrix, [bbox.maxX, bbox.minY]);
            var bottomLeft = multiplyVec2(totalMatrix, [bbox.minX, bbox.maxY]);
            var bottomRight = multiplyVec2(totalMatrix, [bbox.maxX, bbox.maxY]);
            minX = Math.min(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
            maxX = Math.max(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
            minY = Math.min(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
            maxY = Math.max(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
        }
        var attrs = this.attrs;
        // 如果存在 shadow 则计算 shadow
        if (attrs.shadowColor) {
            var _a = attrs.shadowBlur, shadowBlur = _a === void 0 ? 0 : _a, _b = attrs.shadowOffsetX, shadowOffsetX = _b === void 0 ? 0 : _b, _c = attrs.shadowOffsetY, shadowOffsetY = _c === void 0 ? 0 : _c;
            var shadowLeft = minX - shadowBlur + shadowOffsetX;
            var shadowRight = maxX + shadowBlur + shadowOffsetX;
            var shadowTop = minY - shadowBlur + shadowOffsetY;
            var shadowBottom = maxY + shadowBlur + shadowOffsetY;
            minX = Math.min(minX, shadowLeft);
            maxX = Math.max(maxX, shadowRight);
            minY = Math.min(minY, shadowTop);
            maxY = Math.max(maxY, shadowBottom);
        }
        return {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
    };
    /**
     * @protected
     * 清理缓存的 bbox
     */
    AbstractShape.prototype.clearCacheBBox = function () {
        this.set('bbox', null);
        this.set('canvasBox', null);
    };
    // 实现接口
    AbstractShape.prototype.isClipShape = function () {
        return this.get('isClipShape');
    };
    /**
     * @protected
     * 不同的图形自己实现是否在图形内部的逻辑，要判断边和填充区域
     * @param  {number}  refX 相对于图形的坐标 x
     * @param  {number}  refY 相对于图形的坐标 Y
     * @return {boolean} 点是否在图形内部
     */
    AbstractShape.prototype.isInShape = function (refX, refY) {
        return false;
    };
    /**
     * 是否仅仅使用 BBox 检测就可以判定拾取到图形
     * 默认是 false，但是有些图形例如 image、marker 等都可直接使用 BBox 的检测而不需要使用图形拾取
     * @return {Boolean} 仅仅使用 BBox 进行拾取
     */
    AbstractShape.prototype.isOnlyHitBox = function () {
        return false;
    };
    // 不同的 Shape 各自实现
    AbstractShape.prototype.isHit = function (x, y) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        var vec = [x, y, 1];
        vec = this.invertFromMatrix(vec);
        var refX = vec[0], refY = vec[1];
        var inBBox = this._isInBBox(refX, refY);
        // 跳过图形的拾取，在某些图形中可以省略一倍的检测成本
        if (this.isOnlyHitBox()) {
            return inBBox;
        }
        // 被裁减掉的和不在包围盒内的不进行计算
        if (inBBox && !this.isClipped(refX, refY)) {
            // 对图形进行拾取判断
            if (this.isInShape(refX, refY)) {
                return true;
            }
            // 对起始箭头进行拾取判断
            if (startArrowShape && startArrowShape.isHit(refX, refY)) {
                return true;
            }
            // 对结束箭头进行拾取判断
            if (endArrowShape && endArrowShape.isHit(refX, refY)) {
                return true;
            }
        }
        return false;
    };
    return AbstractShape;
}(abstract_element));
/* harmony default export */ var abstract_shape = (shape_AbstractShape);
//# sourceMappingURL=shape.js.map
// CONCATENATED MODULE: ./node_modules/@antv/g-base/esm/index.js
/**
 * @fileoverview G 的基础接口定义和所有的抽象类
 * @author dxq613@gmail.com
 */

var pkg = __webpack_require__("2a37");
var version = pkg.version;






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6cac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var _a = shape.attr(), x = _a.x, y = _a.y, r = _a.r;
    return {
        x: x - r,
        y: y - r,
        width: r * 2,
        height: r * 2,
    };
}
exports.default = default_1;
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue2", function() { return isVue2; });
/* unused harmony export isVue3 */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "computed")) __webpack_require__.d(__webpack_exports__, "computed", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "defineComponent")) __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "getCurrentInstance")) __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onMounted")) __webpack_require__.d(__webpack_exports__, "onMounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onUnmounted")) __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "reactive")) __webpack_require__.d(__webpack_exports__, "reactive", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "ref")) __webpack_require__.d(__webpack_exports__, "ref", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "toRefs")) __webpack_require__.d(__webpack_exports__, "toRefs", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });



var isVue2 = false
var isVue3 = true





/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "71f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, rx = attrs.rx, ry = attrs.ry;
    return {
        x: x - rx,
        y: y - ry,
        width: rx * 2,
        height: ry * 2,
    };
}
exports.default = default_1;
//# sourceMappingURL=ellipse.js.map

/***/ }),

/***/ "72dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f15");
/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "computed")) __webpack_require__.d(__webpack_exports__, "computed", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["computed"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "defineComponent")) __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["defineComponent"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "getCurrentInstance")) __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "isVue2")) __webpack_require__.d(__webpack_exports__, "isVue2", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["isVue2"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "onMounted")) __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["onMounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "onUnmounted")) __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "reactive")) __webpack_require__.d(__webpack_exports__, "reactive", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["reactive"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "ref")) __webpack_require__.d(__webpack_exports__, "ref", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_v3_index_esm__WEBPACK_IMPORTED_MODULE_0__, "toRefs")) __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _v3_index_esm__WEBPACK_IMPORTED_MODULE_0__["toRefs"]; });




/***/ }),

/***/ "72fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = __webpack_require__("01f9");
var is_object_1 = __webpack_require__("9ab4f");
function each(elements, func) {
    if (!elements) {
        return;
    }
    var rst;
    if (is_array_1.default(elements)) {
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
                break;
            }
        }
    }
    else if (is_object_1.default(elements)) {
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(elements[k], k);
                if (rst === false) {
                    break;
                }
            }
        }
    }
}
exports.default = each;
//# sourceMappingURL=each.js.map

/***/ }),

/***/ "7326":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return inBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return intersectRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return mergeRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isSamePoint; });
/* harmony import */ var _antv_util_lib_is_nil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28f9");
/* harmony import */ var _antv_util_lib_is_nil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_is_nil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _antv_util_lib_is_nil__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _antv_util_lib_is_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("61d8");
/* harmony import */ var _antv_util_lib_is_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_is_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _antv_util_lib_is_string__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _antv_util_lib_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2047");
/* harmony import */ var _antv_util_lib_is_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_is_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _antv_util_lib_is_function__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _antv_util_lib_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("01f9");
/* harmony import */ var _antv_util_lib_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _antv_util_lib_is_array__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _antv_util_lib_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("72fb");
/* harmony import */ var _antv_util_lib_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _antv_util_lib_each__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _antv_util_lib_to_radian__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3753");
/* harmony import */ var _antv_util_lib_to_radian__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_to_radian__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _antv_util_lib_to_radian__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _antv_util_lib_mod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("df01");
/* harmony import */ var _antv_util_lib_mod__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_mod__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _antv_util_lib_mod__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _antv_util_lib_is_number_equal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("29f4");
/* harmony import */ var _antv_util_lib_is_number_equal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_is_number_equal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _antv_util_lib_request_animation_frame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("f105");
/* harmony import */ var _antv_util_lib_request_animation_frame__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_request_animation_frame__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _antv_util_lib_request_animation_frame__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _antv_util_lib_clear_animation_frame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("83be");
/* harmony import */ var _antv_util_lib_clear_animation_frame__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_antv_util_lib_clear_animation_frame__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _antv_util_lib_clear_animation_frame__WEBPACK_IMPORTED_MODULE_9___default.a; });
function getPixelRatio() {
    return window ? window.devicePixelRatio : 1;
}
/**
 * 两点之间的距离
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 结束点 x
 * @param {number} y2 结束点 y
 */
function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
/**
 * 是否在包围盒内
 * @param {number} minX   包围盒开始的点 x
 * @param {number} minY   包围盒开始的点 y
 * @param {number} width  宽度
 * @param {number} height 高度
 * @param {[type]} x      检测点的 x
 * @param {[type]} y      监测点的 y
 */
function inBox(minX, minY, width, height, x, y) {
    return x >= minX && x <= minX + width && y >= minY && y <= minY + height;
}
function intersectRect(box1, box2) {
    return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
// 合并两个区域
function mergeRegion(region1, region2) {
    if (!region1 || !region2) {
        return region1 || region2;
    }
    return {
        minX: Math.min(region1.minX, region2.minX),
        minY: Math.min(region1.minY, region2.minY),
        maxX: Math.max(region1.maxX, region2.maxX),
        maxY: Math.max(region1.maxY, region2.maxY),
    };
}
/**
 * 判断两个点是否重合，点坐标的格式为 [x, y]
 * @param {Array} point1 第一个点
 * @param {Array} point2 第二个点
 */
function isSamePoint(point1, point2) {
    return point1[0] === point2[0] && point1[1] === point2[1];
}










//# sourceMappingURL=util.js.map

/***/ }),

/***/ "739e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = __webpack_require__("28f9");
exports.default = (function (value) {
    if (is_nil_1.default(value))
        return '';
    return value.toString();
});
//# sourceMappingURL=to-string.js.map

/***/ }),

/***/ "73d9":
/***/ (function(module, exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("44d2");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "79cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
function default_1(shape) {
    var attrs = shape.attr();
    var points = attrs.points;
    var xArr = [];
    var yArr = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        xArr.push(point[0]);
        yArr.push(point[1]);
    }
    return util_1.getBBoxByArray(xArr, yArr);
}
exports.default = default_1;
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export BrowserInfo */
/* unused harmony export NodeInfo */
/* unused harmony export SearchBotDeviceInfo */
/* unused harmony export BotInfo */
/* unused harmony export ReactNativeInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detect; });
/* unused harmony export browserName */
/* unused harmony export parseUserAgent */
/* unused harmony export detectOS */
/* unused harmony export getNodeVersion */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FBAV\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7d16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
var line_1 = __webpack_require__("c3e2");
var bezier_1 = __webpack_require__("493b");
function cubicAt(p0, p1, p2, p3, t) {
    var onet = 1 - t; // t * t * t 的性能大概是 Math.pow(t, 3) 的三倍
    return onet * onet * onet * p0 + 3 * p1 * t * onet * onet + 3 * p2 * t * t * onet + p3 * t * t * t;
}
function derivativeAt(p0, p1, p2, p3, t) {
    var onet = 1 - t;
    return 3 * (onet * onet * (p1 - p0) + 2 * onet * t * (p2 - p1) + t * t * (p3 - p2));
}
function extrema(p0, p1, p2, p3) {
    var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
    var b = 6 * p0 - 12 * p1 + 6 * p2;
    var c = 3 * p1 - 3 * p0;
    var extremas = [];
    var t1;
    var t2;
    var discSqrt;
    if (util_1.isNumberEqual(a, 0)) {
        if (!util_1.isNumberEqual(b, 0)) {
            t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                extremas.push(t1);
            }
        }
    }
    else {
        var disc = b * b - 4 * a * c;
        if (util_1.isNumberEqual(disc, 0)) {
            extremas.push(-b / (2 * a));
        }
        else if (disc > 0) {
            discSqrt = Math.sqrt(disc);
            t1 = (-b + discSqrt) / (2 * a);
            t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                extremas.push(t1);
            }
            if (t2 >= 0 && t2 <= 1) {
                extremas.push(t2);
            }
        }
    }
    return extremas;
}
// 分割贝塞尔曲线
function divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    // 划分点
    var xt = cubicAt(x1, x2, x3, x4, t);
    var yt = cubicAt(y1, y2, y3, y4, t);
    // 计算两点之间的差值点
    var c1 = line_1.default.pointAt(x1, y1, x2, y2, t);
    var c2 = line_1.default.pointAt(x2, y2, x3, y3, t);
    var c3 = line_1.default.pointAt(x3, y3, x4, y4, t);
    var c12 = line_1.default.pointAt(c1.x, c1.y, c2.x, c2.y, t);
    var c23 = line_1.default.pointAt(c2.x, c2.y, c3.x, c3.y, t);
    return [
        [x1, y1, c1.x, c1.y, c12.x, c12.y, xt, yt],
        [xt, yt, c23.x, c23.y, c3.x, c3.y, x4, y4],
    ];
}
// 使用迭代法取贝塞尔曲线的长度，二阶和三阶分开写，更清晰和便于调试
function cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, iterationCount) {
    if (iterationCount === 0) {
        return bezier_1.snapLength([x1, x2, x3, x4], [y1, y2, y3, y4]);
    }
    var cubics = divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, 0.5);
    var left = cubics[0];
    var right = cubics[1];
    left.push(iterationCount - 1);
    right.push(iterationCount - 1);
    return cubicLength.apply(null, left) + cubicLength.apply(null, right);
}
exports.default = {
    extrema: extrema,
    box: function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var xArr = [x1, x4];
        var yArr = [y1, y4];
        var xExtrema = extrema(x1, x2, x3, x4);
        var yExtrema = extrema(y1, y2, y3, y4);
        for (var i = 0; i < xExtrema.length; i++) {
            xArr.push(cubicAt(x1, x2, x3, x4, xExtrema[i]));
        }
        for (var i = 0; i < yExtrema.length; i++) {
            yArr.push(cubicAt(y1, y2, y3, y4, yExtrema[i]));
        }
        return util_1.getBBoxByArray(xArr, yArr);
    },
    length: function (x1, y1, x2, y2, x3, y3, x4, y4) {
        // 迭代三次，划分成 8 段求长度
        return cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, 3);
    },
    nearestPoint: function (x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
        return bezier_1.nearestPoint([x1, x2, x3, x4], [y1, y2, y3, y4], x0, y0, cubicAt, length);
    },
    pointDistance: function (x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
        var point = this.nearestPoint(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length);
        return util_1.distance(point.x, point.y, x0, y0);
    },
    interpolationAt: cubicAt,
    pointAt: function (x1, y1, x2, y2, x3, y3, x4, y4, t) {
        return {
            x: cubicAt(x1, x2, x3, x4, t),
            y: cubicAt(y1, y2, y3, y4, t),
        };
    },
    divide: function (x1, y1, x2, y2, x3, y3, x4, y4, t) {
        return divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, t);
    },
    tangentAngle: function (x1, y1, x2, y2, x3, y3, x4, y4, t) {
        var dx = derivativeAt(x1, x2, x3, x4, t);
        var dy = derivativeAt(y1, y2, y3, y4, t);
        return util_1.piMod(Math.atan2(dy, dx));
    },
};
//# sourceMappingURL=cubic.js.map

/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7ec0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview 椭圆的一些计算，
 *  - 周长计算参考：https://www.mathsisfun.com/geometry/ellipse-perimeter.html
 *  - 距离计算参考：https://wet-robots.ghost.io/simple-method-for-distance-to-ellipse/
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
function copysign(v1, v2) {
    var absv = Math.abs(v1);
    return v2 > 0 ? absv : absv * -1;
}
exports.default = {
    /**
     * 包围盒计算
     * @param {number} x  椭圆中心 x
     * @param {number} y  椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @return {object} 包围盒
     */
    box: function (x, y, rx, ry) {
        return {
            x: x - rx,
            y: y - ry,
            width: rx * 2,
            height: ry * 2,
        };
    },
    /**
     * 计算周长，使用近似法
     * @param {number} x  椭圆中心 x
     * @param {number} y  椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @return {number} 椭圆周长
     */
    length: function (x, y, rx, ry) {
        return Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
    },
    /**
     * 距离椭圆最近的点
     * @param {number} x  椭圆中心 x
     * @param {number} y  椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @param {number} x0  指定的点 x
     * @param {number} y0  指定的点 y
     * @return {object} 椭圆上距离指定点最近的点
     */
    nearestPoint: function (x, y, rx, ry, x0, y0) {
        var a = rx;
        var b = ry;
        // 假如椭圆半径为0则返回圆心
        if (a === 0 || b === 0) {
            return {
                x: x,
                y: y,
            };
        }
        // 转换成 0， 0 为中心的椭圆计算
        var relativeX = x0 - x;
        var relativeY = y0 - y;
        var px = Math.abs(relativeX);
        var py = Math.abs(relativeY);
        var squareA = a * a;
        var squareB = b * b;
        // const angle0 = Math.atan2(relativeY, relativeX);
        var t = Math.PI / 4;
        var nearestX; // 椭圆上的任一点
        var nearestY;
        // 迭代 4 次
        for (var i = 0; i < 4; i++) {
            nearestX = a * Math.cos(t);
            nearestY = b * Math.sin(t);
            var ex = ((squareA - squareB) * Math.pow(Math.cos(t), 3)) / a;
            var ey = ((squareB - squareA) * Math.pow(Math.sin(t), 3)) / b;
            var rx1 = nearestX - ex;
            var ry1 = nearestY - ey;
            var qx = px - ex;
            var qy = py - ey;
            var r = Math.hypot(ry1, rx1);
            var q = Math.hypot(qy, qx);
            var delta_c = r * Math.asin((rx1 * qy - ry1 * qx) / (r * q));
            var delta_t = delta_c / Math.sqrt(squareA + squareB - nearestX * nearestX - nearestY * nearestY);
            t += delta_t;
            t = Math.min(Math.PI / 2, Math.max(0, t));
        }
        return {
            x: x + copysign(nearestX, relativeX),
            y: y + copysign(nearestY, relativeY),
        };
    },
    /**
     * 点到椭圆最近的距离
     * @param {number} x  椭圆中心 x
     * @param {number} y  椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @param {number} x0  指定的点 x
     * @param {number} y0  指定的点 y
     * @return {number} 点到椭圆的距离
     */
    pointDistance: function (x, y, rx, ry, x0, y0) {
        var nearestPoint = this.nearestPoint(x, y, rx, ry, x0, y0);
        return util_1.distance(nearestPoint.x, nearestPoint.y, x0, y0);
    },
    /**
     * 根据比例获取点
     * @param {number} x 椭圆中心 x
     * @param {number} y 椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @param {number} t 指定比例，x轴方向为 0
     * @return {object} 点
     */
    pointAt: function (x, y, rx, ry, t) {
        var angle = 2 * Math.PI * t; // 按照角度进行计算，而不按照周长计算
        return {
            x: x + rx * Math.cos(angle),
            y: y + ry * Math.sin(angle),
        };
    },
    /**
     * 根据比例计算切线角度
     * @param {number} x 椭圆中心 x
     * @param {number} y 椭圆中心 y
     * @param {number} rx 椭圆 x 方向半径
     * @param {number} ry 椭圆 y 方向半径
     * @param {number} t 指定比例 0 - 1 之间，x轴方向为 0。在 0-1 范围之外是循环还是返回 null，还需要调整
     * @return {number} 角度，在 0 - 2PI 之间
     */
    tangentAngle: function (x, y, rx, ry, t) {
        var angle = 2 * Math.PI * t; // 按照角度进行计算，而不按照周长计算
        // 直接使用 x,y 的导数计算， x' = -rx * sin(t); y' = ry * cos(t);
        var tangentAngle = Math.atan2(ry * Math.cos(angle), -rx * Math.sin(angle));
        // 也可以使用指定点的切线方程计算，成本有些高
        // const point = this.pointAt(0, 0, rx, ry, t); // 椭圆的切线同椭圆的中心不相关
        // let tangentAngle = -1 * Math.atan((ry * ry * point.x) / (rx * rx * point.y));
        // if (angle >= 0 && angle <= Math.PI) {
        //   tangentAngle += Math.PI;
        // }
        return util_1.piMod(tangentAngle);
    },
};
//# sourceMappingURL=ellipse.js.map

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "8259":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e584");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2d285370", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "83bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = __webpack_require__("5d64");
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, text = attrs.text, fontSize = attrs.fontSize, lineHeight = attrs.lineHeight;
    var font = attrs.font;
    if (!font) {
        // 如果未组装 font
        font = text_1.assembleFont(attrs);
    }
    var width = text_1.getTextWidth(text, font);
    var bbox;
    if (!width) {
        // 如果width不存在，四点共其实点
        bbox = {
            x: x,
            y: y,
            width: 0,
            height: 0,
        };
    }
    else {
        var textAlign = attrs.textAlign, textBaseline = attrs.textBaseline;
        var height = text_1.getTextHeight(text, fontSize, lineHeight); // attrs.height
        // 默认左右对齐：left, 默认上下对齐 bottom
        var point = {
            x: x,
            y: y - height,
        };
        if (textAlign) {
            if (textAlign === 'end' || textAlign === 'right') {
                point.x -= width;
            }
            else if (textAlign === 'center') {
                point.x -= width / 2;
            }
        }
        if (textBaseline) {
            if (textBaseline === 'top') {
                point.y += height;
            }
            else if (textBaseline === 'middle') {
                point.y += height / 2;
            }
        }
        bbox = {
            x: point.x,
            y: point.y,
            width: width,
            height: height,
        };
    }
    return bbox;
}
exports.default = default_1;
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "83be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function cancelAnimationFrame(handler) {
    var method = window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        clearTimeout;
    method(handler);
}
exports.default = cancelAnimationFrame;
;
//# sourceMappingURL=clear-animation-frame.js.map

/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "84f4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".widget[data-v-69ce083e]{position:relative;width:100%;font-size:12px;border-bottom:1px solid #f5f5f5;box-sizing:border-box}.widget__header[data-v-69ce083e]{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:32px;padding:0 12px}.widget svg[data-v-69ce083e]{flex:none;font-size:12px;cursor:pointer}.widget svg+svg[data-v-69ce083e]{margin-left:12px}.widget svg.widget__expand[data-v-69ce083e]{font-size:12px;margin:0 4px 0 0;cursor:pointer;transition:transform .15s;transform:rotate(0)}.widget svg.widget__expand--active[data-v-69ce083e]{transform:rotate(90deg)}.widget span[data-v-69ce083e]{flex:none;cursor:pointer}.widget__divider[data-v-69ce083e]{flex:none;height:16px;width:1px;background:#ccc;margin:0 12px}.widget__suffix[data-v-69ce083e]{flex:1;display:flex;flex-flow:row nowrap;justify-content:flex-end;align-items:center}.widget__suffix svg:first-of-type:hover+.widget__animations[data-v-69ce083e]{display:flex}.widget__animations[data-v-69ce083e]{position:absolute;display:none;flex:1;flex-flow:row wrap;justify-content:space-evenly;align-items:center;z-index:1;top:32px;background:#fff;overflow:visible;width:calc(100% - 24px);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.widget__animations[data-v-69ce083e]:hover{display:flex}.widget__animations[data-v-69ce083e]:after{position:absolute;display:block;content:\"\";height:84px;width:84px;top:-32px;right:-12px;cursor:pointer;z-index:-1}.widget__animations svg[data-v-69ce083e]{font-size:14px}.widget__animations span[data-v-69ce083e],.widget__animations svg[data-v-69ce083e]{color:rgba(0,0,0,.34)}.widget__animations span[data-v-69ce083e]{flex:none;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;width:22px;height:22px;margin:2px}.widget__animations--active[data-v-69ce083e]{color:#000!important}.widget__animations--active svg[data-v-69ce083e]{color:#000}.widget__row[data-v-69ce083e]{flex:none;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:32px;box-sizing:border-box;padding:0 12px;background:#f5f5f5;border-bottom:1px solid #fafafa}.widget__row svg[data-v-69ce083e]{cursor:pointer;color:rgba(0,0,0,.56)}.widget__row svg[data-v-69ce083e]:hover{color:#000}.widget__row p[data-v-69ce083e]{flex:none;font-size:12px;width:56px;text-align:right}.widget__row input[data-v-69ce083e]{flex:none;width:40px;border:none;outline:none;font-size:12px;border-top:1px solid transparent;border-bottom:1px solid rgba(0,0,0,.12);margin:0 12px;background:transparent}.widget__control[data-v-69ce083e]{display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center;width:100%;margin-left:6px}.widget__control svg[data-v-69ce083e]{font-size:10px}.widget__anchor[data-v-69ce083e]{width:5px;height:5px;border:1px solid rgba(0,0,0,.56);transform:rotate(45deg);cursor:pointer}.widget__anchor[data-v-69ce083e]:hover{border:1px solid #000}.widget__anchor--active[data-v-69ce083e],.widget__icon--active[data-v-69ce083e]{background:#000}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8937":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "contains", function() { return /* reexport */ esm_contains; });
__webpack_require__.d(__webpack_exports__, "includes", function() { return /* reexport */ esm_contains; });
__webpack_require__.d(__webpack_exports__, "difference", function() { return /* reexport */ esm_difference; });
__webpack_require__.d(__webpack_exports__, "find", function() { return /* reexport */ esm_find; });
__webpack_require__.d(__webpack_exports__, "findIndex", function() { return /* reexport */ find_index; });
__webpack_require__.d(__webpack_exports__, "firstValue", function() { return /* reexport */ first_value; });
__webpack_require__.d(__webpack_exports__, "flatten", function() { return /* reexport */ esm_flatten; });
__webpack_require__.d(__webpack_exports__, "flattenDeep", function() { return /* reexport */ flatten_deep; });
__webpack_require__.d(__webpack_exports__, "getRange", function() { return /* reexport */ get_range; });
__webpack_require__.d(__webpack_exports__, "pull", function() { return /* reexport */ esm_pull; });
__webpack_require__.d(__webpack_exports__, "pullAt", function() { return /* reexport */ pull_at; });
__webpack_require__.d(__webpack_exports__, "reduce", function() { return /* reexport */ esm_reduce; });
__webpack_require__.d(__webpack_exports__, "remove", function() { return /* reexport */ esm_remove; });
__webpack_require__.d(__webpack_exports__, "sortBy", function() { return /* reexport */ sort_by; });
__webpack_require__.d(__webpack_exports__, "union", function() { return /* reexport */ esm_union; });
__webpack_require__.d(__webpack_exports__, "uniq", function() { return /* reexport */ esm_uniq; });
__webpack_require__.d(__webpack_exports__, "valuesOfKey", function() { return /* reexport */ values_of_key; });
__webpack_require__.d(__webpack_exports__, "head", function() { return /* reexport */ head; });
__webpack_require__.d(__webpack_exports__, "last", function() { return /* reexport */ last_last; });
__webpack_require__.d(__webpack_exports__, "startsWith", function() { return /* reexport */ starts_with; });
__webpack_require__.d(__webpack_exports__, "endsWith", function() { return /* reexport */ ends_with; });
__webpack_require__.d(__webpack_exports__, "filter", function() { return /* reexport */ esm_filter; });
__webpack_require__.d(__webpack_exports__, "every", function() { return /* reexport */ esm_every; });
__webpack_require__.d(__webpack_exports__, "some", function() { return /* reexport */ esm_some; });
__webpack_require__.d(__webpack_exports__, "group", function() { return /* reexport */ group; });
__webpack_require__.d(__webpack_exports__, "groupBy", function() { return /* reexport */ group_by; });
__webpack_require__.d(__webpack_exports__, "groupToMap", function() { return /* reexport */ group_to_map; });
__webpack_require__.d(__webpack_exports__, "getWrapBehavior", function() { return /* reexport */ get_wrap_behavior; });
__webpack_require__.d(__webpack_exports__, "wrapBehavior", function() { return /* reexport */ wrap_behavior; });
__webpack_require__.d(__webpack_exports__, "number2color", function() { return /* reexport */ number2color; });
__webpack_require__.d(__webpack_exports__, "parseRadius", function() { return /* reexport */ parse_radius; });
__webpack_require__.d(__webpack_exports__, "clamp", function() { return /* reexport */ esm_clamp; });
__webpack_require__.d(__webpack_exports__, "fixedBase", function() { return /* reexport */ fixed_base; });
__webpack_require__.d(__webpack_exports__, "isDecimal", function() { return /* reexport */ is_decimal; });
__webpack_require__.d(__webpack_exports__, "isEven", function() { return /* reexport */ is_even; });
__webpack_require__.d(__webpack_exports__, "isInteger", function() { return /* reexport */ is_integer; });
__webpack_require__.d(__webpack_exports__, "isNegative", function() { return /* reexport */ is_negative; });
__webpack_require__.d(__webpack_exports__, "isNumberEqual", function() { return /* reexport */ isNumberEqual; });
__webpack_require__.d(__webpack_exports__, "isOdd", function() { return /* reexport */ is_odd; });
__webpack_require__.d(__webpack_exports__, "isPositive", function() { return /* reexport */ is_positive; });
__webpack_require__.d(__webpack_exports__, "maxBy", function() { return /* reexport */ max_by; });
__webpack_require__.d(__webpack_exports__, "minBy", function() { return /* reexport */ min_by; });
__webpack_require__.d(__webpack_exports__, "mod", function() { return /* reexport */ esm_mod; });
__webpack_require__.d(__webpack_exports__, "toDegree", function() { return /* reexport */ to_degree; });
__webpack_require__.d(__webpack_exports__, "toInteger", function() { return /* reexport */ to_integer; });
__webpack_require__.d(__webpack_exports__, "toRadian", function() { return /* reexport */ to_radian; });
__webpack_require__.d(__webpack_exports__, "forIn", function() { return /* reexport */ for_in; });
__webpack_require__.d(__webpack_exports__, "has", function() { return /* reexport */ has; });
__webpack_require__.d(__webpack_exports__, "hasKey", function() { return /* reexport */ has_key; });
__webpack_require__.d(__webpack_exports__, "hasValue", function() { return /* reexport */ has_value; });
__webpack_require__.d(__webpack_exports__, "keys", function() { return /* reexport */ esm_keys; });
__webpack_require__.d(__webpack_exports__, "isMatch", function() { return /* reexport */ is_match; });
__webpack_require__.d(__webpack_exports__, "values", function() { return /* reexport */ esm_values; });
__webpack_require__.d(__webpack_exports__, "lowerCase", function() { return /* reexport */ lower_case; });
__webpack_require__.d(__webpack_exports__, "lowerFirst", function() { return /* reexport */ lower_first; });
__webpack_require__.d(__webpack_exports__, "substitute", function() { return /* reexport */ esm_substitute; });
__webpack_require__.d(__webpack_exports__, "upperCase", function() { return /* reexport */ upper_case; });
__webpack_require__.d(__webpack_exports__, "upperFirst", function() { return /* reexport */ upper_first; });
__webpack_require__.d(__webpack_exports__, "getType", function() { return /* reexport */ get_type; });
__webpack_require__.d(__webpack_exports__, "isArguments", function() { return /* reexport */ is_arguments; });
__webpack_require__.d(__webpack_exports__, "isArray", function() { return /* reexport */ is_array; });
__webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return /* reexport */ is_array_like; });
__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return /* reexport */ is_boolean; });
__webpack_require__.d(__webpack_exports__, "isDate", function() { return /* reexport */ is_date; });
__webpack_require__.d(__webpack_exports__, "isError", function() { return /* reexport */ is_error; });
__webpack_require__.d(__webpack_exports__, "isFunction", function() { return /* reexport */ is_function; });
__webpack_require__.d(__webpack_exports__, "isFinite", function() { return /* reexport */ is_finite; });
__webpack_require__.d(__webpack_exports__, "isNil", function() { return /* reexport */ is_nil; });
__webpack_require__.d(__webpack_exports__, "isNull", function() { return /* reexport */ is_null; });
__webpack_require__.d(__webpack_exports__, "isNumber", function() { return /* reexport */ is_number; });
__webpack_require__.d(__webpack_exports__, "isObject", function() { return /* reexport */ is_object; });
__webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return /* reexport */ is_object_like; });
__webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return /* reexport */ is_plain_object; });
__webpack_require__.d(__webpack_exports__, "isPrototype", function() { return /* reexport */ is_prototype; });
__webpack_require__.d(__webpack_exports__, "isRegExp", function() { return /* reexport */ is_reg_exp; });
__webpack_require__.d(__webpack_exports__, "isString", function() { return /* reexport */ is_string; });
__webpack_require__.d(__webpack_exports__, "isType", function() { return /* reexport */ is_type; });
__webpack_require__.d(__webpack_exports__, "isUndefined", function() { return /* reexport */ is_undefined; });
__webpack_require__.d(__webpack_exports__, "isElement", function() { return /* reexport */ is_element; });
__webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return /* reexport */ requestAnimationFrame; });
__webpack_require__.d(__webpack_exports__, "clearAnimationFrame", function() { return /* reexport */ cancelAnimationFrame; });
__webpack_require__.d(__webpack_exports__, "augment", function() { return /* reexport */ esm_augment; });
__webpack_require__.d(__webpack_exports__, "clone", function() { return /* reexport */ esm_clone; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ esm_debounce; });
__webpack_require__.d(__webpack_exports__, "memoize", function() { return /* reexport */ memoize; });
__webpack_require__.d(__webpack_exports__, "deepMix", function() { return /* reexport */ deep_mix; });
__webpack_require__.d(__webpack_exports__, "each", function() { return /* reexport */ esm_each; });
__webpack_require__.d(__webpack_exports__, "extend", function() { return /* reexport */ esm_extend; });
__webpack_require__.d(__webpack_exports__, "indexOf", function() { return /* reexport */ index_of; });
__webpack_require__.d(__webpack_exports__, "isEmpty", function() { return /* reexport */ is_empty; });
__webpack_require__.d(__webpack_exports__, "isEqual", function() { return /* reexport */ is_equal; });
__webpack_require__.d(__webpack_exports__, "isEqualWith", function() { return /* reexport */ is_equal_with; });
__webpack_require__.d(__webpack_exports__, "map", function() { return /* reexport */ esm_map; });
__webpack_require__.d(__webpack_exports__, "mapValues", function() { return /* reexport */ map_values; });
__webpack_require__.d(__webpack_exports__, "mix", function() { return /* reexport */ mix; });
__webpack_require__.d(__webpack_exports__, "assign", function() { return /* reexport */ mix; });
__webpack_require__.d(__webpack_exports__, "get", function() { return /* reexport */ get; });
__webpack_require__.d(__webpack_exports__, "set", function() { return /* reexport */ set; });
__webpack_require__.d(__webpack_exports__, "pick", function() { return /* reexport */ pick; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle; });
__webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ to_array; });
__webpack_require__.d(__webpack_exports__, "toString", function() { return /* reexport */ to_string; });
__webpack_require__.d(__webpack_exports__, "uniqueId", function() { return /* reexport */ unique_id; });
__webpack_require__.d(__webpack_exports__, "noop", function() { return /* reexport */ noop; });
__webpack_require__.d(__webpack_exports__, "identity", function() { return /* reexport */ esm_identity; });
__webpack_require__.d(__webpack_exports__, "size", function() { return /* reexport */ size; });
__webpack_require__.d(__webpack_exports__, "Cache", function() { return /* reexport */ cache; });

// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-array-like.js
var isArrayLike = function (value) {
    /**
     * isArrayLike([1, 2, 3]) => true
     * isArrayLike(document.body.children) => true
     * isArrayLike('abc') => true
     * isArrayLike(Function) => false
     */
    return value !== null && typeof value !== 'function' && isFinite(value.length);
};
/* harmony default export */ var is_array_like = (isArrayLike);
//# sourceMappingURL=is-array-like.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/contains.js

var contains = function (arr, value) {
    if (!is_array_like(arr)) {
        return false;
    }
    return arr.indexOf(value) > -1;
};
/* harmony default export */ var esm_contains = (contains);
//# sourceMappingURL=contains.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/filter.js

var filter = function (arr, func) {
    if (!is_array_like(arr)) {
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        if (func(value, index)) {
            result.push(value);
        }
    }
    return result;
};
/* harmony default export */ var esm_filter = (filter);
//# sourceMappingURL=filter.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/difference.js


/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
var difference = function (arr, values) {
    if (values === void 0) { values = []; }
    return esm_filter(arr, function (value) { return !esm_contains(values, value); });
};
/* harmony default export */ var esm_difference = (difference);
//# sourceMappingURL=difference.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-type.js
var is_type_toString = {}.toString;
var isType = function (value, type) { return is_type_toString.call(value) === '[object ' + type + ']'; };
/* harmony default export */ var is_type = (isType);
//# sourceMappingURL=is-type.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-function.js
/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */

/* harmony default export */ var is_function = (function (value) {
    return is_type(value, 'Function');
});
//# sourceMappingURL=is-function.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-nil.js
// isFinite,
var isNil = function (value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
    return value === null || value === undefined;
};
/* harmony default export */ var is_nil = (isNil);
//# sourceMappingURL=is-nil.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-array.js

/* harmony default export */ var is_array = (function (value) {
    return Array.isArray ?
        Array.isArray(value) :
        is_type(value, 'Array');
});
//# sourceMappingURL=is-array.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-object.js
/* harmony default export */ var is_object = (function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    var type = typeof value;
    return value !== null && type === 'object' || type === 'function';
});
//# sourceMappingURL=is-object.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/each.js


function each(elements, func) {
    if (!elements) {
        return;
    }
    var rst;
    if (is_array(elements)) {
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
                break;
            }
        }
    }
    else if (is_object(elements)) {
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(elements[k], k);
                if (rst === false) {
                    break;
                }
            }
        }
    }
}
/* harmony default export */ var esm_each = (each);
//# sourceMappingURL=each.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/keys.js


var keys_keys = Object.keys ? function (obj) { return Object.keys(obj); } : function (obj) {
    var result = [];
    esm_each(obj, function (value, key) {
        if (!(is_function(obj) && key === 'prototype')) {
            result.push(key);
        }
    });
    return result;
};
/* harmony default export */ var esm_keys = (keys_keys);
//# sourceMappingURL=keys.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-match.js


function isMatch(obj, attrs) {
    var _keys = esm_keys(attrs);
    var length = _keys.length;
    if (is_nil(obj))
        return !length;
    for (var i = 0; i < length; i += 1) {
        var key = _keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }
    return true;
}
/* harmony default export */ var is_match = (isMatch);
//# sourceMappingURL=is-match.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-object-like.js
var isObjectLike = function (value) {
    /**
     * isObjectLike({}) => true
     * isObjectLike([1, 2, 3]) => true
     * isObjectLike(Function) => false
     * isObjectLike(null) => false
     */
    return typeof value === 'object' && value !== null;
};
/* harmony default export */ var is_object_like = (isObjectLike);
//# sourceMappingURL=is-object-like.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-plain-object.js


var isPlainObject = function (value) {
    /**
     * isObjectLike(new Foo) => false
     * isObjectLike([1, 2, 3]) => false
     * isObjectLike({ x: 0, y: 0 }) => true
     * isObjectLike(Object.create(null)) => true
     */
    if (!is_object_like(value) || !is_type(value, 'Object')) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};
/* harmony default export */ var is_plain_object = (isPlainObject);
//# sourceMappingURL=is-plain-object.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/find.js




function find(arr, predicate) {
    if (!is_array(arr))
        return null;
    var _predicate;
    if (is_function(predicate)) {
        _predicate = predicate;
    }
    if (is_plain_object(predicate)) {
        _predicate = function (a) { return is_match(a, predicate); };
    }
    if (_predicate) {
        for (var i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;
}
/* harmony default export */ var esm_find = (find);
//# sourceMappingURL=find.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/find-index.js
function findIndex(arr, predicate, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = fromIndex; i < arr.length; i++) {
        if (predicate(arr[i], i)) {
            // 找到终止循环
            return i;
        }
    }
    return -1;
}
/* harmony default export */ var find_index = (findIndex);
//# sourceMappingURL=find-index.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/first-value.js


var firstValue = function (data, name) {
    var rst = null;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil(value)) {
            if (is_array(value)) {
                rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
            }
            else {
                rst = value;
            }
            break;
        }
    }
    return rst;
};
/* harmony default export */ var first_value = (firstValue);
//# sourceMappingURL=first-value.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/flatten.js

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
 */
var flatten = function (arr) {
    if (!is_array(arr)) {
        return [];
    }
    var rst = [];
    for (var i = 0; i < arr.length; i++) {
        rst = rst.concat(arr[i]);
    }
    return rst;
};
/* harmony default export */ var esm_flatten = (flatten);
//# sourceMappingURL=flatten.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/flatten-deep.js

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */
var flattenDeep = function (arr, result) {
    if (result === void 0) { result = []; }
    if (!is_array(arr)) {
        result.push(arr);
    }
    else {
        for (var i = 0; i < arr.length; i += 1) {
            flattenDeep(arr[i], result);
        }
    }
    return result;
};
/* harmony default export */ var flatten_deep = (flattenDeep);
//# sourceMappingURL=flatten-deep.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/get-range.js

var getRange = function (values) {
    // 存在 NaN 时，min,max 判定会出问题
    var filterValues = values.filter(function (v) { return !isNaN(v); });
    if (!filterValues.length) { // 如果没有数值则直接返回0
        return {
            min: 0,
            max: 0,
        };
    }
    if (is_array(values[0])) {
        var tmp = [];
        for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
        }
        filterValues = tmp;
    }
    var max = Math.max.apply(null, filterValues);
    var min = Math.min.apply(null, filterValues);
    return {
        min: min,
        max: max,
    };
};
/* harmony default export */ var get_range = (getRange);
//# sourceMappingURL=get-range.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/pull.js
var arrPrototype = Array.prototype;
var splice = arrPrototype.splice;
var indexOf = arrPrototype.indexOf;
var pull = function (arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var fromIndex = -1;
        while ((fromIndex = indexOf.call(arr, value)) > -1) {
            splice.call(arr, fromIndex, 1);
        }
    }
    return arr;
};
/* harmony default export */ var esm_pull = (pull);
//# sourceMappingURL=pull.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/pull-at.js

var pull_at_splice = Array.prototype.splice;
var pull_at_pullAt = function pullAt(arr, indexes) {
    if (!is_array_like(arr)) {
        return [];
    }
    var length = arr ? indexes.length : 0;
    var last = length - 1;
    while (length--) {
        var previous = void 0;
        var index = indexes[length];
        if (length === last || index !== previous) {
            previous = index;
            pull_at_splice.call(arr, index, 1);
        }
    }
    return arr;
};
/* harmony default export */ var pull_at = (pull_at_pullAt);
//# sourceMappingURL=pull-at.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/reduce.js



var reduce = function (arr, fn, init) {
    if (!is_array(arr) && !is_plain_object(arr)) {
        return arr;
    }
    var result = init;
    esm_each(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
/* harmony default export */ var esm_reduce = (reduce);
//# sourceMappingURL=reduce.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/remove.js


var remove = function (arr, predicate) {
    /**
     * const arr = [1, 2, 3, 4]
     * const evens = remove(arr, n => n % 2 == 0)
     * console.log(arr) // => [1, 3]
     * console.log(evens) // => [2, 4]
     */
    var result = [];
    if (!is_array_like(arr)) {
        return result;
    }
    var i = -1;
    var indexes = [];
    var length = arr.length;
    while (++i < length) {
        var value = arr[i];
        if (predicate(value, i, arr)) {
            result.push(value);
            indexes.push(i);
        }
    }
    pull_at(arr, indexes);
    return result;
};
/* harmony default export */ var esm_remove = (remove);
//# sourceMappingURL=remove.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-string.js

/* harmony default export */ var is_string = (function (str) {
    return is_type(str, 'String');
});
//# sourceMappingURL=is-string.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/sort-by.js



function sortBy(arr, key) {
    var comparer;
    if (is_function(key)) {
        comparer = function (a, b) { return key(a) - key(b); };
    }
    else {
        var keys_1 = [];
        if (is_string(key)) {
            keys_1.push(key);
        }
        else if (is_array(key)) {
            keys_1 = key;
        }
        comparer = function (a, b) {
            for (var i = 0; i < keys_1.length; i += 1) {
                var prop = keys_1[i];
                if (a[prop] > b[prop]) {
                    return 1;
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    arr.sort(comparer);
    return arr;
}
/* harmony default export */ var sort_by = (sortBy);
//# sourceMappingURL=sort-by.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/uniq.js


var uniq = function (arr) {
    var resultArr = [];
    esm_each(arr, function (item) {
        if (!esm_contains(resultArr, item)) {
            resultArr.push(item);
        }
    });
    return resultArr;
};
/* harmony default export */ var esm_uniq = (uniq);
//# sourceMappingURL=uniq.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/union.js

var union = function () {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return esm_uniq([].concat.apply([], sources));
};
/* harmony default export */ var esm_union = (union);
//# sourceMappingURL=union.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/values-of-key.js


/* harmony default export */ var values_of_key = (function (data, name) {
    var rst = [];
    var tmpMap = {};
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil(value)) {
            // flatten
            if (!is_array(value)) {
                value = [value];
            }
            for (var j = 0; j < value.length; j++) {
                var val = value[j];
                // unique
                if (!tmpMap[val]) {
                    rst.push(val);
                    tmpMap[val] = true;
                }
            }
        }
    }
    return rst;
});
//# sourceMappingURL=values-of-key.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/head.js

function head(o) {
    if (is_array_like(o)) {
        return o[0];
    }
    return undefined;
}
//# sourceMappingURL=head.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/last.js

function last_last(o) {
    if (is_array_like(o)) {
        var arr = o;
        return arr[arr.length - 1];
    }
    return undefined;
}
//# sourceMappingURL=last.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/starts-with.js


function startsWith(arr, e) {
    return (is_array(arr) || is_string(arr)) ? arr[0] === e : false;
}
/* harmony default export */ var starts_with = (startsWith);
//# sourceMappingURL=starts-with.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/ends-with.js


function endsWith(arr, e) {
    return (is_array(arr) || is_string(arr)) ? arr[arr.length - 1] === e : false;
}
/* harmony default export */ var ends_with = (endsWith);
//# sourceMappingURL=ends-with.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/every.js
/**
 * 只要有一个不满足条件就返回 false
 * @param arr
 * @param func
 */
var every = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i))
            return false;
    }
    return true;
};
/* harmony default export */ var esm_every = (every);
//# sourceMappingURL=every.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/some.js
/**
 * 只要有一个满足条件就返回 true
 * @param arr
 * @param func
 */
var some = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i))
            return true;
    }
    return false;
};
/* harmony default export */ var esm_some = (some);
//# sourceMappingURL=some.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/group-by.js


var group_by_hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(data, condition) {
    if (!condition || !is_array(data)) {
        return {};
    }
    var result = {};
    // 兼容方法和 字符串的写法
    var predicate = is_function(condition) ? condition : function (item) { return item[condition]; };
    var key;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        key = predicate(item);
        if (group_by_hasOwnProperty.call(result, key)) {
            result[key].push(item);
        }
        else {
            result[key] = [item];
        }
    }
    return result;
}
/* harmony default export */ var group_by = (groupBy);
//# sourceMappingURL=group-by.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/group-to-map.js



var groupToMap = function (data, condition) {
    if (!condition) {
        return {
            0: data,
        };
    }
    if (!is_function(condition)) {
        var paramsCondition_1 = is_array(condition) ? condition : condition.replace(/\s+/g, '').split('*');
        condition = function (row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            for (var i = 0, l = paramsCondition_1.length; i < l; i++) {
                unique += row[paramsCondition_1[i]] && row[paramsCondition_1[i]].toString();
            }
            return unique;
        };
    }
    var groups = group_by(data, condition);
    return groups;
};
/* harmony default export */ var group_to_map = (groupToMap);
//# sourceMappingURL=group-to-map.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/group.js

/* harmony default export */ var group = (function (data, condition) {
    if (!condition) {
        // 没有条件，则自身改成数组
        return [data];
    }
    var groups = group_to_map(data, condition);
    var array = [];
    for (var i in groups) {
        array.push(groups[i]);
    }
    return array;
});
//# sourceMappingURL=group.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/get-wrap-behavior.js
/**
 * 获取封装的事件
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function getWrapBehavior(obj, action) {
    return obj['_wrap_' + action];
}
/* harmony default export */ var get_wrap_behavior = (getWrapBehavior);
//# sourceMappingURL=get-wrap-behavior.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/wrap-behavior.js
/**
 * 封装事件，便于使用上下文this,和便于解除事件时使用
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function wrapBehavior(obj, action) {
    if (obj['_wrap_' + action]) {
        return obj['_wrap_' + action];
    }
    var method = function (e) {
        obj[action](e);
    };
    obj['_wrap_' + action] = method;
    return method;
}
/* harmony default export */ var wrap_behavior = (wrapBehavior);
//# sourceMappingURL=wrap-behavior.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/number2color.js
var numColorCache = {};
function numberToColor(num) {
    // 增加缓存
    var color = numColorCache[num];
    if (!color) {
        var str = num.toString(16);
        for (var i = str.length; i < 6; i++) {
            str = '0' + str;
        }
        color = '#' + str;
        numColorCache[num] = color;
    }
    return color;
}
/* harmony default export */ var number2color = (numberToColor);
//# sourceMappingURL=number2color.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/parse-radius.js

function parseRadius(radius) {
    var r1 = 0, r2 = 0, r3 = 0, r4 = 0;
    if (is_array(radius)) {
        if (radius.length === 1) {
            r1 = r2 = r3 = r4 = radius[0];
        }
        else if (radius.length === 2) {
            r1 = r3 = radius[0];
            r2 = r4 = radius[1];
        }
        else if (radius.length === 3) {
            r1 = radius[0];
            r2 = r4 = radius[1];
            r3 = radius[2];
        }
        else {
            r1 = radius[0];
            r2 = radius[1];
            r3 = radius[2];
            r4 = radius[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = radius;
    }
    return {
        r1: r1,
        r2: r2,
        r3: r3,
        r4: r4
    };
}
/* harmony default export */ var parse_radius = (parseRadius);
//# sourceMappingURL=parse-radius.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/clamp.js
var clamp = function (a, min, max) {
    if (a < min) {
        return min;
    }
    else if (a > max) {
        return max;
    }
    return a;
};
/* harmony default export */ var esm_clamp = (clamp);
//# sourceMappingURL=clamp.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/fixed-base.js
var fixedBase = function (v, base) {
    var str = base.toString();
    var index = str.indexOf('.');
    if (index === -1) {
        return Math.round(v);
    }
    var length = str.substr(index + 1).length;
    if (length > 20) {
        length = 20;
    }
    return parseFloat(v.toFixed(length));
};
/* harmony default export */ var fixed_base = (fixedBase);
//# sourceMappingURL=fixed-base.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-number.js
/**
 * 判断是否数字
 * @return {Boolean} 是否数字
 */

var isNumber = function (value) {
    return is_type(value, 'Number');
};
/* harmony default export */ var is_number = (isNumber);
//# sourceMappingURL=is-number.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-decimal.js

var isDecimal = function (num) {
    return is_number(num) && num % 1 !== 0;
};
/* harmony default export */ var is_decimal = (isDecimal);
//# sourceMappingURL=is-decimal.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-even.js

var isEven = function (num) {
    return is_number(num) && num % 2 === 0;
};
/* harmony default export */ var is_even = (isEven);
//# sourceMappingURL=is-even.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-integer.js

var isInteger = Number.isInteger ? Number.isInteger : function (num) {
    return is_number(num) && num % 1 === 0;
};
/* harmony default export */ var is_integer = (isInteger);
//# sourceMappingURL=is-integer.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-negative.js

var isNegative = function (num) {
    return is_number(num) && num < 0;
};
/* harmony default export */ var is_negative = (isNegative);
//# sourceMappingURL=is-negative.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-number-equal.js
var PRECISION = 0.00001; // numbers less than this is considered as 0
function isNumberEqual(a, b, precision) {
    if (precision === void 0) { precision = PRECISION; }
    return Math.abs((a - b)) < precision;
}
;
//# sourceMappingURL=is-number-equal.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-odd.js

var isOdd = function (num) {
    return is_number(num) && num % 2 !== 0;
};
/* harmony default export */ var is_odd = (isOdd);
//# sourceMappingURL=is-odd.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-positive.js

var isPositive = function (num) {
    return is_number(num) && num > 0;
};
/* harmony default export */ var is_positive = (isPositive);
//# sourceMappingURL=is-positive.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/max-by.js



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
/* harmony default export */ var max_by = (function (arr, fn) {
    if (!is_array(arr)) {
        return undefined;
    }
    var max = arr[0];
    var maxData;
    if (is_function(fn)) {
        maxData = fn(arr[0]);
    }
    else {
        maxData = arr[0][fn];
    }
    var data;
    esm_each(arr, function (val) {
        if (is_function(fn)) {
            data = fn(val);
        }
        else {
            data = val[fn];
        }
        if (data > maxData) {
            max = val;
            maxData = data;
        }
    });
    return max;
});
//# sourceMappingURL=max-by.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/min-by.js



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */
/* harmony default export */ var min_by = (function (arr, fn) {
    if (!is_array(arr)) {
        return undefined;
    }
    var min = arr[0];
    var minData;
    if (is_function(fn)) {
        minData = fn(arr[0]);
    }
    else {
        minData = arr[0][fn];
    }
    var data;
    esm_each(arr, function (val) {
        if (is_function(fn)) {
            data = fn(val);
        }
        else {
            data = val[fn];
        }
        if (data < minData) {
            min = val;
            minData = data;
        }
    });
    return min;
});
//# sourceMappingURL=min-by.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/mod.js
var mod = function (n, m) {
    return ((n % m) + m) % m;
};
/* harmony default export */ var esm_mod = (mod);
//# sourceMappingURL=mod.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/to-degree.js
var DEGREE = 180 / Math.PI;
var toDegree = function (radian) {
    return DEGREE * radian;
};
/* harmony default export */ var to_degree = (toDegree);
//# sourceMappingURL=to-degree.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/to-integer.js
/* harmony default export */ var to_integer = (parseInt);
//# sourceMappingURL=to-integer.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/to-radian.js
var RADIAN = Math.PI / 180;
var toRadian = function (degree) {
    return RADIAN * degree;
};
/* harmony default export */ var to_radian = (toRadian);
//# sourceMappingURL=to-radian.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/for-in.js

/* harmony default export */ var for_in = (esm_each);
//# sourceMappingURL=for-in.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/has.js
/* harmony default export */ var has = (function (obj, key) { return obj.hasOwnProperty(key); });
//# sourceMappingURL=has.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/has-key.js

/* harmony default export */ var has_key = (has);
//# sourceMappingURL=has-key.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/values.js


// @ts-ignore
var values_values = Object.values ? function (obj) { return Object.values(obj); } : function (obj) {
    var result = [];
    esm_each(obj, function (value, key) {
        if (!(is_function(obj) && key === 'prototype')) {
            result.push(value);
        }
    });
    return result;
};
/* harmony default export */ var esm_values = (values_values);
//# sourceMappingURL=values.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/has-value.js


/* harmony default export */ var has_value = (function (obj, value) { return esm_contains(esm_values(obj), value); });
//# sourceMappingURL=has-value.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/to-string.js

/* harmony default export */ var to_string = (function (value) {
    if (is_nil(value))
        return '';
    return value.toString();
});
//# sourceMappingURL=to-string.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/lower-case.js

var lowerCase = function (str) {
    return to_string(str).toLowerCase();
};
/* harmony default export */ var lower_case = (lowerCase);
//# sourceMappingURL=lower-case.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/lower-first.js

var lowerFirst = function (value) {
    var str = to_string(value);
    return str.charAt(0).toLowerCase() + str.substring(1);
};
/* harmony default export */ var lower_first = (lowerFirst);
//# sourceMappingURL=lower-first.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/substitute.js
function substitute(str, o) {
    if (!str || !o) {
        return str;
    }
    return str.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
        if (match.charAt(0) === '\\') {
            return match.slice(1);
        }
        return (o[name] === undefined) ? '' : o[name];
    });
}
/* harmony default export */ var esm_substitute = (substitute);
//# sourceMappingURL=substitute.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/upper-case.js

var upperCase = function (str) {
    return to_string(str).toUpperCase();
};
/* harmony default export */ var upper_case = (upperCase);
//# sourceMappingURL=upper-case.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/upper-first.js

var upperFirst = function (value) {
    var str = to_string(value);
    return str.charAt(0).toUpperCase() + str.substring(1);
};
/* harmony default export */ var upper_first = (upperFirst);
//# sourceMappingURL=upper-first.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/get-type.js
var get_type_toString = {}.toString;
var getType = function (value) {
    return get_type_toString.call(value).replace(/^\[object /, '').replace(/]$/, '');
};
/* harmony default export */ var get_type = (getType);
//# sourceMappingURL=get-type.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-arguments.js
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isArguments = function (value) {
    return is_type(value, 'Arguments');
};
/* harmony default export */ var is_arguments = (isArguments);
//# sourceMappingURL=is-arguments.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-boolean.js
/**
 * 是否是布尔类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isBoolean = function (value) {
    return is_type(value, 'Boolean');
};
/* harmony default export */ var is_boolean = (isBoolean);
//# sourceMappingURL=is-boolean.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-date.js

var isDate = function (value) {
    return is_type(value, 'Date');
};
/* harmony default export */ var is_date = (isDate);
//# sourceMappingURL=is-date.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-error.js
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isError = function (value) {
    return is_type(value, 'Error');
};
/* harmony default export */ var is_error = (isError);
//# sourceMappingURL=is-error.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-finite.js
/**
 * 判断是否为有限数
 * @return {Boolean}
 */

/* harmony default export */ var is_finite = (function (value) {
    return is_number(value) && isFinite(value);
});
//# sourceMappingURL=is-finite.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-null.js
var isNull = function (value) {
    return value === null;
};
/* harmony default export */ var is_null = (isNull);
//# sourceMappingURL=is-null.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-prototype.js
var objectProto = Object.prototype;
var isPrototype = function (value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
    return value === proto;
};
/* harmony default export */ var is_prototype = (isPrototype);
//# sourceMappingURL=is-prototype.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-reg-exp.js

var isRegExp = function (str) {
    return is_type(str, 'RegExp');
};
/* harmony default export */ var is_reg_exp = (isRegExp);
//# sourceMappingURL=is-reg-exp.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-undefined.js
var isUndefined = function (value) {
    return value === undefined;
};
/* harmony default export */ var is_undefined = (isUndefined);
//# sourceMappingURL=is-undefined.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-element.js
/**
 * 判断是否HTML元素
 * @return {Boolean} 是否HTML元素
 */
var isElement = function (o) {
    return o instanceof Element || o instanceof HTMLDocument;
};
/* harmony default export */ var is_element = (isElement);
//# sourceMappingURL=is-element.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/request-animation-frame.js
function requestAnimationFrame(fn) {
    var method = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
;
//# sourceMappingURL=request-animation-frame.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/clear-animation-frame.js
function cancelAnimationFrame(handler) {
    var method = window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        clearTimeout;
    method(handler);
}
;
//# sourceMappingURL=clear-animation-frame.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/mix.js
// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}
function mix(dist, src1, src2, src3) {
    if (src1)
        _mix(dist, src1);
    if (src2)
        _mix(dist, src2);
    if (src3)
        _mix(dist, src3);
    return dist;
}
//# sourceMappingURL=mix.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/augment.js


var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if (is_function(obj)) {
            obj = obj.prototype;
        }
        mix(c.prototype, obj);
    }
};
/* harmony default export */ var esm_augment = (augment);
//# sourceMappingURL=augment.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/clone.js

var clone = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var rst;
    if (is_array(obj)) {
        rst = [];
        for (var i = 0, l = obj.length; i < l; i++) {
            if (typeof obj[i] === 'object' && obj[i] != null) {
                rst[i] = clone(obj[i]);
            }
            else {
                rst[i] = obj[i];
            }
        }
    }
    else {
        rst = {};
        for (var k in obj) {
            if (typeof obj[k] === 'object' && obj[k] != null) {
                rst[k] = clone(obj[k]);
            }
            else {
                rst[k] = obj[k];
            }
        }
    }
    return rst;
};
/* harmony default export */ var esm_clone = (clone);
//# sourceMappingURL=clone.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/debounce.js
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
/* harmony default export */ var esm_debounce = (debounce);
//# sourceMappingURL=debounce.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/memoize.js

/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 */
/* harmony default export */ var memoize = (function (f, resolver) {
    if (!is_function(f)) {
        throw new TypeError('Expected a function');
    }
    var memoized = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
        var key = resolver ? resolver.apply(this, args) : args[0];
        var cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = f.apply(this, args);
        // 缓存起来
        cache.set(key, result);
        return result;
    };
    memoized.cache = new Map();
    return memoized;
});
//# sourceMappingURL=memoize.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/deep-mix.js


var MAX_MIX_LEVEL = 5;
function _deepMix(dist, src, level, maxLevel) {
    level = level || 0;
    maxLevel = maxLevel || MAX_MIX_LEVEL;
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            var value = src[key];
            if (value !== null && is_plain_object(value)) {
                if (!is_plain_object(dist[key])) {
                    dist[key] = {};
                }
                if (level < maxLevel) {
                    _deepMix(dist[key], value, level + 1, maxLevel);
                }
                else {
                    dist[key] = src[key];
                }
            }
            else if (is_array(value)) {
                dist[key] = [];
                dist[key] = dist[key].concat(value);
            }
            else if (value !== undefined) {
                dist[key] = value;
            }
        }
    }
}
// todo 重写
var deepMix = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        _deepMix(rst, args[i]);
    }
    return rst;
};
/* harmony default export */ var deep_mix = (deepMix);
//# sourceMappingURL=deep-mix.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/extend.js


var extend = function (subclass, superclass, overrides, staticOverrides) {
    // 如果只提供父类构造函数，则自动生成子类构造函数
    if (!is_function(superclass)) {
        overrides = superclass;
        superclass = subclass;
        subclass = function () { };
    }
    var create = Object.create ?
        function (proto, c) {
            return Object.create(proto, {
                constructor: {
                    value: c
                }
            });
        } :
        function (proto, c) {
            function Tmp() { }
            Tmp.prototype = proto;
            var o = new Tmp();
            o.constructor = c;
            return o;
        };
    var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
    subclass.prototype = mix(superObj, subclass.prototype); // 指定子类的prototype
    subclass.superclass = create(superclass.prototype, superclass);
    mix(superObj, overrides);
    mix(subclass, staticOverrides);
    return subclass;
};
/* harmony default export */ var esm_extend = (extend);
//# sourceMappingURL=extend.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/index-of.js

var index_of_indexOf = function (arr, obj) {
    if (!is_array_like(arr)) {
        return -1;
    }
    var m = Array.prototype.indexOf;
    if (m) {
        return m.call(arr, obj);
    }
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            index = i;
            break;
        }
    }
    return index;
};
/* harmony default export */ var index_of = (index_of_indexOf);
//# sourceMappingURL=index-of.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-empty.js




var is_empty_hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(value) {
    /**
     * isEmpty(null) => true
     * isEmpty() => true
     * isEmpty(true) => true
     * isEmpty(1) => true
     * isEmpty([1, 2, 3]) => false
     * isEmpty('abc') => false
     * isEmpty({ a: 1 }) => false
     */
    if (is_nil(value)) {
        return true;
    }
    if (is_array_like(value)) {
        return !value.length;
    }
    var type = get_type(value);
    if (type === 'Map' || type === 'Set') {
        return !value.size;
    }
    if (is_prototype(value)) {
        return !Object.keys(value).length;
    }
    for (var key in value) {
        if (is_empty_hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
/* harmony default export */ var is_empty = (isEmpty);
//# sourceMappingURL=is-empty.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-equal.js



var isEqual = function (value, other) {
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    if (is_string(value) || is_string(other)) {
        return false;
    }
    if (is_array_like(value) || is_array_like(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (is_object_like(value) || is_object_like(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    return false;
};
/* harmony default export */ var is_equal = (isEqual);
//# sourceMappingURL=is-equal.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/is-equal-with.js


/**
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);  // => true
 */
/* harmony default export */ var is_equal_with = (function (value, other, fn) {
    if (!is_function(fn)) {
        return is_equal(value, other);
    }
    return !!fn(value, other);
});
//# sourceMappingURL=is-equal-with.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/map.js

var map = function (arr, func) {
    if (!is_array_like(arr)) {
        // @ts-ignore
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        result.push(func(value, index));
    }
    return result;
};
/* harmony default export */ var esm_map = (map);
//# sourceMappingURL=map.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/map-values.js


var identity = function (v) { return v; };
/* harmony default export */ var map_values = (function (object, func) {
    if (func === void 0) { func = identity; }
    var r = {};
    if (is_object(object) && !is_nil(object)) {
        Object.keys(object).forEach(function (key) {
            // @ts-ignore
            r[key] = func(object[key], key);
        });
    }
    return r;
});
//# sourceMappingURL=map-values.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/get.js

/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */
/* harmony default export */ var get = (function (obj, key, defaultValue) {
    var p = 0;
    var keyArr = is_string(key) ? key.split('.') : key;
    while (obj && p < keyArr.length) {
        obj = obj[keyArr[p++]];
    }
    return (obj === undefined || p < keyArr.length) ? defaultValue : obj;
});
//# sourceMappingURL=get.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/set.js



/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */
/* harmony default export */ var set = (function (obj, path, value) {
    var o = obj;
    var keyArr = is_string(path) ? path.split('.') : path;
    keyArr.forEach(function (key, idx) {
        // 不是最后一个
        if (idx < keyArr.length - 1) {
            if (!is_object(o[key])) {
                o[key] = is_number(keyArr[idx + 1]) ? [] : {};
            }
            o = o[key];
        }
        else {
            o[key] = value;
        }
    });
    return obj;
});
//# sourceMappingURL=set.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/pick.js


var pick_hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony default export */ var pick = (function (object, keys) {
    if (object === null || !is_plain_object(object)) {
        return {};
    }
    var result = {};
    esm_each(keys, function (key) {
        if (pick_hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    });
    return result;
});
//# sourceMappingURL=pick.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/throttle.js
/* harmony default export */ var throttle = (function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options)
        options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
            context = args = null;
    };
    var throttled = function () {
        var now = Date.now();
        if (!previous && options.leading === false)
            previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
});
//# sourceMappingURL=throttle.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/to-array.js

/* harmony default export */ var to_array = (function (value) {
    return is_array_like(value) ? Array.prototype.slice.call(value) : [];
});
//# sourceMappingURL=to-array.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/unique-id.js
var unique_id_map = {};
/* harmony default export */ var unique_id = (function (prefix) {
    prefix = prefix || 'g';
    if (!unique_id_map[prefix]) {
        unique_id_map[prefix] = 1;
    }
    else {
        unique_id_map[prefix] += 1;
    }
    return prefix + unique_id_map[prefix];
});
//# sourceMappingURL=unique-id.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/noop.js
/* harmony default export */ var noop = (function () { });
//# sourceMappingURL=noop.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/identity.js
/* harmony default export */ var esm_identity = (function (v) { return v; });
//# sourceMappingURL=identity.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/size.js


function size(o) {
    if (is_nil(o)) {
        return 0;
    }
    if (is_array_like(o)) {
        return o.length;
    }
    return Object.keys(o).length;
}
//# sourceMappingURL=size.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/cache.js
/**
 * k-v 存储
 */
var default_1 = /** @class */ (function () {
    function default_1() {
        this.map = {};
    }
    default_1.prototype.has = function (key) {
        return this.map[key] !== undefined;
    };
    default_1.prototype.get = function (key, def) {
        var v = this.map[key];
        return v === undefined ? def : v;
    };
    default_1.prototype.set = function (key, value) {
        this.map[key] = value;
    };
    default_1.prototype.clear = function () {
        this.map = {};
    };
    default_1.prototype.delete = function (key) {
        delete this.map[key];
    };
    default_1.prototype.size = function () {
        return Object.keys(this.map).length;
    };
    return default_1;
}());
/* harmony default export */ var cache = (default_1);
//# sourceMappingURL=cache.js.map
// CONCATENATED MODULE: ./node_modules/@antv/util/esm/index.js
// array


























// event


// format


// math















// object







// string





// type























// other
























// 不知道为什么，需要把这个 export，不然 ts 会报类型错误

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "90f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSamePoint = void 0;
var util_1 = __webpack_require__("8937");
// 向量长度
function vMag(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
// u.v/|u||v|，计算夹角的余弦值
function vRatio(u, v) {
    // 当存在一个向量的长度为 0 时，夹角也为 0，即夹角的余弦值为 1
    return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}
// 向量角度
function vAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
/**
 * 判断两个点是否重合，点坐标的格式为 [x, y]
 * @param {Array} point1 第一个点
 * @param {Array} point2 第二个点
 */
function isSamePoint(point1, point2) {
    return point1[0] === point2[0] && point1[1] === point2[1];
}
exports.isSamePoint = isSamePoint;
// A 0:rx 1:ry 2:x-axis-rotation 3:large-arc-flag 4:sweep-flag 5: x 6: y
function getArcParams(startPoint, params) {
    var rx = params[1];
    var ry = params[2];
    var xRotation = util_1.mod(util_1.toRadian(params[3]), Math.PI * 2);
    var arcFlag = params[4];
    var sweepFlag = params[5];
    // 弧形起点坐标
    var x1 = startPoint[0];
    var y1 = startPoint[1];
    // 弧形终点坐标
    var x2 = params[6];
    var y2 = params[7];
    var xp = (Math.cos(xRotation) * (x1 - x2)) / 2.0 + (Math.sin(xRotation) * (y1 - y2)) / 2.0;
    var yp = (-1 * Math.sin(xRotation) * (x1 - x2)) / 2.0 + (Math.cos(xRotation) * (y1 - y2)) / 2.0;
    var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }
    var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
    var f = diff ? Math.sqrt((rx * rx * (ry * ry) - diff) / diff) : 1;
    if (arcFlag === sweepFlag) {
        f *= -1;
    }
    if (isNaN(f)) {
        f = 0;
    }
    // 旋转前的起点坐标，且当长半轴和短半轴的长度为 0 时，坐标按 (0, 0) 处理
    var cxp = ry ? (f * rx * yp) / ry : 0;
    var cyp = rx ? (f * -ry * xp) / rx : 0;
    // 椭圆圆心坐标
    var cx = (x1 + x2) / 2.0 + Math.cos(xRotation) * cxp - Math.sin(xRotation) * cyp;
    var cy = (y1 + y2) / 2.0 + Math.sin(xRotation) * cxp + Math.cos(xRotation) * cyp;
    // 起始点的单位向量
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    // 终止点的单位向量
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    // 计算起始点和圆心的连线，与 x 轴正方向的夹角
    var theta = vAngle([1, 0], u);
    // 计算圆弧起始点和终止点与椭圆圆心连线的夹角
    var dTheta = vAngle(u, v);
    if (vRatio(u, v) <= -1) {
        dTheta = Math.PI;
    }
    if (vRatio(u, v) >= 1) {
        dTheta = 0;
    }
    if (sweepFlag === 0 && dTheta > 0) {
        dTheta = dTheta - 2 * Math.PI;
    }
    if (sweepFlag === 1 && dTheta < 0) {
        dTheta = dTheta + 2 * Math.PI;
    }
    return {
        cx: cx,
        cy: cy,
        // 弧形的起点和终点相同时，长轴和短轴的长度按 0 处理
        rx: isSamePoint(startPoint, [x2, y2]) ? 0 : rx,
        ry: isSamePoint(startPoint, [x2, y2]) ? 0 : ry,
        startAngle: theta,
        endAngle: theta + dTheta,
        xRotation: xRotation,
        arcFlag: arcFlag,
        sweepFlag: sweepFlag,
    };
}
exports.default = getArcParams;
//# sourceMappingURL=get-arc-params.js.map

/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9ab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "9ab4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    var type = typeof value;
    return value !== null && type === 'object' || type === 'function';
});
//# sourceMappingURL=is-object.js.map

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShortenOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addStartArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEndArrow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ab4");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4799");


var sin = Math.sin, cos = Math.cos, atan2 = Math.atan2, PI = Math.PI;
function _addDefaultArrow(shape, attrs, x1, y1, x2, y2, isStart) {
    var stroke = attrs.stroke, lineWidth = attrs.lineWidth;
    var x = x1 - x2;
    var y = y1 - y2;
    var rad = atan2(y, x);
    var arrowShape = new _shape__WEBPACK_IMPORTED_MODULE_1__["Path"]({
        type: 'path',
        canvas: shape.get('canvas'),
        isArrowShape: true,
        attrs: {
            // 默认箭头的边长为 10，夹角为 60 度
            path: "M" + 10 * cos(PI / 6) + "," + 10 * sin(PI / 6) + " L0,0 L" + 10 * cos(PI / 6) + ",-" + 10 * sin(PI / 6),
            // 使用 shape stroke 值
            stroke: stroke,
            lineWidth: lineWidth,
        },
    });
    arrowShape.translate(x2, y2);
    arrowShape.rotateAtPoint(x2, y2, rad);
    shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
/**
 * 箭头 path 的设置要求
 * 1. 箭头顶点坐标需要为 (0, 0)
 * 2. 箭头夹角的中心分割线需要与 X 轴正方向对齐
 */
function _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, isStart) {
    var startArrow = attrs.startArrow, endArrow = attrs.endArrow, stroke = attrs.stroke, lineWidth = attrs.lineWidth;
    var arrowAttrs = isStart ? startArrow : endArrow;
    var d = arrowAttrs.d, arrowFill = arrowAttrs.fill, arrowStroke = arrowAttrs.stroke, arrowLineWidth = arrowAttrs.lineWidth, restAttrs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "c"])(arrowAttrs, ["d", "fill", "stroke", "lineWidth"]);
    var x = x1 - x2;
    var y = y1 - y2;
    var rad = atan2(y, x);
    if (d) {
        x2 = x2 - cos(rad) * d;
        y2 = y2 - sin(rad) * d;
    }
    var arrowShape = new _shape__WEBPACK_IMPORTED_MODULE_1__["Path"]({
        type: 'path',
        canvas: shape.get('canvas'),
        isArrowShape: true,
        attrs: Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, restAttrs), { 
            // 支持单独设置箭头的 stroke 和 lineWidth，若为空则使用 shape 的值
            stroke: arrowStroke || stroke, lineWidth: arrowLineWidth || lineWidth, 
            // 箭头是否填充需要手动设置，不会继承自 shape 的值
            fill: arrowFill }),
    });
    arrowShape.translate(x2, y2);
    arrowShape.rotateAtPoint(x2, y2, rad);
    shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
/**
 * 如果自定义箭头并且有 d 需要做偏移，如果直接画，线条会超出箭头尖端，因此需要根据箭头偏移 d, 返回线需要缩短的距离
 * |----------------
 * |<|--------------
 * |
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 * @param {number} d  箭头沿线条方向的偏移距离
 * @return {{dx: number, dy: number}} 返回线条偏移距离
 */
function getShortenOffset(x1, y1, x2, y2, d) {
    var rad = atan2(y2 - y1, x2 - x1);
    return {
        dx: cos(rad) * d,
        dy: sin(rad) * d,
    };
}
/**
 * 绘制起始箭头
 * @param {IShape} shape 图形
 * @param {ShapeAttrs} attrs shape 的绘图属性
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 */
function addStartArrow(shape, attrs, x1, y1, x2, y2) {
    if (typeof attrs.startArrow === 'object') {
        _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, true);
    }
    else if (attrs.startArrow) {
        _addDefaultArrow(shape, attrs, x1, y1, x2, y2, true);
    }
    else {
        shape.set('startArrowShape', null);
    }
}
/**
 * 绘制结束箭头
 * @param {IShape} shape 图形
 * @param {ShapeAttrs} attrs shape 的绘图属性
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 */
function addEndArrow(shape, attrs, x1, y1, x2, y2) {
    if (typeof attrs.endArrow === 'object') {
        _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, false);
    }
    else if (attrs.endArrow) {
        _addDefaultArrow(shape, attrs, x1, y1, x2, y2, false);
    }
    else {
        shape.set('startArrowShape', null);
    }
}
//# sourceMappingURL=arrow.js.map

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "9fe7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export length */
/* unused harmony export fromValues */
/* unused harmony export copy */
/* unused harmony export set */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiply */
/* unused harmony export divide */
/* unused harmony export ceil */
/* unused harmony export floor */
/* unused harmony export min */
/* unused harmony export max */
/* unused harmony export round */
/* unused harmony export scale */
/* unused harmony export scaleAndAdd */
/* unused harmony export distance */
/* unused harmony export squaredDistance */
/* unused harmony export squaredLength */
/* unused harmony export negate */
/* unused harmony export inverse */
/* unused harmony export normalize */
/* unused harmony export dot */
/* unused harmony export cross */
/* unused harmony export lerp */
/* unused harmony export hermite */
/* unused harmony export bezier */
/* unused harmony export random */
/* unused harmony export transformMat4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformMat3; });
/* unused harmony export transformQuat */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export angle */
/* unused harmony export zero */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export sub */
/* unused harmony export mul */
/* unused harmony export div */
/* unused harmony export dist */
/* unused harmony export sqrDist */
/* unused harmony export len */
/* unused harmony export sqrLen */
/* unused harmony export forEach */
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c94d");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__[/* ARRAY_TYPE */ "a"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__[/* RANDOM */ "c"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__[/* RANDOM */ "c"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "a00f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview 矩阵运算，本来是要引入 gl-matrix, 但是考虑到 g-mobile 对大小有限制，同时 g-webgl 使用的 matrix 不一致
 * 所以，这里仅实现 2D 几个运算，上层自己引入 gl-matrix
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 3阶矩阵相乘
 * @param {number[]} a 矩阵1
 * @param {number[]} b 矩阵2
 */
function multiplyMatrix(a, b) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b10 = b[3];
    var b11 = b[4];
    var b12 = b[5];
    var b20 = b[6];
    var b21 = b[7];
    var b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
exports.multiplyMatrix = multiplyMatrix;
/**
 * 3阶矩阵同2阶向量相乘
 * @param {number[]} m 矩阵
 * @param {number[]} v 二阶向量
 */
function multiplyVec2(m, v) {
    var out = [];
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
exports.multiplyVec2 = multiplyVec2;
/**
 * 矩阵的逆
 * @param {number[]} a 矩阵
 */
function invert(a) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
exports.invert = invert;
//# sourceMappingURL=matrix.js.map

/***/ }),

/***/ "a12b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
var ellipse_1 = __webpack_require__("7ec0");
// 偏导数 x
function derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
    return -1 * rx * Math.cos(xRotation) * Math.sin(angle) - ry * Math.sin(xRotation) * Math.cos(angle);
}
// 偏导数 y
function derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
    return -1 * rx * Math.sin(xRotation) * Math.sin(angle) + ry * Math.cos(xRotation) * Math.cos(angle);
}
// x 的极值
function xExtrema(rx, ry, xRotation) {
    return Math.atan((-ry / rx) * Math.tan(xRotation));
}
// y 的极值
function yExtrema(rx, ry, xRotation) {
    return Math.atan(ry / (rx * Math.tan(xRotation)));
}
// 根据角度求 x 坐标
function xAt(cx, cy, rx, ry, xRotation, angle) {
    return rx * Math.cos(xRotation) * Math.cos(angle) - ry * Math.sin(xRotation) * Math.sin(angle) + cx;
}
// 根据角度求 y 坐标
function yAt(cx, cy, rx, ry, xRotation, angle) {
    return rx * Math.sin(xRotation) * Math.cos(angle) + ry * Math.cos(xRotation) * Math.sin(angle) + cy;
}
// 获取点在椭圆上的角度
function getAngle(rx, ry, x0, y0) {
    var angle = Math.atan2(y0 * rx, x0 * ry);
    // 转换到 0 - 2PI 内
    return (angle + Math.PI * 2) % (Math.PI * 2);
}
// 根据角度获取，x,y
function getPoint(rx, ry, angle) {
    return {
        x: rx * Math.cos(angle),
        y: ry * Math.sin(angle),
    };
}
// 旋转
function rotate(x, y, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    return [x * cos - y * sin, x * sin + y * cos];
}
exports.default = {
    /**
     * 计算包围盒
     * @param {number} cx         圆心 x
     * @param {number} cy         圆心 y
     * @param {number} rx         x 轴方向的半径
     * @param {number} ry         y 轴方向的半径
     * @param {number} xRotation  旋转角度
     * @param {number} startAngle 起始角度
     * @param {number} endAngle   结束角度
     * @return {object} 包围盒对象
     */
    box: function (cx, cy, rx, ry, xRotation, startAngle, endAngle) {
        var xDim = xExtrema(rx, ry, xRotation);
        var minX = Infinity;
        var maxX = -Infinity;
        var xs = [startAngle, endAngle];
        for (var i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
            var xAngle = xDim + i;
            if (startAngle < endAngle) {
                if (startAngle < xAngle && xAngle < endAngle) {
                    xs.push(xAngle);
                }
            }
            else {
                if (endAngle < xAngle && xAngle < startAngle) {
                    xs.push(xAngle);
                }
            }
        }
        for (var i = 0; i < xs.length; i++) {
            var x = xAt(cx, cy, rx, ry, xRotation, xs[i]);
            if (x < minX) {
                minX = x;
            }
            if (x > maxX) {
                maxX = x;
            }
        }
        var yDim = yExtrema(rx, ry, xRotation);
        var minY = Infinity;
        var maxY = -Infinity;
        var ys = [startAngle, endAngle];
        for (var i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
            var yAngle = yDim + i;
            if (startAngle < endAngle) {
                if (startAngle < yAngle && yAngle < endAngle) {
                    ys.push(yAngle);
                }
            }
            else {
                if (endAngle < yAngle && yAngle < startAngle) {
                    ys.push(yAngle);
                }
            }
        }
        for (var i = 0; i < ys.length; i++) {
            var y = yAt(cx, cy, rx, ry, xRotation, ys[i]);
            if (y < minY) {
                minY = y;
            }
            if (y > maxY) {
                maxY = y;
            }
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    },
    /**
     * 获取圆弧的长度，计算圆弧长度时不考虑旋转角度，
     * 仅跟 rx, ry, startAngle, endAngle 相关
     * @param {number} cx         圆心 x
     * @param {number} cy         圆心 y
     * @param {number} rx         x 轴方向的半径
     * @param {number} ry         y 轴方向的半径
     * @param {number} xRotation  旋转角度
     * @param {number} startAngle 起始角度
     * @param {number} endAngle   结束角度
     */
    length: function (cx, cy, rx, ry, xRotation, startAngle, endAngle) { },
    /**
     * 获取指定点到圆弧的最近距离的点
     * @param {number} cx         圆心 x
     * @param {number} cy         圆心 y
     * @param {number} rx         x 轴方向的半径
     * @param {number} ry         y 轴方向的半径
     * @param {number} xRotation  旋转角度
     * @param {number} startAngle 起始角度
     * @param {number} endAngle   结束角度
     * @param {number} x0         指定点的 x
     * @param {number} y0         指定点的 y
     * @return {object} 到指定点最近距离的点
     */
    nearestPoint: function (cx, cy, rx, ry, xRotation, startAngle, endAngle, x0, y0) {
        // 将最近距离问题转换成到椭圆中心 0,0 没有旋转的椭圆问题
        var relativeVector = rotate(x0 - cx, y0 - cy, -xRotation);
        var x1 = relativeVector[0], y1 = relativeVector[1];
        // 计算点到椭圆的最近的点
        var relativePoint = ellipse_1.default.nearestPoint(0, 0, rx, ry, x1, y1);
        // 获取点在椭圆上的角度
        var angle = getAngle(rx, ry, relativePoint.x, relativePoint.y);
        // 点没有在圆弧上
        if (angle < startAngle) {
            // 小于起始圆弧
            relativePoint = getPoint(rx, ry, startAngle);
        }
        else if (angle > endAngle) {
            // 大于结束圆弧
            relativePoint = getPoint(rx, ry, endAngle);
        }
        // 旋转到 xRotation 的角度
        var vector = rotate(relativePoint.x, relativePoint.y, xRotation);
        return {
            x: vector[0] + cx,
            y: vector[1] + cy,
        };
    },
    pointDistance: function (cx, cy, rx, ry, xRotation, startAngle, endAngle, x0, y0) {
        var nearestPoint = this.nearestPoint(cx, cy, rx, ry, x0, y0);
        return util_1.distance(nearestPoint.x, nearestPoint.y, x0, y0);
    },
    pointAt: function (cx, cy, rx, ry, xRotation, startAngle, endAngle, t) {
        var angle = (endAngle - startAngle) * t + startAngle;
        return {
            x: xAt(cx, cy, rx, ry, xRotation, angle),
            y: yAt(cx, cy, rx, ry, xRotation, angle),
        };
    },
    tangentAngle: function (cx, cy, rx, ry, xRotation, startAngle, endAngle, t) {
        var angle = (endAngle - startAngle) * t + startAngle;
        var dx = derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
        var dy = derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
        return util_1.piMod(Math.atan2(dy, dx));
    },
};
//# sourceMappingURL=arc.js.map

/***/ }),

/***/ "a2bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("e8b5");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a755":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseLineGradient */
/* unused harmony export parseRadialGradient */
/* unused harmony export parsePattern */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseRadius; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7326");

var regexTags = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi;
var regexDot = /[^\s\,]+/gi;
var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
function addStop(steps, gradient) {
    var arr = steps.match(regexColorStop);
    Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* each */ "c"])(arr, function (item) {
        var itemArr = item.split(':');
        gradient.addColorStop(itemArr[0], itemArr[1]);
    });
}
/**
 * 将边和填充设置的颜色转换成线性渐变对象
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   gradientStr   颜色
 * @returns {any} 渐变对象
 */
function parseLineGradient(context, element, gradientStr) {
    var arr = regexLG.exec(gradientStr);
    var angle = (parseFloat(arr[1]) % 360) * (Math.PI / 180);
    var steps = arr[2];
    var box = element.getBBox();
    var start;
    var end;
    if (angle >= 0 && angle < (1 / 2) * Math.PI) {
        start = {
            x: box.minX,
            y: box.minY,
        };
        end = {
            x: box.maxX,
            y: box.maxY,
        };
    }
    else if ((1 / 2) * Math.PI <= angle && angle < Math.PI) {
        start = {
            x: box.maxX,
            y: box.minY,
        };
        end = {
            x: box.minX,
            y: box.maxY,
        };
    }
    else if (Math.PI <= angle && angle < (3 / 2) * Math.PI) {
        start = {
            x: box.maxX,
            y: box.maxY,
        };
        end = {
            x: box.minX,
            y: box.minY,
        };
    }
    else {
        start = {
            x: box.minX,
            y: box.maxY,
        };
        end = {
            x: box.maxX,
            y: box.minY,
        };
    }
    var tanTheta = Math.tan(angle);
    var tanTheta2 = tanTheta * tanTheta;
    var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
    var y = (tanTheta * (end.x - start.x + tanTheta * (end.y - start.y))) / (tanTheta2 + 1) + start.y;
    var gradient = context.createLinearGradient(start.x, start.y, x, y);
    addStop(steps, gradient);
    return gradient;
}
/**
 * 将边和填充设置的颜色转换成圆形渐变对象
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   gradientStr   颜色
 * @returns {any} 渐变对象
 */
function parseRadialGradient(context, element, gradientStr) {
    var arr = regexRG.exec(gradientStr);
    var fx = parseFloat(arr[1]);
    var fy = parseFloat(arr[2]);
    var fr = parseFloat(arr[3]);
    var steps = arr[4];
    // 环半径为0时，默认无渐变，取渐变序列的最后一个颜色
    if (fr === 0) {
        var colors = steps.match(regexColorStop);
        return colors[colors.length - 1].split(':')[1];
    }
    var box = element.getBBox();
    var width = box.maxX - box.minX;
    var height = box.maxY - box.minY;
    var r = Math.sqrt(width * width + height * height) / 2;
    var gradient = context.createRadialGradient(box.minX + width * fx, box.minY + height * fy, 0, box.minX + width / 2, box.minY + height / 2, fr * r);
    addStop(steps, gradient);
    return gradient;
}
/**
 * 边和填充设置的颜色转换成 pattern
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   patternStr   生成 pattern 的字符串
 */
function parsePattern(context, element, patternStr) {
    // 在转换过程中进行了缓存
    if (element.get('patternSource') && element.get('patternSource') === patternStr) {
        return element.get('pattern');
    }
    var pattern;
    var img;
    var arr = regexPR.exec(patternStr);
    var repeat = arr[1];
    var source = arr[2];
    // Function to be called when pattern loads
    function onload() {
        // Create pattern
        pattern = context.createPattern(img, repeat);
        element.set('pattern', pattern); // be a cache
        element.set('patternSource', patternStr);
    }
    switch (repeat) {
        case 'a':
            repeat = 'repeat';
            break;
        case 'x':
            repeat = 'repeat-x';
            break;
        case 'y':
            repeat = 'repeat-y';
            break;
        case 'n':
            repeat = 'no-repeat';
            break;
        default:
            repeat = 'no-repeat';
    }
    img = new Image();
    // If source URL is not a data URL
    if (!source.match(/^data:/i)) {
        // Set crossOrigin for this image
        img.crossOrigin = 'Anonymous';
    }
    img.src = source;
    if (img.complete) {
        onload();
    }
    else {
        img.onload = onload;
        // Fix onload() bug in IE9
        img.src = img.src;
    }
    return pattern;
}
function parseStyle(context, element, color) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "k"])(color)) {
        if (color[1] === '(' || color[2] === '(') {
            if (color[0] === 'l') {
                // regexLG.test(color)
                return parseLineGradient(context, element, color);
            }
            if (color[0] === 'r') {
                // regexRG.test(color)
                return parseRadialGradient(context, element, color);
            }
            if (color[0] === 'p') {
                // regexPR.test(color)
                return parsePattern(context, element, color);
            }
        }
        return color;
    }
}
function parseRadius(radius) {
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "g"])(radius)) {
        if (radius.length === 1) {
            r1 = r2 = r3 = r4 = radius[0];
        }
        else if (radius.length === 2) {
            r1 = r3 = radius[0];
            r2 = r4 = radius[1];
        }
        else if (radius.length === 3) {
            r1 = radius[0];
            r2 = r4 = radius[1];
            r3 = radius[2];
        }
        else {
            r1 = radius[0];
            r2 = radius[1];
            r3 = radius[2];
            r4 = radius[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = radius;
    }
    return [r1, r2, r3, r4];
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/@antv/g-base/esm/index.js + 44 modules
var esm = __webpack_require__("6855");

// EXTERNAL MODULE: ./node_modules/@antv/g-base/lib/util/util.js
var util = __webpack_require__("d080");

// EXTERNAL MODULE: ./node_modules/@antv/g-base/lib/util/matrix.js
var util_matrix = __webpack_require__("a00f");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/hit.js


function invertFromMatrix(v, matrix) {
    if (matrix) {
        var invertMatrix = Object(util_matrix["invert"])(matrix);
        return Object(util_matrix["multiplyVec2"])(invertMatrix, v);
    }
    return v;
}
function getRefXY(element, x, y) {
    // @ts-ignore
    var totalMatrix = element.getTotalMatrix();
    if (totalMatrix) {
        var _a = invertFromMatrix([x, y, 1], totalMatrix), refX = _a[0], refY = _a[1];
        return [refX, refY];
    }
    return [x, y];
}
// 拾取前的检测，只有通过检测才能继续拾取
function preTest(element, x, y) {
    // @ts-ignore
    if (element.isCanvas && element.isCanvas()) {
        return true;
    }
    // 不允许被拾取，则返回 null
    // @ts-ignore
    if (!Object(util["isAllowCapture"])(element) && element.cfg.isInView === false) {
        return false;
    }
    if (element.cfg.clipShape) {
        // 如果存在 clip
        var _a = getRefXY(element, x, y), refX = _a[0], refY = _a[1];
        if (element.isClipped(refX, refY)) {
            return false;
        }
    }
    // @ts-ignore ，这个地方调用过于频繁
    var bbox = element.cfg.cacheCanvasBBox;
    if (!bbox) {
        bbox = element.getCanvasBBox();
    }
    if (!(x >= bbox.minX && x <= bbox.maxX && y >= bbox.minY && y <= bbox.maxY)) {
        return false;
    }
    return true;
}
function getShape(container, x, y) {
    // 没有通过检测，则返回 null
    if (!preTest(container, x, y)) {
        return null;
    }
    var shape = null;
    var children = container.getChildren();
    var count = children.length;
    for (var i = count - 1; i >= 0; i--) {
        var child = children[i];
        if (child.isGroup()) {
            shape = getShape(child, x, y);
        }
        else if (preTest(child, x, y)) {
            var curShape = child;
            var _a = getRefXY(child, x, y), refX = _a[0], refY = _a[1];
            // @ts-ignore
            if (curShape.isInShape(refX, refY)) {
                shape = child;
            }
        }
        if (shape) {
            break;
        }
    }
    return shape;
}
//# sourceMappingURL=hit.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/shape/index.js + 19 modules
var shape = __webpack_require__("4799");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/group.js
var group = __webpack_require__("c2ad");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/draw.js + 1 modules
var draw = __webpack_require__("f5e5");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/util.js
var util_util = __webpack_require__("7326");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/canvas.js







var canvas_Canvas = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(Canvas, _super);
    function Canvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Canvas.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        // 设置渲染引擎为 canvas，只读属性
        cfg['renderer'] = 'canvas';
        // 是否自动绘制，不需要用户调用 draw 方法
        cfg['autoDraw'] = true;
        // 是否允许局部刷新图表
        cfg['localRefresh'] = true;
        cfg['refreshElements'] = [];
        // 是否在视图内自动裁剪
        cfg['clipView'] = true;
        cfg['quickHit'] = false;
        return cfg;
    };
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Canvas.prototype.onCanvasChange = function (changeType) {
        /**
         * 触发画布更新的三种 changeType
         * 1. attr: 修改画布的绘图属性
         * 2. sort: 画布排序，图形的层次会发生变化
         * 3. changeSize: 改变画布大小
         */
        if (changeType === 'attr' || changeType === 'sort' || changeType === 'changeSize') {
            this.set('refreshElements', [this]);
            this.draw();
        }
    };
    Canvas.prototype.getShapeBase = function () {
        return shape;
    };
    Canvas.prototype.getGroupBase = function () {
        return group["a" /* default */];
    };
    /**
     * 获取屏幕像素比
     */
    Canvas.prototype.getPixelRatio = function () {
        var pixelRatio = this.get('pixelRatio') || Object(util_util["d" /* getPixelRatio */])();
        // 不足 1 的取 1，超出 1 的取整
        return pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1;
    };
    Canvas.prototype.getViewRange = function () {
        return {
            minX: 0,
            minY: 0,
            maxX: this.get('width'),
            maxY: this.get('height'),
        };
    };
    // 复写基类的方法生成标签
    Canvas.prototype.createDom = function () {
        var element = document.createElement('canvas');
        var context = element.getContext('2d');
        // 缓存 context 对象
        this.set('context', context);
        return element;
    };
    Canvas.prototype.setDOMSize = function (width, height) {
        _super.prototype.setDOMSize.call(this, width, height);
        var context = this.get('context');
        var el = this.get('el');
        var pixelRatio = this.getPixelRatio();
        el.width = pixelRatio * width;
        el.height = pixelRatio * height;
        // 设置 canvas 元素的宽度和高度，会重置缩放，因此 context.scale 需要在每次设置宽、高后调用
        if (pixelRatio > 1) {
            context.scale(pixelRatio, pixelRatio);
        }
    };
    // 复写基类方法
    Canvas.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._clearFrame(); // 需要清理掉延迟绘制的帧
        var context = this.get('context');
        var element = this.get('el');
        context.clearRect(0, 0, element.width, element.height);
    };
    Canvas.prototype.getShape = function (x, y) {
        if (this.get('quickHit')) {
            return getShape(this, x, y);
        }
        return _super.prototype.getShape.call(this, x, y, null);
    };
    // 对绘制区域边缘取整，避免浮点数问题
    Canvas.prototype._getRefreshRegion = function () {
        var elements = this.get('refreshElements');
        var viewRegion = this.getViewRange();
        var region;
        // 如果是当前画布整体发生了变化，则直接重绘整个画布
        if (elements.length && elements[0] === this) {
            region = viewRegion;
        }
        else {
            region = Object(draw["d" /* getMergedRegion */])(elements);
            if (region) {
                region.minX = Math.floor(region.minX);
                region.minY = Math.floor(region.minY);
                region.maxX = Math.ceil(region.maxX);
                region.maxY = Math.ceil(region.maxY);
                var clipView = this.get('clipView');
                // 自动裁剪不在 view 内的区域
                if (clipView) {
                    region = Object(draw["e" /* mergeView */])(region, viewRegion);
                }
            }
        }
        return region;
    };
    /**
     * 刷新图形元素，这里仅仅是放入队列，下次绘制时进行绘制
     * @param {IElement} element 图形元素
     */
    Canvas.prototype.refreshElement = function (element) {
        var refreshElements = this.get('refreshElements');
        refreshElements.push(element);
        // if (this.get('autoDraw')) {
        //   this._startDraw();
        // }
    };
    // 清理还在进行的绘制
    Canvas.prototype._clearFrame = function () {
        var drawFrame = this.get('drawFrame');
        if (drawFrame) {
            // 如果全部渲染时，存在局部渲染，则抛弃掉局部渲染
            Object(util_util["a" /* clearAnimationFrame */])(drawFrame);
            this.set('drawFrame', null);
            this.set('refreshElements', []);
        }
    };
    // 手工调用绘制接口
    Canvas.prototype.draw = function () {
        var drawFrame = this.get('drawFrame');
        if (this.get('autoDraw') && drawFrame) {
            return;
        }
        this._startDraw();
    };
    // 绘制所有图形
    Canvas.prototype._drawAll = function () {
        var context = this.get('context');
        var element = this.get('el');
        var children = this.getChildren();
        context.clearRect(0, 0, element.width, element.height);
        Object(draw["a" /* applyAttrsToContext */])(context, this);
        Object(draw["b" /* drawChildren */])(context, children);
        // 对于 https://github.com/antvis/g/issues/422 的场景，全局渲染的模式下也会记录更新的元素队列，因此全局渲染完后也需要置空
        this.set('refreshElements', []);
    };
    // 绘制局部
    Canvas.prototype._drawRegion = function () {
        var context = this.get('context');
        var refreshElements = this.get('refreshElements');
        var children = this.getChildren();
        var region = this._getRefreshRegion();
        // 需要注意可能没有 region 的场景
        // 一般发生在设置了 localRefresh ,在没有图形发生变化的情况下，用户调用了 draw
        if (region) {
            // 清理指定区域
            context.clearRect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
            // 保存上下文，设置 clip
            context.save();
            context.beginPath();
            context.rect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
            context.clip();
            Object(draw["a" /* applyAttrsToContext */])(context, this);
            // 绘制子元素
            Object(draw["b" /* drawChildren */])(context, children, region);
            context.restore();
        }
        Object(util_util["c" /* each */])(refreshElements, function (element) {
            if (element.get('hasChanged')) {
                // 在视窗外的 Group 元素会加入到更新队列里，但实际却没有执行 draw() 逻辑，也就没有清除 hasChanged 标记
                // 即已经重绘完、但 hasChanged 标记没有清除的元素，需要统一清除掉。主要是 Group 存在问题，具体原因待排查
                element.set('hasChanged', false);
            }
        });
        this.set('refreshElements', []);
    };
    // 触发绘制
    Canvas.prototype._startDraw = function () {
        var _this = this;
        var drawFrame = this.get('drawFrame');
        if (!drawFrame) {
            drawFrame = Object(util_util["n" /* requestAnimationFrame */])(function () {
                if (_this.get('localRefresh')) {
                    _this._drawRegion();
                }
                else {
                    _this._drawAll();
                }
                _this.set('drawFrame', null);
            });
            this.set('drawFrame', drawFrame);
        }
    };
    Canvas.prototype.skipDraw = function () { };
    return Canvas;
}(esm["a" /* AbstractCanvas */]));
/* harmony default export */ var canvas = __webpack_exports__["a"] = (canvas_Canvas);
//# sourceMappingURL=canvas.js.map

/***/ }),

/***/ "b1b3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c975");

/* eslint-disable */
!function (c) {
  var l,
      _t,
      o,
      e,
      h,
      _i,
      a = '<svg><symbol id="icon-all" viewBox="0 0 1024 1024"><path d="M384 896c-17.664 0-32-14.304-32-32L352 160c0-17.664 14.336-32 32-32s32 14.336 32 32l0 704C416 881.696 401.664 896 384 896z"  ></path><path d="M641.056 896.128c-17.696 0-32-14.304-32-32l0-704c0-17.664 14.304-32 32-32s32 14.336 32 32l0 704C673.056 881.824 658.752 896.128 641.056 896.128z"  ></path><path d="M864 736c-17.696 0-32-14.304-32-32L832 320c0-17.664 14.304-32 32-32s32 14.336 32 32l0 384C896 721.696 881.696 736 864 736z"  ></path><path d="M160 736c-17.664 0-32-14.304-32-32L128 320c0-17.664 14.336-32 32-32s32 14.336 32 32l0 384C192 721.696 177.664 736 160 736z"  ></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M596.16 284.064H258.56l101.376-101.44a31.968 31.968 0 1 0-45.248-45.216L178.56 273.504c-11.904 11.872-18.496 27.84-18.56 44.8a63.04 63.04 0 0 0 18.56 45.28l136.128 136.16a31.904 31.904 0 0 0 45.248 0 31.968 31.968 0 0 0 0-45.248l-106.752-106.496H596.16c114.88 0 208.32 93.312 208.32 208s-93.44 208-208.32 208h-223.36a32 32 0 0 0 0 64h223.36c150.144 0 272.32-122.016 272.32-272 0-149.984-122.176-272-272.32-272"  ></path></symbol><symbol id="icon-rotate-right" viewBox="0 0 1024 1024"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"  ></path><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z"  ></path></symbol><symbol id="icon-sync" viewBox="0 0 1024 1024"><path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8zM924 512h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4S687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8 0.1-4.5-3.5-8.2-8-8.2z"  ></path></symbol><symbol id="icon-reload" viewBox="0 0 1024 1024"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-0.7-8.9-4.9-10.3l-56.7-19.5c-4.1-1.4-8.6 0.7-10.1 4.8-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4-31.6 31.6-68.4 56.4-109.3 73.8-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27-40.9-17.3-77.7-42.1-109.3-73.8-31.6-31.6-56.4-68.4-73.7-109.4-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27 40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c-0.1-6.6-7.8-10.3-13-6.2z"  ></path></symbol><symbol id="icon-appstore" viewBox="0 0 1024 1024"><path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H212V212h200v200zM864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H212V612h200v200zM864 544H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H612V612h200v200z"  ></path></symbol><symbol id="icon-bulb" viewBox="0 0 1024 1024"><path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328z m127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"  ></path></symbol><symbol id="icon-lock" viewBox="0 0 1024 1024"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240z m460 600H232V536h560v304z"  ></path><path d="M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53c12.1-8.7 20-22.9 20-39 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 16.1 7.9 30.3 20 39z"  ></path></symbol><symbol id="icon-arrawsalt" viewBox="0 0 1024 1024"><path d="M855 160.1l-189.2 23.5c-6.6 0.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5c-3.1 3.1-3.1 8.2 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7c4.7 4.7 12.7 1.9 13.5-4.7L863.9 169c0.7-5.2-3.7-9.6-8.9-8.9zM416.6 562.3c-3.1-3.1-8.2-3.1-11.3 0L251.8 715.9l-54.7-54.7c-4.7-4.7-12.7-1.9-13.5 4.7L160.1 855c-0.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-0.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"  ></path></symbol><symbol id="icon-colum-height" viewBox="0 0 1024 1024"><path d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM840 112H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7c-2.9-3.7-8.5-3.7-11.3 0L403.6 366.3c-3.7 4.7-0.4 11.7 5.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H548V378h62.8z"  ></path></symbol><symbol id="icon-totop" viewBox="0 0 1024 1024"><path d="M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171c-3.2-4.1-9.4-4.1-12.6 0l-112 141.7c-4.1 5.3-0.4 13 6.3 13z"  ></path></symbol><symbol id="icon-italic" viewBox="0 0 1024 1024"><path d="M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-column-width" viewBox="0 0 1024 1024"><path d="M180 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM904 176h-60c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8zM785.3 504.3L657.7 403.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H378v-62.8c0-6-7-9.4-11.7-5.7L238.7 508.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h268v62.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.8-2.9 3.8-8.5 0.2-11.4z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"  ></path></symbol><symbol id="icon-rollback" viewBox="0 0 1024 1024"><path d="M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"  ></path></symbol><symbol id="icon-pause" viewBox="0 0 1024 1024"><path d="M304 176h80v672h-80zM712 176h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-drag" viewBox="0 0 1024 1024"><path d="M909.3 506.3L781.7 405.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 242.3c-3.7 4.7-0.4 11.7 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.7-2.9 3.7-8.5 0.1-11.4z"  ></path></symbol><symbol id="icon-fire" viewBox="0 0 1024 1024"><path d="M834.1 469.2c-19.5-43.8-47.4-82.6-82.9-115.2l-29.1-26.7c-4.3-3.8-11.1-2.1-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1 0.1-2.8-0.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5-14.2 17.2-30.1 32.7-47.5 46.1-42.1 32.3-76.8 74.4-100.3 121.5C172.5 503.3 160 556.6 160 610c0 47.2 9.3 92.9 27.7 136 17.8 41.5 43.2 78.9 75.5 110.9 32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3c41.9-17.5 79.6-42.6 111.9-74.7 32.4-32 57.8-69.4 75.5-110.9 18.4-43.1 27.7-88.8 27.7-136 0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9 21.5-16.4 41.2-35.5 58.6-56.8 25-30.5 44.6-64.5 58.2-101 5.4-14.5 9.5-30 12.1-46.5 24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7-1.4 22.8 7.5 44.5 24.4 59.8 14.7 13.2 33.7 19.9 53.4 18.8 19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"  ></path></symbol><symbol id="icon-swap-right" viewBox="0 0 1024 1024"><path d="M873.1 596.2l-164-208C703 380.5 693.8 376 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M384 752.288l299.68-231.552L384 289.152V752.32z m-64 65.152V224a32 32 0 0 1 51.552-25.312l384 296.704a32 32 0 0 1 0 50.656l-384 296.736A32 32 0 0 1 320 817.44z"  ></path></symbol><symbol id="icon-eye-close" viewBox="0 0 1024 1024"><path d="M942.3 486.4l-0.1-0.1-0.1-0.1c-36.4-76.7-80-138.7-130.7-186L760.7 351c43.7 40.2 81.5 93.7 114.1 160.9C791.5 684.2 673.4 766 512 766c-51.3 0-98.3-8.3-141.2-25.1l-54.7 54.7C374.6 823.8 439.8 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0.1-51.3zM878.3 154.2l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L707.8 228.5C649.4 200.2 584.2 186 512 186c-192.2 0-335.4 100.5-430.2 300.3v0.1c-7.7 16.2-7.7 35.2 0 51.5 36.4 76.7 80 138.7 130.7 186.1L111.8 824.5c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0l712.8-712.8c3.1-3 3.1-8.1 0-11.2zM398.9 537.4c-1.9-8.2-2.9-16.7-2.9-25.4 0-61.9 50.1-112 112-112 8.7 0 17.3 1 25.4 2.9L398.9 537.4z m184.5-184.5C560.5 342.1 535 336 508 336c-97.2 0-176 78.8-176 176 0 27 6.1 52.5 16.9 75.4L263.3 673c-43.7-40.2-81.5-93.7-114.1-160.9C232.6 339.8 350.7 258 512 258c51.3 0 98.3 8.3 141.2 25.1l-69.8 69.8z"  ></path><path d="M508 624c-6.4 0-12.7-0.5-18.8-1.6l-51.1 51.1c21.4 9.3 45.1 14.4 69.9 14.4 97.2 0 176-78.8 176-176 0-24.8-5.1-48.5-14.4-69.9l-51.1 51.1c1 6.1 1.6 12.4 1.6 18.8C620 573.9 569.9 624 508 624z"  ></path></symbol><symbol id="icon-circle" viewBox="0 0 1024 1024"><path d="M512 903.0656c215.9616 0 391.0656-175.104 391.0656-391.0656S727.9616 120.9344 512 120.9344 120.9344 296.0384 120.9344 512s175.104 391.0656 391.0656 391.0656z m0 64c-251.392 0-455.0656-203.776-455.0656-455.0656S260.608 56.9344 512 56.9344s455.0656 203.776 455.0656 455.0656S763.392 967.0656 512 967.0656z" fill="#323233" ></path></symbol></svg>',
      s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss");

  if (s && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (c) {
      console && console.log(c);
    }
  }

  function d() {
    h || (h = !0, o());
  }

  l = function l() {
    var c, l, t, o;
    (o = document.createElement("div")).innerHTML = a, a = null, (t = o.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", c = t, (l = document.body).firstChild ? (o = c, (t = l.firstChild).parentNode.insertBefore(o, t)) : l.appendChild(c));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(l, 0) : (_t = function t() {
    document.removeEventListener("DOMContentLoaded", _t, !1), l();
  }, document.addEventListener("DOMContentLoaded", _t, !1)) : document.attachEvent && (o = l, e = c.document, h = !1, (_i = function i() {
    try {
      e.documentElement.doScroll("left");
    } catch (c) {
      return void setTimeout(_i, 50);
    }

    d();
  })(), e.onreadystatechange = function () {
    "complete" == e.readyState && (e.onreadystatechange = null, d());
  });
}(window);

/***/ }),

/***/ "b455":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.piMod = exports.getBBoxRange = exports.getBBoxByArray = exports.isNumberEqual = exports.distance = void 0;
function minNum(array) {
    return Math.min.apply(null, array);
}
function maxNum(array) {
    return Math.max.apply(null, array);
}
/**
 * 两点之间的距离
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 结束点 x
 * @param {number} y2 结束点 y
 * @return {number} 距离
 */
function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.distance = distance;
function isNumberEqual(v1, v2) {
    return Math.abs(v1 - v2) < 0.001;
}
exports.isNumberEqual = isNumberEqual;
function getBBoxByArray(xArr, yArr) {
    var minX = minNum(xArr);
    var minY = minNum(yArr);
    var maxX = maxNum(xArr);
    var maxY = maxNum(yArr);
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
exports.getBBoxByArray = getBBoxByArray;
function getBBoxRange(x1, y1, x2, y2) {
    return {
        minX: minNum([x1, x2]),
        maxX: maxNum([x1, x2]),
        minY: minNum([y1, y2]),
        maxY: maxNum([y1, y2]),
    };
}
exports.getBBoxRange = getBBoxRange;
function piMod(angle) {
    return (angle + Math.PI * 2) % (Math.PI * 2);
}
exports.piMod = piMod;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b65f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: function trunc(it) {
    return (it > 0 ? floor : ceil)(it);
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bd8b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toString = {}.toString;
var isType = function (value, type) { return toString.call(value) === '[object ' + type + ']'; };
exports.default = isType;
//# sourceMappingURL=is-type.js.map

/***/ }),

/***/ "be6e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_arc_params_1 = __webpack_require__("90f6");
var get_arc_params_2 = __webpack_require__("90f6");
var parse_path_1 = __webpack_require__("18f2");
// 点对称
function toSymmetry(point, center) {
    return [center[0] + (center[0] - point[0]), center[1] + (center[1] - point[1])];
}
function getSegments(path) {
    path = parse_path_1.default(path);
    var segments = [];
    var currentPoint = null; // 当前图形
    var nextParams = null; // 下一节点的 path 参数
    var startMovePoint = null; // 开始 M 的点，可能会有多个
    var lastStartMovePointIndex = 0; // 最近一个开始点 M 的索引
    var count = path.length;
    for (var i = 0; i < count; i++) {
        var params = path[i];
        nextParams = path[i + 1];
        var command = params[0];
        // 数学定义上的参数，便于后面的计算
        var segment = {
            command: command,
            prePoint: currentPoint,
            params: params,
            startTangent: null,
            endTangent: null,
        };
        switch (command) {
            case 'M':
                startMovePoint = [params[1], params[2]];
                lastStartMovePointIndex = i;
                break;
            case 'A':
                var arcParams = get_arc_params_1.default(currentPoint, params);
                segment['arcParams'] = arcParams;
                break;
            default:
                break;
        }
        if (command === 'Z') {
            // 有了 Z 后，当前节点从开始 M 的点开始
            currentPoint = startMovePoint;
            // 如果当前点的命令为 Z，相当于当前点为最近一个 M 点，则下一个点直接指向最近一个 M 点的下一个点
            nextParams = path[lastStartMovePointIndex + 1];
        }
        else {
            var len = params.length;
            currentPoint = [params[len - 2], params[len - 1]];
        }
        if (nextParams && nextParams[0] === 'Z') {
            // 如果下一个点的命令为 Z，则下一个点直接指向最近一个 M 点
            nextParams = path[lastStartMovePointIndex];
            if (segments[lastStartMovePointIndex]) {
                // 如果下一个点的命令为 Z，则最近一个 M 点的前一个点为当前点
                segments[lastStartMovePointIndex].prePoint = currentPoint;
            }
        }
        segment['currentPoint'] = currentPoint;
        // 如果当前点与最近一个 M 点相同，则最近一个 M 点的前一个点为当前点的前一个点
        if (segments[lastStartMovePointIndex] &&
            get_arc_params_2.isSamePoint(currentPoint, segments[lastStartMovePointIndex].currentPoint)) {
            segments[lastStartMovePointIndex].prePoint = segment.prePoint;
        }
        var nextPoint = nextParams ? [nextParams[nextParams.length - 2], nextParams[nextParams.length - 1]] : null;
        segment['nextPoint'] = nextPoint;
        // Add startTangent and endTangent
        var prePoint = segment.prePoint;
        if (['L', 'H', 'V'].includes(command)) {
            segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
            segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
        }
        else if (command === 'Q') {
            // 二次贝塞尔曲线只有一个控制点
            var cp = [params[1], params[2]];
            // 二次贝塞尔曲线的终点为 currentPoint
            segment.startTangent = [prePoint[0] - cp[0], prePoint[1] - cp[1]];
            segment.endTangent = [currentPoint[0] - cp[0], currentPoint[1] - cp[1]];
        }
        else if (command === 'T') {
            var preSegment = segments[i - 1];
            var cp = toSymmetry(preSegment.currentPoint, prePoint);
            if (preSegment.command === 'Q') {
                segment.command = 'Q';
                segment.startTangent = [prePoint[0] - cp[0], prePoint[1] - cp[1]];
                segment.endTangent = [currentPoint[0] - cp[0], currentPoint[1] - cp[1]];
            }
            else {
                segment.command = 'TL';
                segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
                segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
            }
        }
        else if (command === 'C') {
            // 三次贝塞尔曲线有两个控制点
            var cp1 = [params[1], params[2]];
            var cp2 = [params[3], params[4]];
            segment.startTangent = [prePoint[0] - cp1[0], prePoint[1] - cp1[1]];
            segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
        }
        else if (command === 'S') {
            var preSegment = segments[i - 1];
            var cp1 = toSymmetry(preSegment.currentPoint, prePoint);
            var cp2 = [params[1], params[2]];
            if (preSegment.command === 'C') {
                segment.command = 'C'; // 将 S 命令变换为 C 命令
                segment.startTangent = [prePoint[0] - cp1[0], prePoint[1] - cp1[1]];
                segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
            }
            else {
                segment.command = 'SQ'; // 将 S 命令变换为 SQ 命令
                segment.startTangent = [prePoint[0] - cp2[0], prePoint[1] - cp2[1]];
                segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
            }
        }
        else if (command === 'A') {
            var d = 0.001;
            var _a = segment['arcParams'] || {}, _b = _a.cx, cx = _b === void 0 ? 0 : _b, _c = _a.cy, cy = _c === void 0 ? 0 : _c, _d = _a.rx, rx = _d === void 0 ? 0 : _d, _e = _a.ry, ry = _e === void 0 ? 0 : _e, _f = _a.sweepFlag, sweepFlag = _f === void 0 ? 0 : _f, _g = _a.startAngle, startAngle = _g === void 0 ? 0 : _g, _h = _a.endAngle, endAngle = _h === void 0 ? 0 : _h;
            if (sweepFlag === 0) {
                d *= -1;
            }
            var dx1 = rx * Math.cos(startAngle - d) + cx;
            var dy1 = ry * Math.sin(startAngle - d) + cy;
            segment.startTangent = [dx1 - startMovePoint[0], dy1 - startMovePoint[1]];
            var dx2 = rx * Math.cos(startAngle + endAngle + d) + cx;
            var dy2 = ry * Math.sin(startAngle + endAngle - d) + cy;
            segment.endTangent = [prePoint[0] - dx2, prePoint[1] - dy2];
        }
        segments.push(segment);
    }
    return segments;
}
exports.default = getSegments;
//# sourceMappingURL=path-2-segments.js.map

/***/ }),

/***/ "bed6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Widget_vue_vue_type_style_index_0_id_69ce083e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ffa4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Widget_vue_vue_type_style_index_0_id_69ce083e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Widget_vue_vue_type_style_index_0_id_69ce083e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c2ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ab4");
/* harmony import */ var _antv_g_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6855");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4799");
/* harmony import */ var _util_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("f5e5");




var Group = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "b"])(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Group.prototype.onCanvasChange = function (changeType) {
        Object(_util_draw__WEBPACK_IMPORTED_MODULE_3__[/* refreshElement */ "f"])(this, changeType);
    };
    Group.prototype.getShapeBase = function () {
        return _shape__WEBPACK_IMPORTED_MODULE_2__;
    };
    Group.prototype.getGroupBase = function () {
        return Group;
    };
    // 同 shape 中的方法重复了
    Group.prototype._applyClip = function (context, clip) {
        if (clip) {
            context.save();
            // 将 clip 的属性挂载到 context 上
            Object(_util_draw__WEBPACK_IMPORTED_MODULE_3__[/* applyAttrsToContext */ "a"])(context, clip);
            // 绘制 clip 路径
            clip.createPath(context);
            context.restore();
            // 裁剪
            context.clip();
            clip._afterDraw();
        }
    };
    Group.prototype.draw = function (context, region) {
        var children = this.getChildren();
        if (children.length) {
            context.save();
            // group 上的矩阵和属性也会应用到上下文上
            // 先将 attrs 应用到上下文中，再设置 clip。因为 clip 应该被当前元素的 matrix 所影响
            Object(_util_draw__WEBPACK_IMPORTED_MODULE_3__[/* applyAttrsToContext */ "a"])(context, this);
            this._applyClip(context, this.getClip());
            Object(_util_draw__WEBPACK_IMPORTED_MODULE_3__[/* drawChildren */ "b"])(context, children, region);
            context.restore();
        }
        // 这里的成本比较大
        this.set('cacheCanvasBBox', this.getCanvasBBox());
        // 绘制后，消除更新标记
        this.set('hasChanged', false);
    };
    // 绘制时被跳过，一般发生在分组隐藏时
    Group.prototype.skipDraw = function () {
        this.set('cacheCanvasBBox', null);
        this.set('hasChanged', false);
    };
    return Group;
}(_antv_g_base__WEBPACK_IMPORTED_MODULE_1__[/* AbstractGroup */ "b"]));
/* harmony default export */ __webpack_exports__["a"] = (Group);
//# sourceMappingURL=group.js.map

/***/ }),

/***/ "c31b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = __webpack_require__("c3e2");
var util_1 = __webpack_require__("b455");
var bezier_1 = __webpack_require__("493b");
// 差值公式
function quadraticAt(p0, p1, p2, t) {
    var onet = 1 - t;
    return onet * onet * p0 + 2 * t * onet * p1 + t * t * p2;
}
// 求极值
function extrema(p0, p1, p2) {
    var a = p0 + p2 - 2 * p1;
    if (util_1.isNumberEqual(a, 0)) {
        return [0.5];
    }
    var rst = (p0 - p1) / a;
    if (rst <= 1 && rst >= 0) {
        return [rst];
    }
    return [];
}
function derivativeAt(p0, p1, p2, t) {
    return 2 * (1 - t) * (p1 - p0) + 2 * t * (p2 - p1);
}
// 分割贝塞尔曲线
function divideQuadratic(x1, y1, x2, y2, x3, y3, t) {
    // 划分点
    var xt = quadraticAt(x1, x2, x3, t);
    var yt = quadraticAt(y1, y2, y3, t);
    // 分割的第一条曲线的控制点
    var controlPoint1 = line_1.default.pointAt(x1, y1, x2, y2, t);
    // 分割的第二条曲线的控制点
    var controlPoint2 = line_1.default.pointAt(x2, y2, x3, y3, t);
    return [
        [x1, y1, controlPoint1.x, controlPoint1.y, xt, yt],
        [xt, yt, controlPoint2.x, controlPoint2.y, x3, y3],
    ];
}
// 使用迭代法取贝塞尔曲线的长度
function quadraticLength(x1, y1, x2, y2, x3, y3, iterationCount) {
    if (iterationCount === 0) {
        return (util_1.distance(x1, y1, x2, y2) + util_1.distance(x2, y2, x3, y3) + util_1.distance(x1, y1, x3, y3)) / 2;
    }
    var quadratics = divideQuadratic(x1, y1, x2, y2, x3, y3, 0.5);
    var left = quadratics[0];
    var right = quadratics[1];
    left.push(iterationCount - 1);
    right.push(iterationCount - 1);
    return quadraticLength.apply(null, left) + quadraticLength.apply(null, right);
}
exports.default = {
    box: function (x1, y1, x2, y2, x3, y3) {
        var xExtrema = extrema(x1, x2, x3)[0];
        var yExtrema = extrema(y1, y2, y3)[0];
        // 控制点不加入 box 的计算
        var xArr = [x1, x3];
        var yArr = [y1, y3];
        if (xExtrema !== undefined) {
            xArr.push(quadraticAt(x1, x2, x3, xExtrema));
        }
        if (yExtrema !== undefined) {
            yArr.push(quadraticAt(y1, y2, y3, yExtrema));
        }
        return util_1.getBBoxByArray(xArr, yArr);
    },
    length: function (x1, y1, x2, y2, x3, y3) {
        return quadraticLength(x1, y1, x2, y2, x3, y3, 3);
    },
    nearestPoint: function (x1, y1, x2, y2, x3, y3, x0, y0) {
        return bezier_1.nearestPoint([x1, x2, x3], [y1, y2, y3], x0, y0, quadraticAt);
    },
    pointDistance: function (x1, y1, x2, y2, x3, y3, x0, y0) {
        var point = this.nearestPoint(x1, y1, x2, y2, x3, y3, x0, y0);
        return util_1.distance(point.x, point.y, x0, y0);
    },
    interpolationAt: quadraticAt,
    pointAt: function (x1, y1, x2, y2, x3, y3, t) {
        return {
            x: quadraticAt(x1, x2, x3, t),
            y: quadraticAt(y1, y2, y3, t),
        };
    },
    divide: function (x1, y1, x2, y2, x3, y3, t) {
        return divideQuadratic(x1, y1, x2, y2, x3, y3, t);
    },
    tangentAngle: function (x1, y1, x2, y2, x3, y3, t) {
        var dx = derivativeAt(x1, x2, x3, t);
        var dy = derivativeAt(y1, y2, y3, t);
        var angle = Math.atan2(dy, dx);
        return util_1.piMod(angle);
    },
};
//# sourceMappingURL=quadratic.js.map

/***/ }),

/***/ "c3e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("b455");
var vec2 = __webpack_require__("6711");
exports.default = {
    /**
     * 计算线段的包围盒
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @return {object} 包围盒对象
     */
    box: function (x1, y1, x2, y2) {
        return util_1.getBBoxByArray([x1, x2], [y1, y2]);
    },
    /**
     * 线段的长度
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @return {number} 距离
     */
    length: function (x1, y1, x2, y2) {
        return util_1.distance(x1, y1, x2, y2);
    },
    /**
     * 根据比例获取点
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @param {number} t 指定比例
     * @return {object} 包含 x, y 的点
     */
    pointAt: function (x1, y1, x2, y2, t) {
        return {
            x: (1 - t) * x1 + t * x2,
            y: (1 - t) * y1 + t * y2,
        };
    },
    /**
     * 点到线段的距离
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @param {number} x  测试点 x
     * @param {number} y  测试点 y
     * @return {number} 距离
     */
    pointDistance: function (x1, y1, x2, y2, x, y) {
        // 投影距离 x1, y1 的向量，假设 p, p1, p2 三个点，投影点为 a
        // p1a = p1p.p1p2/|p1p2| * (p1p 的单位向量)
        var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
        if (cross < 0) {
            return util_1.distance(x1, y1, x, y);
        }
        var lengthSquare = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        if (cross > lengthSquare) {
            return util_1.distance(x2, y2, x, y);
        }
        return this.pointToLine(x1, y1, x2, y2, x, y);
    },
    /**
     * 点到直线的距离，而不是点到线段的距离
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @param {number} x  测试点 x
     * @param {number} y  测试点 y
     * @return {number} 距离
     */
    pointToLine: function (x1, y1, x2, y2, x, y) {
        var d = [x2 - x1, y2 - y1];
        // 如果端点相等，则判定点到点的距离
        if (vec2.exactEquals(d, [0, 0])) {
            return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
        }
        var u = [-d[1], d[0]];
        vec2.normalize(u, u);
        var a = [x - x1, y - y1];
        return Math.abs(vec2.dot(a, u));
    },
    /**
     * 线段的角度
     * @param {number} x1 起始点 x
     * @param {number} y1 起始点 y
     * @param {number} x2 结束点 x
     * @param {number} y2 结束点 y
     * @return {number} 导数
     */
    tangentAngle: function (x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    },
};
//# sourceMappingURL=line.js.map

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c563":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_AnimationTimeline_vue_vue_type_style_index_0_id_23f0760a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8259");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_AnimationTimeline_vue_vue_type_style_index_0_id_23f0760a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_AnimationTimeline_vue_vue_type_style_index_0_id_23f0760a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c94d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RANDOM; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cd3f":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("62e4")(module)))

/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d080":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function removeFromArray(arr, obj) {
    var index = arr.indexOf(obj);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
exports.removeFromArray = removeFromArray;
exports.isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var is_nil_1 = __webpack_require__("28f9");
exports.isNil = is_nil_1.default;
var is_function_1 = __webpack_require__("2047");
exports.isFunction = is_function_1.default;
var is_string_1 = __webpack_require__("61d8");
exports.isString = is_string_1.default;
var is_object_1 = __webpack_require__("9ab4f");
exports.isObject = is_object_1.default;
var is_array_1 = __webpack_require__("01f9");
exports.isArray = is_array_1.default;
var mix_1 = __webpack_require__("503e");
exports.mix = mix_1.default;
var each_1 = __webpack_require__("72fb");
exports.each = each_1.default;
var upper_first_1 = __webpack_require__("3c5c");
exports.upperFirst = upper_first_1.default;
// 是否元素的父容器
function isParent(container, shape) {
    // 所有 shape 都是 canvas 的子元素
    if (container.isCanvas()) {
        return true;
    }
    var parent = shape.getParent();
    var isParent = false;
    while (parent) {
        if (parent === container) {
            isParent = true;
            break;
        }
        parent = parent.getParent();
    }
    return isParent;
}
exports.isParent = isParent;
function isAllowCapture(element) {
    // @ts-ignore
    return element.cfg.visible && element.cfg.capture;
}
exports.isAllowCapture = isAllowCapture;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d5f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("3d7d");
function default_1(shape) {
    var attrs = shape.attr();
    var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2;
    var minX = Math.min(x1, x2);
    var maxX = Math.max(x1, x2);
    var minY = Math.min(y1, y2);
    var maxY = Math.max(y1, y2);
    var bbox = {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
    };
    bbox = util_1.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=line.js.map

/***/ }),

/***/ "d6a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var segments_1 = __webpack_require__("2412");
var util_1 = __webpack_require__("b455");
exports.default = {
    /**
     * 计算多折线的包围盒
     * @param {array} points 点的集合 [x,y] 的形式
     * @return {object} 包围盒
     */
    box: function (points) {
        var xArr = [];
        var yArr = [];
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            xArr.push(point[0]);
            yArr.push(point[1]);
        }
        return util_1.getBBoxByArray(xArr, yArr);
    },
    /**
     * 计算多折线的长度
     * @param {array} points 点的集合 [x,y] 的形式
     * @return {object} 多条边的长度
     */
    length: function (points) {
        return segments_1.lengthOfSegment(points);
    },
    /**
     * 根据比例获取多折线的点
     * @param {array} points 点的集合 [x,y] 的形式
     * @param {number} t 在多折线的长度上的比例
     * @return {object} 根据比例值计算出来的点
     */
    pointAt: function (points, t) {
        return segments_1.pointAtSegments(points, t);
    },
    /**
     * 指定点到多折线的距离
     * @param {array} points 点的集合 [x,y] 的形式
     * @param {number} x 指定点的 x
     * @param {number} y 指定点的 y
     * @return {number} 点到多折线的距离
     */
    pointDistance: function (points, x, y) {
        return segments_1.distanceAtSegment(points, x, y);
    },
    /**
     * 根据比例获取多折线的切线角度
     * @param {array} points 点的集合 [x,y] 的形式
     * @param {number} t 在多折线的长度上的比例
     * @return {object} 根据比例值计算出来的角度
     */
    tangentAngle: function (points, t) {
        return segments_1.angleAtSegments(points, t);
    },
};
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mod = function (n, m) {
    return ((n % m) + m) % m;
};
exports.default = mod;
//# sourceMappingURL=mod.js.map

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e018":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1b1c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4327f3fd", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e3ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parse_path_string_1 = __webpack_require__("1d5c");
var REGEX_MD = /[a-z]/;
function toSymmetry(p, c) {
    return [
        c[0] + (c[0] - p[0]),
        c[1] + (c[1] - p[1]),
    ];
}
function pathToAbsolute(pathString) {
    var pathArray = parse_path_string_1.default(pathString);
    if (!pathArray || !pathArray.length) {
        return [
            ['M', 0, 0],
        ];
    }
    var needProcess = false; // 如果存在小写的命令或者 V,H,T,S 则需要处理
    for (var i = 0; i < pathArray.length; i++) {
        var cmd = pathArray[i][0];
        // 如果存在相对位置的命令，则中断返回
        if (REGEX_MD.test(cmd) || ['V', 'H', 'T', 'S'].indexOf(cmd) >= 0) {
            needProcess = true;
            break;
        }
    }
    // 如果不存在相对命令，则直接返回
    // 如果在业务上都写绝对路径，这种方式最快，仅做了一次检测
    if (!needProcess) {
        return pathArray;
    }
    var res = [];
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var start = 0;
    var pa0;
    var dots;
    var first = pathArray[0];
    if (first[0] === 'M' || first[0] === 'm') {
        x = +first[1];
        y = +first[2];
        mx = x;
        my = y;
        start++;
        res[0] = ['M', x, y];
    }
    for (var i = start, ii = pathArray.length; i < ii; i++) {
        var pa = pathArray[i];
        var preParams = res[i - 1]; // 取前一个已经处理后的节点，否则会出现问题
        var r = [];
        var cmd = pa[0];
        var upCmd = cmd.toUpperCase();
        if (cmd !== upCmd) {
            r[0] = upCmd;
            switch (upCmd) {
                case 'A':
                    r[1] = pa[1];
                    r[2] = pa[2];
                    r[3] = pa[3];
                    r[4] = pa[4];
                    r[5] = pa[5];
                    r[6] = +pa[6] + x;
                    r[7] = +pa[7] + y;
                    break;
                case 'V':
                    r[1] = +pa[1] + y;
                    break;
                case 'H':
                    r[1] = +pa[1] + x;
                    break;
                case 'M':
                    mx = +pa[1] + x;
                    my = +pa[2] + y;
                    break; // for lint
                default:
                    for (var j = 1, jj = pa.length; j < jj; j++) {
                        r[j] = +pa[j] + ((j % 2) ? x : y);
                    }
            }
        }
        else { // 如果本来已经大写，则不处理
            r = pathArray[i];
        }
        // 需要在外面统一做，同时处理 V,H,S,T 等特殊指令
        switch (upCmd) {
            case 'Z':
                x = +mx;
                y = +my;
                break;
            case 'H':
                x = r[1];
                r = ['L', x, y];
                break;
            case 'V':
                y = r[1];
                r = ['L', x, y];
                break;
            case 'T':
                x = r[1];
                y = r[2];
                // 以 x, y 为中心的，上一个控制点的对称点
                // 需要假设上一个节点的命令为 Q
                var symetricT = toSymmetry([preParams[1], preParams[2]], [preParams[3], preParams[4]]);
                r = ['Q', symetricT[0], symetricT[1], x, y];
                break;
            case 'S':
                x = r[r.length - 2];
                y = r[r.length - 1];
                // 以 x,y 为中心，取上一个控制点，
                // 需要假设上一个线段为 C 或者 S
                var length_1 = preParams.length;
                var symetricS = toSymmetry([preParams[length_1 - 4], preParams[length_1 - 3]], [preParams[length_1 - 2], preParams[length_1 - 1]]);
                r = ['C', symetricS[0], symetricS[1], r[1], r[2], x, y];
                break;
            case 'M':
                mx = r[r.length - 2];
                my = r[r.length - 1];
                break; // for lint
            default:
                x = r[r.length - 2];
                y = r[r.length - 1];
        }
        res.push(r);
    }
    return res;
}
exports.default = pathToAbsolute;
//# sourceMappingURL=path-2-absolute.js.map

/***/ }),

/***/ "e3d5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3970");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("46564962", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e584":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".animation-timeline[data-v-23f0760a]{display:flex;flex-flow:column nowrap;width:100%;min-height:380px;overflow:hidden;border:1px solid #ccc;border-top:none}.animation-timeline header[data-v-23f0760a]{flex:none;display:flex;flex-flow:row nowrap;justify-content:space-between;width:100%;height:40px;border-top:3px solid #000;box-sizing:border-box;padding:0 12px}.animation-timeline__content[data-v-23f0760a]{width:100%;height:100%;border-top:1px solid #efefef;overflow:hidden;box-sizing:border-box;padding:0 0 12px 0}.animation-timeline__left[data-v-23f0760a]{float:left;display:flex;flex-flow:column nowrap;justify-content:flex-start;width:250px;height:100%;border-right:1px solid #efefef}.animation-timeline__menu[data-v-23f0760a]{height:56px;border-bottom:1px solid #efefef}.animation-timeline__max[data-v-23f0760a]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;height:32px;box-sizing:border-box;padding:0 12px}.animation-timeline__max span[data-v-23f0760a]{font-size:12px}.animation-timeline__max input[data-v-23f0760a]{width:78px;outline:none;border-radius:4px;padding-left:6px;border:1px solid #ccc}.animation-timeline__sign[data-v-23f0760a]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%;height:24px;box-sizing:border-box;padding:0 12px}.animation-timeline__sign svg[data-v-23f0760a]{font-size:12px;cursor:pointer}.animation-timeline__sign svg+svg[data-v-23f0760a]{margin-left:12px}.animation-timeline__widgets[data-v-23f0760a]{height:calc(100% - 56px);overflow:auto}.animation-timeline__right[data-v-23f0760a]{float:right;width:calc(100% - 251px);height:100%}.animation-timeline__icons[data-v-23f0760a]{flex:none;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;width:240px;height:100%;box-sizing:border-box;padding:0 12px 0 0}.animation-timeline__icons svg[data-v-23f0760a]{font-size:24px;cursor:pointer}.animation-timeline__icons svg+svg[data-v-23f0760a]{margin-left:12px}.animation-timeline__divider[data-v-23f0760a]{flex:none;height:16px;width:1px;background:#ccc;margin:0 12px}.animation-timeline__control[data-v-23f0760a]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%}.animation-timeline__control svg[data-v-23f0760a]{font-size:16px}.animation-timeline__title[data-v-23f0760a]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%;height:100%;box-sizing:border-box;padding:0 0 0 4px}.animation-timeline #painter[data-v-23f0760a]{width:100%;height:100%}[data-v-23f0760a]::-webkit-scrollbar{background-color:#fff;width:6px;height:6px;background-clip:padding-box}[data-v-23f0760a]::-webkit-scrollbar-button{height:0;width:0}[data-v-23f0760a]::-webkit-scrollbar-thumb{background-color:#b9b9bd;border-radius:3px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f105":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function requestAnimationFrame(fn) {
    var method = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
exports.default = requestAnimationFrame;
;
//# sourceMappingURL=request-animation-frame.js.map

/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f4c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 全局设置一个唯一离屏的 ctx，用于计算 isPointInPath
var offScreenCtx = null;
function getOffScreenContext() {
    if (!offScreenCtx) {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        offScreenCtx = canvas.getContext('2d');
    }
    return offScreenCtx;
}
exports.getOffScreenContext = getOffScreenContext;
//# sourceMappingURL=offscreen.js.map

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f5e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ applyAttrsToContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ drawChildren; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ drawPath; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ refreshElement; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getMergedRegion; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ mergeView; });

// UNUSED EXPORTS: getRefreshRegion

// EXTERNAL MODULE: ./node_modules/@antv/util/esm/index.js + 105 modules
var esm = __webpack_require__("8937");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/parse.js
var parse = __webpack_require__("af40");

// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/util.js
var util = __webpack_require__("7326");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/arc-params.js

// 向量长度
function vMag(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
// u.v/|u||v|，计算夹角的余弦值
function vRatio(u, v) {
    // 当存在一个向量的长度为 0 时，夹角也为 0，即夹角的余弦值为 1
    return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}
// 向量角度
function vAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
// A 0:rx 1:ry 2:x-axis-rotation 3:large-arc-flag 4:sweep-flag 5: x 6: y
function getArcParams(startPoint, params) {
    var rx = params[1];
    var ry = params[2];
    var xRotation = Object(util["m" /* mod */])(Object(util["o" /* toRadian */])(params[3]), Math.PI * 2);
    var arcFlag = params[4];
    var sweepFlag = params[5];
    // 弧形起点坐标
    var x1 = startPoint[0];
    var y1 = startPoint[1];
    // 弧形终点坐标
    var x2 = params[6];
    var y2 = params[7];
    var xp = (Math.cos(xRotation) * (x1 - x2)) / 2.0 + (Math.sin(xRotation) * (y1 - y2)) / 2.0;
    var yp = (-1 * Math.sin(xRotation) * (x1 - x2)) / 2.0 + (Math.cos(xRotation) * (y1 - y2)) / 2.0;
    var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }
    var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
    var f = diff ? Math.sqrt((rx * rx * (ry * ry) - diff) / diff) : 1;
    if (arcFlag === sweepFlag) {
        f *= -1;
    }
    if (isNaN(f)) {
        f = 0;
    }
    // 旋转前的起点坐标，且当长半轴和短半轴的长度为 0 时，坐标按 (0, 0) 处理
    var cxp = ry ? (f * rx * yp) / ry : 0;
    var cyp = rx ? (f * -ry * xp) / rx : 0;
    // 椭圆圆心坐标
    var cx = (x1 + x2) / 2.0 + Math.cos(xRotation) * cxp - Math.sin(xRotation) * cyp;
    var cy = (y1 + y2) / 2.0 + Math.sin(xRotation) * cxp + Math.cos(xRotation) * cyp;
    // 起始点的单位向量
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    // 终止点的单位向量
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    // 计算起始点和圆心的连线，与 x 轴正方向的夹角
    var theta = vAngle([1, 0], u);
    // 计算圆弧起始点和终止点与椭圆圆心连线的夹角
    var dTheta = vAngle(u, v);
    if (vRatio(u, v) <= -1) {
        dTheta = Math.PI;
    }
    if (vRatio(u, v) >= 1) {
        dTheta = 0;
    }
    if (sweepFlag === 0 && dTheta > 0) {
        dTheta = dTheta - 2 * Math.PI;
    }
    if (sweepFlag === 1 && dTheta < 0) {
        dTheta = dTheta + 2 * Math.PI;
    }
    return {
        cx: cx,
        cy: cy,
        // 弧形的起点和终点相同时，长轴和短轴的长度按 0 处理
        rx: Object(util["j" /* isSamePoint */])(startPoint, [x2, y2]) ? 0 : rx,
        ry: Object(util["j" /* isSamePoint */])(startPoint, [x2, y2]) ? 0 : ry,
        startAngle: theta,
        endAngle: theta + dTheta,
        xRotation: xRotation,
        arcFlag: arcFlag,
        sweepFlag: sweepFlag,
    };
}
//# sourceMappingURL=arc-params.js.map
// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/util/arrow.js
var arrow = __webpack_require__("9f27");

// CONCATENATED MODULE: ./node_modules/@antv/g-canvas/esm/util/draw.js





var SHAPE_ATTRS_MAP = {
    fill: 'fillStyle',
    stroke: 'strokeStyle',
    opacity: 'globalAlpha',
};
function applyAttrsToContext(context, element) {
    var attrs = element.attr();
    for (var k in attrs) {
        var v = attrs[k];
        // 转换一下不与 canvas 兼容的属性名
        var name_1 = SHAPE_ATTRS_MAP[k] ? SHAPE_ATTRS_MAP[k] : k;
        if (name_1 === 'matrix' && v) {
            // 设置矩阵
            context.transform(v[0], v[1], v[3], v[4], v[6], v[7]);
        }
        else if (name_1 === 'lineDash' && context.setLineDash) {
            // 设置虚线，只支持数组形式，非数组形式不做任何操作
            Object(esm["isArray"])(v) && context.setLineDash(v);
        }
        else {
            if (name_1 === 'strokeStyle' || name_1 === 'fillStyle') {
                // 如果存在渐变、pattern 这个开销有些大
                // 可以考虑缓存机制，通过 hasUpdate 来避免一些运算
                v = Object(parse["b" /* parseStyle */])(context, element, v);
            }
            else if (name_1 === 'globalAlpha') {
                // opacity 效果可以叠加，子元素的 opacity 需要与父元素 opacity 相乘
                v = v * context.globalAlpha;
            }
            context[name_1] = v;
        }
    }
}
function drawChildren(context, children, region) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.get('visible')) {
            child.draw(context, region);
        }
        else {
            child.skipDraw();
        }
    }
}
// 绘制 path
function drawPath(shape, context, attrs, arcParamsCache) {
    var path = attrs.path, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
    var currentPoint = [0, 0]; // 当前图形
    var startMovePoint = [0, 0]; // 开始 M 的点，可能会有多个
    var distance = {
        dx: 0,
        dy: 0,
    };
    context.beginPath();
    for (var i = 0; i < path.length; i++) {
        var params = path[i];
        var command = params[0];
        if (i === 0 && startArrow && startArrow.d) {
            var tangent = shape.getStartTangent();
            distance = arrow["c" /* getShortenOffset */](tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], startArrow.d);
        }
        else if (i === path.length - 2 && path[i + 1][0] === 'Z' && endArrow && endArrow.d) {
            // 为了防止结尾为 Z 的 segment 缩短不起效，需要取最后两个 segment 特殊处理
            var lastPath = path[i + 1];
            if (lastPath[0] === 'Z') {
                var tangent = shape.getEndTangent();
                distance = arrow["c" /* getShortenOffset */](tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
            }
        }
        else if (i === path.length - 1 && endArrow && endArrow.d) {
            if (path[0] !== 'Z') {
                var tangent = shape.getEndTangent();
                distance = arrow["c" /* getShortenOffset */](tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
            }
        }
        var dx = distance.dx, dy = distance.dy;
        // V,H,S,T 都在前面被转换成标准形式
        switch (command) {
            case 'M':
                context.moveTo(params[1] - dx, params[2] - dy);
                startMovePoint = [params[1], params[2]];
                break;
            case 'L':
                context.lineTo(params[1] - dx, params[2] - dy);
                break;
            case 'Q':
                context.quadraticCurveTo(params[1], params[2], params[3] - dx, params[4] - dy);
                break;
            case 'C':
                context.bezierCurveTo(params[1], params[2], params[3], params[4], params[5] - dx, params[6] - dy);
                break;
            case 'A': {
                var arcParams = void 0;
                // 为了加速绘制，可以提供参数的缓存，各个图形自己缓存
                if (arcParamsCache) {
                    arcParams = arcParamsCache[i];
                    if (!arcParams) {
                        arcParams = getArcParams(currentPoint, params);
                        arcParamsCache[i] = arcParams;
                    }
                }
                else {
                    arcParams = getArcParams(currentPoint, params);
                }
                var cx = arcParams.cx, cy = arcParams.cy, rx = arcParams.rx, ry = arcParams.ry, startAngle = arcParams.startAngle, endAngle = arcParams.endAngle, xRotation = arcParams.xRotation, sweepFlag = arcParams.sweepFlag;
                // 直接使用椭圆的 api
                if (context.ellipse) {
                    context.ellipse(cx, cy, rx, ry, xRotation, startAngle, endAngle, 1 - sweepFlag);
                }
                else {
                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;
                    context.translate(cx, cy);
                    context.rotate(xRotation);
                    context.scale(scaleX, scaleY);
                    context.arc(0, 0, r, startAngle, endAngle, 1 - sweepFlag);
                    context.scale(1 / scaleX, 1 / scaleY);
                    context.rotate(-xRotation);
                    context.translate(-cx, -cy);
                }
                break;
            }
            case 'Z':
                context.closePath();
                break;
            default:
                break;
        }
        // 有了 Z 后，当前节点从开始 M 的点开始
        if (command === 'Z') {
            currentPoint = startMovePoint;
        }
        else {
            var len = params.length;
            currentPoint = [params[len - 2], params[len - 1]];
        }
    }
}
// 刷新图形元素(Shape 或者 Group)
function refreshElement(element, changeType) {
    var canvas = element.get('canvas');
    // 只有存在于 canvas 上时生效
    if (canvas) {
        if (changeType === 'remove') {
            // 一旦 remove，则无法在 element 上拿到包围盒
            // destroy 后所有属性都拿不到，所以需要暂存一下
            // 这是一段 hack 的代码
            element._cacheCanvasBBox = element.get('cacheCanvasBBox');
        }
        // 防止反复刷新
        if (!element.get('hasChanged')) {
            // 本来只有局部渲染模式下，才需要记录更新的元素队列
            // if (canvas.get('localRefresh')) {
            //   canvas.refreshElement(element, changeType, canvas);
            // }
            // 但对于 https://github.com/antvis/g/issues/422 的场景，全局渲染的模式下也需要记录更新的元素队列
            canvas.refreshElement(element, changeType, canvas);
            if (canvas.get('autoDraw')) {
                canvas.draw();
            }
            element.set('hasChanged', true);
        }
    }
}
function getRefreshRegion(element) {
    var region;
    if (!element.destroyed) {
        var cacheBox = element.get('cacheCanvasBBox');
        var validCache = cacheBox && !!(cacheBox.width && cacheBox.height);
        var bbox = element.getCanvasBBox();
        var validBBox = bbox && !!(bbox.width && bbox.height);
        // 是否是有效 bbox 判定，一些 NaN 或者 宽高为 0 的情况过滤掉
        if (validCache && validBBox) {
            region = Object(util["l" /* mergeRegion */])(cacheBox, bbox);
        }
        else if (validCache) {
            region = cacheBox;
        }
        else if (validBBox) {
            region = bbox;
        }
    }
    else {
        // 因为元素已经销毁所以无法获取到缓存的包围盒
        region = element['_cacheCanvasBBox'];
    }
    return region;
}
function getMergedRegion(elements) {
    if (!elements.length) {
        return null;
    }
    var minXArr = [];
    var minYArr = [];
    var maxXArr = [];
    var maxYArr = [];
    Object(esm["each"])(elements, function (el) {
        var region = getRefreshRegion(el);
        if (region) {
            minXArr.push(region.minX);
            minYArr.push(region.minY);
            maxXArr.push(region.maxX);
            maxYArr.push(region.maxY);
        }
    });
    return {
        minX: Math.min.apply(null, minXArr),
        minY: Math.min.apply(null, minYArr),
        maxX: Math.max.apply(null, maxXArr),
        maxY: Math.max.apply(null, maxYArr),
    };
}
function mergeView(region, viewRegion) {
    if (!region || !viewRegion) {
        return null;
    }
    // 不相交，则直接返回 null
    if (!Object(util["f" /* intersectRect */])(region, viewRegion)) {
        return null;
    }
    return {
        minX: Math.max(region.minX, viewRegion.minX),
        minY: Math.max(region.minY, viewRegion.minY),
        maxX: Math.min(region.maxX, viewRegion.maxX),
        maxY: Math.min(region.maxY, viewRegion.maxY),
    };
}
//# sourceMappingURL=draw.js.map

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AnimationTimeline", function() { return /* reexport */ AnimationTimeline; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/vue-demi/lib/index.esm.js
var index_esm = __webpack_require__("72dd");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/lib/AnimationTimeline.vue?vue&type=template&id=23f0760a&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-23f0760a");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-23f0760a");

var _hoisted_1 = {
  class: "animation-timeline"
};
var _hoisted_2 = {
  class: "animation-timeline__icons"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "animation-timeline__divider"
}, null, -1);

var _hoisted_4 = {
  class: "animation-timeline__control"
};
var _hoisted_5 = {
  class: "animation-timeline__title"
};
var _hoisted_6 = {
  class: "animation-timeline__content"
};
var _hoisted_7 = {
  class: "animation-timeline__left"
};
var _hoisted_8 = {
  class: "animation-timeline__menu"
};
var _hoisted_9 = {
  class: "animation-timeline__max"
};

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, "总时长：", -1);

var _hoisted_11 = {
  class: "animation-timeline__sign"
};
var _hoisted_12 = {
  class: "animation-timeline__widgets",
  ref: "container"
};

var _hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  class: "animation-timeline__right"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
  id: "painter"
})], -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("svg-icon");

  var _component_widget = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("widget");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("header", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": _ctx.isPlay ? 'pause' : 'play',
    onClick: _ctx.handlePlay
  }, null, 8, ["icon-name", "onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "reload",
    style: {
      "font-size": "20px"
    },
    onClick: _ctx.handleReset
  }, null, 8, ["onClick"]), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "rollback",
    onClick: _ctx.handleBack
  }, null, 8, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": _ctx.isRepeat ? 'sync' : 'swap-right',
    onClick: _ctx.handleRepeat
  }, null, 8, ["icon-name", "onClick"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.timeScale), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.maxTimeScale), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("section", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_9, [_hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.maxTimeScale = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.maxTimeScale, void 0, {
    trim: true
  }]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "eye-close"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "lock"
  })]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "activity"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "layers"
  })])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_12, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.options, function (option, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_widget, {
      time: _ctx.time,
      option: option,
      key: index,
      onTimeUpdate: _ctx.handleTimeUpdate,
      onUpdate: _ctx.handleUpdate
    }, null, 8, ["time", "option", "onTimeUpdate", "onUpdate"]);
  }), 128))], 512)]), _hoisted_13])]);
});
// CONCATENATED MODULE: ./src/lib/AnimationTimeline.vue?vue&type=template&id=23f0760a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__("5db7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__("73d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.trunc.js
var es_math_trunc = __webpack_require__("b65f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/animejs/lib/anime.es.js
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ var anime_es = (anime);

// CONCATENATED MODULE: ./node_modules/dayjs/esm/constant.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?\.?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
// CONCATENATED MODULE: ./node_modules/dayjs/esm/locale/en.js
// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
/* harmony default export */ var en = ({
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
});
// CONCATENATED MODULE: ./node_modules/dayjs/esm/utils.js


var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var utils_monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var utils_prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q: Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

/* harmony default export */ var utils = ({
  s: padStart,
  z: padZoneStr,
  m: utils_monthDiff,
  a: absFloor,
  p: utils_prettyUnit,
  u: isUndefined
});
// CONCATENATED MODULE: ./node_modules/dayjs/esm/index.js



var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;

var isDayjs = function isDayjs(d) {
  return d instanceof esm_Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    if (Ls[preset]) {
      l = preset;
    }

    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new esm_Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = utils; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var esm_parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var esm_Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = esm_parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;

    if (unit === M || unit === Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === M) {
      return this.set(M, this.$M + number);
    }

    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }

    if (unit === D) {
      return instanceFactorySet(1);
    }

    if (unit === W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    if (!this.isValid()) return INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var locale = this.$locale();
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].substr(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = esm_Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', MS], ['$s', S], ['$m', MIN], ['$H', H], ['$W', D], ['$M', M], ['$y', Y], ['$D', DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, esm_Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
/* harmony default export */ var esm = (dayjs);
// EXTERNAL MODULE: ./node_modules/@antv/g-canvas/esm/index.js
var g_canvas_esm = __webpack_require__("53c8");

// EXTERNAL MODULE: ./node_modules/@vueuse/shared/node_modules/vue-demi/lib/index.esm.js
var lib_index_esm = __webpack_require__("34f9");

// CONCATENATED MODULE: ./node_modules/@vueuse/shared/dist/index.esm.js


/**
 * Two-way refs synchronization.
 *
 * @param a
 * @param b
 */
function biSyncRef(a, b) {
    const flush = 'sync';
    const stop1 = Object(lib_index_esm["watch"])(a, (newValue) => {
        b.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    const stop2 = Object(lib_index_esm["watch"])(b, (newValue) => {
        a.value = newValue;
    }, {
        flush,
        immediate: true,
    });
    return () => {
        stop1();
        stop2();
    };
}

/**
 * Explicitly define the deps of computed.
 *
 * @param source
 * @param fn
 */
function controlledComputed(source, fn) {
    const v = Object(lib_index_esm["ref"])(fn());
    Object(lib_index_esm["watch"])(source, () => v.value = fn(), {
        flush: 'sync',
    });
    return Object(lib_index_esm["computed"])(() => v.value);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const isClient = typeof window !== 'undefined';
const isDef = (val) => typeof val !== 'undefined';
const assert = (condition, ...infos) => {
    if (!condition)
        console.warn(...infos);
};
const index_esm_toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === 'boolean';
const isFunction = (val) => typeof val === 'function';
const isNumber = (val) => typeof val === 'number';
const isString = (val) => typeof val === 'string';
const isObject = (val) => index_esm_toString.call(val) === '[object Object]';
const isWindow = (val) => typeof window !== 'undefined' && index_esm_toString.call(val) === '[object Window]';
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => { };

/**
 * @internal
 */
function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
        filter(() => fn.apply(this, args), { fn, thisArg: this, args });
    }
    return wrapper;
}
const bypassFilter = (invoke) => {
    return invoke();
};
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
function debounceFilter(ms) {
    if (ms <= 0)
        return bypassFilter;
    let timer;
    const filter = (invoke) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(invoke, ms);
    };
    return filter;
}
/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 */
function throttleFilter(ms, trailing = true) {
    if (ms <= 0)
        return bypassFilter;
    let lastExec = 0;
    let timer;
    const clear = () => {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
    };
    const filter = (invoke) => {
        const elapsed = Date.now() - lastExec;
        clear();
        if (elapsed > ms) {
            lastExec = Date.now();
            invoke();
        }
        else if (trailing) {
            timer = setTimeout(() => {
                clear();
                invoke();
            }, ms);
        }
    };
    return filter;
}
/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the PauseableFilter is active, default to none
 *
 */
function pausableFilter(extendFilter = bypassFilter) {
    const isActive = Object(lib_index_esm["ref"])(true);
    function pause() {
        isActive.value = false;
    }
    function resume() {
        isActive.value = true;
    }
    const eventFilter = (...args) => {
        if (isActive.value)
            extendFilter(...args);
    };
    return { isActive, pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = 'Timeout') {
    return new Promise((resolve, reject) => {
        if (throwOnTimeout)
            setTimeout(() => reject(reason), ms);
        else
            setTimeout(resolve, ms);
    });
}
function invoke(fn) {
    return fn();
}

// implementation
function watchWithFilter(source, cb, options = {}) {
    const { eventFilter = bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    return Object(lib_index_esm["watch"])(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

// implementation
function debouncedWatch(source, cb, options = {}) {
    const { debounce = 0 } = options, watchOptions = __rest(options, ["debounce"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: debounceFilter(debounce) }));
}

// implementation
function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
    for (const [key, value] of Object.entries(extend)) {
        if (key === 'value')
            continue;
        if (Object(lib_index_esm["isRef"])(value) && unwrap) {
            Object.defineProperty(ref, key, {
                get() {
                    return value.value;
                },
                set(v) {
                    value.value = v;
                },
                enumerable,
            });
        }
        else {
            Object.defineProperty(ref, key, { value, enumerable });
        }
    }
    return ref;
}

function ignorableWatch(source, cb, options = {}) {
    const { eventFilter = bypassFilter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const filteredCb = createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === 'sync') {
        const ignore = Object(lib_index_esm["ref"])(false);
        // no op for flush: sync
        ignorePrevAsyncUpdates = () => { };
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            ignore.value = true;
            updater();
            ignore.value = false;
        };
        stop = Object(lib_index_esm["watch"])(source, (...args) => {
            if (!ignore.value)
                filteredCb(...args);
        }, watchOptions);
    }
    else {
        // flush 'pre' and 'post'
        const disposables = [];
        // counters for how many following changes to be ignored
        // ignoreCounter is incremented before there is a history operation
        // affecting the source ref value (undo, redo, revert).
        // syncCounter is incremented in sync with every change to the
        // source ref value. This let us know how many times the ref
        // was modified and support chained sync operations. If there
        // are more sync triggers than the ignore count, the we now
        // there are modifications in the source ref value that we
        // need to commit
        const ignoreCounter = Object(lib_index_esm["ref"])(0);
        const syncCounter = Object(lib_index_esm["ref"])(0);
        ignorePrevAsyncUpdates = () => {
            ignoreCounter.value = syncCounter.value;
        };
        // Sync watch to count modifications to the source
        disposables.push(Object(lib_index_esm["watch"])(source, () => {
            syncCounter.value++;
        }, Object.assign(Object.assign({}, watchOptions), { flush: 'sync' })));
        ignoreUpdates = (updater) => {
            // Call the updater function and count how many sync updates are performed,
            // then add them to the ignore count
            const syncCounterPrev = syncCounter.value;
            updater();
            ignoreCounter.value += syncCounter.value - syncCounterPrev;
        };
        disposables.push(Object(lib_index_esm["watch"])(source, (...args) => {
            // If a history operation was performed (ignoreCounter > 0) and there are
            // no other changes to the source ref value afterwards, then ignore this commit
            const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
            ignoreCounter.value = 0;
            syncCounter.value = 0;
            if (ignore)
                return;
            filteredCb(...args);
        }, watchOptions));
        stop = () => {
            disposables.forEach(fn => fn());
        };
    }
    return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function makeDestructurable(obj, arr) {
    if (typeof Symbol !== 'undefined') {
        const clone = Object.assign({}, obj);
        Object.defineProperty(clone, Symbol.iterator, {
            enumerable: false,
            value() {
                let index = 0;
                return {
                    next: () => ({
                        value: arr[index++],
                        done: index > arr.length,
                    }),
                };
            },
        });
        return clone;
    }
    else {
        return Object.assign([...arr], obj);
    }
}

// implementation
function pausableWatch(source, cb, options = {}) {
    const { eventFilter: filter } = options, watchOptions = __rest(options, ["eventFilter"]);
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter }));
    return { stop, pause, resume, isActive };
}

/**
 * Keep target ref(s) in sync with the source ref
 *
 * @param source source ref
 * @param targets
 */
function syncRef(source, targets, { flush = 'sync', deep = false, immediate = true, } = {}) {
    if (!Array.isArray(targets))
        targets = [targets];
    return Object(lib_index_esm["watch"])(source, (newValue) => {
        targets.forEach(target => target.value = newValue);
    }, {
        flush,
        deep,
        immediate,
    });
}

// implementation
function throttledWatch(source, cb, options = {}) {
    const { throttle = 0 } = options, watchOptions = __rest(options, ["throttle"]);
    return watchWithFilter(source, cb, Object.assign(Object.assign({}, watchOptions), { eventFilter: throttleFilter(throttle) }));
}

/**
 * Call onMounted() if it's inside a component lifecycle, if not, run just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
function tryOnMounted(fn, sync = true) {
    if (Object(lib_index_esm["getCurrentInstance"])())
        Object(lib_index_esm["onMounted"])(fn);
    else if (sync)
        fn();
    else
        Object(lib_index_esm["nextTick"])(fn);
}

/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
function tryOnUnmounted(fn) {
    if (Object(lib_index_esm["getCurrentInstance"])())
        Object(lib_index_esm["onUnmounted"])(fn);
}

/**
 * Basic counter with utility functions.
 *
 * @see   {@link https://vueuse.js.org/useCounter}
 * @param [initialValue=0]
 */
function useCounter(initialValue = 0) {
    const count = Object(lib_index_esm["ref"])(initialValue);
    const inc = (delta = 1) => (count.value += delta);
    const dec = (delta = 1) => (count.value -= delta);
    const get = () => count.value;
    const set = (val) => (count.value = val);
    const reset = (val = initialValue) => {
        initialValue = val;
        return set(val);
    };
    return { count, inc, dec, get, set, reset };
}

/**
 * Debounce execution of a function.
 *
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return A new, debounce, function.
 */
function useDebounceFn(fn, ms = 200) {
    return createFilterWrapper(debounceFilter(ms), fn);
}

function useDebounce(value, ms = 200) {
    if (ms <= 0)
        return value;
    const debounced = Object(lib_index_esm["ref"])(value.value);
    const updater = useDebounceFn(() => {
        debounced.value = value.value;
    }, ms);
    Object(lib_index_esm["watch"])(value, () => updater());
    return debounced;
}

/**
 * Wrapper for `setInterval` with controls
 *
 * @param cb
 * @param interval
 * @param immediate
 */
function useIntervalFn(cb, interval = 1000, immediate = true) {
    let timer = null;
    const isActive = Object(lib_index_esm["ref"])(false);
    function clean() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function pause() {
        isActive.value = false;
        clean();
    }
    function resume() {
        isActive.value = true;
        clean();
        timer = setInterval(cb, interval);
    }
    if (immediate)
        resume();
    tryOnUnmounted(pause);
    return {
        isActive,
        pause,
        resume,
        start: resume,
        stop: pause,
    };
}

function useInterval(interval = 1000, immediate = true) {
    const counter = Object(lib_index_esm["ref"])(0);
    return Object.assign({ counter }, useIntervalFn(() => counter.value += 1, interval, immediate));
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 *
 * @return  A new, throttled, function.
 */
function useThrottleFn(fn, ms = 200, trailing = true) {
    return createFilterWrapper(throttleFilter(ms, trailing), fn);
}

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  delay  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 */
function useThrottle(value, delay = 200) {
    if (delay <= 0)
        return value;
    const throttled = Object(lib_index_esm["ref"])(value.value);
    const updater = useThrottleFn(() => {
        throttled.value = value.value;
    }, delay);
    Object(lib_index_esm["watch"])(value, () => updater());
    return throttled;
}

/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param immediate
 */
function useTimeoutFn(cb, interval, immediate) {
    const isActive = Object(lib_index_esm["ref"])(false);
    let timer = null;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function stop() {
        isActive.value = false;
        clear();
    }
    function start() {
        clear();
        isActive.value = true;
        timer = setTimeout(() => {
            timer = null;
            cb();
        }, interval);
    }
    if (immediate)
        start();
    tryOnUnmounted(stop);
    return {
        isActive,
        start,
        stop,
    };
}

/**
 * Update value after a given time with controls.
 *
 * @param interval
 * @param immediate
 */
function useTimeout(interval = 1000, immediate = true) {
    const ready = Object(lib_index_esm["ref"])(false);
    const controls = useTimeoutFn(() => ready.value = true, interval, immediate);
    function stop() {
        ready.value = false;
        controls.stop();
    }
    function start() {
        ready.value = false;
        controls.start();
    }
    return {
        ready,
        isActive: controls.isActive,
        start,
        stop,
    };
}

/**
 * A boolean ref with a toggler
 *
 * @see   {@link https://vueuse.js.org/useToggle}
 * @param [initialValue=false]
 */
function useToggle(initialValue = false) {
    const boolean = Object(lib_index_esm["ref"])(initialValue);
    const toggle = () => (boolean.value = !boolean.value);
    return [boolean, toggle];
}

function when(r) {
    let isNot = false;
    function toMatch(condition, { flush = 'sync', deep = false, timeout, throwOnTimeout } = {}) {
        let stop = null;
        const watcher = new Promise((resolve) => {
            stop = Object(lib_index_esm["watch"])(r, (v) => {
                if (condition(v) === !isNot) {
                    stop === null || stop === void 0 ? void 0 : stop();
                    resolve();
                }
            }, {
                flush,
                deep,
                immediate: true,
            });
        });
        const promises = [watcher];
        if (timeout) {
            promises.push(promiseTimeout(timeout, throwOnTimeout).finally(() => {
                stop === null || stop === void 0 ? void 0 : stop();
            }));
        }
        return Promise.race(promises);
    }
    function toBe(value, options) {
        return toMatch(v => v === Object(lib_index_esm["unref"])(value), options);
    }
    function toBeTruthy(options) {
        return toMatch(v => Boolean(v), options);
    }
    function toBeNull(options) {
        return toBe(null, options);
    }
    function toBeUndefined(options) {
        return toBe(undefined, options);
    }
    function toBeNaN(options) {
        return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
        return toMatch((v) => {
            const array = Array.from(v);
            return array.includes(value) || array.includes(Object(lib_index_esm["unref"])(value));
        }, options);
    }
    function changed(options) {
        return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
        let count = -1; // skip the immediate check
        return toMatch(() => {
            count += 1;
            return count >= n;
        }, options);
    }
    if (Array.isArray(Object(lib_index_esm["unref"])(r))) {
        const instance = {
            toMatch,
            toContains,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
    else {
        const instance = {
            toMatch,
            toBe,
            toBeTruthy,
            toBeNull,
            toBeNaN,
            toBeUndefined,
            changed,
            changedTimes,
            get not() {
                isNot = !isNot;
                return this;
            },
        };
        return instance;
    }
}



// EXTERNAL MODULE: ./node_modules/lodash.clonedeep/index.js
var lodash_clonedeep = __webpack_require__("cd3f");
var lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep);

// CONCATENATED MODULE: ./src/utils/useResize.ts


function useResize() {
  var rect = Object(index_esm["reactive"])({
    x: Object(index_esm["ref"])(0),
    y: Object(index_esm["ref"])(0),
    width: Object(index_esm["ref"])(0),
    height: Object(index_esm["ref"])(0)
  });

  var resized = function resized() {
    var dom = document.getElementById('painter');

    var _ref = (dom === null || dom === void 0 ? void 0 : dom.getBoundingClientRect()) || {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
        x = _ref.x,
        y = _ref.y,
        height = _ref.height,
        width = _ref.width;

    rect.x = x;
    rect.y = y;
    rect.width = width;
    rect.height = height;
  };

  Object(index_esm["onMounted"])(function () {
    resized();
    window.addEventListener('resize', useThrottleFn(resized, 16));
  });
  Object(index_esm["onUnmounted"])(function () {
    window.removeEventListener('resize', useThrottleFn(resized, 16));
  });
  return {
    rect: rect
  };
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./src/models/Transition.ts



var Transition_Transition = function Transition(widget, fieldMap) {
  _classCallCheck(this, Transition);

  this.name = widget[fieldMap.name];
  this.width = widget[fieldMap.width];
  this.height = widget[fieldMap.height];
  this.left = widget[fieldMap.left] || 0;
  this.top = widget[fieldMap.top] || 0;
  this.animations = widget.animations || [];
  this.isExpanded = false;
  this.visible = true;
  this.isLocked = false;
  this.needUpdateProp = false;
  this.needUpdateOption = false;
};


// CONCATENATED MODULE: ./src/utils/constant.ts
var OFFSET = 50;
var TICK_MIN_LENGTH = 50;
var TICK_MAX_LENGTH = 150;
var DEFAULT_OPTION = {
  isExpanded: false,
  visible: true,
  isLocked: false,
  animations: []
};
var ANIMATION_OPTIONS = {
  delay: 0,
  duration: 50,
  easing: 'easeLinear'
};
var ANIMATION_TYPES = [{
  name: '宽',
  title: 'width',
  icon: 'column-width',
  prop: 'width',
  desc: '',
  value: 0,
  anchors: []
}, {
  name: '高',
  title: 'height',
  icon: 'colum-height',
  prop: 'height',
  desc: '',
  value: 0,
  anchors: []
}, {
  name: '水平位置',
  title: 'x',
  icon: 'totop',
  prop: 'left',
  desc: 'x',
  value: 0,
  anchors: []
}, {
  name: '垂直位置',
  title: 'y',
  icon: 'totop',
  prop: 'top',
  desc: 'y',
  value: 0,
  anchors: []
}, {
  name: '水平位移',
  title: 'translate-x',
  icon: 'drag',
  prop: 'translateX',
  desc: 'x',
  value: 0,
  anchors: []
}, {
  name: '垂直位移',
  title: 'translate-y',
  icon: 'drag',
  prop: 'translateY',
  desc: 'y',
  value: 0,
  anchors: []
}, {
  name: '纵深位移',
  title: 'translate-z',
  icon: 'drag',
  prop: 'translateZ',
  desc: 'z',
  value: 0,
  anchors: []
}, {
  name: '不透明度',
  title: 'opacity',
  icon: 'bulb',
  prop: 'opacity',
  desc: '',
  value: 1,
  anchors: []
}, {
  name: '水平旋转',
  title: 'rotate-x',
  icon: 'rotate-right',
  prop: 'rotateX',
  desc: 'x',
  value: 0,
  anchors: []
}, {
  name: '垂直旋转',
  title: 'rotate-y',
  icon: 'rotate-right',
  prop: 'rotateY',
  desc: 'y',
  value: 0,
  anchors: []
}, {
  name: '纵深旋转',
  title: 'rotate-z',
  icon: 'rotate-right',
  prop: 'rotateZ',
  desc: 'z',
  value: 0,
  anchors: []
}, {
  name: '水平倾斜',
  title: 'skew-x',
  icon: 'italic',
  prop: 'skewX',
  desc: 'x',
  value: 0,
  anchors: []
}, {
  name: '垂直倾斜',
  title: 'skew-y',
  icon: 'italic',
  prop: 'skewY',
  desc: 'y',
  value: 0,
  anchors: []
}, {
  name: '水平缩放',
  title: 'scale-x',
  icon: 'arrawsalt',
  prop: 'scaleX',
  desc: 'x',
  value: 1,
  anchors: []
}, {
  name: '垂直缩放',
  title: 'scale-y',
  icon: 'arrawsalt',
  prop: 'scaleY',
  desc: 'y',
  value: 1,
  anchors: []
}];
var DEFAULT_FIELDS = {
  name: 'name',
  width: 'width',
  height: 'height',
  top: 'top',
  left: 'left'
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SvgIcon2.vue?vue&type=template&id=031c70af&scoped=true


var SvgIcon2vue_type_template_id_031c70af_scoped_true_withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-031c70af");

var SvgIcon2vue_type_template_id_031c70af_scoped_true_render = /*#__PURE__*/SvgIcon2vue_type_template_id_031c70af_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    class: _ctx.svgClass,
    "aria-hidden": "true"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", {
    "xlink:href": _ctx.svgName
  }, null, 8, ["xlink:href"])], 2);
});
// CONCATENATED MODULE: ./src/components/SvgIcon2.vue?vue&type=template&id=031c70af&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SvgIcon2.vue?vue&type=script&lang=js

/* harmony default export */ var SvgIcon2vue_type_script_lang_js = (Object(index_esm["defineComponent"])({
  props: {
    iconName: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var _toRefs = Object(index_esm["toRefs"])(props),
        iconName = _toRefs.iconName,
        className = _toRefs.className;

    var svgName = Object(index_esm["computed"])(function () {
      return "#icon-".concat(iconName.value);
    });
    var svgClass = Object(index_esm["computed"])(function () {
      return "svg-icon ".concat(className.value);
    });
    return {
      svgName: svgName,
      svgClass: svgClass
    };
  }
}));
// CONCATENATED MODULE: ./src/components/SvgIcon2.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SvgIcon2.vue?vue&type=style&index=0&id=031c70af&scoped=true&lang=css
var SvgIcon2vue_type_style_index_0_id_031c70af_scoped_true_lang_css = __webpack_require__("4c7b");

// CONCATENATED MODULE: ./src/components/SvgIcon2.vue





SvgIcon2vue_type_script_lang_js.render = SvgIcon2vue_type_template_id_031c70af_scoped_true_render
SvgIcon2vue_type_script_lang_js.__scopeId = "data-v-031c70af"

/* harmony default export */ var SvgIcon2 = (SvgIcon2vue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SvgIcon3.vue?vue&type=template&id=01d84ecd&scoped=true


var SvgIcon3vue_type_template_id_01d84ecd_scoped_true_withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-01d84ecd");

var SvgIcon3vue_type_template_id_01d84ecd_scoped_true_render = /*#__PURE__*/SvgIcon3vue_type_template_id_01d84ecd_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: _ctx.svgClass,
    "aria-hidden": "true"
  }, _ctx.$attrs, {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('click');
    })
  }), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("use", {
    "xlink:href": _ctx.svgName
  }, null, 8, ["xlink:href"])], 16);
});
// CONCATENATED MODULE: ./src/components/SvgIcon3.vue?vue&type=template&id=01d84ecd&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SvgIcon3.vue?vue&type=script&lang=js

/* harmony default export */ var SvgIcon3vue_type_script_lang_js = (Object(index_esm["defineComponent"])({
  props: {
    iconName: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup: function setup(props) {
    var _toRefs = Object(index_esm["toRefs"])(props),
        iconName = _toRefs.iconName,
        className = _toRefs.className;

    var svgName = Object(index_esm["computed"])(function () {
      return "#icon-".concat(iconName.value);
    });
    var svgClass = Object(index_esm["computed"])(function () {
      return "svg-icon ".concat(className.value);
    });
    return {
      svgName: svgName,
      svgClass: svgClass
    };
  }
}));
// CONCATENATED MODULE: ./src/components/SvgIcon3.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/SvgIcon3.vue?vue&type=style&index=0&id=01d84ecd&scoped=true&lang=css
var SvgIcon3vue_type_style_index_0_id_01d84ecd_scoped_true_lang_css = __webpack_require__("2f32");

// CONCATENATED MODULE: ./src/components/SvgIcon3.vue





SvgIcon3vue_type_script_lang_js.render = SvgIcon3vue_type_template_id_01d84ecd_scoped_true_render
SvgIcon3vue_type_script_lang_js.__scopeId = "data-v-01d84ecd"

/* harmony default export */ var SvgIcon3 = (SvgIcon3vue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Widget.vue?vue&type=template&id=69ce083e&scoped=true



var Widgetvue_type_template_id_69ce083e_scoped_true_withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-69ce083e");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-69ce083e");

var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_1 = {
  class: "widget"
};
var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_2 = {
  class: "widget__header"
};

var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "widget__divider"
}, null, -1);

var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_4 = {
  class: "widget__suffix"
};
var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_5 = {
  class: "widget__animations"
};
var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_6 = {
  key: 0,
  class: "widget__content"
};

var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
  class: "widget__divider"
}, null, -1);

var Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_8 = {
  class: "widget__control"
};

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])();

var Widgetvue_type_template_id_69ce083e_scoped_true_render = /*#__PURE__*/Widgetvue_type_template_id_69ce083e_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("svg-icon");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": !_ctx.visible ? 'eye-close' : 'circle',
    onClick: _ctx.handleVisible
  }, null, 8, ["icon-name", "onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": _ctx.isLocked ? 'lock' : 'circle',
    onClick: _ctx.handleLocked
  }, null, 8, ["icon-name", "onClick"]), Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    class: ['widget__expand', _ctx.isExpanded ? 'widget__expand--active' : ''],
    "icon-name": "right",
    onClick: _ctx.handleExpanded
  }, null, 8, ["class", "onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handleExpanded && _ctx.handleExpanded.apply(_ctx, arguments);
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
    "icon-name": "appstore",
    onClick: _ctx.handleShowAnimations
  }, null, 8, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_5, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.animationTypes, function (animationType) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
      class: {
        'widget__animations--active': _ctx.isActive(animationType.prop)
      },
      key: animationType.prop,
      title: animationType.title,
      onClick: function onClick($event) {
        return _ctx.handleSelectAnimation(animationType);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
      "icon-name": animationType.icon
    }, null, 8, ["icon-name"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(animationType.desc), 1)], 10, ["title", "onClick"]);
  }), 128))])])]), _ctx.isExpanded ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_6, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.animations, function (animation) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
      class: "widget__row",
      key: animation.prop
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
      "icon-name": "close",
      onClick: function onClick($event) {
        return _ctx.handleRemove(animation);
      }
    }, null, 8, ["onClick"]), Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(animation.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return animation.value = $event;
      },
      ref: "input",
      onInput: function onInput(event) {
        return _ctx.handleInput(event, animation);
      }
    }, null, 40, ["onUpdate:modelValue", "onInput"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], animation.value, void 0, {
      number: true
    }]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
      class: {
        'widget__icon--active': animation.curve && _ctx.isAnchorActive(animation.anchors)
      },
      "icon-name": "all",
      onClick: _ctx.handleCurve
    }, null, 8, ["class", "onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", Widgetvue_type_template_id_69ce083e_scoped_true_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
      "icon-name": "left",
      onClick: function onClick($event) {
        return _ctx.handleLeft(animation);
      }
    }, null, 8, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      class: {
        'widget__anchor': true,
        'widget__anchor--active': _ctx.isAnchorActive(animation.anchors)
      },
      onClick: function onClick($event) {
        return _ctx.handleAnchor(animation);
      }
    }, null, 10, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_svg_icon, {
      "icon-name": "right",
      onClick: function onClick($event) {
        return _ctx.handleRight(animation);
      }
    }, null, 8, ["onClick"])])]);
  }), 128))])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
});
// CONCATENATED MODULE: ./src/components/Widget.vue?vue&type=template&id=69ce083e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Widget.vue?vue&type=script&lang=ts














/* harmony default export */ var Widgetvue_type_script_lang_ts = (Object(index_esm["defineComponent"])({
  components: {
    SvgIcon: index_esm["isVue2"] ? SvgIcon2 : SvgIcon3
  },
  props: {
    option: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    time: {
      type: Number,
      default: 0
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var _toRefs = Object(index_esm["toRefs"])(props),
        option = _toRefs.option,
        time = _toRefs.time;

    var animationTypes = Object(index_esm["reactive"])(lodash_clonedeep_default()(ANIMATION_TYPES));
    var isShowAnimations = Object(index_esm["ref"])(false);
    var name = Object(index_esm["computed"])(function () {
      return option.value.transition.name;
    });
    var visible = Object(index_esm["computed"])(function () {
      return option.value.transition.visible;
    });
    var isExpanded = Object(index_esm["computed"])(function () {
      return option.value.transition.isExpanded;
    });
    var isLocked = Object(index_esm["computed"])(function () {
      return option.value.transition.isLocked;
    });
    var animations = Object(index_esm["computed"])(function () {
      return option.value.transition.animations;
    });

    var handleShowAnimations = function handleShowAnimations() {
      isShowAnimations.value = !isShowAnimations.value;
    };

    var handleSelectAnimation = function handleSelectAnimation(animationType) {
      option.value.transition.isExpanded = true;
      var target = animations.value.find(function (animation) {
        return animation.prop === animationType.prop;
      });

      if (!target) {
        var propList = ['width', 'height', 'top', 'left'];

        if (propList.includes(animationType.prop)) {
          Object.assign(animationType, {
            value: option.value.transition[animationType.prop]
          });
        }

        animations.value.push(Object(index_esm["reactive"])(animationType));
      } else {
        var index = animations.value.findIndex(function (animation) {
          return animation.prop === target.prop;
        });
        animations.value.splice(index, 1);
      }

      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var isActive = function isActive(prop) {
      return animations.value.find(function (animation) {
        return animation.prop === prop;
      });
    };

    var handleVisible = function handleVisible() {
      option.value.transition.visible = !option.value.transition.visible;
      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var handleLocked = function handleLocked() {
      option.value.transition.isLocked = !option.value.transition.isLocked;
      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var handleExpanded = function handleExpanded() {
      option.value.transition.isExpanded = !option.value.transition.isExpanded;
      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var handleRemove = function handleRemove(_ref2) {
      var prop = _ref2.prop;
      var index = animations.value.findIndex(function (animation) {
        return animation.prop === prop;
      });
      var defaultAnimationType = ANIMATION_TYPES.find(function (animationType) {
        return animationType.prop === animations.value[index].type;
      });
      Object.assign(animations.value[index], defaultAnimationType);
      animations.value.splice(index, 1);
      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var handleCurve = function handleCurve(_ref3) {
      var prop = _ref3.prop;
      console.log(prop);
    };

    var handleInput = function handleInput(_ref4, _ref5) {
      var target = _ref4.target;
      var anchors = _ref5.anchors;
      var index = anchors.findIndex(function (anchor) {
        return anchor.time === time.value;
      });

      if (index !== -1) {
        var anchor = anchors[index];
        anchors.splice(index, 1, _objectSpread2(_objectSpread2({}, anchor), {}, {
          value: +target.value
        }));
      }

      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var handleLeft = function handleLeft(animation) {
      var anchors = animation.anchors;
      if (anchors.length === 0) return;
      var minAnchorTime = anchors[0].time;

      if (minAnchorTime >= time.value) {
        return;
      }

      var lastAnchor = anchors[anchors.length - 1];

      if (lastAnchor.time < time.value) {
        animation.value = lastAnchor.value;
        emit('timeUpdate', lastAnchor.time);
        return;
      }

      for (var index in anchors) {
        if (anchors[index].time === time.value) {
          var preAnchor = anchors[+index - 1];
          animation.value = preAnchor.value;
          !!preAnchor && emit('timeUpdate', preAnchor.time);
          break;
        }

        if (anchors[index].time > time.value) {
          var targetAnchor = anchors[+index - 1];
          animation.value = targetAnchor.value;
          emit('timeUpdate', targetAnchor.time);
          break;
        }
      }
    };

    var handleRight = function handleRight(animation) {
      var anchors = animation.anchors;
      if (anchors.length === 0) return;
      var maxAnchorTime = animation.anchors[anchors.length - 1].time;

      if (maxAnchorTime <= time.value) {
        return;
      }

      for (var index in anchors) {
        if (anchors[index].time === time.value) {
          var nextAnchor = anchors[+index + 1];
          animation.value = nextAnchor.value;
          !!nextAnchor && emit('timeUpdate', nextAnchor.time);
          break;
        }

        if (anchors[index].time > time.value) {
          animation.value = anchors[index].value;
          emit('timeUpdate', anchors[index].time);
          break;
        }
      }
    };

    var handleAnchor = function handleAnchor(_ref6) {
      var anchors = _ref6.anchors,
          value = _ref6.value;
      var index = anchors.findIndex(function (anchor) {
        return anchor.time === time.value;
      });

      if (index === -1) {
        anchors.push({
          time: time.value,
          value: value
        });
        anchors.sort(function (anchorA, anchorB) {
          return anchorA.time - anchorB.time;
        });
      } else {
        anchors.splice(index, 1);
      }

      option.value.transition.needUpdateOption = true;
      emit('update');
    };

    var isAnchorActive = function isAnchorActive(anchors) {
      return anchors.some(function (anchor) {
        return anchor.time === time.value;
      });
    };

    return {
      name: name,
      visible: visible,
      isExpanded: isExpanded,
      isLocked: isLocked,
      isShowAnimations: isShowAnimations,
      animations: animations,
      animationTypes: animationTypes,
      isActive: isActive,
      handleVisible: handleVisible,
      handleLocked: handleLocked,
      handleExpanded: handleExpanded,
      handleShowAnimations: handleShowAnimations,
      handleSelectAnimation: handleSelectAnimation,
      handleRemove: handleRemove,
      handleCurve: handleCurve,
      handleInput: handleInput,
      handleLeft: handleLeft,
      handleRight: handleRight,
      handleAnchor: handleAnchor,
      isAnchorActive: isAnchorActive
    };
  }
}));
// CONCATENATED MODULE: ./src/components/Widget.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./src/components/Widget.vue?vue&type=style&index=0&id=69ce083e&scoped=true&lang=scss
var Widgetvue_type_style_index_0_id_69ce083e_scoped_true_lang_scss = __webpack_require__("bed6");

// CONCATENATED MODULE: ./src/components/Widget.vue





Widgetvue_type_script_lang_ts.render = Widgetvue_type_template_id_69ce083e_scoped_true_render
Widgetvue_type_script_lang_ts.__scopeId = "data-v-69ce083e"

/* harmony default export */ var Widget = (Widgetvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/lib/AnimationTimeline.vue?vue&type=script&lang=js

































/* harmony default export */ var AnimationTimelinevue_type_script_lang_js = (Object(index_esm["defineComponent"])({
  name: 'AnimationTimeline',
  components: {
    SvgIcon: index_esm["isVue2"] ? SvgIcon2 : SvgIcon3,
    Widget: Widget
  },
  props: {
    widgets: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    fields: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var instance = Object(index_esm["getCurrentInstance"])();
    var ctx = instance.ctx || instance;

    var _toRefs = Object(index_esm["toRefs"])(props),
        widgets = _toRefs.widgets,
        fields = _toRefs.fields;

    var _useResize = useResize(),
        rect = _useResize.rect;

    var fieldMap = Object(index_esm["reactive"])(_objectSpread2(_objectSpread2({}, DEFAULT_FIELDS), fields.value));
    var options = Object(index_esm["reactive"])(lodash_clonedeep_default()(widgets.value).map(function (widget) {
      return Object(index_esm["reactive"])(_objectSpread2(_objectSpread2({}, widget), {}, {
        transition: new Transition_Transition(widget, fieldMap)
      }));
    }));
    var time = Object(index_esm["ref"])(0);
    var startTime = Object(index_esm["ref"])(0);
    var calcStartTime = Object(index_esm["ref"])(0);
    var endTime = Object(index_esm["ref"])(10000);
    var calcEndTime = Object(index_esm["ref"])(10000);
    var maxTime = Object(index_esm["ref"])(10000);
    var isPlay = Object(index_esm["ref"])(false);
    var isRepeat = Object(index_esm["ref"])(false);
    var painter = Object(index_esm["ref"])();
    var timeRect = Object(index_esm["ref"])();
    var timelineRect = Object(index_esm["ref"])();
    var leftPoint = Object(index_esm["ref"])();
    var centerBar = Object(index_esm["ref"])();
    var rightPoint = Object(index_esm["ref"])();
    var playBarTriangle = Object(index_esm["ref"])();
    var playBarLine = Object(index_esm["ref"])();
    var timelineAxis = Object(index_esm["ref"])();
    var timelineGroup = Object(index_esm["ref"])();
    var axisTicks = Object(index_esm["ref"])([]);
    var container = Object(index_esm["ref"])();
    var element = Object(index_esm["reactive"])({
      animate: null
    });
    var record = Object(index_esm["reactive"])({
      leftPosition: 0,
      startTime: 0,
      centerAnchor: 0,
      endTime: 0,
      rightPosition: 0,
      offset: 0,
      scroll: 0,
      allowLeftMove: false,
      allowRightMove: false,
      allowCenterMove: false,
      allowPlayBarMove: false
    });
    var unitTickCount = Object(index_esm["computed"])(function () {
      return Math.trunc(maxTime.value / 1000);
    });
    var unitLength = Object(index_esm["computed"])(function () {
      return (rect.width - 20) / maxTime.value;
    });
    var unitSecondLength = Object(index_esm["computed"])(function () {
      return unitLength.value * 1000;
    });
    var calcMaxTime = Object(index_esm["computed"])(function () {
      return maxTime.value / ((endTime.value - startTime.value) / maxTime.value);
    });
    var scaleRate = Object(index_esm["computed"])(function () {
      return (endTime.value - startTime.value) / maxTime.value;
    });
    var timeScale = Object(index_esm["computed"])(function () {
      return esm(time.value).format('mm:ss:SSS');
    });
    var maxTimeScale = Object(index_esm["computed"])({
      get: function get() {
        return esm(maxTime.value).format('mm:ss:SSS');
      },
      set: function set(val) {
        var pattern = /^([0-5][0-9]):([0-5][0-9]):([0-9][0-9][0-9])$/;

        if (pattern.test(val)) {
          var _val$match = val.match(pattern),
              _val$match2 = _slicedToArray(_val$match, 4),
              mm = _val$match2[1],
              ss = _val$match2[2],
              SSS = _val$match2[3];

          var maxTimeValue = +mm * 60 * 1000 + +ss * 1000 + +SSS;
          maxTime.value = maxTimeValue;

          if (+maxTimeValue <= endTime.value) {
            if (startTime.value >= +maxTimeValue) {
              startTime.value = 0;
            }

            endTime.value = +maxTimeValue || 1000;
          }
        }
      }
    });

    var initCanvas = function initCanvas() {
      var _document$getElementB = document.getElementById('painter').getBoundingClientRect(),
          width = _document$getElementB.width,
          height = _document$getElementB.height; // init painter


      painter = new g_canvas_esm["Canvas"]({
        container: 'painter',
        width: width,
        height: height
      });
      timelineGroup = painter.addGroup();
      timeRect = painter.addShape('rect', {
        name: 'timeBar',
        attrs: {
          x: 0,
          y: 0,
          width: width,
          height: 20,
          fill: '#F5F5F6'
        }
      });
      leftPoint = painter.addShape('circle', {
        attrs: {
          x: 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize'
        }
      });
      rightPoint = painter.addShape('circle', {
        attrs: {
          x: width - 10,
          y: 10,
          r: 6,
          fill: '#757575',
          lineWidth: 0,
          cursor: 'ew-resize'
        }
      });
      centerBar = painter.addShape('rect', {
        name: 'timeBar',
        attrs: {
          x: 10,
          y: 4,
          width: width - 20,
          height: 12,
          fill: '#bdbdbd',
          lineWidth: 0,
          cursor: 'move'
        }
      });
      timelineRect = painter.addShape('rect', {
        name: 'timelineBar',
        attrs: {
          x: 0,
          y: 20,
          width: width,
          height: 36,
          fill: '#eeeeee'
        }
      });
      playBarTriangle = painter.addShape('marker', {
        name: 'playBarTriangle',
        attrs: {
          x: 10,
          y: 30,
          r: 8,
          fill: '#1890FF',
          lineWidth: 0,
          cursor: 'move',
          symbol: 'triangle-down'
        }
      });
      playBarLine = painter.addShape('line', {
        name: 'playBarLine',
        attrs: {
          x1: 10,
          y1: 30,
          x2: 10,
          y2: height,
          stroke: '#1890FF',
          lineWidth: 1,
          cursor: 'move'
        }
      });
      timelineAxis = painter.addShape('line', {
        name: 'playBarLine',
        attrs: {
          x1: 10,
          y1: 48,
          x2: width - 10,
          y2: 48,
          stroke: '#212121',
          lineWidth: 1,
          cursor: 'move'
        }
      });
    };

    var initAnimate = function initAnimate() {
      element.animate = anime_es.timeline({
        delay: 0,
        duration: maxTime.value || 10000,
        direction: 'normal',
        easing: 'linear',
        loop: isRepeat,
        autoplay: false,
        update: function update(params) {
          time.value = params.progress / 100 * maxTime.value;
        },
        complete: function complete() {
          isPlay.value = false;
        }
      }).add({
        opacity: 0
      });
    };

    var setAnimateOption = function setAnimateOption() {
      if (element.animate) {
        element.animate.duration = maxTime.value;
        element.animate.loop = isRepeat.value;
        ctx.$animateParams.maxTime = maxTime.value;
        ctx.$animateParams.isRepeat = isRepeat.value;
      }

      options.forEach(function (option) {
        Object.assign(option.transition, {
          needUpdateProp: true
        });
      });
      emit('onUpdate', options);
    };

    var resizeDecorate = function resizeDecorate() {
      var width = rect.width,
          height = rect.height; // change painter size

      painter.changeSize(width, height); // set time rect width

      timeRect.attr('width', width); // set timeline rect width

      timelineRect.attr('width', width); // set time line axis width

      timelineAxis.animate({
        x1: 10,
        y1: 48,
        x2: width - 10,
        y2: 48
      }, ANIMATION_OPTIONS);
    };

    var resizeScaleBar = function resizeScaleBar() {
      var width = rect.width;
      var unitWidth = (width - 20) / maxTime.value;
      record.leftPosition = startTime.value * unitWidth + 10;
      record.rightPosition = endTime.value * unitWidth + 10; // set left point x position

      leftPoint.animate({
        x: record.leftPosition
      }, ANIMATION_OPTIONS); // set right point x position

      rightPoint.animate({
        x: record.rightPosition
      }, ANIMATION_OPTIONS); // set center bar width, x

      centerBar.animate({
        width: record.rightPosition - record.leftPosition,
        x: record.leftPosition
      }, ANIMATION_OPTIONS);
    };

    var resizePlayBar = function resizePlayBar() {
      var width = rect.width,
          height = rect.height; // set play bar triangle x

      playBarTriangle.animate({
        x: (width - 20) / maxTime.value * time.value / scaleRate.value + 10 - record.offset
      }, ANIMATION_OPTIONS); // set play bar line x

      playBarLine.animate({
        x1: (width - 20) / maxTime.value * time.value / scaleRate.value + 10 - record.offset,
        y1: 30,
        x2: (width - 20) / maxTime.value * time.value / scaleRate.value + 10 - record.offset,
        y2: height
      }, ANIMATION_OPTIONS);
    };

    var calcEffect = function calcEffect() {
      record.offset = (rect.width - 20) / scaleRate.value * (startTime.value / maxTime.value);
      var timeBuffer = record.offset / (unitSecondLength.value / scaleRate.value) * 1000;
      calcStartTime.value = startTime.value * scaleRate.value + timeBuffer;
      calcEndTime.value = endTime.value * scaleRate.value + timeBuffer;
    };

    var drawTick = function drawTick() {
      axisTicks.value.forEach(function (axis) {
        axis.remove(true);
      });
      axisTicks.value = [];

      var _loop = function _loop(index) {
        var _axisTicks$value;

        var min = unitSecondLength.value / scaleRate.value <= TICK_MIN_LENGTH;
        var max = unitSecondLength.value / scaleRate.value >= TICK_MAX_LENGTH;
        var minCount = Math.trunc(TICK_MIN_LENGTH / (unitSecondLength.value / scaleRate.value));

        if (min && minCount > 0 && index % (minCount * 2) !== 0 && +index !== +unitTickCount.value) {
          return "continue";
        }

        var axisTick = painter.addShape('line', {
          name: 'axisTick',
          attrs: {
            x1: 10 + index * unitSecondLength.value / scaleRate.value - record.offset,
            y1: 40,
            x2: 10 + index * unitSecondLength.value / scaleRate.value - record.offset,
            y2: 48,
            stroke: '#212121',
            lineWidth: 1
          }
        });
        var axisText = painter.addShape('text', {
          attrs: {
            x: (index >= 10 ? 0 : 5) + index * unitSecondLength.value / scaleRate.value - record.offset,
            y: 40,
            fontFamily: 'PingFang SC',
            text: index > 0 && index % 60 === 0 ? "".concat(index / 60, "m") : "".concat(index, "s"),
            fontSize: 12,
            fill: '#212121'
          }
        });
        var smallAxisTick = [];

        if (max) {
          smallAxisTick = new Array(6).fill(null).map(function (__, i) {
            return painter.addShape('line', {
              name: 'axisTick',
              attrs: {
                x1: 10 + (index * unitSecondLength.value + i * (unitSecondLength.value / 5)) / scaleRate.value - record.offset,
                y1: 42,
                x2: 10 + (index * unitSecondLength.value + i * (unitSecondLength.value / 5)) / scaleRate.value - record.offset,
                y2: 48,
                stroke: '#212121',
                lineWidth: 1
              }
            });
          });
        }

        (_axisTicks$value = axisTicks.value).push.apply(_axisTicks$value, [axisTick, axisText].concat(_toConsumableArray(smallAxisTick)));
      };

      for (var index in new Array(unitTickCount.value + 1).fill(null)) {
        var _ret = _loop(index);

        if (_ret === "continue") continue;
      }
    }; // set play bar to front


    var setPlayBarToFront = function setPlayBarToFront() {
      playBarTriangle.toFront();
      playBarLine.toFront();
    };

    var drawAnchors = function drawAnchors() {
      // clear timeline group all children
      timelineGroup.clear();
      var width = rect.width;
      var reduceList = options.reduce(function (acc, cur, index, array) {
        var pre = array[index - 1];

        if (!pre) {
          acc.totalList.push(0);
        } else {
          acc.total += pre.transition.isExpanded ? pre.transition.animations.length : 0;
          acc.totalList.push(acc.total);
        }

        return acc;
      }, {
        totalList: [],
        total: 0
      });
      options.forEach(function (_ref2, i) {
        var _ref2$transition = _ref2.transition,
            isExpanded = _ref2$transition.isExpanded,
            animations = _ref2$transition.animations;
        var allAnchors = animations.flatMap(function (animation) {
          return animation.anchors;
        });
        var overviewAnchors = Array.from(new Set(allAnchors.map(function (anchor) {
          return anchor.time;
        })));
        var totalList = reduceList.totalList;
        timelineGroup.addShape('rect', {
          name: 'anchorRect',
          attrs: {
            x: 0,
            y: 57 + i * 33 + totalList[i] * 32 - record.scroll,
            width: width,
            height: 32,
            fill: 'white'
          }
        });
        timelineGroup.addShape('line', {
          name: 'anchorRectLine',
          attrs: {
            x1: 0,
            y1: 56.5 + (i + 1) * 33 + totalList[i] * 32 - record.scroll,
            x2: width,
            y2: 56.5 + (i + 1) * 33 + totalList[i] * 32 - record.scroll,
            stroke: '#f5f5f5',
            lineWidth: 1
          }
        });

        if (overviewAnchors.length > 0) {
          overviewAnchors.forEach(function (anchor) {
            timelineGroup.addShape('marker', {
              name: 'anchor',
              attrs: {
                x: (width - 20) / maxTime.value * anchor / scaleRate.value + 10 - record.offset,
                y: 57 + i * 33 + 16 + totalList[i] * 32 - record.scroll,
                r: 5,
                fill: '#1890FF',
                lineWidth: 0,
                symbol: 'diamond'
              }
            });
          });
        }

        if (isExpanded && animations.length > 0) {
          animations.forEach(function (animation, j) {
            timelineGroup.addShape('rect', {
              name: 'insideAnchorRect',
              attrs: {
                x: 0,
                y: 57 + i * 33 + 32 + totalList[i] * 32 + j * 32 - record.scroll,
                width: width,
                height: 31,
                fill: 'whitesmoke'
              }
            });
            timelineGroup.addShape('line', {
              name: 'insideAnchorRectLine',
              attrs: {
                x1: 0,
                y1: 56.5 + i * 33 + 32 * 2 + totalList[i] * 32 + j * 32 - record.scroll,
                x2: width,
                y2: 56.5 + i * 33 + 32 * 2 + totalList[i] * 32 + j * 32 - record.scroll,
                stroke: '#fafafa',
                lineWidth: 1
              }
            });
            animation.anchors.forEach(function (anchor) {
              timelineGroup.addShape('marker', {
                name: 'anchor',
                id: 'hi-anchor',
                attrs: {
                  x: (width - 20) / maxTime.value * anchor.time / scaleRate.value + 10 - record.offset,
                  y: 56.5 + i * 33 + 32 + totalList[i] * 32 + j * 32 + 16 - record.scroll,
                  r: 5,
                  fill: 'black',
                  lineWidth: 0,
                  cursor: 'move',
                  symbol: 'diamond'
                }
              });
            });
          });
        }
      });
    };

    var handlePlay = function handlePlay() {
      isPlay.value = !isPlay.value;

      if (isPlay.value) {
        element.animate.play();
        ctx.$animate.play();
      } else {
        element.animate.pause();
        ctx.$animate.pause();
      }

      emit(isPlay.value ? 'onPlay' : 'onPause');
    };

    var handleReset = function handleReset() {
      isPlay.value = false;
      time.value = 0;
      setTimeout(function () {
        isPlay.value = true;
        element.animate.restart();
        ctx.$animate.restart();
        emit('onRestart');
      });
    };

    var handleBack = function handleBack() {
      isPlay.value = false;
      time.value = 0;
      ctx.$animate.pause();
      ctx.$animate.seek(0);
      element.animate.pause();
      element.animate.seek(0);
      emit('onPause');
      emit('onSeek');
    };

    var handleRepeat = function handleRepeat() {
      isRepeat.value = !isRepeat.value;
      handleReset();
    };

    var handleTimeUpdate = function handleTimeUpdate(t) {
      time.value = t;
    };

    var handleUpdate = function handleUpdate() {
      drawAnchors();
      setPlayBarToFront();
      emit('onUpdate', options);
    };

    var onLeftPointMouseDown = function onLeftPointMouseDown() {
      record.allowLeftMove = true;
      record.startTime = startTime.value;
    };

    var onRightPointMouseDown = function onRightPointMouseDown() {
      record.allowRightMove = true;
      record.endTime = endTime.value;
    };

    var onCenterBarMouseDown = function onCenterBarMouseDown(_ref3) {
      var x = _ref3.x;
      record.allowCenterMove = true;
      record.startTime = startTime.value;
      record.centerAnchor = x;
      record.endTime = endTime.value;
    };

    var onAllowPlayBarMove = function onAllowPlayBarMove() {
      record.allowPlayBarMove = true;
    };

    var onPainterMouseMove = function onPainterMouseMove(_ref4) {
      var x = _ref4.x;

      // left point moving
      if (record.allowLeftMove && x >= 10 && x <= record.rightPosition - OFFSET) {
        var rate = (x - 10) / (rect.width - 20);
        startTime.value = maxTime.value * rate;
      } // right point moving


      if (record.allowRightMove && x <= rect.width - 10 && x >= record.leftPosition + OFFSET) {
        var _rate = (x - 10) / (rect.width - 20);

        endTime.value = maxTime.value * _rate;
      } // center rect moving


      if (record.allowCenterMove && record.leftPosition >= 10 && Math.floor(record.rightPosition) <= Math.floor(rect.width - 10)) {
        var distanceDiff = x - record.centerAnchor;
        var timeDiff = distanceDiff / (rect.width - 20) * maxTime.value;

        if (record.startTime + timeDiff <= 0) {
          startTime.value = 0;
          endTime.value = record.endTime - record.startTime;
          return false;
        }

        if (record.endTime + timeDiff >= maxTime.value) {
          startTime.value = maxTime.value - (record.endTime - record.startTime);
          endTime.value = maxTime.value;
          return false;
        }

        startTime.value = record.startTime + timeDiff;
        endTime.value = record.endTime + timeDiff;
      } // play bar moving


      if (record.allowPlayBarMove && x >= 10 && x <= rect.width - 10) {
        var _rate2 = maxTime.value / ((rect.width - 20) / scaleRate.value);

        var timeBuffer = record.offset / (unitSecondLength.value / scaleRate.value) * 1000;
        time.value = _rate2 * (x - 10) + timeBuffer;
      }

      return false;
    };

    var onMarkerMouseDown = function onMarkerMouseDown() {
      painter.on('anchor:mousedown', function (event) {
        console.log(event, event.target.get('id'));
      });
    };

    var onStopMoving = function onStopMoving() {
      record.allowLeftMove = false;
      record.allowRightMove = false;
      record.allowCenterMove = false;
      record.allowPlayBarMove = false;
    };

    var onContainerScroll = function onContainerScroll(event) {
      record.scroll = event.target.scrollTop;
      drawAnchors();
    };

    var addEvents = function addEvents() {
      leftPoint.on('mousedown', onLeftPointMouseDown);
      rightPoint.on('mousedown', onRightPointMouseDown);
      centerBar.on('mousedown', onCenterBarMouseDown);
      playBarTriangle.on('mousedown', onAllowPlayBarMove);
      playBarLine.on('mousedown', onAllowPlayBarMove);
      timelineRect.on('mousedown', onAllowPlayBarMove);
      painter.on('mousemove', onPainterMouseMove);
      onMarkerMouseDown();
      container.value.addEventListener('scroll', onContainerScroll);
      document.addEventListener('mouseup', onStopMoving);
    };

    var removeEvents = function removeEvents() {
      leftPoint.off('mousedown', onLeftPointMouseDown);
      rightPoint.off('mousedown', onRightPointMouseDown);
      centerBar.off('mousedown', onCenterBarMouseDown);
      playBarTriangle.off('mousedown', onAllowPlayBarMove);
      playBarLine.off('mousedown', onAllowPlayBarMove);
      timelineRect.off('mousedown', onAllowPlayBarMove);
      painter.off('mousemove', onPainterMouseMove);
      container.value.removeEventListener('scroll', onContainerScroll);
      document.removeEventListener('mouseup', onStopMoving);
    };

    throttledWatch(rect, function () {
      resizeDecorate();
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
      drawAnchors();
      setPlayBarToFront();
    }, {
      throttle: 16
    });
    throttledWatch([startTime, endTime, maxTime], function () {
      calcEffect();
      resizeScaleBar();
      resizePlayBar();
      drawTick();
      drawAnchors();
      setPlayBarToFront();
    }, {
      throttle: 16
    });
    throttledWatch(time, function () {
      resizePlayBar();
    }, {
      throttle: 16
    });
    throttledWatch([isRepeat, maxTimeScale], setAnimateOption);
    Object(index_esm["onMounted"])(function () {
      initCanvas();
      initAnimate();
      addEvents();
    });
    Object(index_esm["onUnmounted"])(function () {
      removeEvents();
    });
    return {
      time: time,
      startTime: startTime,
      endTime: endTime,
      maxTime: maxTime,
      scaleRate: scaleRate,
      timeScale: timeScale,
      maxTimeScale: maxTimeScale,
      calcStartTime: calcStartTime,
      calcEndTime: calcEndTime,
      calcMaxTime: calcMaxTime,
      isPlay: isPlay,
      isRepeat: isRepeat,
      container: container,
      options: options,
      handlePlay: handlePlay,
      handleReset: handleReset,
      handleBack: handleBack,
      handleRepeat: handleRepeat,
      handleTimeUpdate: handleTimeUpdate,
      handleUpdate: handleUpdate
    };
  }
}));
// CONCATENATED MODULE: ./src/lib/AnimationTimeline.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/lib/AnimationTimeline.vue?vue&type=style&index=0&id=23f0760a&scoped=true&lang=scss
var AnimationTimelinevue_type_style_index_0_id_23f0760a_scoped_true_lang_scss = __webpack_require__("c563");

// CONCATENATED MODULE: ./src/lib/AnimationTimeline.vue





AnimationTimelinevue_type_script_lang_js.render = render
AnimationTimelinevue_type_script_lang_js.__scopeId = "data-v-23f0760a"

/* harmony default export */ var AnimationTimeline = (AnimationTimelinevue_type_script_lang_js);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js


function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js



function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// CONCATENATED MODULE: ./src/directive/AnimationDirective.ts




















 // get animation timeline options

var AnimationDirective_animateOptions = function animateOptions(transition) {
  var anchorProps = (transition.animations || []).flatMap(function (_ref) {
    var prop = _ref.prop,
        anchors = _ref.anchors;
    return anchors.map(function (_ref2, index, array) {
      var time = _ref2.time,
          value = _ref2.value;
      var preAnchor = array[index - 1];
      return {
        startTime: preAnchor ? preAnchor.time : 0,
        endTime: time,
        prop: prop,
        value: value,
        preValue: preAnchor ? preAnchor.value : 0
      };
    });
  }); // get all time

  var anchorTimes = _toConsumableArray(new Set(anchorProps.map(function (anchorProp) {
    return anchorProp.endTime;
  }))).sort(function (a, b) {
    return a - b;
  });

  return anchorProps.flatMap(function (_ref3) {
    var startTime = _ref3.startTime,
        endTime = _ref3.endTime,
        prop = _ref3.prop,
        value = _ref3.value,
        preValue = _ref3.preValue;
    var middleTime = startTime;
    var sections = [];

    var _iterator = _createForOfIteratorHelper(anchorTimes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var anchorTime = _step.value;

        if (anchorTime > middleTime && anchorTime <= endTime) {
          sections.push(_defineProperty({
            startTime: middleTime,
            endTime: anchorTime
          }, prop, (anchorTime - startTime) / (endTime - startTime) * (value - preValue) + preValue));
          middleTime = anchorTime;
        }

        if (anchorTime > endTime && endTime > middleTime) {
          sections.push(_defineProperty({
            startTime: middleTime,
            endTime: endTime
          }, prop, value));
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return sections;
  }).reduce(function (acc, cur) {
    var collage = acc.find(function (item) {
      return item.startTime === cur.startTime && item.endTime === cur.endTime;
    });

    if (collage) {
      Object.assign(collage, cur);
    } else {
      acc.push(cur);
    }

    return acc;
  }, []).sort(function (a, b) {
    return a.startTime - b.startTime;
  }).map(function (_ref4, index, array) {
    var startTime = _ref4.startTime,
        endTime = _ref4.endTime,
        props = _objectWithoutProperties(_ref4, ["startTime", "endTime"]);

    var preProp = array[index - 1];
    return {
      time: startTime,
      animateProp: _objectSpread2({
        duration: preProp ? endTime - (preProp === null || preProp === void 0 ? void 0 : preProp.endTime) : endTime
      }, props)
    };
  });
};

var AnimationDirectiveV2 = {
  inserted: function inserted(el, _ref5, vNode) {
    var value = _ref5.value;
    var _vNode$context$$anima = vNode.context.$animateParams,
        maxTime = _vNode$context$$anima.maxTime,
        isRepeat = _vNode$context$$anima.isRepeat,
        animates = _vNode$context$$anima.animates; // init animate instance

    var animate = anime_es.timeline({
      targets: el,
      delay: 0,
      duration: maxTime || 10000,
      direction: 'normal',
      easing: 'linear',
      loop: isRepeat,
      autoplay: false
    });
    var options = AnimationDirective_animateOptions(value.transition || {});
    options.forEach(function (_ref6) {
      var animateProp = _ref6.animateProp,
          time = _ref6.time;
      return animate.add(animateProp, time);
    });
    animates.push({
      key: value.key,
      animate: animate
    });
  },
  update: function update(el, _ref7, vNode) {
    var value = _ref7.value;
    var _vNode$context$$anima2 = vNode.context.$animateParams,
        maxTime = _vNode$context$$anima2.maxTime,
        isRepeat = _vNode$context$$anima2.isRepeat,
        animates = _vNode$context$$anima2.animates;
    var target = animates.find(function (ani) {
      return ani.key === value.key;
    }); // only need update prop

    if (target && value.transition.needUpdateProp) {
      target.animate.duration = maxTime;
      target.animate.loop = isRepeat;
    } // need update options


    if (target && value.transition.needUpdateOption) {
      target.animate.children = [];
      var options = AnimationDirective_animateOptions(value.transition || {}); // reset animate options

      options.forEach(function (_ref8) {
        var animateProp = _ref8.animateProp,
            time = _ref8.time;
        return target.animate.add(animateProp, time);
      });
    }

    value.transition.needUpdateProp = false;
    value.transition.needUpdateOption = false;
  },
  unbind: function unbind(el, _ref9, vNode) {
    var value = _ref9.value;
    var animates = vNode.context.$animateParams.animates;
    var index = animates.findIndex(function (ani) {
      return ani.key === value.key;
    });

    if (index !== -1) {
      // remove anime instance
      animates.splice(index, 1);
    }
  }
};
var AnimationDirectiveV3 = {
  mounted: function mounted(el, _ref10) {
    var instance = _ref10.instance,
        value = _ref10.value;
    var _instance$$animatePar = instance.$animateParams,
        maxTime = _instance$$animatePar.maxTime,
        isRepeat = _instance$$animatePar.isRepeat,
        animates = _instance$$animatePar.animates; // init animate instance

    var animate = anime_es.timeline({
      targets: el,
      delay: 0,
      duration: maxTime || 10000,
      direction: 'normal',
      easing: 'linear',
      loop: isRepeat,
      autoplay: false
    });
    var options = AnimationDirective_animateOptions(value.transition || {});
    options.forEach(function (_ref11) {
      var animateProp = _ref11.animateProp,
          time = _ref11.time;
      return animate.add(animateProp, time);
    });
    animates.push({
      key: value.key,
      animate: animate
    });
  },
  updated: function updated(el, _ref12) {
    var instance = _ref12.instance,
        value = _ref12.value;
    var _instance$$animatePar2 = instance.$animateParams,
        maxTime = _instance$$animatePar2.maxTime,
        isRepeat = _instance$$animatePar2.isRepeat,
        animates = _instance$$animatePar2.animates;
    var target = animates.find(function (ani) {
      return ani.key === value.key;
    });
    if (!value.transition) return; // only need update prop

    if (target && value.transition.needUpdateProp) {
      target.animate.duration = maxTime;
      target.animate.loop = isRepeat;
    } // need update options


    if (target && value.transition.needUpdateOption) {
      target.animate.children = [];
      var options = AnimationDirective_animateOptions(value.transition || {}); // reset animate options

      options.forEach(function (_ref13) {
        var animateProp = _ref13.animateProp,
            time = _ref13.time;
        return target.animate.add(animateProp, time);
      });
    }

    value.transition.needUpdateProp = false;
    value.transition.needUpdateOption = false;
  },
  unmounted: function unmounted(el, _ref14) {
    var instance = _ref14.instance,
        value = _ref14.value;
    var animates = instance.$animateParams.animates;
    var index = animates.findIndex(function (ani) {
      return ani.key === value.key;
    });

    if (index !== -1) {
      // remove anime instance
      animates.splice(index, 1);
    }
  }
};

// EXTERNAL MODULE: ./src/assets/iconfont.js
var iconfont = __webpack_require__("b1b3");

// CONCATENATED MODULE: ./src/index.ts








/* harmony default export */ var src_0 = ({
  install: function install(app) {
    app.component(AnimationTimeline.name, AnimationTimeline);
    app.directive('animation', index_esm["isVue2"] ? AnimationDirectiveV2 : AnimationDirectiveV3);

    if (index_esm["isVue2"]) {
      app.prototype.$animateParams = {
        // timeline max time
        maxTime: 10000,
        // store anime instance
        animates: [],
        // repeat animate
        isRepeat: false
      };
      app.prototype.$animate = {
        play: function play() {
          app.prototype.$animateParams.animates.forEach(function (_ref) {
            var animate = _ref.animate;
            return animate.play();
          });
        },
        pause: function pause() {
          app.prototype.$animateParams.animates.forEach(function (_ref2) {
            var animate = _ref2.animate;
            return animate.pause();
          });
        },
        restart: function restart() {
          app.prototype.$animateParams.animates.forEach(function (_ref3) {
            var animate = _ref3.animate;
            return animate.restart();
          });
        },
        seek: function seek(timeStamp) {
          app.prototype.$animateParams.animates.forEach(function (_ref4) {
            var animate = _ref4.animate;
            return animate.seek(timeStamp);
          });
        }
      };
    } else {
      app.config.globalProperties.$animateParams = {
        // timeline max time
        maxTime: 10000,
        // store anime instance
        animates: [],
        // repeat animate
        isRepeat: false
      };
      var animates = app.config.globalProperties.$animateParams.animates;
      app.config.globalProperties.$animate = {
        play: function play() {
          animates.forEach(function (_ref5) {
            var animate = _ref5.animate;
            return animate.play();
          });
        },
        pause: function pause() {
          animates.forEach(function (_ref6) {
            var animate = _ref6.animate;
            return animate.pause();
          });
        },
        restart: function restart() {
          animates.forEach(function (_ref7) {
            var animate = _ref7.animate;
            return animate.restart();
          });
        },
        seek: function seek(timeStamp) {
          animates.forEach(function (_ref8) {
            var animate = _ref8.animate;
            return animate.seek(timeStamp);
          });
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "ffa4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("84f4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("652f98da", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ })["default"];
});