const GetArguments = require("./GetArguments");
const DefineResult = require("./DefineResult");
const Literals = require("./Literals");
const Table = require('cli-table3');
const chalk = require('chalk');
class Help {
    constructor() {
        this.arguments = GetArguments()
        this.results = []
    }
    Header(){
        let header = [...this.arguments]
        header.unshift(Literals.PC_USER)
        header = header.map(e => chalk.green(e))
        this.table = new Table({ head: header});
    }
    Rows(){
        this.arguments.forEach((item, index) => {
            item = chalk.green(item)
            this.arguments.map(e => this.results.push(new DefineResult(index + 1, e).Result()))
            this.table.push([item, ...this.results])
            this.results  = []
        })
    }

    Render() {
        this.Header()
        this.Rows()
        return this.table.toString()
    }

}

module.exports = Help