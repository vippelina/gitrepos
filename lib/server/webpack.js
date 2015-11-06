"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _webpackDevServer = require("webpack-dev-server");

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfigDev = require("../../webpack.config.dev");

var _webpackConfigDev2 = _interopRequireDefault(_webpackConfigDev);

var server = new _webpackDevServer2["default"]((0, _webpack2["default"])(_webpackConfigDev2["default"]), {
	publicPath: _webpackConfigDev2["default"].output.publicPath,
	hot: true,
	stats: { colors: true }
});

server.listen(8080, "localhost", function () {});