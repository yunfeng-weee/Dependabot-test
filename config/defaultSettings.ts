import { UseSwitchTabsOptions } from '../src/utils/hooks/useSwitchTabs';
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export type SwitchTabsOptions = {
  /** 固定标签页头部 */
  fixed?: boolean;
  /** 是否在顶栏显示刷新按钮 */
  reloadable?: boolean;
} & Pick<UseSwitchTabsOptions, 'persistent'>;

export type Settings = LayoutSettings & {
  pwa?: boolean;
  logo?: string;
  switchTabs?: SwitchTabsOptions;
};

const proSettings: Settings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    // locale: true,
    locale: false,
  },
  title: false,
  pwa: false,
  iconfontUrl: '',
  switchTabs: {
    reloadable: true,
    fixed: false,
    persistent: {
      force: true,
    },
  },
};

export default proSettings;
