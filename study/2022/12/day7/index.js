const {ReadFile} = require("../readFile");

const getCurDir = (host, pathArr = []) => pathArr.reduce((r, c) => {
    const findLogic = i => i.property.name === c;
    if (r.children) {
        return r.children.find(findLogic);
    } else if (r.find(findLogic)) {
        return r.find(findLogic);
    }
    r[0] = {property: {name: c, type: 'dir', size: 0,}, children: []}
    return r[0].children;
}, host);

class Day7 extends ReadFile {

    resultChain = []
    opeStack = [];
    dealLines = [];

    constructor(props) {
        super(props)
        this.initTree();
    }

    generateFiles(isDirectory = false) {
        const path = this.opeStack.map(i => i[1]);
        if (path.length) {
            const cur = getCurDir(this.resultChain, path)
            // generateFile needTo create files
            if (!isDirectory) {
                cur.children = this.dealLines.map(i => {
                    const matchArr = i.split(' ');
                    const isDir = i.includes('dir')
                    return {
                        property: {
                            type: isDir ? 'dir' : 'file',
                            name: matchArr[1],
                            parent: cur,
                            size: isDir ? 0 : +matchArr[0],
                            ...(isDir ? {children: []} : {})
                        },
                    };
                })
                this.dealLines = []
            }
        }
    }

    // ls    32 b.txt
    // cd /  dir a
    // ___   ___
    execLastProgram() {
        if (this.opeStack.length) {
            // cd .. will pop() twice
            // cd other will create directory
            const [command, path] = this.opeStack[this.opeStack.length - 1];
            if (command === 'cd') {
                if (path === '..') {
                    this.opeStack = this.opeStack.slice(0, -2);
                } else {
                    this.generateFiles(true);
                }
                // ls will pop() and generate files
            } else if (command === 'ls') {
                this.opeStack.pop()
                this.generateFiles();
            }
        }
    }

    initTree() {
        this.readFileAsArray().forEach(i => {
            // when come $ exec last total command
            if (i.startsWith('$')) {
                this.execLastProgram();
                const [command, path] = i.slice(2).split(' ');
                this.opeStack.push([command, path]);
            } else {
                // next need to Deal commandLines
                this.dealLines.push(i);
            }
        })
        // last exec once
        this.execLastProgram();
    }

    lastParent = {};
    updateSizeToParent(node) {
        if (node.property?.parent) {
            node.property.parent.property.size += +node.property.size
        }
    }
    getTheDeepestFile(node, callback) {
        if (node.children) {
            node.children.forEach(i => {
                this.getTheDeepestFile(i, callback)
            })
        } else {
            callback(node)
        }
    }

    getSize() {
        // getDeepest to inform upper
        this.resultChain.forEach(i => {
            this.getTheDeepestFile(i, this.updateSizeToParent)
        })
        console.log(this.resultChain)
    }
}


console.log('-----day7-homework-start-----');
// const instance = new Day7('./day7/index.txt')
const instance = new Day7('test.txt')
console.log(instance.getSize())
console.log('-----day7-homework-end-----');