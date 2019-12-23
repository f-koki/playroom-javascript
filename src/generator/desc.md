## generator関数とは
### What For
- 非同期処理のネストを減らし、可読性を上げるため

### How
- generatorオブジェクトを返す
  - `yield` で複数の非同期処理を順番に追加する
  - 作成したオブジェクトの要素は`.next()` で順番に参照できる

### Example
具体例を見るとわかりやすい

#### 1.数字を返すだけ

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator()

console.log(gen.next()) // {value: 1, done: false}
console.log(gen.next()) // {value: 2, done: false}
console.log(gen.next()) // {value: 3, done: false}
console.log(gen.next()) // {value: 4, done: true}
```

#### 2.ループを関数化

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 順番に実行する関数
function loop(generator) {
  const element = generator.next()
  console.log(element)
  if(element.done) return
  // 再帰的に呼び出す
  loop(generator)
}

const generator = numberGenerator()
loop(generator) // 先ほどと同じ出力
```

#### 3.非同期処理を返すGenerator

```javascript
function* timeoutGenerator() {
  yield new Promise(resolve => {
    setTimeout(() => { resolve("1000ms") }, 1000);
  })
  yield new Promise(resolve => {
    console.log("execute after 2000ms");
    setTimeout(() => { resolve("2000ms") }, 2000);
  })
  yield new Promise(resolve => {
    console.log("execute after 3000ms");
    setTimeout(() => { resolve("3000ms") }, 3000);
  })
}
function loop(generator) {
  const element = generator.next()
}



```

## yieldとは
### What for
- `{value: Object, done: boolean}` という連想配列を返す

### どうなる？
- generator関数の中でのみ使うことができる
  - `function* hoge() {}` みたいに宣言する関数