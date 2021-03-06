"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index.less");

var _icons = _interopRequireWildcard(require("@ant-design/icons"));

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _proUtils = require("@ant-design/pro-utils");

var _defaultSettings = _interopRequireDefault(require("../../defaultSettings"));

var _utils = require("../../utils/utils");

var _Counter = _interopRequireDefault(require("./Counter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubMenu = _antd.Menu.SubMenu,
    ItemGroup = _antd.Menu.ItemGroup;
var IconFont = (0, _icons.createFromIconfontCN)({
  scriptUrl: _defaultSettings.default.iconfontUrl
}); // Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,

var getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';

  if (typeof icon === 'string' && icon !== '') {
    if ((0, _proUtils.isUrl)(icon) || (0, _proUtils.isImg)(icon)) {
      return /*#__PURE__*/_react.default.createElement(_icons.default, {
        component: function component() {
          return /*#__PURE__*/_react.default.createElement("img", {
            src: icon,
            alt: "icon",
            className: "ant-pro-sider-menu-icon"
          });
        }
      });
    }

    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/_react.default.createElement(IconFont, {
        type: icon
      });
    }
  }

  return icon;
};

var MenuUtil = function MenuUtil(props) {
  var _this = this;

  _classCallCheck(this, MenuUtil);

  this.props = void 0;

  this.getNavMenuItems = function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var isChildren = arguments.length > 1 ? arguments[1] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, isChildren);
    }).filter(function (item) {
      return item;
    });
  };

  this.getSubMenuOrItem = function (item, isChildren) {
    if (Array.isArray(item.children) && item && item.children.length > 0) {
      var name = _this.getIntlName(item);

      var _this$props = _this.props,
          subMenuItemRender = _this$props.subMenuItemRender,
          prefixCls = _this$props.prefixCls,
          menu = _this$props.menu,
          iconPrefixes = _this$props.iconPrefixes; //  get defaultTitle by menuItemRender

      var defaultTitle = item.icon ? /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, !isChildren && getIcon(item.icon, iconPrefixes), /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name)) : /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item"),
        title: name
      }, name); // subMenu only title render

      var title = subMenuItemRender ? subMenuItemRender(_objectSpread(_objectSpread({}, item), {}, {
        isUrl: false
      }), defaultTitle) : defaultTitle;
      var MenuComponents = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' ? ItemGroup : SubMenu;
      return /*#__PURE__*/_react.default.createElement(MenuComponents, {
        title: title,
        key: item.key || item.path,
        onTitleClick: item.onTitleClick
      }, _this.getNavMenuItems(item.children, true));
    }

    return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick
    }, _this.getMenuItemPath(item, isChildren));
  };

  this.getIntlName = function (item) {
    var name = item.name,
        locale = item.locale;
    var _this$props2 = _this.props,
        menu = _this$props2.menu,
        formatMessage = _this$props2.formatMessage;

    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      return formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }

    return name;
  };

  this.getMenuItemPath = function (item, isChildren) {
    var itemPath = _this.conversionPath(item.path || '/');

    var _this$props3 = _this.props,
        _this$props3$location = _this$props3.location,
        location = _this$props3$location === void 0 ? {
      pathname: '/'
    } : _this$props3$location,
        isMobile = _this$props3.isMobile,
        onCollapse = _this$props3.onCollapse,
        menuItemRender = _this$props3.menuItemRender,
        iconPrefixes = _this$props3.iconPrefixes; // if local is true formatMessage all name???

    var name = _this.getIntlName(item);

    var prefixCls = _this.props.prefixCls;
    var icon = isChildren ? null : getIcon(item.icon, iconPrefixes);

    var defaultItem = /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-menu-item")
    }, icon, /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-title")
    }, name));

    var isHttpUrl = (0, _proUtils.isUrl)(itemPath); // Is it a http link

    if (isHttpUrl) {
      defaultItem = /*#__PURE__*/_react.default.createElement("span", {
        title: name,
        onClick: function onClick() {
          window.open(itemPath);
        },
        className: "".concat(prefixCls, "-menu-item ").concat(prefixCls, "-menu-item-link")
      }, icon, /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-title")
      }, name));
    }

    if (menuItemRender) {
      var renderItemProps = _objectSpread(_objectSpread({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        }
      });

      return menuItemRender(renderItemProps, defaultItem, _this.props);
    }

    return defaultItem;
  };

  this.conversionPath = function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }

    return "/".concat(path || '').replace(/\/+/g, '/');
  };

  this.props = props;
};
/**
 * ??????openKeys ???????????????????????????openKeys ????????????????????????????????????????????????
 *
 * @param BaseMenuProps
 */


var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
      collapsed = _ref.collapsed;
  var openKeysProps = {};

  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }

  return openKeysProps;
};

var BaseMenu = function BaseMenu(props) {
  var theme = props.theme,
      mode = props.mode,
      className = props.className,
      handleOpenChange = props.handleOpenChange,
      style = props.style,
      menuData = props.menuData,
      menu = props.menu,
      matchMenuKeys = props.matchMenuKeys,
      iconfontUrl = props.iconfontUrl,
      collapsed = props.collapsed,
      propsSelectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      propsOpenKeys = props.openKeys; // ???????????? defaultOpenKeys ???????????????

  var defaultOpenKeysRef = (0, _react.useRef)([]);

  var _MenuCounter$useConta = _Counter.default.useContainer(),
      flatMenuKeys = _MenuCounter$useConta.flatMenuKeys;

  var _useMountMergeState = (0, _proUtils.useMountMergeState)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      defaultOpenAll = _useMountMergeState2[0],
      setDefaultOpenAll = _useMountMergeState2[1];

  var _useMountMergeState3 = (0, _proUtils.useMountMergeState)(function () {
    if (menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) {
      return (0, _utils.getOpenKeysFromMenuData)(menuData) || [];
    }

    if (propsOpenKeys === false) {
      return false;
    }

    return [];
  }, {
    value: propsOpenKeys === false ? undefined : propsOpenKeys,
    onChange: handleOpenChange
  }),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      openKeys = _useMountMergeState4[0],
      setOpenKeys = _useMountMergeState4[1];

  var _useMountMergeState5 = (0, _proUtils.useMountMergeState)([], {
    value: propsSelectedKeys,
    onChange: onSelect ? function (keys) {
      if (onSelect && keys) {
        onSelect(keys);
      }
    } : undefined
  }),
      _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
      selectedKeys = _useMountMergeState6[0],
      setSelectedKeys = _useMountMergeState6[1];

  (0, _react.useEffect)(function () {
    if ((menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll) || propsOpenKeys === false || flatMenuKeys.length) {
      return;
    }

    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-')]);
  (0, _react.useEffect)(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = (0, _icons.createFromIconfontCN)({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  (0, _react.useEffect)(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }

    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys; // ???????????????????????????????????? openKeys ?????????

      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat(_toConsumableArray(matchMenuKeys), _toConsumableArray(openKeys || []))));
      }

      setOpenKeys(newKeys);
    } else if ((menu === null || menu === void 0 ? void 0 : menu.ignoreFlatMenu) && defaultOpenAll) {
      // ?????????????????????????????????????????????????????????????????????????????????????????????????????????
      setOpenKeys((0, _utils.getOpenKeysFromMenuData)(menuData));
    } else if (flatMenuKeys.length > 0) setDefaultOpenAll(false); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [matchMenuKeys.join('-'), collapsed]);
  var openKeysProps = (0, _react.useMemo)(function () {
    return getOpenKeysProps(openKeys, props);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [openKeys && openKeys.join(','), props.layout, props.collapsed]);

  var _useState = (0, _react.useState)(function () {
    return new MenuUtil(props);
  }),
      _useState2 = _slicedToArray(_useState, 1),
      menuUtils = _useState2[0];

  if (menu === null || menu === void 0 ? void 0 : menu.loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: (mode === null || mode === void 0 ? void 0 : mode.includes('inline')) ? {
        padding: 24
      } : {
        marginTop: 16
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Skeleton, {
      active: true,
      title: false,
      paragraph: {
        rows: (mode === null || mode === void 0 ? void 0 : mode.includes('inline')) ? 6 : 1
      }
    }));
  }

  var cls = (0, _classnames.default)(className, {
    'top-nav-menu': mode === 'horizontal'
  }); // sync props

  menuUtils.props = props; // ?????? openKeys === false ?????????????????????????????????????????????????????????
  // ???????????????????????????????????? defaultOpenKeys
  // ???????????? null??????????????? defaultOpenKeys ??????

  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }

  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;

  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_antd.Menu, _extends({}, openKeysProps, {
    key: "Menu",
    mode: mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: theme,
    selectedKeys: selectedKeys,
    style: style,
    className: cls,
    onOpenChange: setOpenKeys
  }, props.menuProps), menuUtils.getNavMenuItems(finallyData, false));
};

BaseMenu.defaultProps = {
  postMenuData: function postMenuData(data) {
    return data || [];
  }
};
var _default = BaseMenu;
exports.default = _default;