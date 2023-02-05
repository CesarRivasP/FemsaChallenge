import axios from 'axios';
import ENV from '@config/envs';

export const REQUEST_TIMEOUT = 5000;

const instance = axios.create({
  baseURL: `${ENV.API_URL}/api/v1`,
  timeout: Number(REQUEST_TIMEOUT),
});

export default instance;
