import { defineConfig } from 'umi';

const { UMI_ENV } = process.env;

export default defineConfig({
  define: {
    API_HOST: 'https://api.dev.sayweee.net',
    SSO_HOST: 'https://cas.dev.sayweee.net',
    SSO_CLIENT_ID: 'wms',
    UMI_ENV: UMI_ENV,
    CS_URL: 'https://cs.dev.sayweee.net',
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
