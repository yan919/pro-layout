import type { ReactNode } from 'react';
import React from 'react';
import type { TabsProps, AffixProps, PageHeaderProps, TabPaneProps, SpinProps, BreadcrumbProps } from 'antd';
import './index.less';
import type { WithFalse } from '../../typings';
import type { WaterMarkProps } from '../WaterMark';
export declare type PageHeaderTabConfig = {
    /** @name tabs 的列表 */
    tabList?: (TabPaneProps & {
        key?: React.ReactText;
    })[];
    /** @name 当前选中 tab 的 key */
    tabActiveKey?: TabsProps['activeKey'];
    /** @name tab 修改时触发 */
    onTabChange?: TabsProps['onChange'];
    /** @name tab 上额外的区域 */
    tabBarExtraContent?: TabsProps['tabBarExtraContent'];
    /** @name tabs 的其他配置 */
    tabProps?: TabsProps;
    /**
     * @deprecated 请使用 fixedHeader
     * @name 固定 PageHeader 到页面顶部
     */
    fixHeader?: boolean;
    /** @name 固定 PageHeader 到页面顶部 */
    fixedHeader?: boolean;
};
export declare type PageContainerProps = {
    title?: React.ReactNode | false;
    content?: React.ReactNode;
    extraContent?: React.ReactNode;
    prefixCls?: string;
    footer?: ReactNode[];
    /** @name 是否显示背景色 */
    ghost?: boolean;
    /**
     * 与 antd 完全相同
     *
     * @name PageHeader 的配置
     */
    header?: Partial<PageHeaderProps> & {
        children?: React.ReactNode;
    };
    /** @name 自定义 pageHeader */
    pageHeaderRender?: WithFalse<(props: PageContainerProps) => React.ReactNode>;
    /**
     * 与 antd 完全相同
     *
     * @name 固钉的配置
     */
    affixProps?: AffixProps;
    /**
     * 只加载内容区域
     *
     * @name 是否加载
     */
    loading?: boolean | SpinProps | React.ReactNode;
    /** 自定义 breadcrumb,返回false不展示 */
    breadcrumbRender?: PageHeaderProps['breadcrumbRender'] | false;
    /** @name 水印的配置 */
    waterMarkProps?: WaterMarkProps;
} & PageHeaderTabConfig & Omit<PageHeaderProps, 'title' | 'footer' | 'breadcrumbRender'>;
/**
 * 配置与面包屑相同，只是增加了自动根据路由计算面包屑的功能。此功能必须要在 ProLayout 中使用。
 *
 * @param props
 * @returns
 */
declare const ProBreadcrumb: React.FC<BreadcrumbProps>;
declare const ProPageHeader: React.FC<PageContainerProps & {
    prefixedClassName: string;
}>;
declare const PageContainer: React.FC<PageContainerProps>;
export { ProPageHeader, ProBreadcrumb };
export default PageContainer;
