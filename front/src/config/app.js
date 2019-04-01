import localKey from './localKey'

const devApiUrl = 'http://192.168.48.133:10003';


const proApiUrl = 'http://api.youUrl.com';
//const proApiUrl = 'http://192.168.49.196:10003';

const nodeDevEnv = process.env.NODE_ENV == 'development' ? true : false;

export default {
  nodeDevEnv: nodeDevEnv,
  apiUrl: nodeDevEnv ? devApiUrl : proApiUrl,
  siteName: 'Live LaTex Zoom',
  minSiteMame: 'LLZ',
  apiPrefix: "",
  timeout: 5000,
  cookiesExpires: 7,
  requestRetry: 4,
  requestRetryDelay: 800,
  tokenKey: 'ACCESS_TOKEN',
  userInfoKey: 'USER_INFO',
  gitHub: 'https://github.com/ai-shandong-university/Live-LaTex-Zoom',
  owner: 'AI, Shandong University',
  version: 'alpha 0.1',
  ...localKey
}
