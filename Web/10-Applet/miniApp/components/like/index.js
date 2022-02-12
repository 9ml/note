// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_src: 'images/like.png',
    no_src: 'images/like_dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      let { like, count } = this.properties
      like ? count -- : count ++
      this.setData({
        like: !like,
        count: count
      })
    }
  }
})
