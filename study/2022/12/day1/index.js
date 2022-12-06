const {ReadFile} = require("../readFile");

class DealFile extends ReadFile {

    #caloryList = [];

    constructor(filePath) {
        super(filePath);
    }

    calculateCalorieList() {
        const tempObj = {};
        this.readFileAsArray('\n\n').forEach(i => {
            const arr = i.split('\n')
            const curTotal = arr.reduce((r, c) => +r + +c);
            tempObj[curTotal] = curTotal;
        })
        this.#caloryList = Object.values(tempObj)
        return this;
    }

    getTopCalorySum(number = 1) {
        if (typeof number !== 'number') {
            throw new Error('you must input a number');
        }
        return this.#caloryList.slice(-number).reduce((r, c) => +r + +c, 0);
    }
}

const fileDeal = new DealFile('./day1/index.txt');
const res = fileDeal.calculateCalorieList()
console.log('-----day1-homework-start-----')
console.log(res.getTopCalorySum())
console.log(res.getTopCalorySum(3))
console.log('-----day1-homework-end-----')

