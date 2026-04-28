const message_Error = "error try again"
const message = "First_message"
const message1 = "second_message"
const message_warn = "warn_message"
const message_info = "First_message_info"
const title = "primeros mensajes"
console.log(message)
console.error(message_Error)
console.warn(message_warn)
console.info(message_info)

console.time('time')
console.group(title)
console.log(message)
console.log(message1)
console.groupEnd()
console.timeEnd('time')