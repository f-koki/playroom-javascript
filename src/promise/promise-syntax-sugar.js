/**
 * resolveのシンタクスシュガー
 */
var resolvedPromise = new Promise(resolve => {
  resolve('resolved!');
});
var syntaxResolvedPromise = Promise.resolve('resolved!');
resolvedPromise.then(value => {
  console.log(value);
});
syntaxResolvedPromise.then(value => {
  console.log(value);
});

/**
 * rejectのシンタクスシュガー
 */
var rejectedPromise = new Promise((resolve, reject) => { // 使わない"resolve"を記述する必要があり、無駄
  reject(new Error('reject!!!'));
});
var syntaxRejectedPromise = Promise.reject(new Error('reject!!!'));
rejectedPromise.then(value => {
  console.log(value)
}).catch(e => {
  console.log(e.message);
})
syntaxRejectedPromise.then(value => {
  console.log(value)
}).catch(e => {
  console.log(e.message);
})