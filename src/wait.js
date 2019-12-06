export default function () {
  function double(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value * 2)
      }, 3000)
    })
  }

  async function wait(value) {
    const result = await double(value)
    return result + value
  }

  wait(5).then(result => alert(result))
}