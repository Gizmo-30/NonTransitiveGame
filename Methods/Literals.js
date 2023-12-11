const chalk = require('chalk');
const Literals = {
    YOU: 'you',
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw',
    AVAILABLE_MOVES: 'Available moves:',
    COMPUTER_MOVE: 'Computer move:',
    HMAC_KEY: 'HMAC key:',
    HMAC: 'HMAC:',
    EXIT: '0 - exit',
    HELP: '? - help',
    ENTER_YOUR_MOVE: 'Enter your move: ',
    YOUR_MOVE: 'Your move: ',
    PC_USER: 'v PC\\User >',
    EXAMPLE: `> ${chalk.cyan('EXAMPLE')}: Argument_1, Argument_2, Argument_3 .... Argument_n (n >= 3, odd, unique)`,
    EMPTY: `> ${chalk.red('ERROR')} No command-line arguments are not provided! \n > Please input correct values.`,
    NOT_ENOUGH: `> ${chalk.red('ERROR')} arguments provided are less then 3 or even number! \n > Please input correct values.`,
    NOT_UNIQUE: `> ${chalk.red('ERROR')} arguments provided are repeated! \n > Please input correct values.`,
}

module.exports = Literals