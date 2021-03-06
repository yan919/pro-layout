import "antd/es/layout/style";
import _Layout from "antd/es/layout";
import React from 'react';
import { ConfigProviderWrap } from '@ant-design/pro-provider';
import { ErrorBoundary } from '@ant-design/pro-utils';

var WrapContent = function WrapContent(props) {
  var style = props.style,
      className = props.className,
      children = props.children;
  var ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return /*#__PURE__*/React.createElement(ConfigProviderWrap, null, /*#__PURE__*/React.createElement(ErrorComponent, null, /*#__PURE__*/React.createElement(_Layout.Content, {
    className: className,
    style: style
  }, children)));
};

export default WrapContent;