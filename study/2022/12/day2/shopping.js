const user = {
    name: 'KIM',
    active: true,
    cart: [],
    purchase: []
}

function addItem(item = {name: '11', price: 20}) {
    user.cart.push(item)
}

function purCart() {
    // const tax = user.cart.reduce((r, c) => +r + +c) * 3%;
    user.purchase = [...user.cart]
}

function emptyCart() {
    user.cart = []
}


function purchaseItem(user, item) {
    return Object.assign({}, user, {purchaseItem: item})
}

const a = purchaseItem(user, {name: 'laptop', price: 20})
console.log(a)

const pipe = (f, g) => (...args) => f(g(...args));
const pur = (...fns) => fns.reduce((f, g) => {
    return (...args) => f(g(...args));
})

const aa = (i) => {
    console.log(1, i);
    return i
}
const ab = (i) => {
    console.log(2, i);
    return i
}
const ac = (i) => {
    console.log(3, i);
    return i
}
const bb = pur(aa, ab, ac);
const r1 = (...args) => aa(ab(...args));
const r2 = (...args) => r1(ac(...args))
const r2 = (...args) => ((...args) => aa(ab(...args)))(ac(...args))

// bb('c')
const rr = r2('c')
console.log(rr)