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