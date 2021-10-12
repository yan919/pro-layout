"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BasicLayout", {
  enumerable: true,
  get: function get() {
    return _BasicLayout.default;
  }
});
Object.defineProperty(exports, "DefaultHeader", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});
Object.defineProperty(exports, "TopNavHeader", {
  enumerable: true,
  get: function get() {
    return _TopNavHeader.default;
  }
});
Object.defineProperty(exports, "SettingDrawer", {
  enumerable: true,
  get: function get() {
    return _SettingDrawer.default;
  }
});
Object.defineProperty(exports, "DefaultFooter", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "GridContent", {
  enumerable: true,
  get: function get() {
    return _GridContent.default;
  }
});
Object.defineProperty(exports, "RouteContext", {
  enumerable: true,
  get: function get() {
    return _RouteContext.default;
  }
});
Object.defineProperty(exports, "getMenuData", {
  enumerable: true,
  get: function get() {
    return _getMenuData.default;
  }
});
Object.defineProperty(exports, "getPageTitle", {
  enumerable: true,
  get: function get() {
    return _getPageTitle.default;
  }
});
Object.defineProperty(exports, "PageLoading", {
  enumerable: true,
  get: function get() {
    return _PageLoading.default;
  }
});
Object.defineProperty(exports, "FooterToolbar", {
  enumerable: true,
  get: function get() {
    return _FooterToolbar.default;
  }
});
Object.defineProperty(exports, "WaterMark", {
  enumerable: true,
  get: function get() {
    return _WaterMark.default;
  }
});
Object.defineProperty(exports, "PageContainer", {
  enumerable: true,
  get: function get() {
    return _PageContainer.default;
  }
});
Object.defineProperty(exports, "ProPageHeader", {
  enumerable: true,
  get: function get() {
    return _PageContainer.ProPageHeader;
  }
});
Object.defineProperty(exports, "ProBreadcrumb", {
  enumerable: true,
  get: function get() {
    return _PageContainer.ProBreadcrumb;
  }
});
exports.default = exports.PageHeaderWrapper = void 0;

var _BasicLayout = _interopRequireDefault(require("./BasicLayout"));

var _Header = _interopRequireDefault(require("./Header"));

var _TopNavHeader = _interopRequireDefault(require("./components/TopNavHeader"));

var _SettingDrawer = _interopRequireDefault(require("./components/SettingDrawer"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _GridContent = _interopRequireDefault(require("./components/GridContent"));

var _RouteContext = _interopRequireDefault(require("./RouteContext"));

var _getMenuData = _interopRequireDefault(require("./utils/getMenuData"));

var _getPageTitle = _interopRequireDefault(require("./getPageTitle"));

var _PageLoading = _interopRequireDefault(require("./components/PageLoading"));

var _FooterToolbar = _interopRequireDefault(require("./components/FooterToolbar"));

var _WaterMark = _interopRequireDefault(require("./components/WaterMark"));

var _PageContainer = _interopRequireWildcard(require("./components/PageContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeaderWrapper = _PageContainer.default;
exports.PageHeaderWrapper = PageHeaderWrapper;
var _default = _BasicLayout.default;
exports.default = _default;