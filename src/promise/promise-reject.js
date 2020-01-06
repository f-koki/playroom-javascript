const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(reject(new Error('タイムアウトです')), ms)
})

timeout(3000)
  .then(value => {
    console.log(value) // 呼ばれず
  }).catch(e => {
    console.log(e)
  })