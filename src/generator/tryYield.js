// generator
function* generator() {
  yield new Promise(resolve => {
    console.log("execute after 1000ms");
    setTimeout(() => {
      resolve("1000ms waited");
    }, 1000);
  });
  yield new Promise(resolve => {
    console.log("execute after 2000ms");
    setTimeout(() => {
      resolve("2000ms waited");
    }, 2000);
  });
  yield new Promise(resolve => {
    console.log("execute after 3000ms");
    setTimeout(() => {
      resolve("3000ms waited");
    }, 3000);
  });
}

// generator関数の非同期処理を順番に実行する関数
function Loop(generator) {
  var p = generator.next();
  if (p.done) return;
  p.value.then(msg => {
    console.log(msg);
    // 再帰的に呼び出す
    Loop(generator);
  });
}

const g = generator();
Loop(g);
