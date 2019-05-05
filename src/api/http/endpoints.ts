const BASE_URL = process.env.NODE_ENV === 'development' 
? "/api" 
: "http://ulanqab.fun:8001/api";
export default {
  BASE_URL,
  CHANNEL_LIST: `${BASE_URL}/category/list`,
  FEED_LIST: `${BASE_URL}/feed/list`,
  FEED_CREATE: `${BASE_URL}/feed/create`,
  FEED_UPDATE: `${BASE_URL}/feed/update`
};
