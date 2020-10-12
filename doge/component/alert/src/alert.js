import Alert from './alert.vue'
import { createApp,h } from 'vue'

Alert.genInstance = properties => {
  const props = properties || {}

  const Instance = createApp({
    data() {
      return {
        ...props
      }
    },
    render() {
      return h(Alert, {
        props,
        ref: 'notice'
      })
    }
  })
  const div = document.createElement('div')
  const component = Instance.mount(div)
  document.body.appendChild(div)
  
  const alert = component.$refs.notice

  return {
    add(noticeProps) {
      alert.add(noticeProps)
    },
    remove(name) {
      alert.remove(name)
    }
  }
}

export default Alert
