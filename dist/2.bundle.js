webpackJsonp([2],{

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'announcements',

	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      cb(null, [__webpack_require__(224)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(226),
	        main: __webpack_require__(227)
	      });
	    });
	  }
	};

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'assignments',

	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      cb(null, [__webpack_require__(229)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(231),
	        main: __webpack_require__(232)
	      });
	    });
	  }
	};

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'grades',
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      cb(null, __webpack_require__(234));
	    });
	  }
	};

/***/ }

});