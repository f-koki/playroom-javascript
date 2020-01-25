/**
 * generatorをネストする場合は、yieldに*を付与する必要がある
 */
const nonAsterYield = () => {
  function* iterator() {
    yield 1;
    // ここに*をつけないパターン
    yield generator();
    yield 5;
  }

  function* generator() {
    yield 2;
    yield 3;
    yield 4;
  }

  const ite = iterator();
  while (true) {
    const p = ite.next();
    if (p.done) {
      break;
    }
    console.log(p.value);
  }
};

/**
 * generatorをネストする場合は、yieldに*を付与する必要がある
 */
const asterYield = () => {
  function* generator() {
    yield 2;
    yield 3;
    yield 4;
  }

  function* iterator() {
    yield 1;
    yield* generator();
    yield 5;
  }

  const ite = iterator();
  while (true) {
    const p = ite.next();
    if (p.done) {
      break;
    }
    console.log(p.value);
  }
};
