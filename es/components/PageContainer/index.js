import "antd/es/affix/style";
import _Affix from "antd/es/affix";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/page-header/style";
import _PageHeader from "antd/es/page-header";
import "antd/es/breadcrumb/style";
import _Breadcrumb from "antd/es/breadcrumb";
import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
var _excluded = ["title", "content", "pageHeaderRender", "header", "prefixedClassName", "extraContent", "style", "prefixCls", "breadcrumbRender"],
    _excluded2 = ["children", "loading", "className", "style", "footer", "affixProps", "ghost", "fixedHeader"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import RouteContext from '../../RouteContext';
import GridContent from '../GridContent';
import FooterToolbar from '../FooterToolbar';
import './index.less';
import PageLoading from '../PageLoading';
import WaterMark from '../WaterMark';

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
    return /*#__PURE__*/React.createElement(_Tabs, _extends({
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
        React.createElement(_Tabs.TabPane, _extends({}, item, {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && /*#__PURE__*/React.createElement("div", {
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
  var value = useContext(RouteContext);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_Breadcrumb, _extends({}, value === null || value === void 0 ? void 0 : value.breadcrumb, value === null || value === void 0 ? void 0 : value.breadcrumbProps, props)));
};

var ProPageHeader = function ProPageHeader(props) {
  var _breadcrumb$routes;

  var value = useContext(RouteContext);

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
    return /*#__PURE__*/React.createElement(React.Fragment, null, " ", pageHeaderRender(_objectSpread(_objectSpread({}, props), value)));
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

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixedClassName, "-warp")
  }, /*#__PURE__*/React.createElement(_PageHeader, _extends({}, pageHeaderProps, {
    breadcrumb: breadcrumbRender === false ? undefined : _objectSpread(_objectSpread({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
    prefixCls: prefixCls
  }), (header === null || header === void 0 ? void 0 : header.children) || renderPageHeader(content, extraContent, prefixedClassName)));
};

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

  var value = useContext(RouteContext);

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var prefixedClassName = "".concat(prefixCls, "-page-container");
  var containerClassName = classNames(prefixedClassName, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-page-container-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-page-container-with-footer"), footer), _classNames));
  var content = useMemo(function () {
    return children ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixedClassName, "-children-content")
    }, children), value.hasFooterToolbar && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 48,
        marginTop: 24
      }
    })) : null;
  }, [children, prefixedClassName, value.hasFooterToolbar]);
  var pageHeaderDom = /*#__PURE__*/React.createElement(ProPageHeader, _extends({}, restProps, {
    ghost: ghost,
    prefixCls: undefined,
    prefixedClassName: prefixedClassName
  }));
  var loadingDom = useMemo(function () {
    // ???loading??????????????????ReactNode????????????????????????????????????loading,????????????????????????loading
    if ( /*#__PURE__*/React.isValidElement(loading)) {
      return loading;
    } // ??????????????????????????????????????????false???????????????????????????loading,??????null


    if (typeof loading === 'boolean' && !loading) {
      return null;
    } // ?????????????????????????????????????????????????????????true,??????????????????loading???????????????genLoading??????loading???????????????PageLoading


    var spinProps = genLoading(loading);
    return /*#__PURE__*/React.createElement(PageLoading, spinProps);
  }, [loading]);
  var renderContentDom = useMemo(function () {
    // ??????loadingDom?????????????????????loadingDom,??????????????????
    var dom = loadingDom || content;

    if (props.waterMarkProps || value.waterMarkProps) {
      return /*#__PURE__*/React.createElement(WaterMark, props.waterMarkProps || value.waterMarkProps, dom);
    }

    return dom;
  }, [props.waterMarkProps, value.waterMarkProps, loadingDom, content]);
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: containerClassName
  }, fixedHeader && pageHeaderDom ?
  /*#__PURE__*/
  // ??? hasHeader ??? fixedHeader ????????????????????????????????????
  React.createElement(_Affix, _extends({
    offsetTop: value.hasHeader && value.fixedHeader ? value.headerHeight : 0
  }, affixProps), pageHeaderDom) : pageHeaderDom, renderContentDom && /*#__PURE__*/React.createElement(GridContent, null, renderContentDom), footer && /*#__PURE__*/React.createElement(FooterToolbar, {
    prefixCls: prefixCls
  }, footer));
};

export { ProPageHeader, ProBreadcrumb };
export default PageContainer;