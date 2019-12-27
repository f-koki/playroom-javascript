/**
 * 2つ以上のPromiseを競争(race)させる
 */

const firstPromise = new Promise(resolve => {
  setTimeout(resolve, 500, 'first');
})

const secondPromise = new Promise(resolve => {
  setTimeout(resolve, 1000, 'second');
})

Promise.race([firstPromise, secondPromise]).then(value => {
  console.log(value) // first
})