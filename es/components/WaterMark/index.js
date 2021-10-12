import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
/**
 * 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
 *
 * @param context
 * @see api 有些废弃了，其实类型 CanvasRenderingContext2D
 */

var getPixelRatio = function getPixelRatio(context) {
  if (!context) {
    return 1;
  }

  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};

var WaterMark = function WaterMark(props) {
  var children = props.children,
      style = props.style,
      className = props.className,
      markStyle = props.markStyle,
      markClassName = props.markClassName,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 9 : _props$zIndex,
      _props$gapX = props.gapX,
      gapX = _props$gapX === void 0 ? 212 : _props$gapX,
      _props$gapY = props.gapY,
      gapY = _props$gapY === void 0 ? 222 : _props$gapY,
      _props$width = props.width,
      width = _props$width === void 0 ? 120 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 64 : _props$height,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? -22 : _props$rotate,
      image = props.image,
      content = props.content,
      offsetLeft = props.offsetLeft,
      offsetTop = props.offsetTop,
      _props$fontStyle = props.fontStyle,
      fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle,
      _props$fontWeight = props.fontWeight,
      fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
      _props$fontColor = props.fontColor,
      fontColor = _props$fontColor === void 0 ? 'rgba(0,0,0,.15)' : _props$fontColor,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 16 : _props$fontSize,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily,
      customizePrefixCls = props.prefixCls;

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-layout-watermark', customizePrefixCls);
  var wrapperCls = classNames("".concat(prefixCls, "-wrapper"), className);
  var waterMakrCls = classNames(prefixCls, markClassName);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      base64Url = _useState2[0],
      setBase64Url = _useState2[1];

  useEffect(function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var ratio = getPixelRatio(ctx);
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var canvasOffsetLeft = offsetLeft || gapX / 2;
    var canvasOffsetTop = offsetTop || gapY / 2;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      // 旋转字符 rotate
      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      ctx.rotate(Math.PI / 180 * Number(rotate));
      var markWidth = width * ratio;
      var markHeight = height * ratio;

      if (image) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;

        img.onload = function () {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        var markSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        setBase64Url(canvas.toDataURL());
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('当前环境不支持Canvas');
    }
  }, [gapX, gapY, offsetLeft, offsetTop, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      position: 'relative'
    }, style),
    className: wrapperCls
  }, children, /*#__PURE__*/React.createElement("div", {
    className: waterMakrCls,
    style: _objectSpread({
      zIndex: zIndex,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundSize: "".concat(gapX + width, "px"),
      pointerEvents: 'none',
      backgroundRepeat: 'repeat',
      backgroundImage: "url('".concat(base64Url, "')")
    }, markStyle)
  }));
};

export default WaterMark;