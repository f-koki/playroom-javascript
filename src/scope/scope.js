/**
 * Reference: https://app.codegrid.net/entry/2017-js-scope-1
 */

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
console.log(localvariable) // ERROR

/**
 * Local Scope 2
 */
var localVariableDeclaration2 = () => {
  const hoge = 'fugafuga'
  if(true) {
    console.log(hoge)
  }
}

/**
 * Block Scope
 */
if (true) {
  let blockScopeLet = 'this variable is block scope'
  console.log(blockScopeLet)
}
console.log(blockScopeLet) // ERROR

{
  let blockScopeLet2 = 'this variable is also block scope'
  console.log(blockScopeLet2)
}
console.log(blockScopeLet2)

if (true) {
  var blockScopeVar = 'this variable is not block scope'
  console.log(blockScopeVar)
}
console.log(blockScopeVar) // this shouldn't be ERROR because using 'var'