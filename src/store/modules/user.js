import { login, getShareParam } from '@/api/index'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    appid: 'wx781332e44bdcfaeb',
    userInfo: {}// 用户信息
  },

  mutations: {
    USERINFO: (state, data) => {
      state.userInfo = data
    }
  },

  actions: {
    login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login({code: getToken('code')}).then(response => {
          commit('USERINFO', response.data)
          setToken('sessionId', response.data.sessionId)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    readyConfig ({ commit }, url) {
      return new Promise((resolve, reject) => {
        getShareParam({url: 'http://www.bjchangyukeji.com/#/' + url}).then(response => {
          wx.config({
            debug: true,
            appId: response.data.appid,
            timestamp: response.data.timestamp,
            nonceStr: response.data.nonceStr,
            signature: response.data.signature,
            jsApiList: ['checkJsApi', 'updateAppMessageShareData', 'updateTimelineShareData']
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
