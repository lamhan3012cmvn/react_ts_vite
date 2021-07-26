/* eslint-disable no-console */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import queryString from "query-string"
import Cookie from "js-cookie"
const axiosClient = axios.create({
  // baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    return config
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)
axiosClient.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res && res.data) return res.data
    return res
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)

export default axiosClient
