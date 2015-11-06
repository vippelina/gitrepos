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

var RepoList = (function (_React$Component) {
	_inherits(RepoList, _React$Component);

	function RepoList() {
		var _this = this;

		_classCallCheck(this, RepoList);

		_get(Object.getPrototypeOf(RepoList.prototype), "constructor", this).apply(this, arguments);

		this.searchRepos = function (evt) {
			var searchText = _this.refs.searchText.getDOMNode().value;
			evt.preventDefault();
			_superagent2["default"].get("https://api.github.com/search/repositories").search({ q: searchText }).send().end(function (err, res) {
				console.log(res.body);
			});
		};
	}

	_createClass(RepoList, [{
		key: "getInitialState",
		value: function getInitialState() {
			this.data = [];
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "repos" },
				_react2["default"].createElement(
					"form",
					{ className: "searchRepo", onSubmit: this.searchRepos },
					_react2["default"].createElement("input", { type: "text", ref: "searchText" })
				)
			);
		}
	}]);

	return RepoList;
})(_react2["default"].Component);

exports["default"] = RepoList;
module.exports = exports["default"];