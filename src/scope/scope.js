/**
 * Global Scope
 */
var globalScope = 'this variable is global scope';
console.log(globalScope);

var globalOutput = () => {
  console.log(globalScope);
}
globalOutput();

/**
 * Local Scope
 */
var localVariableDeclaration = () => {
  var localVariable = 'this variable is local scope'
}
console.log(localvariable) // Error