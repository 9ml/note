export default {
  install(Vue) {
    console.log('@install', Vue)
    // 全局过滤
    Vue.filter('mySlice', function(val) {
      return val.slice(0, 4)
    })
    // 全局自定义指令
    Vue.directive('binds', {
      // 指令与元素绑定成功时
      bind(element, binding) {
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element, binding) {
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value
      }
    })
    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      }
    })
    // 添加原型方法
    Vue.prototype.msg = () => alert('Hello World')
  }
}
