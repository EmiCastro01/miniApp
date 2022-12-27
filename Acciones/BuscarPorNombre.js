
function BPN(){
    const info = require("./Parsear.js");
    let name = process.argv[3]
    const keys_arr = Object.keys(info.archivo)
    const val_arr = Object.values(info.archivo)

    for(el of keys_arr){
        if(el == name){
            return val_arr.at(keys_arr.indexOf(el))
        }
    }

}

module.exports = {
    BPN
}