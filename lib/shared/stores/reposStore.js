"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _altApp = require("../alt-app");

var _altApp2 = _interopRequireDefault(_altApp);

var ReposStore = function ReposStore() {
	_classCallCheck(this, ReposStore);

	this.repos = [];
	this.loading = false;
};

var theStore = _altApp2["default"].createStore(ReposStore);

exports["default"] = theStore;
module.exports = exports["default"];