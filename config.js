import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_HOST : publicRuntimeConfig.API_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;