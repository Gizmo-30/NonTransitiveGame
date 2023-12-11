function Delay(ms){
    return new Promise(r => setTimeout(r,ms))
}

module.exports = Delay