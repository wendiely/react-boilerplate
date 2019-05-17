import axios from "axios";
// import Qs from 'qs'
// const API_ROOT = "";

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截, 拦截响应数据，对响应数据做些什么
 */
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

const baseAxios = ({
  url,
  data = {},
  type = "POST",
  timeout = 15000,
  API_ROOT,
  isFormData = false
}) => {
  const headers = {
    "Content-Type": "application/json"
  };
  if (isFormData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  axios.defaults.headers = headers;
  axios.defaults.timeout = 15000;
  if (timeout) {
    axios.defaults.timeout = timeout;
  }
  const options = {
    url: url,
    method: type,
    baseURL: API_ROOT
  };

  if (type === "GET" || type === "DELETE") {
    options.params = data;
    console.log("lO", options);
  } else {
    options.data = data;
  }

  return axios(options).then(res => {
    const { headers, data, status } = res;
    const contentType = headers["content-type"];
    if (status !== 200) {
      return Promise.reject(new Error("服务器请求失败"));
    } else {
      if (contentType && contentType.indexOf("application/json") !== -1) {
        console.log("dddddd", data);
        return Promise.resolve(data);
      } else {
        return Promise.reject(new Error("the response is not JSON"));
      }
    }
  });
};

export default baseAxios;
