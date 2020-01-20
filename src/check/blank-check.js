/**
 * 空オブジェクトの判定
 */
var blankObject = {}
if (!Object.keys(blankObject).length) {
  console.log('this object is blank')
} else {
  console.log('this object is NOT blank')
}