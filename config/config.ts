// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from '../src/routes';

const { REACT_APP_ENV, UMI_ENV } = process.env;

export default defineConfig({
  define: {
    API_HOST: 'https://api.tb1.sayweee.net',
    UMI_ENV: UMI_ENV,
  },
  hash: true,
  antd: {},
  mfsu: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Weee!',
    locale: true,
    // locale: false,
    layout: 'side',
  },
  locale: {
    // default zh-CN
    // default: 'zh-CN',
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    // baseNavigator: true,
    baseNavigator: false,
  },
  // locale: false,
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  chainWebpack: (config) => {
    config.module
      .rule('tsv')
      .test(/\.tsv$/)
      .use('file-loader')
      .loader('file-loader');
  },
});
