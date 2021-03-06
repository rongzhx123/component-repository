'use strict';
require('babel-polyfill');
// require('whatwg-fetch');
// require('es6-symbol/implement');
// Object.assign = require('object-assign');
// if (typeof Promise === 'undefined') {
// 	// Rejection tracking prevents a common issue where React gets into an
// 	// inconsistent state due to an error, but it gets swallowed by a Promise,
// 	// and the user has no idea what causes React's erratic future behavior.
// 	require('promise/lib/rejection-tracking').enable();
// 	window.Promise = require('promise/lib/es6-extensions.js');
// }

// if (!HTMLCanvasElement.prototype.toBlob) {
// 	Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
// 		value: function (callback, type, quality) {
// 			var dataURL = this.toDataURL(type, quality).split(',')[1];
// 			setTimeout(function () {
// 				var binStr = atob(dataURL),
// 					len = binStr.length,
// 					arr = new Uint8Array(len);

// 				for (var i = 0; i < len; i++) {
// 					arr[i] = binStr.charCodeAt(i);
// 				}

// 				callback(new Blob([arr], { type: type || 'image/png' }));
// 			});
// 		}
// 	});
// }

// // fetch() polyfill for making API calls.

// // Object.assign() is commonly used with React.
// // It will use the native implementation if it's present and isn't buggy.
// if (!Array.prototype.find) {
// 	Object.defineProperty(Array.prototype, 'find', {
// 		value: function (predicate) {
// 			// 1. Let O be ? ToObject(this value).
// 			if (this == null) {
// 				throw new TypeError('"this" is null or not defined');
// 			}

// 			var o = Object(this);

// 			// 2. Let len be ? ToLength(? Get(O, "length")).
// 			var len = o.length >>> 0;

// 			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
// 			if (typeof predicate !== 'function') {
// 				throw new TypeError('predicate must be a function');
// 			}

// 			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
// 			var thisArg = arguments[1];

// 			// 5. Let k be 0.
// 			var k = 0;

// 			// 6. Repeat, while k < len
// 			while (k < len) {
// 				// a. Let Pk be ! ToString(k).
// 				// b. Let kValue be ? Get(O, Pk).
// 				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
// 				// d. If testResult is true, return kValue.
// 				var kValue = o[k];
// 				if (predicate.call(thisArg, kValue, k, o)) {
// 					return kValue;
// 				}
// 				// e. Increase k by 1.
// 				k++;
// 			}

// 			// 7. Return undefined.
// 			return undefined;
// 		}
// 	});
// }

// if (!String.prototype.includes) {
// 	String.prototype.includes = function (search, start) {
// 		'use strict';
// 		if (typeof start !== 'number') {
// 			start = 0;
// 		}

// 		if (start + search.length > this.length) {
// 			return false;
// 		}
// 		return this.indexOf(search, start) !== -1;
// 	};
// }
// if (!String.prototype.startsWith) {
// 	String.prototype.startsWith = function (searchString, position) {
// 		return this.substr(position || 0, searchString.length) === searchString;
// 	};
// }

// if (!Promise.prototype.finally) {
// 	Promise.prototype.finally = function (callback) {
// 		var P = this.constructor;
// 		return this.then(function (value) {
// 			return P.resolve(callback()).then(function () {
// 				return value;
// 			});
// 		}, function (reason) {
// 			return P.resolve(callback()).then(function () {
// 				throw reason;
// 			});
// 		});
// 	};
// }
