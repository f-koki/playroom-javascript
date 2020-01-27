const closure = () => {
  let i = 0;
  const inner = () => {
    i++;
    console.log("i is " + i);
  };
  return inner;
};

const f = closure();
f(); // 1
f(); // 2
f(); // 3
