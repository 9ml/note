import { CONFIG } from '../config.js'

const TIPS = {
  1: '出现一个错误',
  1005: '登录失败',
  3000: '用户错误'
}

class HTTP {
  request(params) {
    wx.request({
      url: CONFIG.API_BASE_URL + params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appKey': CONFIG.APP_KEY
      },
      success: res => {
        if (res.statusCode.toString().startsWith('2')) {
          return params.success(res.data)
        }
        this._showErr(res.data.error_code)
      },
      fail: err => {
        console.log(err)
        this._showErr()
      }
    })
  }

  _showErr(code = 1) {
    wx.showToast({
      title: TIPS[code],
      icon: 'none',
      duration: 2000
    })
  }
}

export default HTTP
