/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	__webpack_require__(2);

	var _zepto = __webpack_require__(7);

	var _zepto2 = _interopRequireDefault(_zepto);

	var _Tips = __webpack_require__(10);

	var _Tips2 = _interopRequireDefault(_Tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	{
	  var metaData = {
	    title: 'abc',
	    test: [{
	      title: 'test',
	      desc: 'description'
	    }]
	  };

	  var esTitle = metaData.title,
	      _metaData$test = _slicedToArray(metaData.test, 1),
	      cnTitle = _metaData$test[0].title;

	  console.log(esTitle, cnTitle);
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {"hmr":true}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.28.9@css-loader/index.js!../../node_modules/.4.0.5@less-loader/dist/cjs.js!./a.less", function() {
				var newContent = require("!!../../node_modules/.0.28.9@css-loader/index.js!../../node_modules/.4.0.5@less-loader/dist/cjs.js!./a.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(false);
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n.clearfix {\n  display: block;\n  zoom: 1;\n}\n.clearfix:after {\n  content: \" \";\n  display: block;\n  font-size: 0;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\na {\n  text-decoration: none;\n}\nul,\nli {\n  text-decoration: none;\n  list-style: none;\n}\nbody {\n  background: #efefef;\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1', YaHei, Hei, Tahoma, Helvetica, arial, sans-serif, '\\9ED1\\4F53';\n  margin: 0;\n  padding: 0;\n  color: #333;\n  user-select: none;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n}\ntextarea,\ninput,\nselected,\ndiv,\nspan,\na,\ntd {\n  box-sizing: border-box;\n}\n/*header {\n  position: fixed;\n  z-index: 88;\n  top: 0;\n  left: 0;\n  width: 10rem;\n}*/\nheader .headbox {\n  height: 1.2rem;\n  line-height: 1.2rem;\n  box-shadow: 0 0.5px 12px #666;\n  background: #c02c2a;\n  color: #fff;\n  font-size: 0.45333333rem;\n  text-align: center;\n  position: relative;\n}\n.account p {\n  line-height: 0.53333333rem;\n}\ninput {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n::-webkit-input-placeholder {\n  /* WebKit browsers */\n  color: #999;\n}\n:-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  color: #999;\n}\n::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  color: #999;\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10+ */\n  color: #999;\n}\n* textarea,\ninput {\n  -webkit-user-select: initial!important;\n}\n.floatLeft {\n  float: left;\n}\n.floatRight {\n  float: right;\n}\n.clearFloat {\n  clear: both;\n}\n.alignCenter {\n  text-align: center;\n}\n.alignLeft {\n  text-align: left;\n}\n.alignRight {\n  text-align: right;\n}\n.hidden {\n  display: none!important;\n  visibility: hidden!important;\n}\n.noEvent {\n  pointer-events: none;\n}\n.page {\n  width: 750px;\n  min-height: 100%;\n  position: absolute;\n  margin: 0 auto;\n  background-color: #fff;\n}\n.pages {\n  width: 750px;\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  background-color: #fff;\n}\n.page .pro {\n  width: 9.46666667rem;\n}\n.page ._header {\n  position: fixed;\n  top: 0;\n  width: 10rem;\n  color: #fff;\n  text-align: center;\n  line-height: 1.2rem;\n  z-index: 3000;\n  background-color: #ff8600;\n}\n.page ._header .icon-back {\n  font-size: .4rem;\n  position: absolute;\n  left: 0.2rem;\n}\n.page ._header .icon-close {\n  position: absolute;\n  right: .33333333rem;\n  top: 0;\n  font-size: 0.4rem;\n}\n.page ._header h6 {\n  font-size: .48rem;\n  font-weight: 100;\n  margin: 0 1.06666667rem;\n}\n.page ._content {\n  margin-top: 1.2rem;\n}\n.page .test {\n  width: 5rem;\n  height: 5rem;\n  background: red;\n  float: left;\n}\n.page .test1 {\n  width: 5rem;\n  height: 5rem;\n  background: green;\n  float: left;\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function (useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if (item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				var styleTarget = fn.call(this, selector);
				// Special case to return head of iframe instead of iframe itself
				if (styleTarget instanceof window.HTMLIFrameElement) {
					try {
						// This will throw an exception if access to iframe is blocked
						// due to cross-origin restrictions
						styleTarget = styleTarget.contentDocument.head;
					} catch(e) {
						styleTarget = null;
					}
				}
				memo[selector] = styleTarget;
			}
			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(6);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else if (typeof options.insertAt === "object" && options.insertAt.before) {
			var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
			target.insertBefore(style, nextSibling);
		} else {
			throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
		// get current location
		var location = typeof window !== "undefined" && window.location;

		if (!location) {
			throw new Error("fixUrls requires window.location");
		}

		// blank or null?
		if (!css || typeof css !== "string") {
			return css;
		}

		var baseUrl = location.protocol + "//" + location.host;
		var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
	 This regular expression is just a way to recursively match brackets within
	 a string.
	 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	    (  = Start a capturing group
	      (?:  = Start a non-capturing group
	          [^)(]  = Match anything that isn't a parentheses
	          |  = OR
	          \(  = Match a start parentheses
	              (?:  = Start another non-capturing groups
	                  [^)(]+  = Match anything that isn't a parentheses
	                  |  = OR
	                  \(  = Match a start parentheses
	                      [^)(]*  = Match anything that isn't a parentheses
	                  \)  = Match a end parentheses
	              )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
	  \)  = Match a close parens
	 	 /gi  = Get all matches, not the first.  Be case insensitive.
	  */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
				return $1;
			}).replace(/^'(.*)'$/, function (o, $1) {
				return $1;
			});

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
				return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
				//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(8)(__webpack_require__(9));

	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.Zepto;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		function log(error) {
			(typeof console !== "undefined")
			&& (console.error || console.log)("[Script Loader]", error);
		}

		// Check for IE =< 8
		function isIE() {
			return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
		}

		try {
			if (typeof execScript !== "undefined" && isIE()) {
				execScript(src);
			} else if (typeof eval !== "undefined") {
				eval.call(null, src);
			} else {
				log("EvalError: No eval function available");
			}
		} catch (error) {
			log(error);
		}
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function(global, factory) {\n  if (typeof define === 'function' && define.amd)\n    define(function() { return factory(global) })\n  else\n    factory(global)\n}(this, function(window) {\n  var Zepto = (function() {\n  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,\n    document = window.document,\n    elementDisplay = {}, classCache = {},\n    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },\n    fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n    singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n    rootNodeRE = /^(?:body|html)$/i,\n    capitalRE = /([A-Z])/g,\n\n    // special attributes that should be get/set via method calls\n    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n\n    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],\n    table = document.createElement('table'),\n    tableRow = document.createElement('tr'),\n    containers = {\n      'tr': document.createElement('tbody'),\n      'tbody': table, 'thead': table, 'tfoot': table,\n      'td': tableRow, 'th': tableRow,\n      '*': document.createElement('div')\n    },\n    readyRE = /complete|loaded|interactive/,\n    simpleSelectorRE = /^[\\w-]*$/,\n    class2type = {},\n    toString = class2type.toString,\n    zepto = {},\n    camelize, uniq,\n    tempParent = document.createElement('div'),\n    propMap = {\n      'tabindex': 'tabIndex',\n      'readonly': 'readOnly',\n      'for': 'htmlFor',\n      'class': 'className',\n      'maxlength': 'maxLength',\n      'cellspacing': 'cellSpacing',\n      'cellpadding': 'cellPadding',\n      'rowspan': 'rowSpan',\n      'colspan': 'colSpan',\n      'usemap': 'useMap',\n      'frameborder': 'frameBorder',\n      'contenteditable': 'contentEditable'\n    },\n    isArray = Array.isArray ||\n      function(object){ return object instanceof Array }\n\n  zepto.matches = function(element, selector) {\n    if (!selector || !element || element.nodeType !== 1) return false\n    var matchesSelector = element.matches || element.webkitMatchesSelector ||\n                          element.mozMatchesSelector || element.oMatchesSelector ||\n                          element.matchesSelector\n    if (matchesSelector) return matchesSelector.call(element, selector)\n    // fall back to performing a selector:\n    var match, parent = element.parentNode, temp = !parent\n    if (temp) (parent = tempParent).appendChild(element)\n    match = ~zepto.qsa(parent, selector).indexOf(element)\n    temp && tempParent.removeChild(element)\n    return match\n  }\n\n  function type(obj) {\n    return obj == null ? String(obj) :\n      class2type[toString.call(obj)] || \"object\"\n  }\n\n  function isFunction(value) { return type(value) == \"function\" }\n  function isWindow(obj)     { return obj != null && obj == obj.window }\n  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }\n  function isObject(obj)     { return type(obj) == \"object\" }\n  function isPlainObject(obj) {\n    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype\n  }\n\n  function likeArray(obj) {\n    var length = !!obj && 'length' in obj && obj.length,\n      type = $.type(obj)\n\n    return 'function' != type && !isWindow(obj) && (\n      'array' == type || length === 0 ||\n        (typeof length == 'number' && length > 0 && (length - 1) in obj)\n    )\n  }\n\n  function compact(array) { return filter.call(array, function(item){ return item != null }) }\n  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }\n  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }\n  function dasherize(str) {\n    return str.replace(/::/g, '/')\n           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')\n           .replace(/([a-z\\d])([A-Z])/g, '$1_$2')\n           .replace(/_/g, '-')\n           .toLowerCase()\n  }\n  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }\n\n  function classRE(name) {\n    return name in classCache ?\n      classCache[name] : (classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)'))\n  }\n\n  function maybeAddPx(name, value) {\n    return (typeof value == \"number\" && !cssNumber[dasherize(name)]) ? value + \"px\" : value\n  }\n\n  function defaultDisplay(nodeName) {\n    var element, display\n    if (!elementDisplay[nodeName]) {\n      element = document.createElement(nodeName)\n      document.body.appendChild(element)\n      display = getComputedStyle(element, '').getPropertyValue(\"display\")\n      element.parentNode.removeChild(element)\n      display == \"none\" && (display = \"block\")\n      elementDisplay[nodeName] = display\n    }\n    return elementDisplay[nodeName]\n  }\n\n  function children(element) {\n    return 'children' in element ?\n      slice.call(element.children) :\n      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })\n  }\n\n  function Z(dom, selector) {\n    var i, len = dom ? dom.length : 0\n    for (i = 0; i < len; i++) this[i] = dom[i]\n    this.length = len\n    this.selector = selector || ''\n  }\n\n  // `$.zepto.fragment` takes a html string and an optional tag name\n  // to generate DOM nodes from the given html string.\n  // The generated DOM nodes are returned as an array.\n  // This function can be overridden in plugins for example to make\n  // it compatible with browsers that don't support the DOM fully.\n  zepto.fragment = function(html, name, properties) {\n    var dom, nodes, container\n\n    // A special case optimization for a single tag\n    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))\n\n    if (!dom) {\n      if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\")\n      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1\n      if (!(name in containers)) name = '*'\n\n      container = containers[name]\n      container.innerHTML = '' + html\n      dom = $.each(slice.call(container.childNodes), function(){\n        container.removeChild(this)\n      })\n    }\n\n    if (isPlainObject(properties)) {\n      nodes = $(dom)\n      $.each(properties, function(key, value) {\n        if (methodAttributes.indexOf(key) > -1) nodes[key](value)\n        else nodes.attr(key, value)\n      })\n    }\n\n    return dom\n  }\n\n  // `$.zepto.Z` swaps out the prototype of the given `dom` array\n  // of nodes with `$.fn` and thus supplying all the Zepto functions\n  // to the array. This method can be overridden in plugins.\n  zepto.Z = function(dom, selector) {\n    return new Z(dom, selector)\n  }\n\n  // `$.zepto.isZ` should return `true` if the given object is a Zepto\n  // collection. This method can be overridden in plugins.\n  zepto.isZ = function(object) {\n    return object instanceof zepto.Z\n  }\n\n  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n  // takes a CSS selector and an optional context (and handles various\n  // special cases).\n  // This method can be overridden in plugins.\n  zepto.init = function(selector, context) {\n    var dom\n    // If nothing given, return an empty Zepto collection\n    if (!selector) return zepto.Z()\n    // Optimize for string selectors\n    else if (typeof selector == 'string') {\n      selector = selector.trim()\n      // If it's a html fragment, create nodes from it\n      // Note: In both Chrome 21 and Firefox 15, DOM error 12\n      // is thrown if the fragment doesn't begin with <\n      if (selector[0] == '<' && fragmentRE.test(selector))\n        dom = zepto.fragment(selector, RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // If it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // If a function is given, call it when the DOM is ready\n    else if (isFunction(selector)) return $(document).ready(selector)\n    // If a Zepto collection is given, just return it\n    else if (zepto.isZ(selector)) return selector\n    else {\n      // normalize array if an array of nodes is given\n      if (isArray(selector)) dom = compact(selector)\n      // Wrap DOM nodes.\n      else if (isObject(selector))\n        dom = [selector], selector = null\n      // If it's a html fragment, create nodes from it\n      else if (fragmentRE.test(selector))\n        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // And last but no least, if it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // create a new Zepto collection from the nodes found\n    return zepto.Z(dom, selector)\n  }\n\n  // `$` will be the base `Zepto` object. When calling this\n  // function just call `$.zepto.init, which makes the implementation\n  // details of selecting nodes and creating Zepto collections\n  // patchable in plugins.\n  $ = function(selector, context){\n    return zepto.init(selector, context)\n  }\n\n  function extend(target, source, deep) {\n    for (key in source)\n      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n        if (isPlainObject(source[key]) && !isPlainObject(target[key]))\n          target[key] = {}\n        if (isArray(source[key]) && !isArray(target[key]))\n          target[key] = []\n        extend(target[key], source[key], deep)\n      }\n      else if (source[key] !== undefined) target[key] = source[key]\n  }\n\n  // Copy all but undefined properties from one or more\n  // objects to the `target` object.\n  $.extend = function(target){\n    var deep, args = slice.call(arguments, 1)\n    if (typeof target == 'boolean') {\n      deep = target\n      target = args.shift()\n    }\n    args.forEach(function(arg){ extend(target, arg, deep) })\n    return target\n  }\n\n  // `$.zepto.qsa` is Zepto's CSS selector implementation which\n  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n  // This method can be overridden in plugins.\n  zepto.qsa = function(element, selector){\n    var found,\n        maybeID = selector[0] == '#',\n        maybeClass = !maybeID && selector[0] == '.',\n        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked\n        isSimple = simpleSelectorRE.test(nameOnly)\n    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById\n      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :\n      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :\n      slice.call(\n        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n          element.getElementsByTagName(selector) : // Or a tag\n          element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n      )\n  }\n\n  function filtered(nodes, selector) {\n    return selector == null ? $(nodes) : $(nodes).filter(selector)\n  }\n\n  $.contains = document.documentElement.contains ?\n    function(parent, node) {\n      return parent !== node && parent.contains(node)\n    } :\n    function(parent, node) {\n      while (node && (node = node.parentNode))\n        if (node === parent) return true\n      return false\n    }\n\n  function funcArg(context, arg, idx, payload) {\n    return isFunction(arg) ? arg.call(context, idx, payload) : arg\n  }\n\n  function setAttribute(node, name, value) {\n    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)\n  }\n\n  // access className property while respecting SVGAnimatedString\n  function className(node, value){\n    var klass = node.className || '',\n        svg   = klass && klass.baseVal !== undefined\n\n    if (value === undefined) return svg ? klass.baseVal : klass\n    svg ? (klass.baseVal = value) : (node.className = value)\n  }\n\n  // \"true\"  => true\n  // \"false\" => false\n  // \"null\"  => null\n  // \"42\"    => 42\n  // \"42.5\"  => 42.5\n  // \"08\"    => \"08\"\n  // JSON    => parse if valid\n  // String  => self\n  function deserializeValue(value) {\n    try {\n      return value ?\n        value == \"true\" ||\n        ( value == \"false\" ? false :\n          value == \"null\" ? null :\n          +value + \"\" == value ? +value :\n          /^[\\[\\{]/.test(value) ? $.parseJSON(value) :\n          value )\n        : value\n    } catch(e) {\n      return value\n    }\n  }\n\n  $.type = type\n  $.isFunction = isFunction\n  $.isWindow = isWindow\n  $.isArray = isArray\n  $.isPlainObject = isPlainObject\n\n  $.isEmptyObject = function(obj) {\n    var name\n    for (name in obj) return false\n    return true\n  }\n\n  $.isNumeric = function(val) {\n    var num = Number(val), type = typeof val\n    return val != null && type != 'boolean' &&\n      (type != 'string' || val.length) &&\n      !isNaN(num) && isFinite(num) || false\n  }\n\n  $.inArray = function(elem, array, i){\n    return emptyArray.indexOf.call(array, elem, i)\n  }\n\n  $.camelCase = camelize\n  $.trim = function(str) {\n    return str == null ? \"\" : String.prototype.trim.call(str)\n  }\n\n  // plugin compatibility\n  $.uuid = 0\n  $.support = { }\n  $.expr = { }\n  $.noop = function() {}\n\n  $.map = function(elements, callback){\n    var value, values = [], i, key\n    if (likeArray(elements))\n      for (i = 0; i < elements.length; i++) {\n        value = callback(elements[i], i)\n        if (value != null) values.push(value)\n      }\n    else\n      for (key in elements) {\n        value = callback(elements[key], key)\n        if (value != null) values.push(value)\n      }\n    return flatten(values)\n  }\n\n  $.each = function(elements, callback){\n    var i, key\n    if (likeArray(elements)) {\n      for (i = 0; i < elements.length; i++)\n        if (callback.call(elements[i], i, elements[i]) === false) return elements\n    } else {\n      for (key in elements)\n        if (callback.call(elements[key], key, elements[key]) === false) return elements\n    }\n\n    return elements\n  }\n\n  $.grep = function(elements, callback){\n    return filter.call(elements, callback)\n  }\n\n  if (window.JSON) $.parseJSON = JSON.parse\n\n  // Populate the class2type map\n  $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n    class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase()\n  })\n\n  // Define methods that will be available on all\n  // Zepto collections\n  $.fn = {\n    constructor: zepto.Z,\n    length: 0,\n\n    // Because a collection acts like an array\n    // copy over these useful array functions.\n    forEach: emptyArray.forEach,\n    reduce: emptyArray.reduce,\n    push: emptyArray.push,\n    sort: emptyArray.sort,\n    splice: emptyArray.splice,\n    indexOf: emptyArray.indexOf,\n    concat: function(){\n      var i, value, args = []\n      for (i = 0; i < arguments.length; i++) {\n        value = arguments[i]\n        args[i] = zepto.isZ(value) ? value.toArray() : value\n      }\n      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)\n    },\n\n    // `map` and `slice` in the jQuery API work differently\n    // from their array counterparts\n    map: function(fn){\n      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))\n    },\n    slice: function(){\n      return $(slice.apply(this, arguments))\n    },\n\n    ready: function(callback){\n      // need to check if document.body exists for IE as that browser reports\n      // document ready when it hasn't yet created the body element\n      if (readyRE.test(document.readyState) && document.body) callback($)\n      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)\n      return this\n    },\n    get: function(idx){\n      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]\n    },\n    toArray: function(){ return this.get() },\n    size: function(){\n      return this.length\n    },\n    remove: function(){\n      return this.each(function(){\n        if (this.parentNode != null)\n          this.parentNode.removeChild(this)\n      })\n    },\n    each: function(callback){\n      emptyArray.every.call(this, function(el, idx){\n        return callback.call(el, idx, el) !== false\n      })\n      return this\n    },\n    filter: function(selector){\n      if (isFunction(selector)) return this.not(this.not(selector))\n      return $(filter.call(this, function(element){\n        return zepto.matches(element, selector)\n      }))\n    },\n    add: function(selector,context){\n      return $(uniq(this.concat($(selector,context))))\n    },\n    is: function(selector){\n      return this.length > 0 && zepto.matches(this[0], selector)\n    },\n    not: function(selector){\n      var nodes=[]\n      if (isFunction(selector) && selector.call !== undefined)\n        this.each(function(idx){\n          if (!selector.call(this,idx)) nodes.push(this)\n        })\n      else {\n        var excludes = typeof selector == 'string' ? this.filter(selector) :\n          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)\n        this.forEach(function(el){\n          if (excludes.indexOf(el) < 0) nodes.push(el)\n        })\n      }\n      return $(nodes)\n    },\n    has: function(selector){\n      return this.filter(function(){\n        return isObject(selector) ?\n          $.contains(this, selector) :\n          $(this).find(selector).size()\n      })\n    },\n    eq: function(idx){\n      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)\n    },\n    first: function(){\n      var el = this[0]\n      return el && !isObject(el) ? el : $(el)\n    },\n    last: function(){\n      var el = this[this.length - 1]\n      return el && !isObject(el) ? el : $(el)\n    },\n    find: function(selector){\n      var result, $this = this\n      if (!selector) result = $()\n      else if (typeof selector == 'object')\n        result = $(selector).filter(function(){\n          var node = this\n          return emptyArray.some.call($this, function(parent){\n            return $.contains(parent, node)\n          })\n        })\n      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))\n      else result = this.map(function(){ return zepto.qsa(this, selector) })\n      return result\n    },\n    closest: function(selector, context){\n      var nodes = [], collection = typeof selector == 'object' && $(selector)\n      this.each(function(_, node){\n        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))\n          node = node !== context && !isDocument(node) && node.parentNode\n        if (node && nodes.indexOf(node) < 0) nodes.push(node)\n      })\n      return $(nodes)\n    },\n    parents: function(selector){\n      var ancestors = [], nodes = this\n      while (nodes.length > 0)\n        nodes = $.map(nodes, function(node){\n          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n            ancestors.push(node)\n            return node\n          }\n        })\n      return filtered(ancestors, selector)\n    },\n    parent: function(selector){\n      return filtered(uniq(this.pluck('parentNode')), selector)\n    },\n    children: function(selector){\n      return filtered(this.map(function(){ return children(this) }), selector)\n    },\n    contents: function() {\n      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })\n    },\n    siblings: function(selector){\n      return filtered(this.map(function(i, el){\n        return filter.call(children(el.parentNode), function(child){ return child!==el })\n      }), selector)\n    },\n    empty: function(){\n      return this.each(function(){ this.innerHTML = '' })\n    },\n    // `pluck` is borrowed from Prototype.js\n    pluck: function(property){\n      return $.map(this, function(el){ return el[property] })\n    },\n    show: function(){\n      return this.each(function(){\n        this.style.display == \"none\" && (this.style.display = '')\n        if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\")\n          this.style.display = defaultDisplay(this.nodeName)\n      })\n    },\n    replaceWith: function(newContent){\n      return this.before(newContent).remove()\n    },\n    wrap: function(structure){\n      var func = isFunction(structure)\n      if (this[0] && !func)\n        var dom   = $(structure).get(0),\n            clone = dom.parentNode || this.length > 1\n\n      return this.each(function(index){\n        $(this).wrapAll(\n          func ? structure.call(this, index) :\n            clone ? dom.cloneNode(true) : dom\n        )\n      })\n    },\n    wrapAll: function(structure){\n      if (this[0]) {\n        $(this[0]).before(structure = $(structure))\n        var children\n        // drill down to the inmost element\n        while ((children = structure.children()).length) structure = children.first()\n        $(structure).append(this)\n      }\n      return this\n    },\n    wrapInner: function(structure){\n      var func = isFunction(structure)\n      return this.each(function(index){\n        var self = $(this), contents = self.contents(),\n            dom  = func ? structure.call(this, index) : structure\n        contents.length ? contents.wrapAll(dom) : self.append(dom)\n      })\n    },\n    unwrap: function(){\n      this.parent().each(function(){\n        $(this).replaceWith($(this).children())\n      })\n      return this\n    },\n    clone: function(){\n      return this.map(function(){ return this.cloneNode(true) })\n    },\n    hide: function(){\n      return this.css(\"display\", \"none\")\n    },\n    toggle: function(setting){\n      return this.each(function(){\n        var el = $(this)\n        ;(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide()\n      })\n    },\n    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },\n    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },\n    html: function(html){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var originHtml = this.innerHTML\n          $(this).empty().append( funcArg(this, html, idx, originHtml) )\n        }) :\n        (0 in this ? this[0].innerHTML : null)\n    },\n    text: function(text){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var newText = funcArg(this, text, idx, this.textContent)\n          this.textContent = newText == null ? '' : ''+newText\n        }) :\n        (0 in this ? this.pluck('textContent').join(\"\") : null)\n    },\n    attr: function(name, value){\n      var result\n      return (typeof name == 'string' && !(1 in arguments)) ?\n        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :\n        this.each(function(idx){\n          if (this.nodeType !== 1) return\n          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])\n          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))\n        })\n    },\n    removeAttr: function(name){\n      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){\n        setAttribute(this, attribute)\n      }, this)})\n    },\n    prop: function(name, value){\n      name = propMap[name] || name\n      return (1 in arguments) ?\n        this.each(function(idx){\n          this[name] = funcArg(this, value, idx, this[name])\n        }) :\n        (this[0] && this[0][name])\n    },\n    removeProp: function(name){\n      name = propMap[name] || name\n      return this.each(function(){ delete this[name] })\n    },\n    data: function(name, value){\n      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()\n\n      var data = (1 in arguments) ?\n        this.attr(attrName, value) :\n        this.attr(attrName)\n\n      return data !== null ? deserializeValue(data) : undefined\n    },\n    val: function(value){\n      if (0 in arguments) {\n        if (value == null) value = \"\"\n        return this.each(function(idx){\n          this.value = funcArg(this, value, idx, this.value)\n        })\n      } else {\n        return this[0] && (this[0].multiple ?\n           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :\n           this[0].value)\n      }\n    },\n    offset: function(coordinates){\n      if (coordinates) return this.each(function(index){\n        var $this = $(this),\n            coords = funcArg(this, coordinates, index, $this.offset()),\n            parentOffset = $this.offsetParent().offset(),\n            props = {\n              top:  coords.top  - parentOffset.top,\n              left: coords.left - parentOffset.left\n            }\n\n        if ($this.css('position') == 'static') props['position'] = 'relative'\n        $this.css(props)\n      })\n      if (!this.length) return null\n      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))\n        return {top: 0, left: 0}\n      var obj = this[0].getBoundingClientRect()\n      return {\n        left: obj.left + window.pageXOffset,\n        top: obj.top + window.pageYOffset,\n        width: Math.round(obj.width),\n        height: Math.round(obj.height)\n      }\n    },\n    css: function(property, value){\n      if (arguments.length < 2) {\n        var element = this[0]\n        if (typeof property == 'string') {\n          if (!element) return\n          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)\n        } else if (isArray(property)) {\n          if (!element) return\n          var props = {}\n          var computedStyle = getComputedStyle(element, '')\n          $.each(property, function(_, prop){\n            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))\n          })\n          return props\n        }\n      }\n\n      var css = ''\n      if (type(property) == 'string') {\n        if (!value && value !== 0)\n          this.each(function(){ this.style.removeProperty(dasherize(property)) })\n        else\n          css = dasherize(property) + \":\" + maybeAddPx(property, value)\n      } else {\n        for (key in property)\n          if (!property[key] && property[key] !== 0)\n            this.each(function(){ this.style.removeProperty(dasherize(key)) })\n          else\n            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'\n      }\n\n      return this.each(function(){ this.style.cssText += ';' + css })\n    },\n    index: function(element){\n      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])\n    },\n    hasClass: function(name){\n      if (!name) return false\n      return emptyArray.some.call(this, function(el){\n        return this.test(className(el))\n      }, classRE(name))\n    },\n    addClass: function(name){\n      if (!name) return this\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        classList = []\n        var cls = className(this), newName = funcArg(this, name, idx, cls)\n        newName.split(/\\s+/g).forEach(function(klass){\n          if (!$(this).hasClass(klass)) classList.push(klass)\n        }, this)\n        classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"))\n      })\n    },\n    removeClass: function(name){\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        if (name === undefined) return className(this, '')\n        classList = className(this)\n        funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function(klass){\n          classList = classList.replace(classRE(klass), \" \")\n        })\n        className(this, classList.trim())\n      })\n    },\n    toggleClass: function(name, when){\n      if (!name) return this\n      return this.each(function(idx){\n        var $this = $(this), names = funcArg(this, name, idx, className(this))\n        names.split(/\\s+/g).forEach(function(klass){\n          (when === undefined ? !$this.hasClass(klass) : when) ?\n            $this.addClass(klass) : $this.removeClass(klass)\n        })\n      })\n    },\n    scrollTop: function(value){\n      if (!this.length) return\n      var hasScrollTop = 'scrollTop' in this[0]\n      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset\n      return this.each(hasScrollTop ?\n        function(){ this.scrollTop = value } :\n        function(){ this.scrollTo(this.scrollX, value) })\n    },\n    scrollLeft: function(value){\n      if (!this.length) return\n      var hasScrollLeft = 'scrollLeft' in this[0]\n      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset\n      return this.each(hasScrollLeft ?\n        function(){ this.scrollLeft = value } :\n        function(){ this.scrollTo(value, this.scrollY) })\n    },\n    position: function() {\n      if (!this.length) return\n\n      var elem = this[0],\n        // Get *real* offsetParent\n        offsetParent = this.offsetParent(),\n        // Get correct offsets\n        offset       = this.offset(),\n        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()\n\n      // Subtract element margins\n      // note: when an element has margin: auto the offsetLeft and marginLeft\n      // are the same in Safari causing offset.left to incorrectly be 0\n      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0\n      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0\n\n      // Add offsetParent borders\n      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0\n      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0\n\n      // Subtract the two offsets\n      return {\n        top:  offset.top  - parentOffset.top,\n        left: offset.left - parentOffset.left\n      }\n    },\n    offsetParent: function() {\n      return this.map(function(){\n        var parent = this.offsetParent || document.body\n        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\")\n          parent = parent.offsetParent\n        return parent\n      })\n    }\n  }\n\n  // for now\n  $.fn.detach = $.fn.remove\n\n  // Generate the `width` and `height` functions\n  ;['width', 'height'].forEach(function(dimension){\n    var dimensionProperty =\n      dimension.replace(/./, function(m){ return m[0].toUpperCase() })\n\n    $.fn[dimension] = function(value){\n      var offset, el = this[0]\n      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :\n        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :\n        (offset = this.offset()) && offset[dimension]\n      else return this.each(function(idx){\n        el = $(this)\n        el.css(dimension, funcArg(this, value, idx, el[dimension]()))\n      })\n    }\n  })\n\n  function traverseNode(node, fun) {\n    fun(node)\n    for (var i = 0, len = node.childNodes.length; i < len; i++)\n      traverseNode(node.childNodes[i], fun)\n  }\n\n  // Generate the `after`, `prepend`, `before`, `append`,\n  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n  adjacencyOperators.forEach(function(operator, operatorIndex) {\n    var inside = operatorIndex % 2 //=> prepend, append\n\n    $.fn[operator] = function(){\n      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n      var argType, nodes = $.map(arguments, function(arg) {\n            var arr = []\n            argType = type(arg)\n            if (argType == \"array\") {\n              arg.forEach(function(el) {\n                if (el.nodeType !== undefined) return arr.push(el)\n                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())\n                arr = arr.concat(zepto.fragment(el))\n              })\n              return arr\n            }\n            return argType == \"object\" || arg == null ?\n              arg : zepto.fragment(arg)\n          }),\n          parent, copyByClone = this.length > 1\n      if (nodes.length < 1) return this\n\n      return this.each(function(_, target){\n        parent = inside ? target : target.parentNode\n\n        // convert all methods to a \"before\" operation\n        target = operatorIndex == 0 ? target.nextSibling :\n                 operatorIndex == 1 ? target.firstChild :\n                 operatorIndex == 2 ? target :\n                 null\n\n        var parentInDocument = $.contains(document.documentElement, parent)\n\n        nodes.forEach(function(node){\n          if (copyByClone) node = node.cloneNode(true)\n          else if (!parent) return $(node).remove()\n\n          parent.insertBefore(node, target)\n          if (parentInDocument) traverseNode(node, function(el){\n            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&\n               (!el.type || el.type === 'text/javascript') && !el.src){\n              var target = el.ownerDocument ? el.ownerDocument.defaultView : window\n              target['eval'].call(target, el.innerHTML)\n            }\n          })\n        })\n      })\n    }\n\n    // after    => insertAfter\n    // prepend  => prependTo\n    // before   => insertBefore\n    // append   => appendTo\n    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){\n      $(html)[operator](this)\n      return this\n    }\n  })\n\n  zepto.Z.prototype = Z.prototype = $.fn\n\n  // Export internal API functions in the `$.zepto` namespace\n  zepto.uniq = uniq\n  zepto.deserializeValue = deserializeValue\n  $.zepto = zepto\n\n  return $\n})()\n\nwindow.Zepto = Zepto\nwindow.$ === undefined && (window.$ = Zepto)\n\n;(function($){\n  var _zid = 1, undefined,\n      slice = Array.prototype.slice,\n      isFunction = $.isFunction,\n      isString = function(obj){ return typeof obj == 'string' },\n      handlers = {},\n      specialEvents={},\n      focusinSupported = 'onfocusin' in window,\n      focus = { focus: 'focusin', blur: 'focusout' },\n      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }\n\n  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'\n\n  function zid(element) {\n    return element._zid || (element._zid = _zid++)\n  }\n  function findHandlers(element, event, fn, selector) {\n    event = parse(event)\n    if (event.ns) var matcher = matcherFor(event.ns)\n    return (handlers[zid(element)] || []).filter(function(handler) {\n      return handler\n        && (!event.e  || handler.e == event.e)\n        && (!event.ns || matcher.test(handler.ns))\n        && (!fn       || zid(handler.fn) === zid(fn))\n        && (!selector || handler.sel == selector)\n    })\n  }\n  function parse(event) {\n    var parts = ('' + event).split('.')\n    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}\n  }\n  function matcherFor(ns) {\n    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')\n  }\n\n  function eventCapture(handler, captureSetting) {\n    return handler.del &&\n      (!focusinSupported && (handler.e in focus)) ||\n      !!captureSetting\n  }\n\n  function realEvent(type) {\n    return hover[type] || (focusinSupported && focus[type]) || type\n  }\n\n  function add(element, events, fn, data, selector, delegator, capture){\n    var id = zid(element), set = (handlers[id] || (handlers[id] = []))\n    events.split(/\\s/).forEach(function(event){\n      if (event == 'ready') return $(document).ready(fn)\n      var handler   = parse(event)\n      handler.fn    = fn\n      handler.sel   = selector\n      // emulate mouseenter, mouseleave\n      if (handler.e in hover) fn = function(e){\n        var related = e.relatedTarget\n        if (!related || (related !== this && !$.contains(this, related)))\n          return handler.fn.apply(this, arguments)\n      }\n      handler.del   = delegator\n      var callback  = delegator || fn\n      handler.proxy = function(e){\n        e = compatible(e)\n        if (e.isImmediatePropagationStopped()) return\n        e.data = data\n        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))\n        if (result === false) e.preventDefault(), e.stopPropagation()\n        return result\n      }\n      handler.i = set.length\n      set.push(handler)\n      if ('addEventListener' in element)\n        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n    })\n  }\n  function remove(element, events, fn, selector, capture){\n    var id = zid(element)\n    ;(events || '').split(/\\s/).forEach(function(event){\n      findHandlers(element, event, fn, selector).forEach(function(handler){\n        delete handlers[id][handler.i]\n      if ('removeEventListener' in element)\n        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n      })\n    })\n  }\n\n  $.event = { add: add, remove: remove }\n\n  $.proxy = function(fn, context) {\n    var args = (2 in arguments) && slice.call(arguments, 2)\n    if (isFunction(fn)) {\n      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }\n      proxyFn._zid = zid(fn)\n      return proxyFn\n    } else if (isString(context)) {\n      if (args) {\n        args.unshift(fn[context], fn)\n        return $.proxy.apply(null, args)\n      } else {\n        return $.proxy(fn[context], fn)\n      }\n    } else {\n      throw new TypeError(\"expected function\")\n    }\n  }\n\n  $.fn.bind = function(event, data, callback){\n    return this.on(event, data, callback)\n  }\n  $.fn.unbind = function(event, callback){\n    return this.off(event, callback)\n  }\n  $.fn.one = function(event, selector, data, callback){\n    return this.on(event, selector, data, callback, 1)\n  }\n\n  var returnTrue = function(){return true},\n      returnFalse = function(){return false},\n      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n      eventMethods = {\n        preventDefault: 'isDefaultPrevented',\n        stopImmediatePropagation: 'isImmediatePropagationStopped',\n        stopPropagation: 'isPropagationStopped'\n      }\n\n  function compatible(event, source) {\n    if (source || !event.isDefaultPrevented) {\n      source || (source = event)\n\n      $.each(eventMethods, function(name, predicate) {\n        var sourceMethod = source[name]\n        event[name] = function(){\n          this[predicate] = returnTrue\n          return sourceMethod && sourceMethod.apply(source, arguments)\n        }\n        event[predicate] = returnFalse\n      })\n\n      event.timeStamp || (event.timeStamp = Date.now())\n\n      if (source.defaultPrevented !== undefined ? source.defaultPrevented :\n          'returnValue' in source ? source.returnValue === false :\n          source.getPreventDefault && source.getPreventDefault())\n        event.isDefaultPrevented = returnTrue\n    }\n    return event\n  }\n\n  function createProxy(event) {\n    var key, proxy = { originalEvent: event }\n    for (key in event)\n      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]\n\n    return compatible(proxy, event)\n  }\n\n  $.fn.delegate = function(selector, event, callback){\n    return this.on(event, selector, callback)\n  }\n  $.fn.undelegate = function(selector, event, callback){\n    return this.off(event, selector, callback)\n  }\n\n  $.fn.live = function(event, callback){\n    $(document.body).delegate(this.selector, event, callback)\n    return this\n  }\n  $.fn.die = function(event, callback){\n    $(document.body).undelegate(this.selector, event, callback)\n    return this\n  }\n\n  $.fn.on = function(event, selector, data, callback, one){\n    var autoRemove, delegator, $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.on(type, selector, data, fn, one)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = data, data = selector, selector = undefined\n    if (callback === undefined || data === false)\n      callback = data, data = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(_, element){\n      if (one) autoRemove = function(e){\n        remove(element, e.type, callback)\n        return callback.apply(this, arguments)\n      }\n\n      if (selector) delegator = function(e){\n        var evt, match = $(e.target).closest(selector, element).get(0)\n        if (match && match !== element) {\n          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})\n          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))\n        }\n      }\n\n      add(element, event, callback, data, selector, delegator || autoRemove)\n    })\n  }\n  $.fn.off = function(event, selector, callback){\n    var $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.off(type, selector, fn)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = selector, selector = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(){\n      remove(this, event, callback, selector)\n    })\n  }\n\n  $.fn.trigger = function(event, args){\n    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)\n    event._args = args\n    return this.each(function(){\n      // handle focus(), blur() by calling them directly\n      if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]()\n      // items in the collection might not be DOM elements\n      else if ('dispatchEvent' in this) this.dispatchEvent(event)\n      else $(this).triggerHandler(event, args)\n    })\n  }\n\n  // triggers event handlers on current element just as if an event occurred,\n  // doesn't trigger an actual event, doesn't bubble\n  $.fn.triggerHandler = function(event, args){\n    var e, result\n    this.each(function(i, element){\n      e = createProxy(isString(event) ? $.Event(event) : event)\n      e._args = args\n      e.target = element\n      $.each(findHandlers(element, event.type || event), function(i, handler){\n        result = handler.proxy(e)\n        if (e.isImmediatePropagationStopped()) return false\n      })\n    })\n    return result\n  }\n\n  // shortcut methods for `.bind(event, fn)` for each event type\n  ;('focusin focusout focus blur load resize scroll unload click dblclick '+\n  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+\n  'change select keydown keypress keyup error').split(' ').forEach(function(event) {\n    $.fn[event] = function(callback) {\n      return (0 in arguments) ?\n        this.bind(event, callback) :\n        this.trigger(event)\n    }\n  })\n\n  $.Event = function(type, props) {\n    if (!isString(type)) props = type, type = props.type\n    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true\n    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])\n    event.initEvent(type, bubbles, true)\n    return compatible(event)\n  }\n\n})(Zepto)\n\n;(function($){\n  var jsonpID = +new Date(),\n      document = window.document,\n      key,\n      name,\n      rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n      scriptTypeRE = /^(?:text|application)\\/javascript/i,\n      xmlTypeRE = /^(?:text|application)\\/xml/i,\n      jsonType = 'application/json',\n      htmlType = 'text/html',\n      blankRE = /^\\s*$/,\n      originAnchor = document.createElement('a')\n\n  originAnchor.href = window.location.href\n\n  // trigger a custom event and return false if it was cancelled\n  function triggerAndReturn(context, eventName, data) {\n    var event = $.Event(eventName)\n    $(context).trigger(event, data)\n    return !event.isDefaultPrevented()\n  }\n\n  // trigger an Ajax \"global\" event\n  function triggerGlobal(settings, context, eventName, data) {\n    if (settings.global) return triggerAndReturn(context || document, eventName, data)\n  }\n\n  // Number of active Ajax requests\n  $.active = 0\n\n  function ajaxStart(settings) {\n    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')\n  }\n  function ajaxStop(settings) {\n    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')\n  }\n\n  // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n  function ajaxBeforeSend(xhr, settings) {\n    var context = settings.context\n    if (settings.beforeSend.call(context, xhr, settings) === false ||\n        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)\n      return false\n\n    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])\n  }\n  function ajaxSuccess(data, xhr, settings, deferred) {\n    var context = settings.context, status = 'success'\n    settings.success.call(context, data, status, xhr)\n    if (deferred) deferred.resolveWith(context, [data, status, xhr])\n    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])\n    ajaxComplete(status, xhr, settings)\n  }\n  // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n  function ajaxError(error, type, xhr, settings, deferred) {\n    var context = settings.context\n    settings.error.call(context, xhr, type, error)\n    if (deferred) deferred.rejectWith(context, [xhr, type, error])\n    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])\n    ajaxComplete(type, xhr, settings)\n  }\n  // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n  function ajaxComplete(status, xhr, settings) {\n    var context = settings.context\n    settings.complete.call(context, xhr, status)\n    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])\n    ajaxStop(settings)\n  }\n\n  function ajaxDataFilter(data, type, settings) {\n    if (settings.dataFilter == empty) return data\n    var context = settings.context\n    return settings.dataFilter.call(context, data, type)\n  }\n\n  // Empty function, used as default callback\n  function empty() {}\n\n  $.ajaxJSONP = function(options, deferred){\n    if (!('type' in options)) return $.ajax(options)\n\n    var _callbackName = options.jsonpCallback,\n      callbackName = ($.isFunction(_callbackName) ?\n        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),\n      script = document.createElement('script'),\n      originalCallback = window[callbackName],\n      responseData,\n      abort = function(errorType) {\n        $(script).triggerHandler('error', errorType || 'abort')\n      },\n      xhr = { abort: abort }, abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    $(script).on('load error', function(e, errorType){\n      clearTimeout(abortTimeout)\n      $(script).off().remove()\n\n      if (e.type == 'error' || !responseData) {\n        ajaxError(null, errorType || 'error', xhr, options, deferred)\n      } else {\n        ajaxSuccess(responseData[0], xhr, options, deferred)\n      }\n\n      window[callbackName] = originalCallback\n      if (responseData && $.isFunction(originalCallback))\n        originalCallback(responseData[0])\n\n      originalCallback = responseData = undefined\n    })\n\n    if (ajaxBeforeSend(xhr, options) === false) {\n      abort('abort')\n      return xhr\n    }\n\n    window[callbackName] = function(){\n      responseData = arguments\n    }\n\n    script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName)\n    document.head.appendChild(script)\n\n    if (options.timeout > 0) abortTimeout = setTimeout(function(){\n      abort('timeout')\n    }, options.timeout)\n\n    return xhr\n  }\n\n  $.ajaxSettings = {\n    // Default type of request\n    type: 'GET',\n    // Callback that is executed before request\n    beforeSend: empty,\n    // Callback that is executed if the request succeeds\n    success: empty,\n    // Callback that is executed the the server drops error\n    error: empty,\n    // Callback that is executed on request complete (both: error and success)\n    complete: empty,\n    // The context for the callbacks\n    context: null,\n    // Whether to trigger \"global\" Ajax events\n    global: true,\n    // Transport\n    xhr: function () {\n      return new window.XMLHttpRequest()\n    },\n    // MIME types mapping\n    // IIS returns Javascript as \"application/x-javascript\"\n    accepts: {\n      script: 'text/javascript, application/javascript, application/x-javascript',\n      json:   jsonType,\n      xml:    'application/xml, text/xml',\n      html:   htmlType,\n      text:   'text/plain'\n    },\n    // Whether the request is to another domain\n    crossDomain: false,\n    // Default timeout\n    timeout: 0,\n    // Whether data should be serialized to string\n    processData: true,\n    // Whether the browser should be allowed to cache GET responses\n    cache: true,\n    //Used to handle the raw response data of XMLHttpRequest.\n    //This is a pre-filtering function to sanitize the response.\n    //The sanitized response should be returned\n    dataFilter: empty\n  }\n\n  function mimeToDataType(mime) {\n    if (mime) mime = mime.split(';', 2)[0]\n    return mime && ( mime == htmlType ? 'html' :\n      mime == jsonType ? 'json' :\n      scriptTypeRE.test(mime) ? 'script' :\n      xmlTypeRE.test(mime) && 'xml' ) || 'text'\n  }\n\n  function appendQuery(url, query) {\n    if (query == '') return url\n    return (url + '&' + query).replace(/[&?]{1,2}/, '?')\n  }\n\n  // serialize payload and append it to the URL for GET requests\n  function serializeData(options) {\n    if (options.processData && options.data && $.type(options.data) != \"string\")\n      options.data = $.param(options.data, options.traditional)\n    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))\n      options.url = appendQuery(options.url, options.data), options.data = undefined\n  }\n\n  $.ajax = function(options){\n    var settings = $.extend({}, options || {}),\n        deferred = $.Deferred && $.Deferred(),\n        urlAnchor, hashIndex\n    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]\n\n    ajaxStart(settings)\n\n    if (!settings.crossDomain) {\n      urlAnchor = document.createElement('a')\n      urlAnchor.href = settings.url\n      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n      urlAnchor.href = urlAnchor.href\n      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)\n    }\n\n    if (!settings.url) settings.url = window.location.toString()\n    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)\n    serializeData(settings)\n\n    var dataType = settings.dataType, hasPlaceholder = /\\?.+=\\?/.test(settings.url)\n    if (hasPlaceholder) dataType = 'jsonp'\n\n    if (settings.cache === false || (\n         (!options || options.cache !== true) &&\n         ('script' == dataType || 'jsonp' == dataType)\n        ))\n      settings.url = appendQuery(settings.url, '_=' + Date.now())\n\n    if ('jsonp' == dataType) {\n      if (!hasPlaceholder)\n        settings.url = appendQuery(settings.url,\n          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')\n      return $.ajaxJSONP(settings, deferred)\n    }\n\n    var mime = settings.accepts[dataType],\n        headers = { },\n        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },\n        protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n        xhr = settings.xhr(),\n        nativeSetHeader = xhr.setRequestHeader,\n        abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')\n    setHeader('Accept', mime || '*/*')\n    if (mime = settings.mimeType || mime) {\n      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]\n      xhr.overrideMimeType && xhr.overrideMimeType(mime)\n    }\n    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))\n      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')\n\n    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])\n    xhr.setRequestHeader = setHeader\n\n    xhr.onreadystatechange = function(){\n      if (xhr.readyState == 4) {\n        xhr.onreadystatechange = empty\n        clearTimeout(abortTimeout)\n        var result, error = false\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {\n          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))\n\n          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')\n            result = xhr.response\n          else {\n            result = xhr.responseText\n\n            try {\n              // http://perfectionkills.com/global-eval-what-are-the-options/\n              // sanitize response accordingly if data filter callback provided\n              result = ajaxDataFilter(result, dataType, settings)\n              if (dataType == 'script')    (1,eval)(result)\n              else if (dataType == 'xml')  result = xhr.responseXML\n              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)\n            } catch (e) { error = e }\n\n            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)\n          }\n\n          ajaxSuccess(result, xhr, settings, deferred)\n        } else {\n          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)\n        }\n      }\n    }\n\n    if (ajaxBeforeSend(xhr, settings) === false) {\n      xhr.abort()\n      ajaxError(null, 'abort', xhr, settings, deferred)\n      return xhr\n    }\n\n    var async = 'async' in settings ? settings.async : true\n    xhr.open(settings.type, settings.url, async, settings.username, settings.password)\n\n    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]\n\n    for (name in headers) nativeSetHeader.apply(xhr, headers[name])\n\n    if (settings.timeout > 0) abortTimeout = setTimeout(function(){\n        xhr.onreadystatechange = empty\n        xhr.abort()\n        ajaxError(null, 'timeout', xhr, settings, deferred)\n      }, settings.timeout)\n\n    // avoid sending empty string (#319)\n    xhr.send(settings.data ? settings.data : null)\n    return xhr\n  }\n\n  // handle optional data/success arguments\n  function parseArguments(url, data, success, dataType) {\n    if ($.isFunction(data)) dataType = success, success = data, data = undefined\n    if (!$.isFunction(success)) dataType = success, success = undefined\n    return {\n      url: url\n    , data: data\n    , success: success\n    , dataType: dataType\n    }\n  }\n\n  $.get = function(/* url, data, success, dataType */){\n    return $.ajax(parseArguments.apply(null, arguments))\n  }\n\n  $.post = function(/* url, data, success, dataType */){\n    var options = parseArguments.apply(null, arguments)\n    options.type = 'POST'\n    return $.ajax(options)\n  }\n\n  $.getJSON = function(/* url, data, success */){\n    var options = parseArguments.apply(null, arguments)\n    options.dataType = 'json'\n    return $.ajax(options)\n  }\n\n  $.fn.load = function(url, data, success){\n    if (!this.length) return this\n    var self = this, parts = url.split(/\\s/), selector,\n        options = parseArguments(url, data, success),\n        callback = options.success\n    if (parts.length > 1) options.url = parts[0], selector = parts[1]\n    options.success = function(response){\n      self.html(selector ?\n        $('<div>').html(response.replace(rscript, \"\")).find(selector)\n        : response)\n      callback && callback.apply(self, arguments)\n    }\n    $.ajax(options)\n    return this\n  }\n\n  var escape = encodeURIComponent\n\n  function serialize(params, obj, traditional, scope){\n    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)\n    $.each(obj, function(key, value) {\n      type = $.type(value)\n      if (scope) key = traditional ? scope :\n        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'\n      // handle data in serializeArray() format\n      if (!scope && array) params.add(value.name, value.value)\n      // recurse into nested objects\n      else if (type == \"array\" || (!traditional && type == \"object\"))\n        serialize(params, value, traditional, key)\n      else params.add(key, value)\n    })\n  }\n\n  $.param = function(obj, traditional){\n    var params = []\n    params.add = function(key, value) {\n      if ($.isFunction(value)) value = value()\n      if (value == null) value = \"\"\n      this.push(escape(key) + '=' + escape(value))\n    }\n    serialize(params, obj, traditional)\n    return params.join('&').replace(/%20/g, '+')\n  }\n})(Zepto)\n\n;(function($){\n  $.fn.serializeArray = function() {\n    var name, type, result = [],\n      add = function(value) {\n        if (value.forEach) return value.forEach(add)\n        result.push({ name: name, value: value })\n      }\n    if (this[0]) $.each(this[0].elements, function(_, field){\n      type = field.type, name = field.name\n      if (name && field.nodeName.toLowerCase() != 'fieldset' &&\n        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&\n        ((type != 'radio' && type != 'checkbox') || field.checked))\n          add($(field).val())\n    })\n    return result\n  }\n\n  $.fn.serialize = function(){\n    var result = []\n    this.serializeArray().forEach(function(elm){\n      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))\n    })\n    return result.join('&')\n  }\n\n  $.fn.submit = function(callback) {\n    if (0 in arguments) this.bind('submit', callback)\n    else if (this.length) {\n      var event = $.Event('submit')\n      this.eq(0).trigger(event)\n      if (!event.isDefaultPrevented()) this.get(0).submit()\n    }\n    return this\n  }\n\n})(Zepto)\n\n;(function(){\n  // getComputedStyle shouldn't freak out when called\n  // without a valid element as argument\n  try {\n    getComputedStyle(undefined)\n  } catch(e) {\n    var nativeGetComputedStyle = getComputedStyle\n    window.getComputedStyle = function(element, pseudoElement){\n      try {\n        return nativeGetComputedStyle(element, pseudoElement)\n      } catch(e) {\n        return null\n      }\n    }\n  }\n})()\n  return Zepto\n}))\n"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(11);

	var _zepto = __webpack_require__(7);

	var _zepto2 = _interopRequireDefault(_zepto);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tips = function Tips(content, type) {
	    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1800;

	    var html = (0, _zepto2.default)('<div class="__tipModelBox">' + content + '</div>');
	    html.appendTo(document.body);
	    setTimeout(function () {
	        html.addClass('bounceOut');
	        setTimeout(function () {
	            html.remove();
	        }, 5000);
	    }, 1);
	};

	exports.default = Tips;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {"hmr":true}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/.0.28.9@css-loader/index.js!../../node_modules/.4.0.5@less-loader/dist/cjs.js!./dialog.less", function() {
				var newContent = require("!!../../node_modules/.0.28.9@css-loader/index.js!../../node_modules/.4.0.5@less-loader/dist/cjs.js!./dialog.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(false);
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'iconfont';\n  /* project id 289896 */\n  src: url('//at.alicdn.com/t/font_289896_dvm3dwmjkv3x47vi.eot');\n  src: url('//at.alicdn.com/t/font_289896_dvm3dwmjkv3x47vi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_289896_dvm3dwmjkv3x47vi.woff') format('woff'), url('//at.alicdn.com/t/font_289896_dvm3dwmjkv3x47vi.ttf') format('truetype'), url('//at.alicdn.com/t/font_289896_dvm3dwmjkv3x47vi.svg#iconfont') format('svg');\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 28px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-selectfill:before {\n  content: \"\\E661\";\n}\n.icon-closefill:before {\n  content: \"\\E6A6\";\n}\n.icon-danxuanfill:before {\n  content: \"\\E71E\";\n}\n.icon-danxuan:before {\n  content: \"\\E71F\";\n}\n.icon-yuanxingweixuanzhong:before {\n  content: \"\\E72F\";\n}\n.icon-yuanxingxuanzhongfill:before {\n  content: \"\\E730\";\n}\n.icon-yuanxingxuanzhong:before {\n  content: \"\\E731\";\n}\n.icon-sousuo:before {\n  content: \"\\E651\";\n}\n.icon-jiantou:before {\n  content: \"\\E60D\";\n}\n.animator {\n  opacity: 0;\n  z-index: -1;\n  transition: opacity 0.2s ease-in 0s;\n}\n.animator.show {\n  opacity: 1;\n  z-index: 2000;\n}\n.animator.show .__modelDialog {\n  opacity: 1;\n}\n.__modelMask {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  -webkit-box-pack: center;\n  -webkit-box-align: center;\n  background: rgba(0, 0, 0, 0.2);\n}\n.__modelMask .__modelDialog {\n  opacity: 0;\n  width: 500px;\n  position: relative;\n  background: #fff;\n  border-radius: .21333333rem;\n  overflow: hidden;\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1', YaHei, Hei, Tahoma, Helvetica, arial, sans-serif, '\\9ED1\\4F53';\n}\n.__modelMask .btn_close {\n  position: absolute;\n  right: .30666667rem;\n  top: .30666667rem;\n  color: #333;\n  z-index: 30;\n}\n.__modelMask .rejTitle {\n  position: relative;\n  line-height: 1.2rem;\n  text-align: left;\n  padding-left: 0.53333333rem;\n}\n.__modelMask .ok {\n  outline: 0;\n  border: 0;\n  height: .96rem;\n  width: 2.4rem;\n  line-height: .96rem;\n  font-size: .4rem;\n  border-radius: .13333333rem;\n  color: #fff;\n  background-color: #4CD645;\n  margin: .22666667rem auto .26666667rem;\n}\n.__modelMask .ok.disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.__modelMask .cancel {\n  background-color: #fff;\n  border-radius: .10666667rem;\n  color: #4CD645;\n  text-align: center;\n  height: .86666667rem;\n  width: 2.4rem;\n  line-height: .86666667rem;\n  font-size: .4rem;\n  border: 1px solid #4CD645;\n  margin: 0.22666667rem auto 0.26666667rem 0.26666667rem;\n}\n.__modelMask.__messageBox .remindMessage {\n  line-height: 48px;\n  margin-top: .53333333rem;\n  padding: 0.2rem 0.26666667rem;\n}\n.__modelMask.__messageBox .__modelDialog {\n  height: auto;\n  width: 500px;\n  text-align: center;\n  padding: 0.26666667rem;\n}\n.__modelMask.__messageBox .buttonBox {\n  overflow: hidden;\n}\n.__tipModelBox {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  max-width: 7.2rem;\n  text-align: center;\n  padding: .2rem .24rem;\n  line-height: .55rem;\n  color: #fff;\n  z-index: 20000;\n  font-size: 0.37rem;\n  border-radius: 0.1rem;\n  transform: translate(-50%, -50%) scale3d(1.2, 1.2, 1.2);\n  background-color: rgba(0, 0, 0, 0.7);\n}\n@keyframes bounceOut {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale3d(1.2, 1.2, 1.2);\n  }\n  10%,\n  85% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  }\n  to {\n    opacity: 0.2;\n    transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  }\n}\n.bounceOut {\n  animation: 4s bounceOut ease-in-out 0s;\n}\n.__modelMask .mheader {\n  color: #fff;\n  line-height: 1.2rem;\n  text-align: center;\n  background-color: #4CD645;\n}\n.__modelMask .mcontent {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 0;\n  width: 100%;\n}\n.__modelDialog span {\n  font-family: 'iconfont';\n  margin-right: 12px;\n  font-size: 40px;\n}\n.__modelDialog span.error {\n  color: red;\n}\n.__modelDialog span.success {\n  color: green;\n}\n", ""]);

	// exports


/***/ })
/******/ ]);