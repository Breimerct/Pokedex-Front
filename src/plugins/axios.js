import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export { httpClient, axios };
