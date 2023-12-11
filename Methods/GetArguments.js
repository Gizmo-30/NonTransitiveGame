const Literals = require("./Literals");
const OddOrEvenNumber = require('odd-or-even-number');

function ERROR(err) {
    console.error(err,'\n',Literals.EXAMPLE)
    return process.exit(1)
}
function GetArguments() {
    let arguments = process.argv.slice(2)
    let unique = new Set(arguments)

    if(arguments.length === 0) ERROR(Literals.EMPTY)
    if(arguments.length < 3 || OddOrEvenNumber.isEven(arguments.length)) ERROR(Literals.NOT_ENOUGH)
    if(unique.size !== arguments.length) ERROR(Literals.NOT_UNIQUE)

    return arguments
}

module.exports = GetArguments;