"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProBreadcrumb = exports.ProPageHeader = void 0;

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RouteContext = _interopRequireDefault(require("../../RouteContext"));

var _GridContent = _interopRequireDefault(require("../GridContent"));

var _FooterToolbar = _interopRequireDefault(require("../FooterToolbar"));

require("./index.less");

var _PageLoading = _interopRequireDefault(require("../PageLoading"));

var _WaterMark = _interopRequireDefault(require("../WaterMark"));

var _excluded = ["title", "content", "pageHeaderRender", "header", "prefixedClassName", "extraContent", "style", "prefixCls", "breadcrumbRender"],
    _excluded2 = ["children", "loading", "className", "style", "footer", "affixProps", "ghost", "fixedHeader"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function genLoading(spinProps) {
  if (_typeof(spinProps) === 'object') {
    return spinProps;
  }

  return {
    spinning: spinProps
  };
}
/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */


var renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent,
      tabProps = _ref.tabProps,
      prefixedClassName = _ref.prefixedClassName;

  if (tabList && tabList.length) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tabs, _extends({
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabProps), tabList.map(function (item, index) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        _react.default.createElement(_antd.Tabs.TabPane, _extends({}, item, {
          tab: item.tab,
          key: item.key || index
        }))
      );
    }));
  }

  return null;
};

var renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName) {
  if (!content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};
/**
 * ???????????????????????????????????????????????????????????????????????????????????????????????????????????? ProLayout ????????????
 *
 * @param props
 * @returns
 */


var ProBreadcrumb = function ProBreadcrumb(props) {
  var value = (0, _react.useContext)(_RouteContext.default);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb, _extends({}, value === null || value === void 0 ? void 0 : value.breadcrumb, value === null || value === void 0 ? void 0 : value.breadcrumbProps, props)));
};

exports.ProBreadcrumb = ProBreadcrumb;

var ProPageHeader = function ProPageHeader(props) {
  var _breadcrumb$routes;

  var value = (0, _react.useContext)(_RouteContext.default);

  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      header = props.header,
      prefixedClassName = props.prefixedClassName,
      extraContent = props.extraContent,
      style = props.style,
      prefixCls = props.prefixCls,
      breadcrumbRender = props.breadcrumbRender,
      restProps = _objectWithoutProperties(props, _excluded);

  if (pageHeaderRender === false) {
    return null;
  }

  if (pageHeaderRender) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", pageHeaderRender(_objectSpread(_objectSpread({}, props), value)));
  }

  var pageHeaderTitle = title;

  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }

  var pageHeaderProps = _objectSpread(_objectSpread(_objectSpread({}, value), {}, {
    title: pageHeaderTitle
  }, restProps), {}, {
    footer: renderFooter(_objectSpread(_objectSpread({}, restProps), {}, {
      breadcrumbRender: breadcrumbRender,
      prefixedClassName: prefixedClassName
    }))
  }, header);

  var breadcrumb = pageHeaderProps.breadcrumb;
  var noHasBreadCrumb = !breadcrumb || breadcrumbRender === false || !(breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.itemRender) && !(breadcrumb === null || breadcrumb === void 0 ? void 0 : (_breadcrumb$routes = breadcrumb.routes) === null || _breadcrumb$routes === void 0 ? void 0 : _breadcrumb$routes.length);

  if (['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(function (item) {
    return !pageHeaderProps[item];
  }) && noHasBreadCrumb && !content && !extraContent) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-warp")
  }, /*#__PURE__*/_react.default.createElement(_antd.PageHeader, _extends({}, pageHeaderProps, {
    breadcrumb: breadcrumbRender === false ? undefined : _objectSpread(_objectSpread({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
    prefixCls: prefixCls
  }), (header === null || header === void 0 ? void 0 : header.children) || renderPageHeader(content, extraContent, prefixedClassName)));
};

exports.ProPageHeader = ProPageHeader;

var PageContainer = function PageContainer(props) {
  var _classNames;

  var children = props.children,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      className = props.className,
      style = props.style,
      footer = props.footer,
      affixProps = props.affixProps,
      ghost = props.ghost,
      fixedHeader = props.fixedHeader,
      restProps = _objectWithoutProperties(props, _excluded2);

  var value = (0, _react.useContext)(_RouteContext.default);

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var prefixedClassName = "".concat(prefixCls, "-page-container");
  var containerClassName = (0, _classnames.default)(prefixedClassName, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-page-container-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-page-container-with-footer"), footer), _classNames));
  var content = (0, _react.useMemo)(function () {
    return children ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixedClassName, "-children-content")
    }, children), value.hasFooterToolbar && /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: 48,
        marginTop: 24
      }
    })) : null;
  }, [children, prefixedClassName, value.hasFooterToolbar]);

  var pageHeaderDom = /*#__PURE__*/_react.default.createElement(ProPageHeader, _extends({}, restProps, {
    ghost: ghost,
    prefixCls: undefined,
    prefixedClassName: prefixedClassName
  }));

  var loadingDom = (0, _react.useMemo)(function () {
    // ???loading??????????????????ReactNode????????????????????????????????????loading,????????????????????????loading
    if ( /*#__PURE__*/_react.default.isValidElement(loading)) {
      return loading;
    } // ??????????????????????????????????????????false???????????????????????????loading,??????null


    if (typeof loading === 'boolean' && !loading) {
      return null;
    } // ?????????????????????????????????????????????????????????true,??????????????????loading???????????????genLoading??????loading???????????????PageLoading


    var spinProps = genLoading(loading);
    return /*#__PURE__*/_react.default.createElement(_PageLoading.default, spinProps);
  }, [loading]);
  var renderContentDom = (0, _react.useMemo)(function () {
    // ??????loadingDom?????????????????????loadingDom,??????????????????
    var dom = loadingDom || content;

    if (props.waterMarkProps || value.waterMarkProps) {
      return /*#__PURE__*/_react.default.createElement(_WaterMark.default, props.waterMarkProps || value.waterMarkProps, dom);
    }

    return dom;
  }, [props.waterMarkProps, value.waterMarkProps, loadingDom, content]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: containerClassName
  }, fixedHeader && pageHeaderDom ?
  /*#__PURE__*/
  // ??? hasHeader ??? fixedHeader ????????????????????????????????????
  _react.default.createElement(_antd.Affix, _extends({
    offsetTop: value.hasHeader && value.fixedHeader ? value.headerHeight : 0
  }, affixProps), pageHeaderDom) : pageHeaderDom, renderContentDom && /*#__PURE__*/_react.default.createElement(_GridContent.default, null, renderContentDom), footer && /*#__PURE__*/_react.default.createElement(_FooterToolbar.default, {
    prefixCls: prefixCls
  }, footer));
};

var _default = PageContainer;
exports.default = _default;