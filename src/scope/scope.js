/**
 * Global Scope
 */
var globalScope = 'this variable is global';
console.log(globalScope);

var globalOutput = () => {
  console.log(globalScope);
}
globalOutput();