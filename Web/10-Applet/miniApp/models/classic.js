import HTTP from "../utils/http"

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: res => {
        // console.log(res)
        sCallback(res)
      }
    })
  }
}

export {
  ClassicModel
}
