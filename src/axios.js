import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URI;
axios.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem("token");
  config.headers["x-access-token"] = token;
  return config;
});

export default axios;
