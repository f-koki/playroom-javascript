## generator関数とは
### What For
- 非同期処理のネストを減らし、可読性を上げるため
- コールバック地獄からの脱却

### How
- generatorオブジェクトを返す
  - `yield` 文で非同期処理を順番に追加する
  - `next()` で次の `yield` まで処理を進め、 `yield` 文の評価値を返す
    - `yield文` は `{value: Object, done: boolean}` という連想配列を返す
      - `value` に評価値を入れる。
      - `done` generator関数内のすべての `yield` が評価し終わっているかを表すboolean
  - すべての `yield` を評価した後に `next()` をすると、最後の `yield` 以降の処理をして `{value: undefined, done: true}` を返す

### Example
具体例を見るとわかりやすい

#### 1.数字を返すだけ

```javascript
function* numberGenerator() {
  console.log("first");
  yield 1;
  console.log("second");
  yield 2;
  console.log("third");
  yield 3;
  console.log("end");
}

const gen = numberGenerator()

console.log(gen.next()) // first, {value: 1, done: false}
console.log(gen.next()) // second, {value: 2, done: false}
console.log(gen.next()) // third, {value: 3, done: false}
console.log(gen.next()) // end, {value: 4, done: true}
```

#### 2.ループを関数化
`next()` をループ関数の中で実行するよう作り変える

```javascript
function* numberGenerator() {
  console.log("first");
  yield 1;
  console.log("second");
  yield 2;
  console.log("third");
  yield 3;
  console.log("end");
}

// numberGeneratorを進める関数
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

#### 3.非同期処理をしてみる
```javascript
function* timeoutGenerator() {
  yield new Promise(resolve => {
    console.log("execute after 1000ms");
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

// timeoutGeneratorを進める関数
function loop(generator) {
  const element = generator.next()
  if(element.done) return
  // 再帰的に呼び出す
  loop(generator)
}

const generator = numberGenerator()
loop(generator)
```