"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Repo = (function (_React$Component) {
	_inherits(Repo, _React$Component);

	function Repo() {
		_classCallCheck(this, Repo);

		_get(Object.getPrototypeOf(Repo.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Repo, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "repo" },
				_react2["default"].createElement(
					"h2",
					null,
					this.props.data.name
				)
			);
		}
	}]);

	return Repo;
})(_react2["default"].Component);

exports["default"] = Repo;
module.exports = exports["default"];