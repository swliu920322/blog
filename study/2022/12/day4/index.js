const {ReadFile, pipe} = require("../readFile");

function CoverAll(arr) {
    const [[ll, lr], [rl, rr]] = arr;
    return (ll <= rl && lr >= rr) || (ll >= rl && lr <= rr);
}

function CoverAny(arr) {
    const [[ll, lr], [rl, rr]] = arr;
    return (lr >= rl && ll <= rl) || (ll <= rr && rl <= ll);
}

function getVal(val) {
    return val ? 1 : 0
}

function getTwoRange(char) {
    return char.split(',').map(i => i.split('-').map(i => Number(i)));
}

class Day4 extends ReadFile {
    constructor(props) {
        super(props);
    }

    getCoverageAll() {
        return this.readFileAsArray()
            .reduce((r, c) => r + pipe(getTwoRange, CoverAll, getVal)(c), 0)
    }

    getCoverageAny() {
        return this.readFileAsArray()
            .reduce((r, c) => r + pipe(getTwoRange, CoverAny, getVal)(c), 0)
    }
}


console.log('-----day4-homework-start-----');
console.log(new Day4('./day4/index.txt').getCoverageAll());
console.log(new Day4('./day4/index.txt').getCoverageAny());
console.log('-----day4-homework-end-----');