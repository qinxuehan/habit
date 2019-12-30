import axios from 'axios'
import weui from 'weui.js'
import { getToken} from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken('sessionId')) {
      config.headers['sessionId'] = getToken('sessionId')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    weui.dialog({
      title: '提示',
      content: error.message,
      buttons: [
        {
          label: '确定',
          type: 'primary',
          onClick: function () {

          }
        }
      ]
    })
    return Promise.reject(error)
  }
)

export default service
