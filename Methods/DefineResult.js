const GetArguments = require("./GetArguments");
const Literals = require("./Literals");

class DefineResult {
    constructor(userMoveIndex, PcMove) {
        this.arguments = GetArguments()
        this.userMoveIndex = userMoveIndex - 1
        this.PcMove = PcMove
        this.userMove = this.arguments[this.userMoveIndex]
    }

    defineScope() {
        let a = this.arguments.slice(this.userMoveIndex + 1)
        let b = this.arguments.slice(0, this.userMoveIndex)
        let c = a.concat(b)
        let center = c.length/2
        this.userLose = c.slice(center)
    }
    WinnerOrLose() {
        this.defineScope()
        return this.userLose.some(e => e === this.PcMove) ? Literals.LOSE: Literals.WIN
    }

    Result() {
        return this.userMove === this.PcMove ? Literals.DRAW: this.WinnerOrLose()
    }

    FullResult(){
        return this.userMove === this.PcMove ? Literals.DRAW:  `${Literals.YOU} ${this.WinnerOrLose()}`
    }
}

module.exports = DefineResult