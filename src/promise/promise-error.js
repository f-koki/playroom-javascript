var executor = (resolve, reject) => {
  var randomNum = Math.floor(Math.random() * 100)
  if (randomNum % 2 === 0) {
    reject(new Error('number is even'));
  } else {
    resolve('number is odd');
  }
}

var promise = new Promise(executor)
promise.then(value => {
  console.log(value)
}).catch(error => {
  /**
   * Error Obuject
   * message: string
   * name: string
   */
  console.log(error.message)
})