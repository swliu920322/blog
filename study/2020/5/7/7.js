

async function test() {
  const res =  await Promise.resolve(1)
    .then(res => res + 1)
    .then(res => res + 1)
    .then(res => res + '11')
  console.log(res)
}
test();
