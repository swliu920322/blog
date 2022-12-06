function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time * 1000)
    })
}

const arr = [() => sleep(1), () => sleep(2), () => sleep(3)]

async function exex() {
    for await (let i of arr) {
        const res = await i()
        console.log(res)
    }
}
exex()