export default function HelloA(props) {
  console.log('函数组件：', props)
  return (
    <div>Props：{`${props.name}&${props.age}`}</div>
  )
}
