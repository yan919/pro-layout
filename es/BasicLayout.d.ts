import './BasicLayout.less';
import type { CSSProperties } from 'react';
import React from 'react';
import type { BreadcrumbProps as AntdBreadcrumbProps } from 'antd/lib/breadcrumb';
import type { HeaderViewProps } from './Header';
import type { MenuDataItem, MessageDescriptor, Route, RouterTypes, WithFalse } from './typings';
import type { GetPageTitleProps } from './getPageTitle';
import type { LocaleType } from './locales';
import type { BaseMenuProps } from './components/SiderMenu/BaseMenu';
import type { SiderMenuProps } from './components/SiderMenu/SiderMenu';
import type { WaterMarkProps } from './components/WaterMark';
export declare type LayoutBreadcrumbProps = {
    minLength?: number;
};
export declare type BasicLayoutProps = Partial<RouterTypes<Route>> & SiderMenuProps & HeaderViewProps & {
    pure?: boolean;
    /** @name logo url */
    logo?: React.ReactNode | WithFalse<() => React.ReactNode>;
    /** @name 页面切换的时候触发 */
    onPageChange?: (location?: RouterTypes<Route>['location']) => void;
    loading?: boolean;
    locale?: LocaleType;
    onCollapse?: (collapsed: boolean) => void;
    footerRender?: WithFalse<(props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode>;
    breadcrumbRender?: WithFalse<(routers: AntdBreadcrumbProps['routes']) => AntdBreadcrumbProps['routes']>;
    menuItemRender?: BaseMenuProps['menuItemRender'];
    pageTitleRender?: WithFalse<(props: GetPageTitleProps, defaultPageTitle?: string, info?: {
        title: string;
        id: string;
        pageName: string;
    }) => string>;
    menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[];
    itemRender?: AntdBreadcrumbProps['itemRender'];
    formatMessage?: (message: MessageDescriptor) => string;
    /** 是否禁用移动端模式，有的管理系统不需要移动端模式，此属性设置为true即可 */
    disableMobile?: boolean;
    contentStyle?: CSSProperties;
    isChildrenLayout?: boolean;
    className?: string;
    /** 兼用 content的 margin */
    disableContentMargin?: boolean;
    /** PageHeader 的 BreadcrumbProps 配置，会透传下去 */
    breadcrumbProps?: AntdBreadcrumbProps & LayoutBreadcrumbProps;
    /** @name 水印的相关配置 */
    waterMarkProps?: WaterMarkProps;
    /** @name 操作菜单重新刷新 */
    actionRef?: React.MutableRefObject<{
        reload: () => void;
    } | undefined>;
    ErrorBoundary?: any;
};
export declare type BasicLayoutContext = {
    [K in 'location']: BasicLayoutProps[K];
} & {
    breadcrumb: Record<string, MenuDataItem>;
};
/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
declare const BasicLayout: React.FC<BasicLayoutProps>;
export default BasicLayout;
