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

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

var _repoList = require("./repoList");

var _repoList2 = _interopRequireDefault(_repoList);

var Main = (function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		var _this = this;

		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);

		this.searchRepos = function (evt) {
			evt.preventDefault();
			var searchText = _this.refs.searchText.getDOMNode().value;
			_superagent2["default"].get("https://api.github.com/search/repositories").query({ q: searchText }).send().end(function (err, res) {
				console.log(res.body.items);
				_this.setState({ repos: res.body.items });
			});
		};
	}

	_createClass(Main, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(_repoList2["default"], null);
		}
	}]);

	return Main;
})(_react2["default"].Component);

exports["default"] = Main;
module.exports = exports["default"];