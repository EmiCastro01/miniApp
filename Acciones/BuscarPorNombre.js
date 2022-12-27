
function BPN(){
    const info = require("./Parsear.js");
    const val_arr = Object.values(info.archivo)
    let name = process.argv[3]

    return val_arr.at(name)

}

module.exports = {
    BPN
}