const {ReadFile, pipe} = require("../readFile");

function getSameAtStrArr(arr) {
    const objA = {};
    // design in order to have multi values
    let match = [];
    arr.forEach((cur) => {
        let flag = {};
        for (let i = 0; i < cur.length; ++i) {
            let key = cur[i];
            if (!flag[key]) {
                flag[key] = true;
                objA[key] = objA[key] === undefined ? 1 : objA[key] + 1;
                if (objA[key] === arr.length) {
                    match.push(key);
                }
            }
        }
    })
    return match[0];
}

function getPriorities(char = '') {
    let res = 0;
    const code = char.charCodeAt(0);
    if (code < 91) {
        res = code - 38;
    } else {
        res = code - 96;
    }
    return res;
}

function getLRFromChar(char = '') {
    const halfLen = char.length / 2;
    return [char.slice(0, halfLen), char.slice(halfLen)]
}

class Day3 extends ReadFile {
    constructor(props) {
        super(props);
    }

    getPriorities() {
        return this.readFileAsArray().reduce((r, c) => {
            return r + pipe(getLRFromChar, getSameAtStrArr, getPriorities)(c);
        }, 0);
    }

    getGroupPriorities() {
        let tempArr = [];
        return this.readFileAsArray().reduce((r, c) => {
            tempArr.push(c);
            if (tempArr.length === 3) {
                const res = pipe(getSameAtStrArr, getPriorities)(tempArr);
                tempArr = [];
                return r + res;
            }
            return r;
        }, 0);
    }
}

console.log('-----day3-homework-start-----');
console.log(new Day3('./day3/index.txt').getPriorities());
console.log(new Day3('./day3/index.txt').getGroupPriorities());
console.log('-----day3-homework-end-----');