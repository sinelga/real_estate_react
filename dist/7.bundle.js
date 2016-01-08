webpackJsonp([7],{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*globals COURSES:true */

	var Assignment = (function (_React$Component) {
	  _inherits(Assignment, _React$Component);

	  function Assignment() {
	    _classCallCheck(this, Assignment);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Assignment).apply(this, arguments));
	  }

	  _createClass(Assignment, [{
	    key: 'render',
	    value: function render() {
	      var _props$params = this.props.params;
	      var courseId = _props$params.courseId;
	      var assignmentId = _props$params.assignmentId;
	      var _COURSES$courseId$ass = COURSES[courseId].assignments[assignmentId];
	      var title = _COURSES$courseId$ass.title;
	      var body = _COURSES$courseId$ass.body;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h4',
	          null,
	          title
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          body
	        )
	      );
	    }
	  }]);

	  return Assignment;
	})(_react2.default.Component);

	module.exports = Assignment;

/***/ }

});