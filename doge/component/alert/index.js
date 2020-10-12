import Alert from './src/alert.js'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Alert.genInstance()
  return messageInstance
}
function notice ({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()
  instance.add({
    content: content,
    duration: duration
  })
}
export default notice
