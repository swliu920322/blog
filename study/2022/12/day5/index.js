const {ReadFile, pipe} = require("../readFile");

function getEachOrderObj(char = '', contain = {}) {
    let j = 0;
    for (let index = 1; index + 4 * j <= 35; j++) {
        contain[j + 1] = char[index + 4 * j]
    }
}

function generateArr(obj, r) {
    Object.values(obj).forEach((c => {
        Object.entries(c).forEach(([order, value]) => {
            if (value && value.trim()) {
                r[order] = r[order] ? [value, ...r[order]] : [value]
            }
        })
    }))
}

function exec([number, indexFrom, indexTo], arr, needReserve) {
    const arrFrom = arr[indexFrom];
    const addArr = arrFrom.slice(-number)
    arr[indexTo] = arr[indexTo].concat(needReserve ? addArr.reverse(): addArr)
    arr[indexFrom] = arrFrom.slice(0, arrFrom.length - number)
}

class Day5 extends ReadFile {
    infoLine = [];
    execLine = []

    constructor(props) {
        super(props);
        this.getBaseGroup()
    }

    getBaseGroup() {
        this.readFileAsArray().forEach((i) => {
            if (i.includes('[')) {
                this.infoLine.push(i)
            } else if (i.startsWith('move')) {
                this.execLine.push(i)
            }
        })
    }

    getBaseArr() {
        let obj = {}
        const originArr = []
        this.infoLine.forEach((i, index) => {
            if (!obj[index]) {
                obj[index] = {}
            }
            getEachOrderObj(i, obj[index])
        })
        generateArr(obj, originArr);
        return originArr
    }

    operateFirst(needReserve = true, originArr) {
        this.execLine.forEach(i => exec(i.match(/\d+/g), originArr, needReserve));
        return originArr
    }

    getVal(arr) {
        return arr.map(i => i.slice(-1)).join('')
    }

    getFirstResult() {
        return pipe(this.getBaseArr.bind(this), this.operateFirst.bind(this, true), this.getVal)(null)
    }
    getSecondResult() {
        return pipe(this.getBaseArr.bind(this), this.operateFirst.bind(this, false), this.getVal)(null)
    }
}

console.log('-----day5-homework-start-----');
const instance = new Day5('./day5/index.txt')
console.log(instance.getFirstResult())
console.log(instance.getSecondResult())
console.log('-----day5-homework-end-----');
