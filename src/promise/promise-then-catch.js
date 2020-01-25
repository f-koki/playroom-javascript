var randomNumber = Math.floor(Math.random() * 100)

var promise = new Promise(resolve => { resolve('resolved') }, reject => { reject('rejected') })
promise.then(value => {
  throw new Error('number is even...')
  console.log('first then:' + value)
  return value
}).catch(e => {
  console.log('first catch:' + e)
}).then(value => {
  // throw new Error('number is even...')
  console.log('second then:' + value)
  return value
}).catch(e => {
  console.log('second catch:' + e)
})

/**
 * catchでreturnしたものを次のthenに渡すことができる
 */
var rejected = Promise
  .reject('rejected...')
  .catch(err => {
    console.log('catched!')
    return err
  })
rejected.then(value => {
  console.log("result is ", value);
})

/**
 * catch で return syntax sugar
 */
var rejected2 = Promise
  .reject(new Error('rejected...'))
  .catch(err => {
    return {
      message: err.message
    }
  })
rejected2.then(value => {
  console.log("result is ", value)
})