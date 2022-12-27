function ListarN(){
    const info = require("./Parsear.js");
    let names_arr = Object.keys(info.archivo)
    for(el of names_arr){
        console.log(el)
    }
}
module.exports = {
    ListarN
}