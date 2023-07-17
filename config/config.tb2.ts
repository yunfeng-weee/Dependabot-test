import { defineConfig } from 'umi';

const { UMI_ENV } = process.env;

export default defineConfig({
  define: {
    API_HOST: 'https://api.tb1.sayweee.net',
    SSO_HOST: 'https://cas.tb1.sayweee.net',
    SSO_CLIENT_ID: 'wms-tb2',
    UMI_ENV: UMI_ENV,
    CS_URL: 'https://cs.tb2.sayweee.net',
  },
  // mfsu: {
  //   development: {
  //     output: './.mfsu-dev',
  //   },
  //   production: {
  //     output: './.mfsu-prod',
  //   },
  // },
});
