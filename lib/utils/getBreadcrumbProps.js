"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreadcrumbProps = exports.genBreadcrumbProps = exports.getBreadcrumbFromProps = exports.getBreadcrumb = void 0;

var _react = _interopRequireDefault(require("react"));

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _pathTools = require("./pathTools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 渲染Breadcrumb 子节点
// Render the Breadcrumb child node
var defaultItemRender = function defaultItemRender(_ref) {
  var breadcrumbName = _ref.breadcrumbName,
      path = _ref.path;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: path
  }, breadcrumbName);
};

var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
      menu = props.menu;

  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }

  return item.name;
};

var getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);

  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // 按照 route config 定义的顺序找到第一个匹配的路径
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function (path) {
      return (// remove ? ,不然会重复
        (0, _pathToRegexp.default)(path.replace('?', '')).test(url)
      );
    });
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
  }

  return breadcrumbItem || {
    path: ''
  };
};

exports.getBreadcrumb = getBreadcrumb;

var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
      breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};

exports.getBreadcrumbFromProps = getBreadcrumbFromProps;

var conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
  // Convertor the url to an array
  var pathSnippets = (0, _pathTools.urlToList)(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname); // Loop data mosaic routing

  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      path: url,
      breadcrumbName: name,
      component: currentBreadcrumb.component
    } : {
      path: '',
      breadcrumbName: ''
    };
  }).filter(function (item) {
    return item && item.path;
  });
  return extraBreadcrumbItems;
};
/** 将参数转化为面包屑 Convert parameters into breadcrumbs */


var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
      location = _getBreadcrumbFromPro.location,
      breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap; // 根据 location 生成 面包屑
  // Generate breadcrumbs based on location


  if (location && location.pathname && breadcrumbMap) {
    return conversionFromLocation(location, breadcrumbMap, props);
  }

  return [];
}; // use breadcrumbRender to change routes


exports.genBreadcrumbProps = genBreadcrumbProps;

var getBreadcrumbProps = function getBreadcrumbProps(props, layoutPros) {
  var breadcrumbRender = props.breadcrumbRender,
      propsItemRender = props.itemRender;

  var _ref2 = layoutPros.breadcrumbProps || {},
      _ref2$minLength = _ref2.minLength,
      minLength = _ref2$minLength === void 0 ? 2 : _ref2$minLength;

  var routesArray = genBreadcrumbProps(props);
  var itemRender = propsItemRender || defaultItemRender;
  var routes = routesArray; // if routes.length =1, don't show it

  if (breadcrumbRender) {
    routes = breadcrumbRender(routes) || [];
  }

  if (routes && routes.length < minLength || breadcrumbRender === false) {
    routes = undefined;
  }

  return {
    routes: routes,
    itemRender: itemRender
  };
};

exports.getBreadcrumbProps = getBreadcrumbProps;