export interface KSidebarItem {
    title: string;
    path: string;
    icon?: any;
    iconOpened?: any;
    iconClosed?: any;
    subnav?: KSidebarItem[];
}