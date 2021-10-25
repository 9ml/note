import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default function() {
  // 数据
  let point = reactive({
    x: 0,
    y: 0
  })
  // 方法
  let savePoint = (e) => {
    point.x = e.pageX
    point.y = e.pageY
  }
  // 生命周期
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}

// export default savePoint
