function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/layout/style";
import _Layout from "antd/es/layout";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import './Header.less';
import React, { Component } from 'react';
import classNames from 'classnames';
import GlobalHeader from './components/GlobalHeader';
import TopNavHeader from './components/TopNavHeader';
import { clearMenuItem } from './utils/utils';
var Header = _Layout.Header;

var HeaderView = /*#__PURE__*/function (_Component) {
  _inherits(HeaderView, _Component);

  var _super = _createSuper(HeaderView);

  function HeaderView() {
    var _this;

    _classCallCheck(this, HeaderView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.renderContent = function () {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          onCollapse = _this$props.onCollapse,
          navTheme = _this$props.navTheme,
          layout = _this$props.layout,
          headerRender = _this$props.headerRender,
          headerContentRender = _this$props.headerContentRender;
      var isTop = layout === 'top';
      var clearMenuData = clearMenuItem(_this.props.menuData || []);
      var defaultDom = /*#__PURE__*/React.createElement(GlobalHeader, _extends({
        onCollapse: onCollapse
      }, _this.props, {
        menuData: clearMenuData
      }), headerContentRender && headerContentRender(_this.props));

      if (isTop && !isMobile) {
        defaultDom = /*#__PURE__*/React.createElement(TopNavHeader, _extends({
          theme: navTheme,
          mode: "horizontal",
          onCollapse: onCollapse
        }, _this.props, {
          menuData: clearMenuData
        }));
      }

      if (headerRender && typeof headerRender === 'function') {
        return headerRender(_this.props, defaultDom);
      }

      return defaultDom;
    };

    return _this;
  }

  _createClass(HeaderView, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          fixedHeader = _this$props2.fixedHeader,
          layout = _this$props2.layout,
          propsClassName = _this$props2.className,
          style = _this$props2.style,
          navTheme = _this$props2.navTheme,
          collapsed = _this$props2.collapsed,
          siderWidth = _this$props2.siderWidth,
          hasSiderMenu = _this$props2.hasSiderMenu,
          isMobile = _this$props2.isMobile,
          prefixCls = _this$props2.prefixCls,
          headerHeight = _this$props2.headerHeight;
      var needFixedHeader = fixedHeader || layout === 'mix';
      var isTop = layout === 'top';
      var needSettingWidth = needFixedHeader && hasSiderMenu && !isTop && !isMobile;
      var className = classNames(propsClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header"), needFixedHeader), _defineProperty(_classNames, "".concat(prefixCls, "-fixed-header-action"), !collapsed), _defineProperty(_classNames, "".concat(prefixCls, "-top-menu"), isTop), _defineProperty(_classNames, "".concat(prefixCls, "-header-").concat(navTheme), navTheme && layout !== 'mix'), _classNames));
      /** ?????????????????????????????????????????????????????????????????? */

      var width = layout !== 'mix' && needSettingWidth ? "calc(100% - ".concat(collapsed ? 48 : siderWidth, "px)") : '100%';
      var right = needFixedHeader ? 0 : undefined;
      return /*#__PURE__*/React.createElement(React.Fragment, null, needFixedHeader && /*#__PURE__*/React.createElement(Header, {
        style: {
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          background: 'transparent'
        }
      }), /*#__PURE__*/React.createElement(Header, {
        style: _objectSpread({
          padding: 0,
          height: headerHeight,
          lineHeight: "".concat(headerHeight, "px"),
          width: width,
          zIndex: layout === 'mix' ? 100 : 19,
          right: right
        }, style),
        className: className
      }, this.renderContent()));
    }
  }]);

  return HeaderView;
}(Component);

export default HeaderView;