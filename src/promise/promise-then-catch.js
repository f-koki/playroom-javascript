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