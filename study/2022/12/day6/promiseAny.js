const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("A"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), 3000);
});


(async function () {
    try {
        const result = await Promise.race([p1, p2, p3]);
        console.log(result); // Prints "A", "B" or "C"
    } catch (e) {
        console.log('error', e)
    }
})();