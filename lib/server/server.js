"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _sharedComponentsMain = require("../shared/components/main");

var _sharedComponentsMain2 = _interopRequireDefault(_sharedComponentsMain);

var app = (0, _express2["default"])();

app.set('views', './views');
app.set('view engine', 'jade');

app.get("/*", function (req, res) {
	var content = _react2["default"].renderToString(_react2["default"].createElement(_sharedComponentsMain2["default"], null));
	res.render('index', { content: content });
});

app.listen(3000);