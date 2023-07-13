import { message } from "ant-design-vue";
import axios from "axios";

const http = axios.create({
  // baseURL:
  //   "https://www.fastmock.site/mock/293bd4e6457a72210f13652b93a118b4/api",
  baseURL: "http://172.18.19.42:8020",
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      message.error(response.status);
      return response;
    }
  },
  (err) => {
    const { response } = err;
    if (response) {
      message.error(response.status);
      return Promise.reject(response.data);
    } else {
      message.error("网络连接异常，请稍后再试");
    }
  }
);

export { http };
