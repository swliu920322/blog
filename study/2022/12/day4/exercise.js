let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function getCache(arr) {
    console.log(arr)
    let cache = {};
    arr.forEach(i => {
        cache[i] = cache[i] ? cache[i].concat(i) : [i]
    })
    return cache;
}

function arraySort(obj) {
    return Object.values(getCache(arr))
}

// console.log(arraySort(array))

const pipe = (...funcs) => (...args) => funcs.reduce((f, g) => g(f(...args)))

const compose = (...funcs) => funcs.reduce((f, g) => (...args) => f(g(...args)));