import "antd/es/layout/style";
import _Layout from "antd/es/layout";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
var _excluded = ["id", "defaultMessage"],
    _excluded2 = ["fixSiderbar", "navTheme", "layout"];

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import './BasicLayout.less';
import { useCallback, useRef } from 'react';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import warning from 'warning';
import useMergedState from "rc-util/es/hooks/useMergedState";
import useAntdMediaQuery from 'use-media-antd-query';
import { useDeepCompareEffect, useDocumentTitle, isBrowser, useMountMergeState } from '@ant-design/pro-utils';
import Omit from 'omit.js';
import useSWR, { mutate } from 'swr';
import { getMatchMenu } from '@umijs/route-utils';
import Header from './Header';
import { getPageTitleInfo } from './getPageTitle';
import defaultSettings from './defaultSettings';
import getLocales from './locales';
import Footer from './Footer';
import RouteContext from './RouteContext';
import SiderMenu from './components/SiderMenu';
import { getBreadcrumbProps } from './utils/getBreadcrumbProps';
import getMenuData from './utils/getMenuData';
import PageLoading from './components/PageLoading';
import MenuCounter from './components/SiderMenu/Counter';
import WrapContent from './WrapContent';
import compatibleLayout from './utils/compatibleLayout';
import useCurrentMenuLayoutProps from './utils/useCurrentMenuLayoutProps';
import { clearMenuItem } from './utils/utils';
import { stringify } from 'use-json-comparison';
var layoutIndex = 0;

var headerRender = function headerRender(props, matchMenuKeys) {
  if (props.headerRender === false || props.pure) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Header, _extends({
    matchMenuKeys: matchMenuKeys
  }, props));
};

var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(_objectSpread({}, props), /*#__PURE__*/React.createElement(Footer, null));
  }

  return null;
};

var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var layout = props.layout,
      isMobile = props.isMobile,
      openKeys = props.openKeys,
      splitMenus = props.splitMenus,
      menuRender = props.menuRender;

  if (props.menuRender === false || props.pure) {
    return null;
  }

  var menuData = props.menuData;
  /** 如果是分割菜单模式，需要专门实现一下 */

  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    var _matchMenuKeys = _slicedToArray(matchMenuKeys, 1),
        key = _matchMenuKeys[0];

    if (key) {
      var _props$menuData, _props$menuData$find;

      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 ? void 0 : (_props$menuData$find = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData$find === void 0 ? void 0 : _props$menuData$find.children) || [];
    } else {
      menuData = [];
    }
  } // 这里走了可以少一次循环


  var clearMenuData = clearMenuItem(menuData || []);

  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && splitMenus) {
    return null;
  }

  if (layout === 'top' && !isMobile) {
    return /*#__PURE__*/React.createElement(SiderMenu, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      hide: true
    }));
  }

  if (menuRender) {
    var defaultDom = /*#__PURE__*/React.createElement(SiderMenu, _extends({
      matchMenuKeys: matchMenuKeys
    }, props, {
      // 这里走了可以少一次循环
      menuData: clearMenuData
    }));
    return menuRender(props, defaultDom);
  }

  return /*#__PURE__*/React.createElement(SiderMenu, _extends({
    matchMenuKeys: matchMenuKeys
  }, props, {
    // 这里走了可以少一次循环
    menuData: clearMenuData
  }));
};

var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);

  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }

  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);

    if (typeof title === 'string') {
      return _objectSpread(_objectSpread({}, pageTitleInfo), {}, {
        title: title
      });
    }

    warning(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }

  return pageTitleInfo;
};

var getPaddingLeft = function getPaddingLeft(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 48 : siderWidth;
  }

  return 0;
};
/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */


var BasicLayout = function BasicLayout(props) {
  var _props$prefixCls, _classNames, _classNames2, _location$pathname;

  var _ref = props || {},
      children = _ref.children,
      propsOnCollapse = _ref.onCollapse,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? {
    pathname: '/'
  } : _ref$location,
      contentStyle = _ref.contentStyle,
      route = _ref.route,
      defaultCollapsed = _ref.defaultCollapsed,
      style = _ref.style,
      disableContentMargin = _ref.disableContentMargin,
      _ref$siderWidth = _ref.siderWidth,
      siderWidth = _ref$siderWidth === void 0 ? 208 : _ref$siderWidth,
      menu = _ref.menu,
      propsIsChildrenLayout = _ref.isChildrenLayout,
      menuDataRender = _ref.menuDataRender,
      actionRef = _ref.actionRef,
      propsFormatMessage = _ref.formatMessage,
      loading = _ref.loading;

  var context = useContext(_ConfigProvider.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');

  var _useMountMergeState = useMountMergeState(false, {
    value: menu === null || menu === void 0 ? void 0 : menu.loading,
    onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
  }),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      menuLoading = _useMountMergeState2[0],
      setMenuLoading = _useMountMergeState2[1]; // give a default key for swr


  var _useState = useState(function () {
    layoutIndex += 1;
    return "pro-layout-".concat(layoutIndex);
  }),
      _useState2 = _slicedToArray(_useState, 1),
      defaultId = _useState2[0];

  var formatMessage = useCallback(function (_ref2) {
    var id = _ref2.id,
        defaultMessage = _ref2.defaultMessage,
        restParams = _objectWithoutProperties(_ref2, _excluded);

    if (propsFormatMessage) {
      return propsFormatMessage(_objectSpread({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }

    var locales = getLocales();
    return locales[id] ? locales[id] : defaultMessage;
  }, [propsFormatMessage]);

  var _useMergedState = useMergedState(function () {
    return getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      menuInfoData = _useMergedState2[0],
      setMenuInfoData = _useMergedState2[1];

  var _ref3 = menuInfoData || {},
      _ref3$breadcrumb = _ref3.breadcrumb,
      breadcrumb = _ref3$breadcrumb === void 0 ? {} : _ref3$breadcrumb,
      breadcrumbMap = _ref3.breadcrumbMap,
      _ref3$menuData = _ref3.menuData,
      menuData = _ref3$menuData === void 0 ? [] : _ref3$menuData;

  var swrKey = useMemo(function () {
    if (!(menu === null || menu === void 0 ? void 0 : menu.params)) return [defaultId];
    return [defaultId, menu === null || menu === void 0 ? void 0 : menu.params];
  }, [defaultId, stringify(menu === null || menu === void 0 ? void 0 : menu.params)]);
  var preData = useRef(undefined);

  var _useSWR = useSWR(swrKey, /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, params) {
      var _menu$request;

      var msg;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setMenuLoading(true);
              _context.next = 3;
              return menu === null || menu === void 0 ? void 0 : (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.routes) || []);

            case 3:
              msg = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", msg);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnReconnect: false
  }),
      data = _useSWR.data;

  preData.current = data; // params 更新的时候重新请求

  useEffect(function () {
    if (!preData.current) {
      return;
    }

    mutate(swrKey); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swrKey]);

  if (actionRef && (menu === null || menu === void 0 ? void 0 : menu.request)) {
    actionRef.current = {
      reload: function reload() {
        mutate(swrKey);
      }
    };
  }

  useDeepCompareEffect(function () {
    if (!(menu === null || menu === void 0 ? void 0 : menu.request) || !(data === null || data === void 0 ? void 0 : data.length)) {
      return;
    }

    var menuDataMap = getMenuData(data || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
    setMenuInfoData(menuDataMap);
  }, [data, menu === null || menu === void 0 ? void 0 : menu.request, menu === null || menu === void 0 ? void 0 : menu.loading, route === null || route === void 0 ? void 0 : route.routes]);
  var matchMenus = useMemo(function () {
    return getMatchMenu(location.pathname || '/', menuData || [], true);
  }, [location.pathname, menuData]);
  var matchMenuKeys = useMemo(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]); // 当前选中的menu，一般不会为空

  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);

  var _props$currentMenuLay = _objectSpread(_objectSpread({}, props), currentMenuLayoutProps),
      fixSiderbar = _props$currentMenuLay.fixSiderbar,
      navTheme = _props$currentMenuLay.navTheme,
      defaultPropsLayout = _props$currentMenuLay.layout,
      rest = _objectWithoutProperties(_props$currentMenuLay, _excluded2);

  var propsLayout = compatibleLayout(defaultPropsLayout);
  var colSize = useAntdMediaQuery();
  var isMobile = (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  /** 如果 menuRender 不存在，可以做一下性能优化 只要 routers 没有更新就不需要重新计算 */

  useDeepCompareEffect(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.loading) || (menu === null || menu === void 0 ? void 0 : menu.request)) {
      return function () {
        return null;
      };
    }

    var infoData = getMenuData((route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender); // 稍微慢一点 render，不然会造成性能问题，看起来像是菜单的卡顿

    var animationFrameId = requestAnimationFrame(function () {
      setMenuInfoData(infoData);
    });
    return function () {
      return window.cancelAnimationFrame && window.cancelAnimationFrame(animationFrameId);
    };
  }, [menu === null || menu === void 0 ? void 0 : menu.loading, menu === null || menu === void 0 ? void 0 : menu.request, route === null || route === void 0 ? void 0 : route.routes, location === null || location === void 0 ? void 0 : location.pathname, menuDataRender]); // If it is a fix menu, calculate padding
  // don't need padding in phone mode

  var hasLeftPadding = propsLayout !== 'top' && !isMobile;

  var _useMergedState3 = useMergedState(function () {
    return defaultCollapsed || false;
  }, {
    value: props.collapsed,
    onChange: propsOnCollapse
  }),
      _useMergedState4 = _slicedToArray(_useMergedState3, 2),
      collapsed = _useMergedState4[0],
      onCollapse = _useMergedState4[1]; // Splicing parameters, adding menuData and formatMessage in props


  var defaultProps = Omit(_objectSpread(_objectSpread(_objectSpread({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    menu: _objectSpread(_objectSpread({}, menu), {}, {
      loading: menuLoading
    }),
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']); // gen page title

  var pageTitleInfo = defaultPageTitleRender(_objectSpread(_objectSpread({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props); // gen breadcrumbProps, parameter for pageHeader

  var breadcrumbProps = getBreadcrumbProps(_objectSpread(_objectSpread({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  }), props); // render sider dom

  var siderMenuDom = renderSiderMenu(_objectSpread(_objectSpread({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light',
    collapsed: collapsed
  }), matchMenuKeys); // render header dom

  var headerDom = headerRender(_objectSpread(_objectSpread({}, defaultProps), {}, {
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark') ? 'dark' : 'light'
  }), matchMenuKeys); // render footer dom

  var footerDom = footerRender(_objectSpread({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));

  var _useContext = useContext(RouteContext),
      contextIsChildrenLayout = _useContext.isChildrenLayout; // 如果 props 中定义，以 props 为准


  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var baseClassName = "".concat(prefixCls, "-basicLayout"); // gen className

  var className = classNames(props.className, 'ant-design-pro', baseClassName, (_classNames = {}, _defineProperty(_classNames, "screen-".concat(colSize), colSize), _defineProperty(_classNames, "".concat(baseClassName, "-top-menu"), propsLayout === 'top'), _defineProperty(_classNames, "".concat(baseClassName, "-is-children"), isChildrenLayout), _defineProperty(_classNames, "".concat(baseClassName, "-fix-siderbar"), fixSiderbar), _defineProperty(_classNames, "".concat(baseClassName, "-").concat(propsLayout), propsLayout), _classNames));
  /** 计算 slider 的宽度 */

  var leftSiderWidth = getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth); // siderMenuDom 为空的时候，不需要 padding

  var genLayoutStyle = {
    position: 'relative'
  }; // if is some layout children, don't need min height

  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  var contentClassName = classNames("".concat(baseClassName, "-content"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-has-header"), headerDom), _defineProperty(_classNames2, "".concat(baseClassName, "-content-disable-margin"), disableContentMargin), _classNames2));
  /** 页面切换的时候触发 */

  useEffect(function () {
    var _props$onPageChange;

    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 ? void 0 : _props$onPageChange.call(props, props.location); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasFooterToolbar = _useState4[0],
      setHasFooterToolbar = _useState4[1];

  useDocumentTitle(pageTitleInfo, props.title || false);
  return /*#__PURE__*/React.createElement(MenuCounter.Provider, null, /*#__PURE__*/React.createElement(RouteContext.Provider, {
    value: _objectSpread(_objectSpread({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    })
  }, props.pure ? children : /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(_Layout, {
    style: _objectSpread({
      minHeight: '100%'
    }, style)
  }, siderMenuDom, /*#__PURE__*/React.createElement("div", {
    style: genLayoutStyle,
    className: context.getPrefixCls('layout')
  }, headerDom, /*#__PURE__*/React.createElement(WrapContent, _extends({
    isChildrenLayout: isChildrenLayout
  }, rest, {
    className: contentClassName,
    style: contentStyle
  }), loading ? /*#__PURE__*/React.createElement(PageLoading, null) : children), footerDom)))));
};

var Logo = function Logo() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "32px",
    height: "32px",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "62.1023273%",
    y1: "0%",
    x2: "108.19718%",
    y2: "37.8635764%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4285EB",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2EC7FF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "69.644116%",
    y1: "0%",
    x2: "54.0428975%",
    y2: "108.456714%",
    id: "linearGradient-2"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#29CDFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#148EFF",
    offset: "37.8600687%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#0A60FF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "69.6908165%",
    y1: "-12.9743587%",
    x2: "16.7228981%",
    y2: "117.391248%",
    id: "linearGradient-3"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FA816E",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F74A5C",
    offset: "41.472606%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F51D2C",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "68.1279872%",
    y1: "-35.6905737%",
    x2: "30.4400914%",
    y2: "114.942679%",
    id: "linearGradient-4"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FA8E7D",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F74A5C",
    offset: "51.2635191%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#F51D2C",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-20.000000, -20.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(20.000000, 20.000000)"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
    fill: "url(#linearGradient-1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
    fill: "url(#linearGradient-2)"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
    fill: "url(#linearGradient-3)"
  })), /*#__PURE__*/React.createElement("ellipse", {
    fill: "url(#linearGradient-4)",
    cx: "100.519339",
    cy: "100.436681",
    rx: "23.6001926",
    ry: "23.580786"
  }))))));
};

BasicLayout.defaultProps = _objectSpread(_objectSpread({
  logo: /*#__PURE__*/React.createElement(Logo, null)
}, defaultSettings), {}, {
  location: isBrowser() ? window.location : undefined
});
export default BasicLayout;