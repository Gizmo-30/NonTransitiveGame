const MakeMovePc = require("./Methods/MakeMovePc");
const GetArguments = require("./Methods/GetArguments");
const DefineResult = require("./Methods/DefineResult");
const Help = require("./Methods/Help");
const readline = require('readline-sync');
const Literals = require("./Methods/Literals");
const {white} = require("chalk");
const Delay = require("./Methods/Delay");
const chalk = require("chalk");
class Game {
    constructor() {
        this.arguments = GetArguments()
        this.ms = 500
        this.Main()
    }
    async Main(){
        this.PcMove = new MakeMovePc().Move()
        this.key = new MakeMovePc().LogKey().toUpperCase()
        this.hmac = new MakeMovePc().Hmac()

        await Delay(1000)
            .then(() => console.log('\n', Literals.HMAC, this.hmac.toUpperCase()))

        await Delay(this.ms)
            .then(() => console.log(Literals.AVAILABLE_MOVES))

        await Delay(1000)
            .then(() => this.LogMenu())

        await Delay(this.ms)
            .then(() => this.GetInput())

        await Delay(this.ms)
            .then(() => console.log(Literals.YOUR_MOVE, this.arguments[this.UserMove  - 1]))
        await Delay(this.ms)
            .then(() => console.log(Literals.COMPUTER_MOVE, this.PcMove))

        await Delay(this.ms)
            .then(() => this.LogResult())

        await Delay(this.ms)
            .then(() => console.log(Literals.HMAC_KEY, this.key, `\n`))

        await Delay(this.ms)
            .then(() => this.Main())
    }

    LogMenu() {
        this.arguments.map(e => console.log(`${this.arguments.indexOf(e) + 1} - ${e}`))
        console.log(Literals.EXIT)
        console.log(Literals.HELP)
    }

    async GetInput() {
        this.UserMove = readline.question(Literals.ENTER_YOUR_MOVE)
        if(this.UserMove === '0') process.exit(1)
        if(this.UserMove === '?') {
            await Delay(1000)
                .then(() => console.log(new Help().Render()))
            await Delay(this.ms)
                .then(() => this.Main())
        }
        while(this.UserMove > this.arguments.length || !this.UserMove || isNaN(this.UserMove))  this.GetInput()
        return this.UserMove
    }

    LogResult(){
        let result = new DefineResult(this.UserMove ,this.PcMove).FullResult()
        if(result === Literals.DRAW) {
            console.log(chalk.cyan(result))
        } else result === `${Literals.YOU} ${Literals.WIN}` ? console.log(chalk.green(result)) : console.log(chalk.red(result))
    }
}
new Game()