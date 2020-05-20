

function resolve() {
    console.log('resolve')
    return Promise.resolve()
}

function reject() {
    console.log('reject')
    return Promise.reject()
}

async function test() {
    await reject().catch(e => {
        console.log(e)
    })
    console.log(111)
}
async function test1() {
    await reject();
    console.log(111)
}
function test2() {
    reject()
    console.log(111)
}
// test()
test1()
// test2()