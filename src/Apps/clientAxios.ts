/* eslint-disable no-console */
import axios from "axios"
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
  config => {
    //Handle token here ...
    // const token = Cookie.get("token")
    // config.headers.authorization = `Admin ${token}`
    return config
  },
  err => {
    console.error(err)
  }
)
axiosClient.interceptors.response.use(
  res => {
    if (res && res.data) return res.data
    return res
  },
  err => {
    //Handle err
    // eslint-disable-next-line no-console
    console.error(err)
  }
)

export default axiosClient
