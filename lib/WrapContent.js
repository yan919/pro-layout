"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _proProvider = require("@ant-design/pro-provider");

var _proUtils = require("@ant-design/pro-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapContent = function WrapContent(props) {
  var style = props.style,
      className = props.className,
      children = props.children;
  var ErrorComponent = props.ErrorBoundary || _proUtils.ErrorBoundary;
  return /*#__PURE__*/_react.default.createElement(_proProvider.ConfigProviderWrap, null, /*#__PURE__*/_react.default.createElement(ErrorComponent, null, /*#__PURE__*/_react.default.createElement(_antd.Layout.Content, {
    className: className,
    style: style
  }, children)));
};

var _default = WrapContent;
exports.default = _default;