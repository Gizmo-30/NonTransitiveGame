const crypto = require("crypto");
const secureRandom = require("secure-random");
const randomExt= require("random-ext");
const GetArguments = require("./GetArguments");
class MakeMovePc {
    constructor() {
        this.arguments = GetArguments()
    }
    Move() {
        this.random = randomExt.integer(this.arguments.length - 1, 0)
        return this.arguments[this.random]
    }
    Hmac() {
        this.Key()
        return crypto.createHmac('sha256', this.keyHmac).update(this.Move()).digest('hex')
    }
    Key(){
        this.keyHmac = secureRandom(256, {type: 'Buffer'})
        return this.keyHmac.toString('hex')
    }
    LogKey(){
        this.Key()
        return this.key = crypto.createHash('sha256').update(this.keyHmac).digest('hex')
    }
}
module.exports = MakeMovePc
