webpackJsonp([2],{

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'announcements',

	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(3, function (require) {
	      cb(null, [__webpack_require__(215)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(5, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(217),
	        main: __webpack_require__(218)
	      });
	    });
	  }
	};

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'assignments',

	  getChildRoutes: function getChildRoutes(location, cb) {
	    __webpack_require__.e/* nsure */(6, function (require) {
	      cb(null, [__webpack_require__(220)]);
	    });
	  },
	  getComponents: function getComponents(location, cb) {
	    __webpack_require__.e/* nsure */(8, function (require) {
	      cb(null, {
	        sidebar: __webpack_require__(222),
	        main: __webpack_require__(223)
	      });
	    });
	  }
	};

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  path: 'grades',
	  getComponent: function getComponent(location, cb) {
	    __webpack_require__.e/* nsure */(9, function (require) {
	      cb(null, __webpack_require__(225));
	    });
	  }
	};

/***/ }

});