export const timeInfo = t => {
  if (t) {
    const time = new Date(t)
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = time.getHours()
    const min = time.getMinutes()
    return `${year}年${month}月${day}日${hour}时${min}分`
  }
  return ''
}