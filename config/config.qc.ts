import { defineConfig } from 'umi';

const { UMI_ENV } = process.env;

export default defineConfig({
  define: {
    API_HOST: 'https://api.qc.sayweee.net',
    UMI_ENV: UMI_ENV,
  },
});
